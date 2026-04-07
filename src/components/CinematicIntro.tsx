import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import './styles/CinematicIntro.css';

const CinematicIntro = () => {
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Vérifier si l'intro a déjà été vue
    const hasSeenIntro = sessionStorage.getItem('cinematicIntroSeen');
    if (hasSeenIntro) {
      setIsComplete(true);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Timeline principale
    sequenceRef.current = gsap.timeline({
      onComplete: () => {
        setIsComplete(true);
        sessionStorage.setItem('cinematicIntroSeen', 'true');
      }
    });

    const tl = sequenceRef.current;

    // Séquence 1: Scan de sécurité
    tl.fromTo('.scan-line',
      { top: '0%' },
      { top: '100%', duration: 2, ease: 'power2.inOut' }
    )
    .fromTo('.scan-text',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.2 },
      '-=1.5'
    )
    .to('.scan-text', { opacity: 0, duration: 0.3 })

    // Séquence 2: Déchirement de l'écran
    .fromTo('.tear-panel',
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: 'power4.out', stagger: 0.1 }
    )
    .to('.tear-panel', {
      x: (i) => (i % 2 === 0 ? '-100%' : '100%'),
      duration: 0.6,
      ease: 'power3.in',
      stagger: 0.05
    })

    // Séquence 3: Typage du nom
    .fromTo('.cinematic-name',
      { width: 0, opacity: 1 },
      { width: 'auto', duration: 1.5, ease: 'steps(20)' }
    )
    .fromTo('.cinematic-title',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    , '-=0.5')

    // Séquence 4: Glitch final
    .to('.cinematic-container',
      { opacity: 0, duration: 0.1, yoyo: true, repeat: 3 }
    )
    .to('.cinematic-container',
      { scale: 1.1, filter: 'hue-rotate(90deg)', duration: 0.1 }
    )
    .to('.cinematic-container',
      { scale: 1, filter: 'none', opacity: 0, duration: 0.5 }
    );

    // Animation des particules en arrière-plan
    gsap.to('.bg-particle', {
      y: -100,
      x: 'random(-50, 50)',
      opacity: 0,
      duration: 2,
      repeat: -1,
      stagger: 0.2
    });

    return () => {
      tl?.kill();
    };
  }, []);

  if (isComplete) return null;

  return (
    <div ref={containerRef} className="cinematic-container">
      {/* Scan Line */}
      <div className="scan-line"></div>

      {/* Scan Text Overlay */}
      <div className="scan-overlay">
        <div className="scan-text">INITIALIZING...</div>
        <div className="scan-text">LOADING ASSETS...</div>
        <div className="scan-text">ESTABLISHING CONNECTION...</div>
        <div className="scan-text">ACCESS GRANTED ✓</div>
      </div>

      {/* Tear Effect Panels */}
      <div className="tear-effect">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="tear-panel" style={{ '--i': i } as React.CSSProperties}>
            <div className="panel-glitch"></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="cinematic-content">
        <h1 className="cinematic-name">JACQUES MORIBA THEA</h1>
        <p className="cinematic-title">FULL STACK DEVELOPER</p>
        <div className="cinematic-line"></div>
      </div>

      {/* Background Particles */}
      <div className="bg-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="bg-particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}></div>
        ))}
      </div>

      {/* Mission Impossible Style Overlay */}
      <div className="mission-overlay">
        <div className="target-box">
          <div className="target-corner tl"></div>
          <div className="target-corner tr"></div>
          <div className="target-corner bl"></div>
          <div className="target-corner br"></div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="cinematic-progress">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
};

export default CinematicIntro;
