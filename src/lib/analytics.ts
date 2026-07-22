type AnalyticsValue = string | number | boolean | undefined;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsConsent = 'accepted' | 'declined' | null;

const CONSENT_STORAGE_KEY = 'gcc:analytics-consent';
const CONSENT_CHANGE_EVENT = 'gcc:analytics-consent-change';

const measurementId =
  import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

let initialized = false;
let lastTrackedPage = '';

export function getAnalyticsConsent(): AnalyticsConsent {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);

    if (value === 'accepted' || value === 'declined') {
      return value;
    }
  } catch {
    // Ignore unavailable browser storage.
  }

  return null;
}

export function setAnalyticsConsent(
  consent: Exclude<AnalyticsConsent, null>,
) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, consent);
  } catch {
    // Ignore unavailable browser storage.
  }

  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGE_EVENT, {
      detail: consent,
    }),
  );

  if (consent === 'accepted') {
    initializeAnalytics();
  }
}

export function clearAnalyticsConsent() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    // Ignore unavailable browser storage.
  }

  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGE_EVENT, {
      detail: null,
    }),
  );
}

export function subscribeToAnalyticsConsent(
  callback: (consent: AnalyticsConsent) => void,
) {
  if (typeof window === 'undefined') {
    return () => undefined;
  }

  const handler = (event: Event) => {
    const customEvent =
      event as CustomEvent<AnalyticsConsent>;

    callback(customEvent.detail);
  };

  window.addEventListener(
    CONSENT_CHANGE_EVENT,
    handler,
  );

  return () => {
    window.removeEventListener(
      CONSENT_CHANGE_EVENT,
      handler,
    );
  };
}

export function analyticsEnabled(): boolean {
  return (
    Boolean(measurementId) &&
    typeof window !== 'undefined' &&
    getAnalyticsConsent() === 'accepted'
  );
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

  const existingScript =
    document.querySelector<HTMLScriptElement>(
      `script[data-gcc-ga="${measurementId}"]`,
    );

  if (!existingScript) {
    const script = document.createElement('script');

    script.async = true;
    script.src =
      `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

    script.dataset.gccGa = measurementId;

    document.head.appendChild(script);
  }

  initialized = true;
}

export function trackPageView(
  path: string,
  title: string,
) {
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
    Object.entries(parameters).filter(
      ([, value]) => value !== undefined,
    ),
  );

  window.gtag?.(
    'event',
    eventName,
    cleanParameters,
  );
}
