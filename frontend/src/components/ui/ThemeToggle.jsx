import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle({ className = '', 'aria-label': ariaLabel = 'Toggle theme' }) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        className={`relative w-10 h-10 rounded-lg bg-surface-elevated ${className}`}
        disabled
        aria-hidden="true"
      >
        <span className="absolute inset-0 flex items-center justify-center">
          <Sun className="w-5 h-5 text-text-muted" aria-hidden="true" />
        </span>
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative w-10 h-10 rounded-lg
        bg-surface-elevated border border-border
        hover:bg-surface hover:border-border-hover
        focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
        transition-all duration-fast
        ${className}
      `}
      aria-label={ariaLabel}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
          opacity: [0, 1],
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun
          className={`w-5 h-5 ${isDark ? 'rotate-90 opacity-0' : '-rotate-90 opacity-100'} text-warning`}
          aria-hidden="true"
        />
        <Moon
          className={`w-5 h-5 absolute ${isDark ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'} text-primary`}
          aria-hidden="true"
        />
      </motion.div>

      <span className="sr-only">{isDark ? 'Switch to light mode' : 'Switch to dark mode'}</span>
    </motion.button>
  );
}
