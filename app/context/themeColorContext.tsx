'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeColor = 'light' | 'dark';

// Create a context type for the theme color
interface ThemeColorContextType {
  themeColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
}

// Initi the context with an empty object
const ThemeColorContext = createContext<ThemeColorContextType | undefined>(undefined);

// Create a custom hook to use the theme color context
export const useThemeColor = () => {
  const context = useContext(ThemeColorContext);
  if (!context) {
    throw new Error('useThemeColor must be used within a ThemeColorProvider');
  }
  return context;
};

// Create a provider component to wrap the app with the theme color context
export const ThemeColorProvider = ({ children }: { children: ReactNode }) => {
  // Define the state for the theme color
  const [themeColor, setThemeColor] = useState<ThemeColor>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('themeColor') as ThemeColor;
      return savedTheme || 'light';
    }
    return 'light';
  });

  // Apply the theme color to the root element
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('themeColor', themeColor);

      // Apply the theme color to the root element
      const root = document.documentElement;
      if (themeColor === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
    }
  }, [themeColor]);

  return <ThemeColorContext.Provider value={{ themeColor, setThemeColor }}>{children}</ThemeColorContext.Provider>;
};
