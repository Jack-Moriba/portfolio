import React from 'react';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  title: string;
  category: string;
  amount: number;
  currency: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  icon?: React.ReactNode;
}

interface GPTransactionHistoryProps {
  transactions?: Transaction[];
  limit?: number;
  onViewAll?: () => void;
}

const GPTransactionHistory: React.FC<GPTransactionHistoryProps> = ({
  transactions,
  limit = 5,
  onViewAll,
}) => {
  const defaultTransactions: Transaction[] = [
    {
      id: '1',
      type: 'income',
      title: 'Orange Money Transfer',
      category: 'Mobile Money',
      amount: 500000,
      currency: 'GNF',
      date: 'Today, 2:30 PM',
      status: 'completed',
    },
    {
      id: '2',
      type: 'expense',
      title: 'EDG Electricity Bill',
      category: 'Utilities',
      amount: 250000,
      currency: 'GNF',
      date: 'Yesterday, 10:15 AM',
      status: 'completed',
    },
    {
      id: '3',
      type: 'expense',
      title: 'MTN MoMo Send',
      category: 'Transfer',
      amount: 150000,
      currency: 'GNF',
      date: 'Yesterday, 9:00 AM',
      status: 'completed',
    },
    {
      id: '4',
      type: 'income',
      title: 'Salary Deposit',
      category: 'Income',
      amount: 3500000,
      currency: 'GNF',
      date: 'Apr 5, 2026',
      status: 'completed',
    },
    {
      id: '5',
      type: 'expense',
      title: 'SOGUIPAH Water',
      category: 'Utilities',
      amount: 85000,
      currency: 'GNF',
      date: 'Apr 4, 2026',
      status: 'pending',
    },
    {
      id: '6',
      type: 'income',
      title: 'Client Payment',
      category: 'Business',
      amount: 1200000,
      currency: 'GNF',
      date: 'Apr 3, 2026',
      status: 'completed',
    },
  ];

  const displayTransactions = transactions || defaultTransactions;
  const visibleTransactions = displayTransactions.slice(0, limit);

  const formatAmount = (amount: number, currency: string, type: string) => {
    const formatted = new Intl.NumberFormat('fr-GN', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

    return type === 'income' ? `+${formatted}` : `-${formatted}`;
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'completed':
        return 'gp-tx-status-success';
      case 'pending':
        return 'gp-tx-status-pending';
      case 'failed':
        return 'gp-tx-status-failed';
      default:
        return '';
    }
  };

  const getTransactionIcon = (tx: Transaction) => {
    if (tx.type === 'income') {
      return (
        <div className="gp-tx-icon gp-tx-icon-success">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </div>
      );
    }
    return (
      <div className="gp-tx-icon gp-tx-icon-danger">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>
    );
  };

  return (
    <div className="gp-transactions-section">
      <div className="gp-transactions-header">
        <h3 className="gp-transactions-title">Recent Transactions</h3>
        {onViewAll && (
          <button className="gp-btn gp-btn-ghost gp-btn-sm" onClick={onViewAll}>
            View All
          </button>
        )}
      </div>

      <div className="gp-transactions-list">
        {visibleTransactions.map((tx) => (
          <div key={tx.id} className="gp-transaction-item">
            <div className="gp-tx-left">
              {getTransactionIcon(tx)}
              <div className="gp-tx-details">
                <span className="gp-tx-title">{tx.title}</span>
                <span className="gp-tx-meta">{tx.category} • {tx.date}</span>
              </div>
            </div>
            <div className="gp-tx-right">
              <span className={`gp-tx-amount ${tx.type === 'income' ? 'gp-tx-amount-positive' : 'gp-tx-amount-negative'}`}>
                {formatAmount(tx.amount, tx.currency, tx.type)}
              </span>
              <span className={`gp-tx-status ${getStatusClass(tx.status)}`}>
                {tx.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GPTransactionHistory;
