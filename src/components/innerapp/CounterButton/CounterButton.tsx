import type { ReactNode } from 'react';

export const CounterButton = ({
    onClick,
    children,
    green = false,
  }: {
  onClick: () => void;
  children: ReactNode;
  green?: boolean;
}) => {
  const baseClass =
    'rounded-sm text-white px-1 py-1 text-lg leading-[100%] cursor-pointer';
  const bgColor = green ? 'bg-[#00A445]' : 'bg-[#da4f49]';

  return (
    <button onClick={onClick} className={`${baseClass} ${bgColor}`}>
      {children}
    </button>
  );
};