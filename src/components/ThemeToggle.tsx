import { useTheme } from '../context/ThemeContext';
import './styles/ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, currentTheme, setTheme } = useTheme();

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      case 'auto':
        return '⚡';
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Mode Jour';
      case 'dark':
        return 'Mode Nuit';
      case 'auto':
        return 'Automatique';
    }
  };

  return (
    <div className="theme-toggle-container">
      <button 
        className="theme-toggle-btn"
        onClick={() => {
          const themes: Array<'light' | 'dark' | 'auto'> = ['light', 'dark', 'auto'];
          const currentIndex = themes.indexOf(theme);
          const nextTheme = themes[(currentIndex + 1) % themes.length];
          setTheme(nextTheme);
        }}
        aria-label={`Thème actuel: ${getThemeLabel()}. Cliquer pour changer.`}
        data-cursor="disable"
      >
        <span className="theme-icon">{getThemeIcon()}</span>
        <span className="theme-label">{getThemeLabel()}</span>
        <span className="theme-current">({currentTheme === 'light' ? 'Jour' : 'Nuit'})</span>
      </button>

      <div className="theme-indicators">
        <button 
          className={`theme-dot ${theme === 'light' ? 'active' : ''}`}
          onClick={() => setTheme('light')}
          aria-label="Mode jour"
        >
          ☀️
        </button>
        <button 
          className={`theme-dot ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => setTheme('dark')}
          aria-label="Mode nuit"
        >
          🌙
        </button>
        <button 
          className={`theme-dot ${theme === 'auto' ? 'active' : ''}`}
          onClick={() => setTheme('auto')}
          aria-label="Mode automatique"
        >
          ⚡
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
