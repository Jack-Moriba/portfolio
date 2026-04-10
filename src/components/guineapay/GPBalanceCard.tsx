import React from 'react';

interface GPBalanceCardProps {
  balance: number;
  currency: string;
  onTopUp: () => void;
  onWithdraw: () => void;
  onTransfer: () => void;
}

const GPBalanceCard: React.FC<GPBalanceCardProps> = ({
  balance,
  currency,
  onTopUp,
  onWithdraw,
  onTransfer,
}) => {
  const formatCurrency = (amount: number, curr: string) => {
    return new Intl.NumberFormat('fr-GN', {
      style: 'currency',
      currency: curr,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="gp-balance-card">
      <div className="gp-balance-header">
        <div className="gp-balance-info">
          <span className="gp-balance-label">Available Balance</span>
          <h2 className="gp-balance-amount">
            {formatCurrency(balance, currency)}
          </h2>
        </div>
        <div className="gp-balance-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Verified
        </div>
      </div>

      <div className="gp-balance-card-visual">
        <div className="gp-card-chip">
          <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
            <rect x="1" y="1" width="38" height="28" rx="4" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <path d="M10 10h20M10 15h20M10 20h20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          </svg>
        </div>
        <div className="gp-card-number">**** **** **** 4582</div>
        <div className="gp-card-details">
          <span>Mamadou Th Diallo</span>
          <span>12/28</span>
        </div>
        <div className="gp-card-logo">GuineaPay</div>
      </div>

      <div className="gp-balance-actions">
        <button className="gp-btn gp-btn-primary" onClick={onTopUp}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Top Up
        </button>
        <button className="gp-btn gp-btn-secondary" onClick={onTransfer}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 1l4 4-4 4" />
            <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          </svg>
          Send
        </button>
        <button className="gp-btn gp-btn-secondary" onClick={onWithdraw}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default GPBalanceCard;
