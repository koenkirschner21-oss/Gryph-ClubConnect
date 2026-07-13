import { useId, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import {
  STUDENT_ACCESS_FORM_ENDPOINT,
  STUDENT_FORM_TYPE,
  type StudentSourcePage,
} from '../../lib/forms';
import BrandLogo from '../ui/BrandLogo';

const inputClass =
  'w-full min-w-0 bg-[#0B0B0B] border border-[#222222] rounded-[10px] px-3.5 py-2.5 text-sm text-[#F5F5F5] placeholder:text-[#777777] focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:border-[#E51937] transition-colors';
const labelClass = 'block text-[13px] font-medium text-[#9CA3AF] mb-1.5';

type StudentAccessFormProps = {
  /** Where this form instance appears — sent to Formspree as source_page */
  sourcePage?: StudentSourcePage;
  idPrefix?: string;
};

export default function StudentAccessForm({
  sourcePage = 'For Students',
  idPrefix,
}: StudentAccessFormProps) {
  const reactId = useId().replace(/:/g, '');
  const prefix = idPrefix ?? `student-${reactId}`;

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set('form_type', STUDENT_FORM_TYPE);
    data.set('source_page', sourcePage);

    try {
      const res = await fetch(STUDENT_ACCESS_FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
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
        <span
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#E51937] via-[#FFC429] to-[#E51937]"
          aria-hidden
        />
        <div
          className="absolute -top-16 right-0 h-32 w-32 rounded-full bg-[#E51937] opacity-[0.08] blur-[48px] pointer-events-none"
          aria-hidden
        />

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
            Thanks — your student access request was sent.
          </h3>
          <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
            We&apos;ll follow up as Gryph ClubConnect prepares for early access. Submitting does not create an account automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="inline-flex flex-1 items-center justify-center rounded-[10px] bg-[#E51937] hover:bg-[#C4122E] text-white font-semibold px-5 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:ring-offset-2 focus:ring-offset-[#0B0B0B]"
            >
              Submit another request
            </button>
            <Link
              to="/for-students"
              className="inline-flex flex-1 items-center justify-center rounded-[10px] border border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.2)] text-[#F5F5F5] font-semibold px-5 py-3 text-sm transition-colors"
            >
              Explore For Students
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      action={STUDENT_ACCESS_FORM_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
    >
      <input type="hidden" name="form_type" value={STUDENT_FORM_TYPE} />
      <input type="hidden" name="source_page" value={sourcePage} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      </div>

      <div>
        <label htmlFor={`${prefix}-program`} className={labelClass}>
          Program / year <span className="text-[#777777]">(optional)</span>
        </label>
        <input
          id={`${prefix}-program`}
          name="programYear"
          className={inputClass}
          placeholder="e.g. Marketing Management, 3rd year"
        />
      </div>

      <div>
        <label htmlFor={`${prefix}-message`} className={labelClass}>
          Message / what are you interested in{' '}
          <span className="text-[#777777]">(optional)</span>
        </label>
        <textarea
          id={`${prefix}-message`}
          name="message"
          rows={3}
          className={`${inputClass} resize-y min-h-[80px]`}
          placeholder="Finding clubs, discovering events, applying for roles…"
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
        {submitting ? 'Submitting…' : 'Get Student Access'}
      </button>

      <p className="text-[12px] text-[#777777] leading-relaxed">
        Submitting a student access request does not create an account automatically.
      </p>
    </form>
  );
}
