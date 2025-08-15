import React, { useState } from 'react';

interface VSLPlayerProps {
  videoUrl?: string;
  posterUrl?: string;
  title?: string;
  autoPlay?: boolean;
  className?: string;
}

export const VSLPlayer: React.FC<VSLPlayerProps> = ({
  videoUrl = 'https://example.com/video.mp4', // Замените на реальный URL видео
  posterUrl = '/src/assets/vsl-poster.jpg', // Замените на реальный постер
  title = 'VSL - Diaclose',
  autoPlay = false,
  className = ''
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const handlePlay = () => {
    setIsPlaying(true);
    setShowControls(false);
  };

  const handlePause = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  return (
    <div className={`relative w-full h-47 bg-[#D9D9D9] ${className}`}>
      {!isPlaying ? (
        // Постер с кнопкой воспроизведения
        <div 
          className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
          onClick={handlePlay}
        >
          {posterUrl && (
            <img 
              src={posterUrl} 
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback если изображение не загрузилось
                e.currentTarget.style.display = 'none';
              }}
            />
          )}
          
          {/* Кнопка воспроизведения */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 rounded-full p-4">
              <svg 
                className="w-12 h-12 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          
          {/* Заголовок */}
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-white text-lg font-bold bg-black bg-opacity-50 px-3 py-2 rounded">
              {title}
            </h2>
          </div>
        </div>
      ) : (
        // Видеоплеер
        <video
          className="w-full h-full object-cover"
          controls={showControls}
          autoPlay={autoPlay}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        >
          <source src={videoUrl} type="video/mp4" />
          <source src={videoUrl} type="video/webm" />
          Ваш браузер не поддерживает воспроизведение видео.
        </video>
      )}
    </div>
  );
};
