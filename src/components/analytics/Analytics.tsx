import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  initializeAnalytics,
  trackPageView,
} from '../../lib/analytics';

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    initializeAnalytics();
  }, []);

  useEffect(() => {
    const path = `${location.pathname}${location.search}`;

    const timer = window.setTimeout(() => {
      trackPageView(path, document.title);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.search]);

  return null;
}
