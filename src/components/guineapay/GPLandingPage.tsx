import React from 'react';
import GPHeroSection from './GPHeroSection';
import GPServicesGrid from './GPServicesGrid';
import GPFeaturesSection from './GPFeaturesSection';
import GPFooter from './GPFooter';

interface GPLandingPageProps {
  onNavigate: (page: string) => void;
}

const GPLandingPage: React.FC<GPLandingPageProps> = ({ onNavigate }) => {
  const handleGetStarted = () => {
    onNavigate('dashboard');
  };

  const handleViewDashboard = () => {
    onNavigate('dashboard');
  };

  const handleServiceClick = (service: string) => {
    console.log('Service clicked:', service);
    onNavigate('services');
  };

  const handleFeatureSelect = (feature: string) => {
    console.log('Feature selected:', feature);
  };

  return (
    <div className="gp-landing-page">
      <GPHeroSection 
        onGetStarted={handleGetStarted}
        onViewDashboard={handleViewDashboard}
      />
      <GPServicesGrid onServiceClick={handleServiceClick} />
      <GPFeaturesSection onSelect={handleFeatureSelect} />
      
      {/* CTA Section */}
      <section className="gp-cta-section">
        <div className="gp-container">
          <div className="gp-cta-content">
            <h2 className="gp-cta-title">
              Ready to Transform Your
              <span className="gp-gradient-text"> Financial Experience</span>?
            </h2>
            <p className="gp-cta-subtitle">
              Join thousands of Guineans who trust GuineaPay for their daily transactions.
              Sign up today and get ₡10,000 free credit.
            </p>
            <div className="gp-cta-actions">
              <button className="gp-btn gp-btn-primary gp-btn-lg" onClick={handleGetStarted}>
                Create Free Account
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button className="gp-btn gp-btn-ghost gp-btn-lg">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <GPFooter onNavigate={onNavigate} />
    </div>
  );
};

export default GPLandingPage;
