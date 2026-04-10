import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  badgeType?: 'success' | 'warning' | 'danger' | 'info';
  onClick?: () => void;
}

const GPServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  badge,
  badgeType = 'success',
  onClick,
}) => {
  return (
    <div className="gp-service-card" onClick={onClick}>
      <div className="gp-service-card-header">
        <div className="gp-service-icon">{icon}</div>
        {badge && (
          <span className={`gp-badge gp-badge-${badgeType}`}>{badge}</span>
        )}
      </div>
      <h3 className="gp-service-title">{title}</h3>
      <p className="gp-service-description">{description}</p>
      <div className="gp-service-footer">
        <span className="gp-service-link">
          Learn more
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default GPServiceCard;
