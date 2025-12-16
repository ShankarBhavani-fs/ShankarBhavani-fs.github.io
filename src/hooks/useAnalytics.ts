import { useEffect } from 'react';

/**
 * Custom hook to initialize Umami Analytics tracking
 * Adds the Umami tracking script to the document head
 * Also tracks basic stats in localStorage for user display
 */
export const useAnalytics = () => {
  useEffect(() => {
    // Track session count in localStorage
    const sessionKey = 'portfolio_sessions';
    const pageViewKey = 'portfolio_pageviews';
    const lastVisitKey = 'portfolio_last_visit';
    
    const now = Date.now();
    const lastVisit = localStorage.getItem(lastVisitKey);
    const sessionTimeout = 30 * 60 * 1000; // 30 minutes
    
    // Increment page view count
    const currentPageViews = localStorage.getItem(pageViewKey);
    localStorage.setItem(pageViewKey, String(currentPageViews ? parseInt(currentPageViews) + 1 : 1));
    
    // Check if it's a new session (first visit or 30+ min since last visit)
    if (!lastVisit || (now - parseInt(lastVisit)) > sessionTimeout) {
      const currentSessions = localStorage.getItem(sessionKey);
      localStorage.setItem(sessionKey, String(currentSessions ? parseInt(currentSessions) + 1 : 1));
    }
    
    localStorage.setItem(lastVisitKey, String(now));
    
    // Check if script already exists to avoid duplicates
    const existingScript = document.querySelector(
      'script[data-website-id="0699e5ce-2d64-411e-ad89-e719dd214aba"]'
    );
    
    if (existingScript) {
      return;
    }

    // Create and configure the tracking script
    const script = document.createElement('script');
    script.src = 'https://cloud.umami.is/script.js';
    script.setAttribute('data-website-id', '0699e5ce-2d64-411e-ad89-e719dd214aba');
    script.defer = true;
    
    // Add script to document head
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);
};
