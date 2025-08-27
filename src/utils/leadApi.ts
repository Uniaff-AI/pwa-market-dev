import { appConfig } from '@/config/appConfig';

export interface LeadData {
  name: string;
  phone: string;
}

export interface LeadResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Проверяет, включена ли отправка в CRM
 */
const isCrmEnabled = (): boolean => {
  return appConfig.api.enabled;
};

/**
 * Задержка для retry логики
 */
const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Отправляет данные лида в CRM с retry логикой
 */
export const submitLead = async (leadData: LeadData): Promise<LeadResponse> => {
  // Проверяем, включена ли отправка в CRM
  if (!isCrmEnabled()) {
    if (appConfig.api.logErrors) {
      console.log('CRM отправка отключена в конфигурации');
    }
    return { 
      success: true, 
      message: 'CRM отключен, данные не отправлены' 
    };
  }

  let lastError: string = '';

  // Попытки отправки с retry логикой
  for (let attempt = 1; attempt <= appConfig.api.retryAttempts; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), appConfig.api.timeout);

      const response = await fetch(appConfig.api.leadEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: leadData.name.trim(),
          phone: leadData.phone.trim(),
          ktCampaignId: appConfig.api.ktCampaignId,
          ktDomain: appConfig.api.ktDomain
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        return { success: true };
      } else {
        lastError = `HTTP Error: ${response.status}`;
        if (appConfig.api.logErrors) {
          console.error(`Попытка ${attempt}/${appConfig.api.retryAttempts} неудачна:`, lastError);
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          lastError = 'Таймаут запроса';
        } else {
          lastError = error.message;
        }
      } else {
        lastError = 'Неизвестная ошибка';
      }
      
      if (appConfig.api.logErrors) {
        console.error(`Попытка ${attempt}/${appConfig.api.retryAttempts} неудачна:`, lastError);
      }
    }

    // Если это не последняя попытка, ждём перед повтором
    if (attempt < appConfig.api.retryAttempts) {
      await delay(appConfig.api.retryDelay);
    }
  }

  return { 
    success: false, 
    error: lastError 
  };
};

/**
 * Валидирует данные формы
 */
export const validateLeadData = (leadData: LeadData): boolean => {
  return !!(leadData.name.trim() && leadData.phone.trim());
};
