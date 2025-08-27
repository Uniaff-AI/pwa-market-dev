import React, { useState, useEffect } from "react";
import { Loader2, Download, Smartphone } from "lucide-react";
import { cn } from '@/lib/utils';
import { GooglePlayText } from '@/content/googlePlayText';

export function InstallProgress() {
  const [installing, setInstalling] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Слушаем событие PWA установки
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const createShortcut = async () => {
    if (installing || installed) return;

    setInstalling(true);
    setProgress(0);

    try {
      if (deferredPrompt) {
        // Показываем диалог установки PWA
        const result = await deferredPrompt.prompt();
        
        if (result.outcome === 'accepted') {
          console.log('Ярлык PWA установлен');
          setInstalled(true);
          setInstalling(false);
          setDeferredPrompt(null);
        } else {
          console.log('Пользователь отклонил установку');
          setInstalling(false);
        }
      } else {
        // Имитируем скачивание
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              clearInterval(interval);
              setInstalling(false);
              setInstalled(true);
              return 100;
            }
            return prev + 10;
          });
        }, 100);
      }
    } catch (error) {
      console.error('Ошибка установки PWA:', error);
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
