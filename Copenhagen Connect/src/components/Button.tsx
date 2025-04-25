import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200',
        {
          // Primary variant
          'bg-gradient-primary text-white hover:opacity-90 shadow-soft': variant === 'primary',
          // Outline variant
          'border-2 border-dawn text-dawn hover:bg-dawn hover:text-white': variant === 'outline',
          // Sizes
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-2.5 text-base': size === 'md',
          'px-8 py-3 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
