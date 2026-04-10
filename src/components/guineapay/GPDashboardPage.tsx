import React from 'react';
import GPBalanceCard from './GPBalanceCard';
import GPStatsGrid from './GPStatsGrid';
import GPQuickActions from './GPQuickActions';
import GPTransactionHistory from './GPTransactionHistory';

interface GPDashboardPageProps {
  onNavigate?: (page: string) => void;
}

const GPDashboardPage: React.FC<GPDashboardPageProps> = () => {
  const [balance] = React.useState(12450000);
  const [currency] = React.useState('GNF');

  const handleTopUp = () => {
    console.log('Top up clicked');
  };

  const handleWithdraw = () => {
    console.log('Withdraw clicked');
  };

  const handleTransfer = () => {
    console.log('Transfer clicked');
  };

  const handleQuickAction = (action: string) => {
    console.log('Quick action:', action);
  };

  const handleViewAllTransactions = () => {
    console.log('View all transactions');
  };

  return (
    <div className="gp-dashboard-page">
      <div className="gp-container">
        {/* Page Header */}
        <div className="gp-dashboard-header">
          <div>
            <h1 className="gp-page-title">
              Welcome back, <span className="gp-gradient-text">Mamadou</span> 👋
            </h1>
            <p className="gp-page-subtitle">
              Here's what's happening with your account today.
            </p>
          </div>
          <div className="gp-header-actions">
            <button className="gp-btn gp-btn-secondary gp-btn-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Export
            </button>
            <button className="gp-btn gp-btn-primary gp-btn-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              New Transaction
            </button>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="gp-dashboard-grid">
          {/* Left Column - Main Content */}
          <div className="gp-dashboard-main">
            {/* Stats */}
            <GPStatsGrid />

            {/* Quick Actions */}
            <div className="gp-section-card">
              <h3 className="gp-card-title">Quick Actions</h3>
              <GPQuickActions onAction={handleQuickAction} />
            </div>

            {/* Transactions */}
            <div className="gp-section-card">
              <GPTransactionHistory onViewAll={handleViewAllTransactions} />
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="gp-dashboard-sidebar">
            <GPBalanceCard
              balance={balance}
              currency={currency}
              onTopUp={handleTopUp}
              onWithdraw={handleWithdraw}
              onTransfer={handleTransfer}
            />

            {/* Spending Categories */}
            <div className="gp-section-card">
              <h3 className="gp-card-title">Spending by Category</h3>
              <div className="gp-spending-categories">
                <div className="gp-spending-item">
                  <div className="gp-spending-header">
                    <span className="gp-spending-label">🛒 Shopping</span>
                    <span className="gp-spending-value">₡2,450,000</span>
                  </div>
                  <div className="gp-progress-bar">
                    <div className="gp-progress-fill" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="gp-spending-item">
                  <div className="gp-spending-header">
                    <span className="gp-spending-label">🍔 Food & Dining</span>
                    <span className="gp-spending-value">₡1,200,000</span>
                  </div>
                  <div className="gp-progress-bar">
                    <div className="gp-progress-fill gp-progress-fill-blue" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="gp-spending-item">
                  <div className="gp-spending-header">
                    <span className="gp-spending-label">⚡ Utilities</span>
                    <span className="gp-spending-value">₡850,000</span>
                  </div>
                  <div className="gp-progress-bar">
                    <div className="gp-progress-fill gp-progress-fill-purple" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div className="gp-spending-item">
                  <div className="gp-spending-header">
                    <span className="gp-spending-label">🚗 Transport</span>
                    <span className="gp-spending-value">₡620,000</span>
                  </div>
                  <div className="gp-progress-bar">
                    <div className="gp-progress-fill gp-progress-fill-orange" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="gp-section-card">
              <h3 className="gp-card-title">Account Activity</h3>
              <div className="gp-activity-chart">
                <div className="gp-activity-bars">
                  <div className="gp-activity-bar" style={{ height: '40%' }}></div>
                  <div className="gp-activity-bar" style={{ height: '65%' }}></div>
                  <div className="gp-activity-bar" style={{ height: '50%' }}></div>
                  <div className="gp-activity-bar" style={{ height: '80%' }}></div>
                  <div className="gp-activity-bar" style={{ height: '60%' }}></div>
                  <div className="gp-activity-bar" style={{ height: '90%' }}></div>
                  <div className="gp-activity-bar gp-activity-bar-current" style={{ height: '75%' }}></div>
                </div>
                <div className="gp-activity-labels">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPDashboardPage;
