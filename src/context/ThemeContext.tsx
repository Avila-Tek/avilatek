import React from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    // first, we check if a stored preference exists
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    // otherwise, this will follow os preferences
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'auto';
      // return 'dark';
    }
  }

  // this will be the default theme
  return 'auto';
};

interface ThemeContextProps {
  theme?: string;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: '',
});

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: any;
}

export const ThemeProvider = ({
  initialTheme,
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  // eslint-disable-next-line no-shadow
  const rawSetTheme = (theme) => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;

      if (theme === 'auto') {
        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        localStorage.removeItem('color-theme');

        if (userMedia.matches) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      } else {
        root.classList.remove(theme === 'dark' ? 'light' : 'dark');
        root.classList.add(theme);
        localStorage.setItem('color-theme', theme);
      }
    }
  };

  React.useEffect(() => {
    if (initialTheme) {
      rawSetTheme(initialTheme);
    }
  }, []);

  React.useEffect(() => {
    // Each time the user change the SO scheme preference, we have to listen to it
    const changeSOPreference = () => {
      rawSetTheme('auto');
    };

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', changeSOPreference);
  }, []);

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
