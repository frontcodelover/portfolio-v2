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
    throw new Error('useThemeColor must be used within a ThemeColorProvider');
  }
  return context;
};

// Créer un Provider pour envelopper l'application avec le contexte du thème
export const ThemeColorProvider = ({ children }: { children: ReactNode }) => {
  // Définir l'état initial basé sur le localStorage ou un thème par défaut
  const [themeColor, setThemeColor] = useState<ThemeColor>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('themeColor') as ThemeColor;
      return savedTheme || 'light'; // Utilise 'light' si rien n'est trouvé
    }
    return 'light'; // Valeur par défaut lors du rendu côté serveur
  });

  // Utiliser useEffect pour synchroniser le thème avec localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
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

      console.log(`Theme applied: ${themeColor}`);
    }
  }, [themeColor]);

  return <ThemeColorContext.Provider value={{ themeColor, setThemeColor }}>{children}</ThemeColorContext.Provider>;
};
