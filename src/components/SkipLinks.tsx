import { useState, useEffect } from 'react';
import './styles/SkipLinks.css';

const SkipLinks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Show skip links on Tab key
      if (e.key === 'Tab') {
        setIsVisible(true);
      }
    };

    const handleClick = () => {
      setIsVisible(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const handleSkip = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.focus();
      element.scrollIntoView({ behavior: 'smooth' });
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <nav className="skip-links" role="navigation" aria-label="Navigation rapide">
      <button 
        onClick={() => handleSkip('main-content')}
        className="skip-link"
        tabIndex={0}
      >
        Aller au contenu principal
      </button>
      <button 
        onClick={() => handleSkip('navigation')}
        className="skip-link"
        tabIndex={0}
      >
        Aller à la navigation
      </button>
      <button 
        onClick={() => handleSkip('contact')}
        className="skip-link"
        tabIndex={0}
      >
        Aller au contact
      </button>
    </nav>
  );
};

export default SkipLinks;
