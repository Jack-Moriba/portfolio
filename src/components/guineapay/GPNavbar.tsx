import React from 'react';
import './styles/GuineaPayPlatform.css';

interface GPNavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const GPNavbar: React.FC<GPNavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'landing', label: 'Home', icon: '🏠' },
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'services', label: 'Services', icon: '💼' },
  ];

  return (
    <nav className={`gp-navbar ${scrolled ? 'gp-navbar-scrolled' : ''}`}>
      <div className="gp-navbar-container">
        {/* Logo */}
        <div className="gp-navbar-logo" onClick={() => onNavigate('landing')}>
          <div className="gp-logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="10" fill="url(#logo-gradient)" />
              <path d="M12 20L18 26L28 14" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40">
                  <stop stopColor="#10b981" />
                  <stop offset="1" stopColor="#047857" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="gp-logo-text">
            Guinea<span className="gp-logo-highlight">Pay</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="gp-navbar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`gp-nav-link ${currentPage === item.id ? 'gp-nav-link-active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              <span className="gp-nav-icon">{item.icon}</span>
              <span className="gp-nav-label">{item.label}</span>
            </button>
          ))}
        </div>

        {/* User Actions */}
        <div className="gp-navbar-actions">
          <button className="gp-icon-btn gp-notification-btn" aria-label="Notifications">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <span className="gp-notification-dot"></span>
          </button>
          
          <div className="gp-user-avatar">
            <div className="gp-avatar-placeholder">
              <span>MT</span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="gp-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`gp-hamburger-line ${mobileMenuOpen ? 'gp-hamburger-active' : ''}`}></span>
            <span className={`gp-hamburger-line ${mobileMenuOpen ? 'gp-hamburger-active' : ''}`}></span>
            <span className={`gp-hamburger-line ${mobileMenuOpen ? 'gp-hamburger-active' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`gp-mobile-menu ${mobileMenuOpen ? 'gp-mobile-menu-open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`gp-mobile-nav-link ${currentPage === item.id ? 'gp-mobile-nav-link-active' : ''}`}
            onClick={() => {
              onNavigate(item.id);
              setMobileMenuOpen(false);
            }}
          >
            <span className="gp-mobile-nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default GPNavbar;
