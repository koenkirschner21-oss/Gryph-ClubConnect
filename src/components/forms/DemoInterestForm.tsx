import { useEffect, useId, useState, type FormEvent } from 'react';
import {
  DEMO_FORM_ENDPOINT,
  DEMO_FORM_SOURCE,
  DEMO_INTEREST_OPTIONS,
  DEMO_WORKFLOW_OPTIONS,
  HOMEPAGE_DEMO_FORM_SOURCE,
} from '../../lib/forms';
import { CLUB_INTEREST_EVENT, consumeClubFormInterest, type ClubInterestOption } from '../../lib/cta';

const inputClass =
  'w-full min-w-0 bg-[#0B0B0B] border border-[#222222] rounded-[10px] px-3.5 py-2.5 text-sm text-[#F5F5F5] placeholder:text-[#777777] focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:border-[#E51937] transition-colors';
const labelClass = 'block text-[13px] font-medium text-[#9CA3AF] mb-1.5';

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

  const [interest, setInterest] = useState<(typeof DEMO_INTEREST_OPTIONS)[number]>('Request a demo');
  const [workflows, setWorkflows] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const pending = consumeClubFormInterest();
    if (pending) {
      setInterest(pending);
      setSubmitted(false);
      setError(null);
    }

    const handler = (event: Event) => {
      const detail = (event as CustomEvent<ClubInterestOption>).detail;
      if (!detail || !(DEMO_INTEREST_OPTIONS as readonly string[]).includes(detail)) return;
      setInterest(detail);
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set('interest', interest);
    if (!isCompact) {
      workflows.forEach((w) => data.append('workflows', w));
    }
    data.set('_source', isCompact ? HOMEPAGE_DEMO_FORM_SOURCE : DEMO_FORM_SOURCE);
    data.set('formVariant', variant);

    try {
      const res = await fetch(DEMO_FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setWorkflows([]);
        setInterest('Request a demo');
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
      <div className="rounded-[10px] border border-[#FFC429]/25 bg-[rgba(255,196,41,0.08)] px-4 py-5">
        <p className="text-[#F5F5F5] font-semibold mb-2">
          Thanks — your request was submitted. We&apos;ll follow up using the email you provided.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm font-medium text-[#FFC429] hover:text-[#FFD45C]"
        >
          Submit another request
        </button>
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
      className={fieldGap}
      noValidate
    >
      <input type="hidden" name="_source" value={isCompact ? HOMEPAGE_DEMO_FORM_SOURCE : DEMO_FORM_SOURCE} />
      <input type="hidden" name="formVariant" value={variant} />

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
        <input
          id={`${prefix}-role`}
          name="role"
          required
          placeholder="President, Co-President, VP Events, etc."
          className={inputClass}
        />
      </div>

      <div>
        <p className={labelClass} id={`${prefix}-interest-label`}>
          What are you interested in?
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-2"
          role="group"
          aria-labelledby={`${prefix}-interest-label`}
        >
          {DEMO_INTEREST_OPTIONS.map((option) => {
            const selected = interest === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setInterest(option)}
                className={`rounded-[10px] border px-3 py-2.5 text-[12px] sm:text-[13px] font-medium transition-colors text-left ${
                  selected
                    ? 'border-[#E51937]/50 bg-[rgba(229,25,55,0.12)] text-[#F5F5F5]'
                    : 'border-[#222222] bg-[#0B0B0B] text-[#9CA3AF] hover:border-[rgba(255,255,255,0.14)]'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
        <input type="hidden" name="interest" value={interest} />
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
          Message / what do you want help with?
        </label>
        <textarea
          id={`${prefix}-message`}
          name="message"
          rows={messageRows}
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
        {submitting ? 'Submitting…' : isCompact ? 'Submit Request' : 'Request a Demo'}
      </button>

      <p className="text-[12px] text-[#777777] leading-relaxed">
        Submitting this form does not create an account or officially register your club. It helps us follow up with the right next step.
      </p>
    </form>
  );
}
