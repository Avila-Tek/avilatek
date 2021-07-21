import React from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function useTheme() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return [theme, setTheme] as const;
}
