import React, { useRef, useEffect } from 'react';

interface VSLPlayerProps {
  videoUrl?: string;
  posterUrl?: string;
  title?: string;
  autoPlay?: boolean;
  className?: string;
}

export const VSLPlayer: React.FC<VSLPlayerProps> = ({
  videoUrl = '',
  posterUrl = '/src/assets/inner-app/sale-product.png',
  title = 'VSL - Diaclose',
  autoPlay = false,
  className = ''
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Включаем звук при первом взаимодействии пользователя
      const enableSound = () => {
        video.muted = false;
        video.removeEventListener('click', enableSound);
        video.removeEventListener('play', enableSound);
      };

      video.addEventListener('click', enableSound);
      video.addEventListener('play', enableSound);
    }
  }, []);

  // Если нет URL видео или это YouTube, показываем fallback
  if (!videoUrl || videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
    return (
      <div className={`relative w-full h-47 bg-gray-300 ${className}`}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-gray-600 text-center">
            <div className="text-4xl mb-2">📹</div>
            <div className="text-lg font-semibold">{title}</div>
            <div className="text-sm mt-1">YouTube видео не поддерживается</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-47 bg-black ${className}`}>
      <video
        ref={videoRef}
        controls
        poster={posterUrl}
        muted={true}
        autoPlay={autoPlay}
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={videoUrl} type="video/mp4" />
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
    </div>
  );
};
