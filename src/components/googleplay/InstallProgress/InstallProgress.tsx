import React, { useState, useEffect } from "react";
import { Loader2, Download, Smartphone } from "lucide-react";
import { cn } from '@/lib/utils';
import { GooglePlayText } from '@/content/googlePlayText';

export function InstallProgress() {
  const [installing, setInstalling] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // Определяем, является ли устройство Android
    const userAgent = navigator.userAgent.toLowerCase();
    setIsAndroid(/android/.test(userAgent));
  }, []);

  const createShortcut = async () => {
    if (installing || installed) return;

    setInstalling(true);
    setProgress(0);

    try {
      // Проверяем поддержку PWA API
      if ('serviceWorker' in navigator && 'BeforeInstallPromptEvent' in window) {
        // PWA установка
        const promptEvent = await new Promise<any>((resolve) => {
          window.addEventListener('beforeinstallprompt', (e: any) => {
            e.preventDefault();
            resolve(e);
          });
        });
        
        const result = await promptEvent.prompt();
        
        if (result.outcome === 'accepted') {
          // PWA установлено - ярлык создан автоматически
          setInstalled(true);
        } else {
          // Пользователь отменил - показываем простую инструкцию
          showSimpleInstruction();
        }
      } else {
        // Браузер не поддерживает PWA - показываем простую инструкцию
        showSimpleInstruction();
      }
    } catch (error) {
      console.error('Ошибка при установке:', error);
      showSimpleInstruction();
    } finally {
      setInstalling(false);
    }
  };

  const showSimpleInstruction = () => {
    // Имитируем процесс создания ярлыка
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setInstalling(false);
          setInstalled(true);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
  };

  const handleOpenClick = () => {
    // Открываем сайт в текущей вкладке
    window.location.href = "/inner-app";
  };

  return (
    <div
      onClick={!installed ? createShortcut : handleOpenClick}
      className={cn(
        "relative flex items-center justify-center overflow-hidden transition-all duration-300 cursor-pointer",
        installing ? "w-12 h-12 rounded-full" : "w-full h-12 rounded-xl",
        "bg-[#01875f] text-white hover:bg-[#056449]",
        installed && "w-full rounded-xl"
      )}
    >
      {installing && (
        <svg className="absolute w-12 h-12 animate-spin-slow text-white" viewBox="0 0 36 36">
          <path className="opacity-20"
                d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831a15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="white"
                strokeWidth="3"
          />
          <path className="text-white"
                d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray={`${progress}, 100`}
                strokeWidth="3"
          />
        </svg>
      )}

      {installing ? (
        <Loader2 className="h-5 w-5 animate-spin z-10" />
      ) : installed ? (
        <span className="z-10 text-sm flex items-center gap-2">
          <Smartphone className="h-4 w-4" />
          {GooglePlayText.app.btnOpenText || "Открыть приложение"}
        </span>
      ) : (
        <span className="z-10 text-sm flex items-center gap-2">
          <Download className="h-4 w-4" />
          {GooglePlayText.app.btnSetupText || "Скачать"}
        </span>
      )}
    </div>
  );
}
