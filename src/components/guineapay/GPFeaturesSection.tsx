import React from 'react';

interface GPFeaturesSectionProps {
  onSelect: (feature: string) => void;
}

const GPFeaturesSection: React.FC<GPFeaturesSectionProps> = ({ onSelect }) => {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: 'Instant Transfers',
      description: 'Send money in seconds, 24/7. No waiting, no delays.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      title: 'Bank-Grade Security',
      description: '256-bit encryption and biometric authentication.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8l-4 4-4-4" />
          <path d="M12 12v6" />
        </svg>
      ),
      title: 'Lowest Fees',
      description: 'Save up to 70% on transaction fees compared to traditional banks.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: '50K+ Users',
      description: 'Join thousands of Guineans already using GuineaPay.',
    },
  ];

  return (
    <section className="gp-features-section">
      <div className="gp-container">
        <div className="gp-section-header">
          <h2 className="gp-section-title">
            Why Choose <span className="gp-gradient-text">GuineaPay</span>?
          </h2>
        </div>

        <div className="gp-features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="gp-feature-card"
              onClick={() => onSelect(feature.title)}
            >
              <div className="gp-feature-icon">{feature.icon}</div>
              <h3 className="gp-feature-title">{feature.title}</h3>
              <p className="gp-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GPFeaturesSection;
