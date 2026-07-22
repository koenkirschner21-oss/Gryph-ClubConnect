import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import {
  DEMO_FORM_ENDPOINT,
  DEMO_FORM_SOURCE_DEMO_PAGE,
  DEMO_FORM_SOURCE_HOMEPAGE,
  DEMO_INTEREST_OPTIONS,
  DEMO_WORKFLOW_OPTIONS,
} from '../../lib/forms';
import { CLUB_INTEREST_EVENT, consumeClubFormInterest, type ClubInterestOption } from '../../lib/cta';
import BrandLogo from '../ui/BrandLogo';
import { trackEvent } from '../../lib/analytics';

const inputClass =
  'w-full min-w-0 bg-[#0B0B0B] border border-[#222222] rounded-[10px] px-3.5 py-2.5 text-sm text-[#F5F5F5] placeholder:text-[#777777] focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:border-[#E51937] transition-colors';
const labelClass = 'block text-[13px] font-medium text-[#9CA3AF] mb-1.5';

const nextSteps = [
  'We review your request',
  'We follow up with the right next step',
  'We tailor the walkthrough or onboarding to your club',
];

const ROLE_OPTIONS = [
  'President / Co-President',
  'Managerial Executive',
  'Executive',
  'General Member',
  'Faculty or Staff',
  'Other',
] as const;

function getInterestLabel(option: ClubInterestOption): string {
  if (option === 'Onboard my club') {
    return 'Get my club started';
  }

  return option;
}

function getMessagePlaceholder(requestType: ClubInterestOption): string {
  if (requestType === 'Onboard my club') {
    return 'Tell us about your club and what you want to organize.';
  }

  if (requestType === 'Ask a question') {
    return 'What would you like to know?';
  }

  return 'Which workflows would you like to see?';
}

function getSubmitLabel(requestType: ClubInterestOption): string {
  if (requestType === 'Onboard my club') {
    return 'Get My Club Started';
  }

  if (requestType === 'Ask a question') {
    return 'Send My Question';
  }

  return 'Request a Demo';
}

type DemoInterestFormProps = {
  /** compact = homepage fields; full = Demo page with workflow checkboxes */
  variant?: 'compact' | 'full';
  idPrefix?: string;
};

export default function DemoInterestForm({
  variant = 'full',
  idPrefix,
}: DemoInterestFormProps) {
  const reactId = useId().replace(/:/g, '');
  const prefix = idPrefix ?? (variant === 'compact' ? `home-${reactId}` : `demo-${reactId}`);
  const isCompact = variant === 'compact';
  const formSource = isCompact ? DEMO_FORM_SOURCE_HOMEPAGE : DEMO_FORM_SOURCE_DEMO_PAGE;

  const [requestType, setRequestType] =
    useState<(typeof DEMO_INTEREST_OPTIONS)[number]>('Request a demo');
  const [workflows, setWorkflows] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formStarted = useRef(false);

  useEffect(() => {
    const pending = consumeClubFormInterest();
    if (pending) {
      setRequestType(pending);
      setSubmitted(false);
      setError(null);
    }

    const handler = (event: Event) => {
      const detail = (event as CustomEvent<ClubInterestOption>).detail;
      if (!detail || !(DEMO_INTEREST_OPTIONS as readonly string[]).includes(detail)) return;
      setRequestType(detail);
      setSubmitted(false);
      setError(null);
    };
    window.addEventListener(CLUB_INTEREST_EVENT, handler);
    return () => window.removeEventListener(CLUB_INTEREST_EVENT, handler);
  }, []);

  const toggleWorkflow = (option: string) => {
    setWorkflows((prev) =>
      prev.includes(option) ? prev.filter((w) => w !== option) : [...prev, option]
    );
  };

  const handleFormStart = () => {
    if (formStarted.current) {
      return;
    }

    formStarted.current = true;

    trackEvent('form_start', {
      form_name: 'club_interest',
      form_source: formSource,
      request_type: requestType,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set('requestType', requestType);
    data.set('formSource', formSource);

    // Ensure workflow values are present even if FormData misses controlled checkboxes
    if (!isCompact) {
      data.delete('workflows');
      workflows.forEach((w) => data.append('workflows', w));
    }

    try {
      const res = await fetch(DEMO_FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        trackEvent('generate_lead', {
          form_name: 'club_interest',
          form_source: formSource,
          request_type: requestType,
          workflow_count: workflows.length,
        });

        setSubmitted(true);
        form.reset();
        setWorkflows([]);
        setRequestType('Request a demo');
      } else {
        setError('Something went wrong. Please try again or email gryphclubconnect@gmail.com.');
      }
    } catch {
      setError('Something went wrong. Please try again or email gryphclubconnect@gmail.com.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="relative overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#0B0B0B] px-5 py-6 sm:px-6 sm:py-7"
        role="status"
        aria-live="polite"
      >
        <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#E51937] via-[#FFC429] to-[#E51937]" aria-hidden />
        <div className="absolute -top-16 right-0 h-32 w-32 rounded-full bg-[#E51937] opacity-[0.08] blur-[48px] pointer-events-none" aria-hidden />

        <div className="relative">
          <div className="mb-5 flex items-center justify-between gap-3">
            <BrandLogo variant="footer" />
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E51937]/35 bg-[rgba(229,25,55,0.14)] text-[#E51937]">
              <Check size={18} strokeWidth={2.5} aria-hidden />
            </span>
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FFC429] mb-2">
            Request received
          </p>
          <h3 className="text-xl sm:text-[1.35rem] font-extrabold text-[#F5F5F5] font-sans mb-2 leading-tight">
            Request sent successfully
          </h3>
          <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
            Thanks — your request was sent. We&apos;ll follow up soon using the email you provided. No account was created.
          </p>

          <div className="rounded-[10px] border border-[#222222] bg-[#131313] p-4 sm:p-5 mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777] mb-3">
              What happens next
            </p>
            <ol className="space-y-3">
              {nextSteps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm">
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full border text-[11px] font-bold flex items-center justify-center ${
                      index % 2 === 0
                        ? 'border-[#E51937]/35 bg-[rgba(229,25,55,0.12)] text-[#E51937]'
                        : 'border-[#FFC429]/35 bg-[rgba(255,196,41,0.12)] text-[#FFC429]'
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span className="pt-0.5 text-[#9CA3AF] leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="inline-flex flex-1 items-center justify-center rounded-[10px] bg-[#E51937] hover:bg-[#C4122E] text-white font-semibold px-5 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:ring-offset-2 focus:ring-offset-[#0B0B0B]"
            >
              Submit another request
            </button>
            {isCompact ? (
              <Link
                to="/demo"
                className="inline-flex flex-1 items-center justify-center rounded-[10px] border border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.2)] text-[#F5F5F5] font-semibold px-5 py-3 text-sm transition-colors"
              >
                Back to demo page
              </Link>
            ) : (
              <Link
                to="/features"
                className="inline-flex flex-1 items-center justify-center rounded-[10px] border border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.2)] text-[#F5F5F5] font-semibold px-5 py-3 text-sm transition-colors"
              >
                Explore features
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  const fieldGap = isCompact ? 'space-y-3' : 'space-y-4';
  const messageRows = isCompact ? 3 : 4;

  return (
    <form
      action={DEMO_FORM_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      onFocusCapture={handleFormStart}
      className={fieldGap}
      noValidate
    >
      <input type="hidden" name="formSource" value={formSource} />
      <input type="hidden" name="requestType" value={requestType} />

      <div>
        <label htmlFor={`${prefix}-full-name`} className={labelClass}>
          Full name
        </label>
        <input
          id={`${prefix}-full-name`}
          name="fullName"
          required
          autoComplete="name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor={`${prefix}-email`} className={labelClass}>
          University email
        </label>
        <input
          id={`${prefix}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@uoguelph.ca"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor={`${prefix}-club-name`} className={labelClass}>
          Club name
        </label>
        <input id={`${prefix}-club-name`} name="clubName" required className={inputClass} />
      </div>

      <div>
        <label htmlFor={`${prefix}-role`} className={labelClass}>
          Your role in the club
        </label>
        <select
          id={`${prefix}-role`}
          name="role"
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Select your role
          </option>
          {ROLE_OPTIONS.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className={labelClass} id={`${prefix}-request-type-label`}>
          What are you interested in?
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-2 min-w-0"
          role="group"
          aria-labelledby={`${prefix}-request-type-label`}
        >
          {DEMO_INTEREST_OPTIONS.map((option) => {
            const selected = requestType === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setRequestType(option)}
                className={`rounded-[10px] border px-3 py-2.5 text-[12px] sm:text-[13px] font-medium transition-colors text-left min-w-0 break-words ${
                  selected
                    ? 'border-[#E51937]/50 bg-[rgba(229,25,55,0.12)] text-[#F5F5F5]'
                    : 'border-[#222222] bg-[#0B0B0B] text-[#9CA3AF] hover:border-[rgba(255,255,255,0.14)]'
                }`}
              >
                {getInterestLabel(option)}
              </button>
            );
          })}
        </div>
      </div>

      {!isCompact && (
        <div>
          <p className={labelClass} id={`${prefix}-workflows-label`}>
            Which workflows do you want to see?
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-2"
            role="group"
            aria-labelledby={`${prefix}-workflows-label`}
          >
            {DEMO_WORKFLOW_OPTIONS.map((option) => {
              const selected = workflows.includes(option);
              return (
                <label
                  key={option}
                  className={`flex items-start gap-2.5 rounded-[10px] border px-3 py-2.5 text-[13px] cursor-pointer transition-colors ${
                    selected
                      ? 'border-[#FFC429]/40 bg-[rgba(255,196,41,0.08)] text-[#F5F5F5]'
                      : 'border-[#222222] bg-[#0B0B0B] text-[#9CA3AF] hover:border-[rgba(255,255,255,0.14)]'
                  }`}
                >
                  <input
                    type="checkbox"
                    name="workflows"
                    value={option}
                    className="mt-0.5 rounded border-[#444] bg-[#0B0B0B] text-[#E51937] focus:ring-[#E51937]"
                    checked={selected}
                    onChange={() => toggleWorkflow(option)}
                  />
                  <span className="leading-snug">{option}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      <div>
        <label htmlFor={`${prefix}-message`} className={labelClass}>
          Tell us what you would like help with
        </label>
        <textarea
          id={`${prefix}-message`}
          name="message"
          rows={messageRows}
          placeholder={getMessagePlaceholder(requestType)}
          className={`${inputClass} resize-y ${isCompact ? 'min-h-[72px]' : 'min-h-[100px]'}`}
        />
      </div>

      {error && (
        <p className="text-sm text-[#E51937] leading-relaxed" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-[10px] bg-[#E51937] hover:bg-[#C4122E] text-white font-semibold py-3 text-sm transition-colors disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:ring-offset-2 focus:ring-offset-[#131313]"
      >
        {submitting ? 'Submitting…' : getSubmitLabel(requestType)}
      </button>

      <p className="text-[12px] text-[#777777] leading-relaxed">
        Submitting this form does not create an account or officially register your club.
      </p>
    </form>
  );
}
