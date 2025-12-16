import React, { useState, useEffect } from 'react';
import { FaTimes, FaChartLine, FaUsers, FaEye, FaExternalLinkAlt } from 'react-icons/fa';
import './AnalyticsModal.css';

interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AnalyticsModal: React.FC<AnalyticsModalProps> = ({ isOpen, onClose }) => {
  const [sessionCount, setSessionCount] = useState(0);
  const [totalPageViews, setTotalPageViews] = useState(0);

  useEffect(() => {
    if (isOpen) {
      // Get session count (unique browser sessions)
      const sessions = localStorage.getItem('portfolio_sessions');
      setSessionCount(sessions ? parseInt(sessions) : 1);

      // Get page view count
      const pageViews = localStorage.getItem('portfolio_pageviews');
      setTotalPageViews(pageViews ? parseInt(pageViews) : 1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const openUmamiDashboard = () => {
    window.open('https://cloud.umami.is/share/VPtO3EYGz0yxNP7s/Personal', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="analytics-modal-overlay" onClick={handleOverlayClick}>
      <div className="analytics-modal">
        <button className="analytics-close" onClick={onClose} aria-label="Close Analytics">
          <FaTimes />
        </button>

        <div className="analytics-header">
          <FaChartLine className="analytics-icon" />
          <h2>Portfolio Analytics</h2>
          <p>Visitor insights and statistics</p>
        </div>

        <div className="analytics-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <FaUsers />
            </div>
            <div className="stat-info">
              <h3>{sessionCount}</h3>
              <p>Browser Sessions</p>
              <span className="stat-note">Since first visit</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <FaEye />
            </div>
            <div className="stat-info">
              <h3>{totalPageViews}</h3>
              <p>Page Views</p>
              <span className="stat-note">Your total views</span>
            </div>
          </div>
        </div>

        <div className="analytics-note">
          <p><strong>Note:</strong> These are browser-specific stats tracked locally. They reset if you clear your browser data.</p>
        </div>

        <div className="analytics-actions">
          <button className="full-analytics-btn" onClick={openUmamiDashboard}>
            <FaChartLine />
            <span>View Full Analytics Dashboard</span>
            <FaExternalLinkAlt className="external-icon" />
          </button>
          <p className="dashboard-info">Opens Umami Analytics with real-time visitor data, unique visitors, page views, locations, and more.</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsModal;
