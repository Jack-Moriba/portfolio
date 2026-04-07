import { useState, useEffect } from 'react';
import './styles/GlitchEffects.css';

const GlitchEffects = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Glitch aléatoire
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        triggerGlitch();
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const triggerGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 200);
  };

  return (
    <div className="glitch-container">
      {/* Effet de scanline */}
      <div className="scanlines"></div>
      
      {/* Effet de glitch */}
      <div className={`glitch-overlay ${isGlitching ? 'active' : ''}`}></div>
      
      {/* Texte glitché */}
      <div className="glitch-text" data-text="JACQUES MORIBA THEA">
        JACQUES MORIBA THEA
      </div>
      
      {/* Effet de bruit */}
      <div className="noise-overlay"></div>
      
      {/* Grid cyberpunk */}
      <div className="cyberpunk-grid"></div>
      
      {/* Particules flottantes */}
      <div className="floating-particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              '--delay': `${i * 0.2}s`,
              '--duration': `${5 + Math.random() * 3}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};

export default GlitchEffects;
