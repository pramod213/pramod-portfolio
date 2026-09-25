import React from 'react';

const variants = {
  default: 'bg-surface-elevated text-text-primary border border-border',
  primary: 'bg-primary-light/20 text-primary border border-primary/30',
  secondary: 'bg-secondary/20 text-secondary border border-secondary/30',
  success: 'bg-success/20 text-success border border-success/30',
  warning: 'bg-warning/20 text-warning border border-warning/30',
  error: 'bg-error/20 text-error border border-error/30',
  outline: 'bg-transparent text-text-secondary border border-border',
};

const sizes = {
  sm: 'px-2 py-0.5 text-meta',
  md: 'px-2.5 py-1 text-body-sm',
  lg: 'px-3 py-1.5 text-body-base',
};

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  dot = false,
  dotColor,
  ...props
}) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        font-medium rounded-full
        transition-colors duration-fast
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {dot && (
        <span
          className={`
            w-1.5 h-1.5 rounded-full
            ${dotColor || 'bg-current'}
          `}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

export function BadgeGroup({ children, className = '', ...props }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`} {...props}>
      {children}
    </div>
  );
}
