import { useState, useEffect } from 'react';
import './styles/FuturisticNav.css';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  description: string;
  color: string;
}

const FuturisticNav = () => {
  const [activeSection, setActiveSection] = useState('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navItems: NavItem[] = [
    { id: 'landing', label: 'Accueil', icon: '🏠', description: 'Page principale', color: '#00ffff' },
    { id: 'about', label: 'À Propos', icon: '👤', description: 'Mon parcours', color: '#ff00ff' },
    { id: 'techstack', label: 'Compétences', icon: '⚡', description: 'Mes technologies', color: '#00ff00' },
    { id: 'work', label: 'Projets', icon: '🚀', description: 'Mes réalisations', color: '#ffaa00' },
    { id: 'services', label: 'Services', icon: '💼', description: 'Mes offres', color: '#ff0066' },
    { id: 'testimonials', label: 'Témoignages', icon: '⭐', description: 'Avis clients', color: '#0099ff' },
    { id: 'contact', label: 'Contact', icon: '📧', description: 'Me contacter', color: '#ff3366' }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navigation Desktop */}
      <nav className="futuristic-nav">
        <div className="nav-container">
          {/* Photo de profil */}
          <div className="nav-logo">
            <div className="nav-profile-circle">
              <img
                src="/images/profil.jpg"
                alt="Jacques Moriba Thea"
                className="nav-profile-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder.webp';
                }}
              />
              <div className="nav-profile-ring"></div>
              <div className="nav-profile-pulse"></div>
            </div>
          </div>

          {/* Menu principal */}
          <div className="nav-menu">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                style={{ '--item-color': item.color, '--item-index': index } as React.CSSProperties}
              >
                <div className="nav-icon">{item.icon}</div>
                <span className="nav-label">{item.label}</span>
                <div className="nav-description">{item.description}</div>
                <div className="nav-glow"></div>
              </button>
            ))}
          </div>

          {/* Curseur personnalisé */}
          <div 
            className="nav-cursor"
            style={{ 
              left: `${mousePosition.x}px`, 
              top: `${mousePosition.y}px` 
            }}
          />
        </div>
      </nav>

      {/* Navigation Mobile */}
      <nav className="futuristic-nav-mobile">
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              style={{ '--item-color': item.color } as React.CSSProperties}
            >
              <span className="mobile-icon">{item.icon}</span>
              <span className="mobile-label">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Indicateur de section */}
      <div className="section-indicator">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`indicator-dot ${activeSection === item.id ? 'active' : ''}`}
            style={{ '--item-color': item.color } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Effet de particules au scroll */}
      <div className="scroll-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="scroll-particle"
            style={{ 
              '--delay': `${i * 0.1}s`,
              '--duration': `${3 + Math.random() * 2}s`
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  );
};

export default FuturisticNav;
