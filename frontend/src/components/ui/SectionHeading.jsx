import React from 'react';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  eyebrowClassName = '',
  titleClassName = '',
  descriptionClassName = '',
}) {
  const alignClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  };

  return (
    <header className={`mb-12 ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <span
          id={`${title?.toLowerCase().replace(/\s+/g, '-')}-eyebrow`}
          className={`inline-block text-meta font-medium uppercase tracking-wider text-primary mb-4 ${eyebrowClassName}`}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          id={`${title?.toLowerCase().replace(/\s+/g, '-')}-heading`}
          className={`text-heading-lg font-bold text-text-primary ${titleClassName}`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`mt-6 text-body-lg text-text-secondary max-w-3xl ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''} ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </header>
  );
}
