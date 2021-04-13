import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  return [theme, setTheme] as const;
}
