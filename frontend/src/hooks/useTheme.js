import { useState, useEffect, useCallback, useRef } from 'react';

const THEME_STORAGE_KEY = 'portfolio-theme';
const THEME_DARK = 'dark';
const THEME_LIGHT = 'light';

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return THEME_DARK;
  }

  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored) {
    return stored;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME_DARK : THEME_LIGHT;
}

export function useTheme() {
  const [theme, setTheme] = useState(() => getInitialTheme());
  const [mounted, setMounted] = useState(false);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mountedRef.current) return;

    const root = document.documentElement;
    if (theme === THEME_DARK) {
      root.classList.remove('light');
    } else {
      root.classList.add('light');
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === THEME_DARK ? THEME_LIGHT : THEME_DARK));
  }, []);

  const setDark = useCallback(() => setTheme(THEME_DARK), []);
  const setLight = useCallback(() => setTheme(THEME_LIGHT), []);

  return {
    theme,
    isDark: theme === THEME_DARK,
    isLight: theme === THEME_LIGHT,
    toggleTheme,
    setDark,
    setLight,
    mounted,
  };
}

export { THEME_DARK, THEME_LIGHT, THEME_STORAGE_KEY };
