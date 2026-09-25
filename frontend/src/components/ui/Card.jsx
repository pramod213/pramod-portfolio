import React from 'react';
import { motion } from 'framer-motion';

export function Card({
  children,
  className = '',
  variant = 'default',
  hover = true,
  padding = 'md',
  as: Component = 'div',
  ...props
}) {
  const variantClasses = {
    default: 'bg-surface border border-border',
    elevated: 'bg-surface-elevated border border-border',
    flat: 'bg-transparent border-none',
    interactive: 'bg-surface border border-border',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverClasses =
    hover && variant === 'interactive'
      ? 'hover:border-primary-hover hover:shadow-lg hover:-translate-y-1 transition-all duration-normal'
      : '';

  return (
    <motion.div
      as={Component}
      className={`
        rounded-xl
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${hoverClasses}
        ${className}
      `}
      whileHover={
        hover && variant === 'interactive' ? { y: -4, boxShadow: 'var(--shadow-lg)' } : {}
      }
      transition={{ duration: 0.25, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className = '' }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = '', as: Component = 'h3' }) {
  return (
    <Component className={`text-heading-sm font-semibold text-text-primary ${className}`}>
      {children}
    </Component>
  );
}

export function CardDescription({ children, className = '' }) {
  return <p className={`mt-1 text-body-sm text-text-muted ${className}`}>{children}</p>;
}

export function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({ children, className = '' }) {
  return <div className={`mt-4 pt-4 border-t border-border ${className}`}>{children}</div>;
}
