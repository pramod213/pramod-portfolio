import React from 'react';

export function Section({ id, children, className = '', variant = 'default', size = 'default' }) {
  const variantClasses = {
    default: 'bg-background',
    surface: 'bg-surface',
    elevated: 'bg-surface-elevated',
    muted: 'bg-surface',
  };

  const sizeClasses = {
    default: 'py-section',
    sm: 'py-section-sm',
    lg: 'py-section lg:py-[6rem]',
  };

  return (
    <section
      id={id}
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      {children}
    </section>
  );
}
