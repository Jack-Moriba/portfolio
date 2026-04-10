import React, { useState } from 'react';
import GPNavbar from './GPNavbar';
import GPLandingPage from './GPLandingPage';
import GPDashboardPage from './GPDashboardPage';
import GPServicesPage from './GPServicesPage';
import './styles/GuineaPay.css';
import './styles/GuineaPayPlatform.css';

interface GuineaPayPlatformProps {
  onBackToPortfolio?: () => void;
}

const GuineaPayPlatform: React.FC<GuineaPayPlatformProps> = ({ onBackToPortfolio }) => {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <GPDashboardPage onNavigate={handleNavigate} />;
      case 'services':
        return <GPServicesPage onServiceSelect={(id) => console.log('Service selected:', id)} />;
      case 'landing':
      default:
        return <GPLandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="gp-platform">
      <GPNavbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="gp-main-content">
        {renderPage()}
      </main>
      
      {/* Back to Portfolio Button */}
      {onBackToPortfolio && (
        <button 
          className="gp-back-to-portfolio"
          onClick={onBackToPortfolio}
          title="Back to Portfolio"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Portfolio
        </button>
      )}
    </div>
  );
};

export default GuineaPayPlatform;
