import { useState, type FormEvent } from 'react';
import {
  STUDENT_ACCESS_FORMSPREE_ENDPOINT,
  STUDENT_FORM_SOURCE,
  STUDENT_INTEREST_OPTIONS,
} from '../../lib/forms';

const inputClass =
  'w-full min-w-0 bg-[#0B0B0B] border border-[#222222] rounded-[10px] px-3.5 py-2.5 text-sm text-[#F5F5F5] placeholder:text-[#777777] focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:border-[#E51937] transition-colors';
const labelClass = 'block text-[13px] font-medium text-[#9CA3AF] mb-1.5';

export default function StudentAccessForm() {
  const [interest, setInterest] = useState<(typeof STUDENT_INTEREST_OPTIONS)[number]>('Finding clubs');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set('interest', interest);
    data.set('_source', STUDENT_FORM_SOURCE);

    try {
      const res = await fetch(STUDENT_ACCESS_FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setInterest('Finding clubs');
      } else {
        setError(
          'We could not submit your request yet. Email gryphclubconnect@gmail.com and we will follow up.'
        );
      }
    } catch {
      setError(
        'We could not submit your request yet. Email gryphclubconnect@gmail.com and we will follow up.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-[10px] border border-[#FFC429]/25 bg-[rgba(255,196,41,0.08)] px-4 py-5">
        <p className="text-[#F5F5F5] font-semibold mb-2">Thanks — we received your request</p>
        <p className="text-[#9CA3AF] text-sm leading-relaxed">
          We will follow up as student access opens. No account was created automatically.
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

  return (
    <form
      action={STUDENT_ACCESS_FORMSPREE_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
    >
      <input type="hidden" name="_source" value={STUDENT_FORM_SOURCE} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="student-full-name" className={labelClass}>
            Full name
          </label>
          <input
            id="student-full-name"
            name="fullName"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="student-email" className={labelClass}>
            University email
          </label>
          <input
            id="student-email"
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
        <label htmlFor="student-program" className={labelClass}>
          Program / year <span className="text-[#777777]">(optional)</span>
        </label>
        <input
          id="student-program"
          name="programYear"
          className={inputClass}
          placeholder="e.g. Marketing Management, 3rd year"
        />
      </div>

      <div>
        <p className={labelClass} id="student-interest-label">
          What are you interested in?
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-2"
          role="group"
          aria-labelledby="student-interest-label"
        >
          {STUDENT_INTEREST_OPTIONS.map((option) => {
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

      <div>
        <label htmlFor="student-message" className={labelClass}>
          Message <span className="text-[#777777]">(optional)</span>
        </label>
        <textarea
          id="student-message"
          name="message"
          rows={3}
          className={`${inputClass} resize-y min-h-[80px]`}
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
        className="w-full sm:w-auto rounded-[10px] bg-[#E51937] hover:bg-[#C4122E] text-white font-semibold px-6 py-3 text-sm transition-colors disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:ring-offset-2 focus:ring-offset-[#131313]"
      >
        {submitting ? 'Submitting…' : 'Get Student Access'}
      </button>

      <p className="text-[12px] text-[#777777] leading-relaxed">
        Submitting a student access request does not create an account automatically.
      </p>
    </form>
  );
}
