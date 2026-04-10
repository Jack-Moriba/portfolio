import React from 'react';

interface StatItem {
  label: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
}

interface GPStatsGridProps {
  stats?: StatItem[];
}

const GPStatsGrid: React.FC<GPStatsGridProps> = ({ stats }) => {
  const defaultStats: StatItem[] = [
    {
      label: 'Income (30d)',
      value: '₡8,750,000',
      change: '+12.5%',
      changeType: 'positive',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      ),
    },
    {
      label: 'Expenses (30d)',
      value: '₡4,320,000',
      change: '-5.2%',
      changeType: 'positive',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      ),
    },
    {
      label: 'Savings Goal',
      value: '62%',
      change: '₡6,200,000 / ₡10,000,000',
      changeType: 'neutral',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2" />
          <path d="M2 9v1c0 1.1.9 2 2 2h1" />
          <path d="M16 11h.5" />
        </svg>
      ),
    },
    {
      label: 'Pending',
      value: '₡850,000',
      change: '3 transactions',
      changeType: 'neutral',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  const displayStats = stats || defaultStats;

  return (
    <div className="gp-stats-grid">
      {displayStats.map((stat, index) => (
        <div key={index} className="gp-stat-card">
          <div className="gp-stat-card-header">
            <span className="gp-stat-label">{stat.label}</span>
            <div className="gp-stat-icon">{stat.icon}</div>
          </div>
          <div className="gp-stat-value">{stat.value}</div>
          {stat.change && (
            <div className={`gp-stat-change gp-stat-change-${stat.changeType || 'neutral'}`}>
              {stat.change}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GPStatsGrid;
