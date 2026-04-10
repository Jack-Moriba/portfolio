import React from 'react';
import GPServiceCard from './GPServiceCard';

interface GPServicesGridProps {
  onServiceClick?: (service: string) => void;
}

const GPServicesGrid: React.FC<GPServicesGridProps> = ({ onServiceClick }) => {
  const services = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      ),
      title: 'Mobile Payments',
      description: 'Send and receive money instantly via Orange Money, MTN MoMo, and bank transfers across Guinea.',
      badge: 'Popular',
      badgeType: 'success' as const,
      id: 'payments',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 1l4 4-4 4" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <path d="M7 23l-4-4 4-4" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
      ),
      title: 'Money Transfers',
      description: 'Transfer funds locally and internationally with low fees and real-time processing.',
      badge: 'Fast',
      badgeType: 'info' as const,
      id: 'transfers',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: 'Utilities Payment',
      description: 'Pay electricity (EDG), water (SOGUIPAH), internet, and phone bills in one place.',
      badge: 'New',
      badgeType: 'warning' as const,
      id: 'utilities',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: 'Digital Services',
      description: 'Access government services, insurance, microfinance, and business tools digitally.',
      id: 'digital',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: 'Merchant Solutions',
      description: 'Accept payments, manage inventory, and grow your business with our POS system.',
      id: 'merchant',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Secure Savings',
      description: 'Save money with competitive interest rates and automatic savings goals.',
      badge: '4.5% APY',
      badgeType: 'success' as const,
      id: 'savings',
    },
  ];

  return (
    <section className="gp-services-section">
      <div className="gp-container">
        <div className="gp-section-header">
          <h2 className="gp-section-title">
            All Your Financial <span className="gp-gradient-text">Services</span>
          </h2>
          <p className="gp-section-subtitle">
            Everything you need to manage your finances in one powerful platform. 
            Simple, fast, and built for Guinea.
          </p>
        </div>

        <div className="gp-services-grid">
          {services.map((service) => (
            <GPServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              badge={service.badge}
              badgeType={service.badgeType}
              onClick={() => onServiceClick?.(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GPServicesGrid;
