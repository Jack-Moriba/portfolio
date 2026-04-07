import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'auto';

interface ThemeContextType {
  theme: Theme;
  currentTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'auto';
    }
    return 'auto';
  });

  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');

  // Detect system preference
  const getSystemTheme = (): 'light' | 'dark' => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  };

  // Get effective theme
  const getEffectiveTheme = (): 'light' | 'dark' => {
    if (theme === 'auto') {
      const hour = new Date().getHours();
      // Day mode between 6 AM and 6 PM
      if (hour >= 6 && hour < 18) {
        return getSystemTheme() === 'light' ? 'light' : 'dark';
      }
      return 'dark';
    }
    return theme;
  };

  // Update theme
  useEffect(() => {
    const effectiveTheme = getEffectiveTheme();
    setCurrentTheme(effectiveTheme);
    
    // Apply to document
    document.documentElement.setAttribute('data-theme', effectiveTheme);
    
    // Save preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
      const handleChange = () => {
        setCurrentTheme(getEffectiveTheme());
      };

      mediaQuery.addEventListener('change', handleChange);
      
      // Also check every hour for time-based changes
      const interval = setInterval(() => {
        setCurrentTheme(getEffectiveTheme());
      }, 3600000); // 1 hour

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
        clearInterval(interval);
      };
    }
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'auto';
      return 'light';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
