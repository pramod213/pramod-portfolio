import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary: `
    bg-primary text-white
    hover:bg-primary-hover
    active:bg-primary-hover
    focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
  `,
  secondary: `
    bg-secondary text-white
    hover:bg-secondary-hover
    active:bg-secondary-hover
    focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background
  `,
  outline: `
    border-2 border-border
    bg-transparent
    text-text-primary
    hover:border-primary hover:text-primary
    hover:bg-primary-light/10
    active:border-primary active:text-primary
    focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
  `,
  ghost: `
    bg-transparent
    text-text-primary
    hover:bg-surface-elevated
    hover:text-text-primary
    active:bg-surface-elevated
    focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
  `,
};

const sizes = {
  sm: 'px-3 py-1.5 text-body-sm',
  md: 'px-5 py-2.5 text-body-base',
  lg: 'px-7 py-3 text-body-lg',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  fullWidth = false,
  type = 'button',
  onClick,
  'aria-label': ariaLabel,
  as: Component = 'button',
  ...props
}) {
  const isDisabled = disabled || loading;

  const baseClassName = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-lg
    transition-all duration-fast
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const commonProps = {
    className: baseClassName,
    disabled: isDisabled,
    onClick,
    'aria-label': ariaLabel,
    'aria-disabled': isDisabled,
    'aria-busy': loading,
    ...props,
  };

  if (Component === 'a') {
    return (
      <motion.a
        {...commonProps}
        whileTap={{ scale: isDisabled ? 1 : 0.98 }}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      {...commonProps}
      whileTap={{ scale: isDisabled ? 1 : 0.98 }}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </motion.button>
  );
}
