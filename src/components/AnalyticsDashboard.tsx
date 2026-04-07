import { useEffect, useState } from 'react';
import './styles/AnalyticsDashboard.css';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  avgTimeOnPage: number;
  clicks: number;
  topSections: { name: string; views: number }[];
  deviceBreakdown: { desktop: number; mobile: number; tablet: number };
}

const AnalyticsDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    avgTimeOnPage: 0,
    clicks: 0,
    topSections: [],
    deviceBreakdown: { desktop: 0, mobile: 0, tablet: 0 }
  });

  useEffect(() => {
    // Load analytics from localStorage (in production, this would be from an API)
    const loadAnalytics = () => {
      const stored = localStorage.getItem('portfolio_analytics');
      if (stored) {
        setData(JSON.parse(stored));
      } else {
        // Initialize with demo data
        const demoData: AnalyticsData = {
          pageViews: 1247,
          uniqueVisitors: 892,
          avgTimeOnPage: 145,
          clicks: 3421,
          topSections: [
            { name: 'Projets', views: 456 },
            { name: 'À Propos', views: 312 },
            { name: 'Compétences', views: 278 },
            { name: 'Contact', views: 201 }
          ],
          deviceBreakdown: { desktop: 65, mobile: 30, tablet: 5 }
        };
        setData(demoData);
        localStorage.setItem('portfolio_analytics', JSON.stringify(demoData));
      }
    };

    loadAnalytics();

    // Track page view
    const trackPageView = () => {
      const stored = localStorage.getItem('portfolio_analytics');
      const analytics: AnalyticsData = stored ? JSON.parse(stored) : data;
      analytics.pageViews++;
      localStorage.setItem('portfolio_analytics', JSON.stringify(analytics));
    };

    trackPageView();

    // Track time on page
    const startTime = Date.now();
    const handleBeforeUnload = () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      const stored = localStorage.getItem('portfolio_analytics');
      if (stored) {
        const analytics = JSON.parse(stored);
        analytics.avgTimeOnPage = Math.floor(
          (analytics.avgTimeOnPage * analytics.pageViews + timeSpent) / (analytics.pageViews + 1)
        );
        localStorage.setItem('portfolio_analytics', JSON.stringify(analytics));
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Track clicks
    const handleClick = () => {
      const stored = localStorage.getItem('portfolio_analytics');
      if (stored) {
        const analytics = JSON.parse(stored);
        analytics.clicks++;
        localStorage.setItem('portfolio_analytics', JSON.stringify(analytics));
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="analytics-dashboard">
      <button 
        className="analytics-toggle"
        onClick={() => setIsVisible(!isVisible)}
        data-cursor="disable"
      >
        📊 Analytics
      </button>

      {isVisible && (
        <div className="analytics-panel">
          <div className="analytics-header">
            <h3>📊 Tableau de Bord</h3>
            <button 
              className="analytics-close"
              onClick={() => setIsVisible(false)}
              aria-label="Fermer"
            >
              ✕
            </button>
          </div>

          <div className="analytics-grid">
            <div className="analytics-card primary">
              <div className="card-label">Vues Totales</div>
              <div className="card-value">{data.pageViews.toLocaleString()}</div>
              <div className="card-trend">↑ 12% ce mois</div>
            </div>

            <div className="analytics-card secondary">
              <div className="card-label">Visiteurs Uniques</div>
              <div className="card-value">{data.uniqueVisitors.toLocaleString()}</div>
              <div className="card-trend">↑ 8% ce mois</div>
            </div>

            <div className="analytics-card">
              <div className="card-label">Temps Moyen</div>
              <div className="card-value">{formatTime(data.avgTimeOnPage)}</div>
              <div className="card-trend">⏱️ sur site</div>
            </div>

            <div className="analytics-card">
              <div className="card-label">Interactions</div>
              <div className="card-value">{data.clicks.toLocaleString()}</div>
              <div className="card-trend">clics totaux</div>
            </div>
          </div>

          <div className="analytics-sections">
            <h4>🏆 Sections Populaires</h4>
            <div className="sections-list">
              {data.topSections.map((section, index) => (
                <div key={index} className="section-item">
                  <span className="section-rank">#{index + 1}</span>
                  <span className="section-name">{section.name}</span>
                  <div className="section-bar">
                    <div 
                      className="section-fill"
                      style={{ width: `${(section.views / data.topSections[0].views) * 100}%` }}
                    />
                  </div>
                  <span className="section-views">{section.views}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="analytics-devices">
            <h4>📱 Appareils</h4>
            <div className="devices-chart">
              <div className="device-item">
                <span className="device-icon">🖥️</span>
                <div className="device-bar">
                  <div 
                    className="device-fill desktop"
                    style={{ width: `${data.deviceBreakdown.desktop}%` }}
                  />
                </div>
                <span className="device-label">Desktop {data.deviceBreakdown.desktop}%</span>
              </div>
              <div className="device-item">
                <span className="device-icon">📱</span>
                <div className="device-bar">
                  <div 
                    className="device-fill mobile"
                    style={{ width: `${data.deviceBreakdown.mobile}%` }}
                  />
                </div>
                <span className="device-label">Mobile {data.deviceBreakdown.mobile}%</span>
              </div>
              <div className="device-item">
                <span className="device-icon">📲</span>
                <div className="device-bar">
                  <div 
                    className="device-fill tablet"
                    style={{ width: `${data.deviceBreakdown.tablet}%` }}
                  />
                </div>
                <span className="device-label">Tablet {data.deviceBreakdown.tablet}%</span>
              </div>
            </div>
          </div>

          <div className="analytics-footer">
            <button 
              className="analytics-reset"
              onClick={() => {
                localStorage.removeItem('portfolio_analytics');
                window.location.reload();
              }}
            >
              🔄 Réinitialiser
            </button>
            <span className="analytics-note">Données stockées localement</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyticsDashboard;
