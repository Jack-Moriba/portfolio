import { useEffect } from 'react';
import { gsap } from 'gsap';
import './styles/NotFound.css';

const NotFound = () => {
  useEffect(() => {
    // Glitch animation for 404 text
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    
    tl.to('.glitch-text', {
      skewX: 20,
      duration: 0.1,
      ease: 'power2.inOut'
    })
    .to('.glitch-text', {
      skewX: 0,
      duration: 0.1,
      ease: 'power2.inOut'
    })
    .to('.glitch-text', {
      opacity: 0.8,
      duration: 0.1,
    })
    .to('.glitch-text', {
      opacity: 1,
      duration: 0.1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="not-found">
      <div className="not-found-container">
        <div className="not-found-glitch-wrapper">
          <h1 className="glitch-text" data-text="404">404</h1>
        </div>
        
        <h2 className="not-found-subtitle">Page Introuvable</h2>
        
        <p className="not-found-description">
          La page que vous recherchez semble avoir disparu dans le cyberespace. 
          Elle a peut-être été déplacée, supprimée ou n'a jamais existé.
        </p>

        <div className="not-found-actions">
          <a href="/" className="not-found-btn not-found-btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6" />
            </svg>
            Retour à l'accueil
          </a>
          
          <button 
            onClick={handleGoBack} 
            className="not-found-btn not-found-btn-secondary"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Page précédente
          </button>
        </div>

        <div className="not-found-code">
          <code>Error Code: 404_PAGE_NOT_FOUND</code>
          <code>Timestamp: {new Date().toISOString()}</code>
        </div>
      </div>

      {/* Animated background particles */}
      <div className="not-found-particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;
