import { ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-midnight focus:ring-offset-2',
        {
          'bg-gradient-to-r from-primary-start to-primary-end text-white hover:shadow-md': variant === 'primary',
          'bg-brightBlue text-midnight hover:bg-opacity-90 hover:shadow-soft': variant === 'secondary',
          'border border-midnight bg-transparent text-midnight hover:bg-midnight hover:bg-opacity-5': variant === 'outline',
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
          'cursor-not-allowed opacity-50': disabled,
        },
        className
      )}
    >
      {children}
    </button>
  );
}
