type AnalyticsValue = string | number | boolean | undefined;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

let initialized = false;
let lastTrackedPage = '';

export function analyticsEnabled(): boolean {
  return Boolean(measurementId) && typeof window !== 'undefined';
}

export function initializeAnalytics() {
  if (!analyticsEnabled() || initialized) {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };

  window.gtag('js', new Date());

  window.gtag('config', measurementId, {
    send_page_view: false,
    anonymize_ip: true,
  });

  if (!document.querySelector(`script[data-gcc-ga="${measurementId}"]`)) {
    const script = document.createElement('script');

    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.dataset.gccGa = measurementId;

    document.head.appendChild(script);
  }

  initialized = true;
}

export function trackPageView(path: string, title: string) {
  if (!analyticsEnabled()) {
    return;
  }

  initializeAnalytics();

  const pageKey = `${path}|${title}`;

  if (pageKey === lastTrackedPage) {
    return;
  }

  lastTrackedPage = pageKey;

  window.gtag?.('event', 'page_view', {
    page_title: title,
    page_location: window.location.href,
    page_path: path,
  });
}

export function trackEvent(
  eventName: string,
  parameters: Record<string, AnalyticsValue> = {},
) {
  if (!analyticsEnabled()) {
    return;
  }

  initializeAnalytics();

  const cleanParameters = Object.fromEntries(
    Object.entries(parameters).filter(([, value]) => value !== undefined),
  );

  window.gtag?.('event', eventName, cleanParameters);
}
