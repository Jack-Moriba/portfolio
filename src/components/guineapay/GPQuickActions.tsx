import React from 'react';

interface GPQuickActionsProps {
  onAction?: (action: string) => void;
}

const GPQuickActions: React.FC<GPQuickActionsProps> = ({ onAction }) => {
  const actions = [
    {
      id: 'send',
      label: 'Send Money',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      ),
      color: 'gp-action-green',
    },
    {
      id: 'receive',
      label: 'Receive',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      ),
      color: 'gp-action-blue',
    },
    {
      id: 'pay',
      label: 'Pay Bills',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      ),
      color: 'gp-action-purple',
    },
    {
      id: 'topup',
      label: 'Top Up',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      ),
      color: 'gp-action-orange',
    },
    {
      id: 'qr',
      label: 'Scan QR',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="3" height="3" />
          <rect x="18" y="18" width="3" height="3" />
        </svg>
      ),
      color: 'gp-action-teal',
    },
    {
      id: 'more',
      label: 'More',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      ),
      color: 'gp-action-gray',
    },
  ];

  return (
    <div className="gp-quick-actions">
      {actions.map((action) => (
        <button
          key={action.id}
          className={`gp-quick-action-btn ${action.color}`}
          onClick={() => onAction?.(action.id)}
          aria-label={action.label}
        >
          <div className="gp-quick-action-icon">
            {action.icon}
          </div>
          <span className="gp-quick-action-label">{action.label}</span>
        </button>
      ))}
    </div>
  );
};

export default GPQuickActions;
