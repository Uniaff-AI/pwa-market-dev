import { useState } from 'react';
import { appConfig } from '@/config/appConfig';
import { submitLead, validateLeadData, type LeadData } from '@/utils/leadApi';

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderForm = ({ isOpen, onClose }: OrderFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Ограничиваем длину номера телефона
    if (name === 'phone' && appConfig.phoneValidation.enabled) {
      const digitsOnly = value.replace(/\D/g, ''); // Удаляем всё кроме цифр
      if (digitsOnly.length <= appConfig.phoneValidation.maxLength) {
        setFormData(prev => ({
          ...prev,
          [name]: digitsOnly
        }));
      }
      return; // Не обновляем состояние дважды
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const leadData: LeadData = {
      name: formData.name,
      phone: formData.phone
    };

    // Проверяем основную валидацию
    if (!validateLeadData(leadData)) {
      alert(appConfig.orderForm.requiredFieldsMessage);
      return;
    }

    // Проверяем валидацию телефона
    if (appConfig.phoneValidation.enabled) {
      const phonePattern = new RegExp(appConfig.phoneValidation.pattern.replace('\\\\', '\\'));
      if (!phonePattern.test(formData.phone)) {
        alert(appConfig.phoneValidation.errorMessage);
        return;
      }
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const result = await submitLead(leadData);

    if (result.success) {
      setSubmitStatus('success');
      setFormData({ name: '', phone: '' });
      
      // Автоматически закрыть форму через 3 секунды после успешной отправки
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 3000);
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
          type="button"
        >
          ×
        </button>

        {/* Заголовок */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-center mb-2">
            {appConfig.orderForm.title}
          </h2>
          <p className="text-gray-600 text-sm text-center">
            {appConfig.orderForm.subtitle}
          </p>
        </div>

        {/* Сообщения о статусе */}
        {submitStatus === 'success' && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            {appConfig.orderForm.successMessage}
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {appConfig.orderForm.errorMessage}
          </div>
        )}

        {/* Форма */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              {appConfig.orderForm.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={appConfig.orderForm.namePlaceholder}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A444] focus:border-transparent"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              {appConfig.orderForm.phoneLabel}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={appConfig.orderForm.phonePlaceholder}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A444] focus:border-transparent"
              required
              disabled={isSubmitting}
              maxLength={appConfig.phoneValidation.enabled ? appConfig.phoneValidation.maxLength : undefined}
              minLength={appConfig.phoneValidation.enabled ? appConfig.phoneValidation.minLength : undefined}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || submitStatus === 'success'}
            className="w-full bg-[#01A444] text-white py-2 px-4 rounded-md font-medium hover:bg-[#008D49] focus:outline-none focus:ring-2 focus:ring-[#01A444] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? appConfig.orderForm.submitButtonLoadingText : appConfig.orderForm.submitButtonText}
          </button>
        </form>
      </div>
    </div>
  );
};
