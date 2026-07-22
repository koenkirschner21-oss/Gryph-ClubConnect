import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getAnalyticsConsent,
  setAnalyticsConsent,
  subscribeToAnalyticsConsent,
  type AnalyticsConsent,
} from '../../lib/analytics';

export default function CookieConsent() {
  const [consent, setConsentState] =
    useState<AnalyticsConsent>(null);

  const [settingsOpen, setSettingsOpen] =
    useState(false);

  useEffect(() => {
    setConsentState(getAnalyticsConsent());

    return subscribeToAnalyticsConsent(
      (updatedConsent) => {
        setConsentState(updatedConsent);
      },
    );
  }, []);

  const handleAccept = () => {
    setAnalyticsConsent('accepted');
    setConsentState('accepted');
    setSettingsOpen(false);
  };

  const handleDecline = () => {
    setAnalyticsConsent('declined');
    setConsentState('declined');
    setSettingsOpen(false);
  };

  const showBanner =
    consent === null || settingsOpen;

  return (
    <>
      {showBanner && (
        <div
          className="fixed inset-x-0 bottom-0 z-[100] px-3 pb-3 sm:px-5 sm:pb-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
        >
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[16px] border border-white/[0.1] bg-[#111111] shadow-[0_24px_70px_rgba(0,0,0,0.65)]">
            <div className="h-[2px] bg-gradient-to-r from-[#E51937] via-[#FFC429] to-[#E51937]" />

            <div className="flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p
                  id="cookie-consent-title"
                  className="mb-2 text-base font-bold text-[#F5F5F5]"
                >
                  Help us improve Gryph ClubConnect
                </p>

                <p
                  id="cookie-consent-description"
                  className="text-sm leading-relaxed text-[#9CA3AF]"
                >
                  We use optional Google Analytics cookies to
                  understand how visitors use the website and improve
                  the experience. Analytics will not load unless you
                  accept. We do not send form names, email addresses,
                  club names, or messages to Google Analytics.
                </p>

                <Link
                  to="/privacy"
                  className="mt-3 inline-flex text-sm font-semibold text-[#E51937] underline underline-offset-4 transition-colors hover:text-[#FF6B7D]"
                >
                  Read our Privacy Policy
                </Link>
              </div>

              <div className="flex w-full flex-col gap-2.5 sm:flex-row lg:w-auto lg:shrink-0">
                <button
                  type="button"
                  onClick={handleDecline}
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[10px] border border-white/[0.12] bg-transparent px-5 py-3 text-sm font-semibold text-[#F5F5F5] transition-colors hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-[#FFC429] focus:ring-offset-2 focus:ring-offset-[#111111] sm:w-auto"
                >
                  Decline analytics
                </button>

                <button
                  type="button"
                  onClick={handleAccept}
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[10px] bg-[#E51937] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C4122E] focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:ring-offset-2 focus:ring-offset-[#111111] sm:w-auto"
                >
                  Accept analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {!showBanner && (
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          className="fixed bottom-3 left-3 z-[90] rounded-full border border-white/[0.1] bg-[#111111]/95 px-3 py-2 text-xs font-medium text-[#9CA3AF] shadow-lg backdrop-blur-md transition-colors hover:text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#E51937] sm:bottom-4 sm:left-4"
          aria-label="Open cookie settings"
        >
          Cookie settings
        </button>
      )}
    </>
  );
}
