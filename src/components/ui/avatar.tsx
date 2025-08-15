import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fallbackColor?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  initials,
  size = 'md',
  className,
  fallbackColor = 'bg-blue-500'
}) => {
  const [imageError, setImageError] = React.useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Если есть изображение и оно не загрузилось с ошибкой
  if (src && !imageError) {
    return (
      <img
        src={src}
        alt={alt || 'Avatar'}
        className={cn(
          'rounded-full object-cover',
          sizeClasses[size],
          className
        )}
        onError={handleImageError}
      />
    );
  }

  // Fallback с инициалами или дефолтной иконкой
  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center text-white font-medium',
        fallbackColor,
        sizeClasses[size],
        className
      )}
    >
      {initials ? (
        initials
      ) : (
        <svg
          className="w-1/2 h-1/2"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};
