import React from 'react';

export function Container({ children, className = '', size = 'default' }) {
  const sizeClasses = {
    default: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
    narrow: 'mx-auto max-w-3xl px-4 sm:px-6 lg:px-8',
    wide: 'mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8',
    full: 'w-full px-4 sm:px-6 lg:px-8',
  };

  return <div className={`${sizeClasses[size]} ${className}`}>{children}</div>;
}
