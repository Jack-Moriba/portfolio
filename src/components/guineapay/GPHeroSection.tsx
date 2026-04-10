import React from 'react';

interface GPHeroSectionProps {
  onGetStarted: () => void;
  onViewDashboard: () => void;
}

const GPHeroSection: React.FC<GPHeroSectionProps> = ({ onGetStarted, onViewDashboard }) => {
  return (
    <section className="gp-hero">
      {/* Background Elements */}
      <div className="gp-hero-bg">
        <div className="gp-hero-glow"></div>
        <div className="gp-hero-grid"></div>
      </div>

      <div className="gp-container">
        <div className="gp-hero-content">
          {/* Badge */}
          <div className="gp-hero-badge gp-animate-fade-in">
            <span className="gp-badge-dot"></span>
            <span>Now Available in Guinea 🇬🇳</span>
          </div>

          {/* Main Heading */}
          <h1 className="gp-hero-title gp-animate-slide-up">
            The Future of
            <br />
            <span className="gp-gradient-text">Digital Payments</span>
            <br />
            in Africa
          </h1>

          {/* Subtitle */}
          <p className="gp-hero-subtitle gp-animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Send, receive, and manage your money securely. Built for Guinea, 
            designed for the world. Experience fast, reliable, and affordable 
            financial services at your fingertips.
          </p>

          {/* CTA Buttons */}
          <div className="gp-hero-cta gp-animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button className="gp-btn gp-btn-primary gp-btn-lg" onClick={onGetStarted}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Get Started Free
            </button>
            <button className="gp-btn gp-btn-secondary gp-btn-lg" onClick={onViewDashboard}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="gp-hero-stats gp-animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="gp-stat-item">
              <div className="gp-stat-value">50K+</div>
              <div className="gp-stat-label">Active Users</div>
            </div>
            <div className="gp-stat-divider"></div>
            <div className="gp-stat-item">
              <div className="gp-stat-value">₡2.5B</div>
              <div className="gp-stat-label">Transactions</div>
            </div>
            <div className="gp-stat-divider"></div>
            <div className="gp-stat-item">
              <div className="gp-stat-value">99.9%</div>
              <div className="gp-stat-label">Uptime</div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="gp-hero-visual gp-animate-float">
          <div className="gp-phone-mockup">
            <div className="gp-phone-screen">
              <div className="gp-phone-header">
                <span>Welcome back,</span>
                <strong>Mamadou</strong>
              </div>
              <div className="gp-phone-balance">
                <span>Available Balance</span>
                <strong>₡12,450,000</strong>
              </div>
              <div className="gp-phone-actions">
                <div className="gp-phone-action">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                  <span>Receive</span>
                </div>
                <div className="gp-phone-action">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="19" x2="12" y2="5" />
                    <polyline points="5 12 12 5 19 12" />
                  </svg>
                  <span>Send</span>
                </div>
                <div className="gp-phone-action">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                  <span>Pay</span>
                </div>
              </div>
              <div className="gp-phone-transactions">
                <div className="gp-phone-tx">
                  <div className="gp-phone-tx-icon gp-phone-tx-icon-success">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="gp-phone-tx-details">
                    <span>Orange Money</span>
                    <small>Today, 2:30 PM</small>
                  </div>
                  <span className="gp-phone-tx-amount gp-phone-tx-amount-positive">+₡500,000</span>
                </div>
                <div className="gp-phone-tx">
                  <div className="gp-phone-tx-icon gp-phone-tx-icon-danger">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                  <div className="gp-phone-tx-details">
                    <span>EDG Electricity</span>
                    <small>Yesterday</small>
                  </div>
                  <span className="gp-phone-tx-amount gp-phone-tx-amount-negative">-₡250,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By */}
      <div className="gp-hero-trusted">
        <span>Trusted by leading companies in Guinea</span>
        <div className="gp-trusted-logos">
          <div className="gp-logo-placeholder">Orange Money</div>
          <div className="gp-logo-placeholder">MTN MoMo</div>
          <div className="gp-logo-placeholder">EDG</div>
          <div className="gp-logo-placeholder">SOGUIPAH</div>
        </div>
      </div>
    </section>
  );
};

export default GPHeroSection;
