'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeColor = 'light' | 'dark';

// Créer un contexte avec un type qui inclut la couleur du thème et une fonction pour le changer
interface ThemeColorContextType {
  themeColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
}

// Initialiser le contexte avec `undefined` pour forcer l'utilisation via le Provider
const ThemeColorContext = createContext<ThemeColorContextType | undefined>(undefined);

// Créer un hook personnalisé pour utiliser le contexte du thème
export const useThemeColor = () => {
  const context = useContext(ThemeColorContext);
  if (!context) {
    throw new Error('useThemeColor doit être utilisé dans ThemeColorProvider');
  }
  return context; // Retourne { themeColor, setThemeColor }
};

// Créer un Provider pour envelopper l'application avec le contexte du thème
export const ThemeColorProvider = ({ children }: { children: ReactNode }) => {
  const [themeColor, setThemeColor] = useState<ThemeColor>('light');

  useEffect(() => {
    // Charger la couleur du thème depuis le localStorage au démarrage
    const localThemeColor = localStorage.getItem('themeColor') as ThemeColor;
    if (localThemeColor) {
      setThemeColor(localThemeColor);
    }
  }, []);

  useEffect(() => {
    // Sauvegarder la couleur du thème dans le localStorage à chaque changement
    localStorage.setItem('themeColor', themeColor);

    // Ajouter la classe `dark` ou `light` à l'élément root (html)
    const root = document.documentElement;
    if (themeColor === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }

    console.log(`Theme applied: ${themeColor}`); // Ajoute un log pour vérifier
  }, [themeColor]);

  return <ThemeColorContext.Provider value={{ themeColor, setThemeColor }}>{children}</ThemeColorContext.Provider>;
};
