import React, { useEffect, useState } from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  // this will be the default theme
  return 'light';
};

interface ThemeContextProps {
  theme?: string;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: '',
});

interface ThemeProviderProps {
  children: React.ReactChild | Array<React.ReactChild>;
  initialTheme?: any;
}

export const ThemeProvider = ({
  initialTheme,
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('color-theme', theme);
  };

  useEffect(() => {
    if (initialTheme) {
      rawSetTheme(initialTheme);
    }
  }, []);

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
