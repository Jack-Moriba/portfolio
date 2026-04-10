import React from 'react';

interface GPService {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  badge?: string;
  badgeType?: 'success' | 'warning' | 'danger' | 'info';
  price?: string;
}

interface GPServicesPageProps {
  onServiceSelect?: (service: string) => void;
}

const GPServicesPage: React.FC<GPServicesPageProps> = ({ onServiceSelect }) => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const services: GPService[] = [
    {
      id: 'mobile-payments',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12" y2="18" />
        </svg>
      ),
      title: 'Mobile Payments',
      description: 'Accept and send payments via Orange Money, MTN MoMo, and all major mobile money providers in Guinea.',
      features: ['Instant transfers', '24/7 availability', 'Low fees', 'Multi-provider support'],
      badge: 'Most Popular',
      badgeType: 'success',
      price: 'From 1% fee',
    },
    {
      id: 'bank-transfers',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
        </svg>
      ),
      title: 'Bank Transfers',
      description: 'Transfer money to and from all major banks in Guinea including BICIGUI, SGBC, and Ecobank.',
      features: ['Same-day processing', 'All major banks', 'Secure transfers', 'Transaction tracking'],
      badge: 'Fast',
      badgeType: 'info',
      price: 'From 0.5% fee',
    },
    {
      id: 'utilities',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: 'Utilities Payment',
      description: 'Pay your electricity (EDG), water (SOGUIPAH), internet, and phone bills instantly from your phone.',
      features: ['EDG electricity', 'SOGUIPAH water', 'Internet bills', 'Phone top-up'],
      badge: 'New',
      badgeType: 'warning',
      price: 'No additional fees',
    },
    {
      id: 'international',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: 'International Transfers',
      description: 'Send and receive money internationally with competitive exchange rates and low fees.',
      features: ['150+ countries', 'Best exchange rates', 'Fast processing', 'Real-time tracking'],
      price: 'From 2% fee',
    },
    {
      id: 'merchant',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: 'Merchant Solutions',
      description: 'Complete payment solutions for businesses. Accept payments, manage inventory, and grow your business.',
      features: ['POS system', 'Payment links', 'Invoicing', 'Analytics dashboard'],
      badge: 'Business',
      badgeType: 'info',
      price: 'From 1.5% fee',
    },
    {
      id: 'savings',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2" />
          <path d="M2 9v1c0 1.1.9 2 2 2h1" />
        </svg>
      ),
      title: 'Savings Accounts',
      description: 'Grow your money with competitive interest rates. Set savings goals and automate your savings.',
      features: ['4.5% APY', 'Goal-based savings', 'Auto-save features', 'No minimum balance'],
      badge: '4.5% APY',
      badgeType: 'success',
      price: 'Free',
    },
    {
      id: 'insurance',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Insurance Products',
      description: 'Protect what matters most. Health, life, and business insurance tailored for Guinea.',
      features: ['Health coverage', 'Life insurance', 'Business protection', 'Easy claims'],
      price: 'From ₡50,000/month',
    },
    {
      id: 'loans',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: 'Microloans',
      description: 'Access quick loans with flexible repayment terms. Built for individuals and small businesses.',
      features: ['Quick approval', 'Flexible terms', 'No collateral', 'Competitive rates'],
      price: 'From 8% APR',
    },
    {
      id: 'government',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1" />
          <rect x="5" y="2" width="14" height="19" rx="1" />
        </svg>
      ),
      title: 'Government Services',
      description: 'Pay taxes, fines, and access government services digitally. Save time and avoid queues.',
      features: ['Tax payments', 'License fees', 'Fine payments', 'Document requests'],
      badge: 'Beta',
      badgeType: 'warning',
      price: 'No fees',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'payments', label: 'Payments' },
    { id: 'business', label: 'Business' },
    { id: 'financial', label: 'Financial' },
  ];

  const handleServiceClick = (serviceId: string) => {
    onServiceSelect?.(serviceId);
  };

  return (
    <div className="gp-services-page">
      <div className="gp-container">
        {/* Page Header */}
        <div className="gp-services-page-header">
          <h1 className="gp-page-title">
            All <span className="gp-gradient-text">Services</span>
          </h1>
          <p className="gp-page-subtitle">
            Explore our complete suite of digital financial services designed for Guinea.
          </p>
        </div>

        {/* Category Filter */}
        <div className="gp-category-filter">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`gp-category-btn ${selectedCategory === cat.id ? 'gp-category-btn-active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid - Detailed */}
        <div className="gp-services-detailed-grid">
          {services.map((service) => (
            <div key={service.id} className="gp-service-detailed-card">
              <div className="gp-service-detailed-header">
                <div className="gp-service-detailed-icon">{service.icon}</div>
                <div className="gp-service-detailed-badges">
                  {service.badge && (
                    <span className={`gp-badge gp-badge-${service.badgeType || 'success'}`}>
                      {service.badge}
                    </span>
                  )}
                  {service.price && (
                    <span className="gp-badge gp-badge-info">{service.price}</span>
                  )}
                </div>
              </div>
              
              <h3 className="gp-service-detailed-title">{service.title}</h3>
              <p className="gp-service-detailed-description">{service.description}</p>
              
              <ul className="gp-service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="gp-service-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className="gp-btn gp-btn-primary gp-btn-sm"
                onClick={() => handleServiceClick(service.id)}
              >
                Get Started
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GPServicesPage;
