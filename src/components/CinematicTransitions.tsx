import { useState, useEffect } from 'react';
import './styles/CinematicTransitions.css';

interface PageTransitionProps {
  children: React.ReactNode;
  trigger?: boolean;
}

const PageTransition = ({ children, trigger = false }: PageTransitionProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    if (trigger) {
      startTransition();
    }
  }, [trigger]);

  const startTransition = () => {
    setIsTransitioning(true);
    setShowContent(false);

    setTimeout(() => {
      setIsTransitioning(false);
      setShowContent(true);
    }, 1500);
  };

  return (
    <div className="cinematic-transition">
      {/* Overlay de transition */}
      <div className={`transition-overlay ${isTransitioning ? 'active' : ''}`}>
        <div className="transition-grid"></div>
        <div className="transition-particles"></div>
        <div className="transition-flash"></div>
        <div className="transition-text">CHARGEMENT...</div>
      </div>

      {/* Contenu */}
      <div className={`content-container ${showContent ? 'visible' : 'hidden'}`}>
        {children}
      </div>

      {/* Effets de bordure */}
      <div className="border-effects">
        <div className="border-corner top-left"></div>
        <div className="border-corner top-right"></div>
        <div className="border-corner bottom-left"></div>
        <div className="border-corner bottom-right"></div>
      </div>
    </div>
  );
};

export default PageTransition;
