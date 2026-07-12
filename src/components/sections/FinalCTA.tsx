import { useState, useEffect, type FormEvent } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import {
  ONBOARD_CLUB_ID,
  REQUEST_DEMO_ID,
  STUDENT_ACCESS_ID,
  CLUB_INTEREST_EVENT,
  type ClubInterestOption,
} from '../../lib/cta';

const inputClass =
  'w-full bg-[#0B0B0B] border border-[#222222] rounded-[10px] px-3.5 py-2.5 text-sm text-[#F5F5F5] placeholder:text-[#777777] focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:border-[#E51937] transition-colors';
const labelClass = 'block text-[13px] font-medium text-[#9CA3AF] mb-1.5';

const interestOptions = [
  'Request a demo',
  'Onboard my club',
  'Ask a question',
] as const;

const nextSteps = [
  'We review your club info',
  'We schedule a walkthrough',
  'We help prepare your club workspace',
];

type ClubFormState = {
  fullName: string;
  email: string;
  clubName: string;
  role: string;
  interest: (typeof interestOptions)[number];
  message: string;
};

type StudentFormState = {
  fullName: string;
  email: string;
  programYear: string;
};

const initialClub: ClubFormState = {
  fullName: '',
  email: '',
  clubName: '',
  role: '',
  interest: 'Request a demo',
  message: '',
};

const initialStudent: StudentFormState = {
  fullName: '',
  email: '',
  programYear: '',
};

export default function FinalCTA() {
  const [clubForm, setClubForm] = useState<ClubFormState>(initialClub);
  const [studentForm, setStudentForm] = useState<StudentFormState>(initialStudent);
  const [clubSubmitted, setClubSubmitted] = useState(false);
  const [studentSubmitted, setStudentSubmitted] = useState(false);
  const [clubSubmitting, setClubSubmitting] = useState(false);
  const [studentSubmitting, setStudentSubmitting] = useState(false);

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<ClubInterestOption>).detail;
      if (!detail || !interestOptions.includes(detail)) return;
      setClubForm((f) => ({ ...f, interest: detail }));
      setClubSubmitted(false);
    };
    window.addEventListener(CLUB_INTEREST_EVENT, handler);
    return () => window.removeEventListener(CLUB_INTEREST_EVENT, handler);
  }, []);

  const handleClubSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setClubSubmitting(true);
    await new Promise((r) => setTimeout(r, 500));
    setClubSubmitting(false);
    setClubSubmitted(true);
  };

  const handleStudentSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStudentSubmitting(true);
    await new Promise((r) => setTimeout(r, 500));
    setStudentSubmitting(false);
    setStudentSubmitted(true);
  };

  return (
    <>
      <section
        id={ONBOARD_CLUB_ID}
        className="relative py-16 sm:py-20 overflow-hidden bg-[#0B0B0B] scroll-mt-24 border-t border-[#222222]"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <AnimatedSection>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
                Early access
              </p>
              <h2 className="text-[2.1rem] sm:text-[2.75rem] font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
                Bring your club onto Gryph ClubConnect.
              </h2>
              <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                We&apos;re onboarding UofG clubs ahead of launch. Request a demo, see how the platform works, and get your club set up for a cleaner way to manage events, members, tasks, hiring, announcements, meetings, documents, analytics, and permissions.
              </p>

              <div className="rounded-[12px] border border-[#222222] bg-[#131313] p-5 sm:p-6 max-w-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFC429] mb-3">
                  What happens next
                </p>
                <ol className="space-y-3">
                  {nextSteps.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm text-[#F5F5F5]">
                      <span className="shrink-0 w-6 h-6 rounded-full border border-[#E51937]/35 bg-[rgba(229,25,55,0.12)] text-[11px] font-bold text-[#E51937] flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="pt-0.5 text-[#9CA3AF]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <p className="mt-6 text-sm text-[#777777] max-w-md">
                Prefer email? Reach us at{' '}
                <a
                  href="mailto:gryphclubconnect@gmail.com"
                  className="text-[#9CA3AF] hover:text-[#F5F5F5] underline underline-offset-2"
                >
                  gryphclubconnect@gmail.com
                </a>
                .
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div
                id={REQUEST_DEMO_ID}
                className="scroll-mt-28 rounded-[14px] border border-[#222222] bg-[#131313] p-6 sm:p-7 shadow-[0_16px_48px_rgba(0,0,0,0.35)]"
              >
                <h3 className="text-xl font-bold text-[#F5F5F5] font-sans mb-1">
                  Request a demo or club onboarding
                </h3>
                <p className="text-[#777777] text-sm mb-6 leading-relaxed">
                  Tell us about your club so we can follow up with the right next step.
                </p>

                {clubSubmitted ? (
                  <div className="rounded-[10px] border border-[#FFC429]/25 bg-[rgba(255,196,41,0.08)] px-4 py-5">
                    <p className="text-[#F5F5F5] font-semibold mb-2">Thanks — request captured</p>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">
                      Your request has been captured for this demo. We&apos;ll connect this form to the live intake before launch. No account was created.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setClubSubmitted(false);
                        setClubForm(initialClub);
                      }}
                      className="mt-4 text-sm font-medium text-[#FFC429] hover:text-[#FFD45C]"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleClubSubmit} className="space-y-4" noValidate>
                    <div>
                      <label htmlFor="club-full-name" className={labelClass}>Full name</label>
                      <input
                        id="club-full-name"
                        name="fullName"
                        required
                        autoComplete="name"
                        className={inputClass}
                        value={clubForm.fullName}
                        onChange={(e) => setClubForm((f) => ({ ...f, fullName: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label htmlFor="club-email" className={labelClass}>University email</label>
                      <input
                        id="club-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@uoguelph.ca"
                        className={inputClass}
                        value={clubForm.email}
                        onChange={(e) => setClubForm((f) => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label htmlFor="club-name" className={labelClass}>Club name</label>
                      <input
                        id="club-name"
                        name="clubName"
                        required
                        className={inputClass}
                        value={clubForm.clubName}
                        onChange={(e) => setClubForm((f) => ({ ...f, clubName: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label htmlFor="club-role" className={labelClass}>Your role in the club</label>
                      <input
                        id="club-role"
                        name="role"
                        required
                        placeholder="President, VP Events, etc."
                        className={inputClass}
                        value={clubForm.role}
                        onChange={(e) => setClubForm((f) => ({ ...f, role: e.target.value }))}
                      />
                    </div>
                    <div>
                      <p className={labelClass} id="club-interest-label">What are you interested in?</p>
                      <div
                        className="grid grid-cols-1 sm:grid-cols-3 gap-2"
                        role="group"
                        aria-labelledby="club-interest-label"
                      >
                        {interestOptions.map((option) => {
                          const selected = clubForm.interest === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setClubForm((f) => ({ ...f, interest: option }))}
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
                    </div>
                    <div>
                      <label htmlFor="club-message" className={labelClass}>
                        Message / what do you want help with?
                      </label>
                      <textarea
                        id="club-message"
                        name="message"
                        rows={4}
                        className={`${inputClass} resize-none`}
                        value={clubForm.message}
                        onChange={(e) => setClubForm((f) => ({ ...f, message: e.target.value }))}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={clubSubmitting}
                      className="w-full rounded-[10px] bg-[#E51937] hover:bg-[#C4122E] text-white font-semibold py-3 text-sm transition-colors disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:ring-offset-2 focus:ring-offset-[#131313]"
                    >
                      {clubSubmitting ? 'Submitting…' : 'Submit Request'}
                    </button>
                    <p className="text-[12px] text-[#777777] leading-relaxed">
                      Submitting this form does not create an account or officially register your club. It helps us follow up with the right next step.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section
        id={STUDENT_ACCESS_ID}
        className="relative pb-16 sm:pb-20 pt-2 overflow-hidden bg-[#0B0B0B] scroll-mt-24"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-[14px] border border-[#222222] bg-[#131313] p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
                <div>
                  <h3 className="text-2xl sm:text-[1.75rem] font-extrabold text-[#F5F5F5] font-sans mb-3">
                    For students
                  </h3>
                  <p className="text-[#9CA3AF] text-base leading-relaxed max-w-md">
                    Students can request access to explore clubs, events, roles, and opportunities as Gryph ClubConnect prepares for launch.
                  </p>
                </div>

                {studentSubmitted ? (
                  <div className="rounded-[10px] border border-[#FFC429]/25 bg-[rgba(255,196,41,0.08)] px-4 py-5">
                    <p className="text-[#F5F5F5] font-semibold mb-2">Thanks — request captured</p>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">
                      Your student access request has been captured for this demo. We&apos;ll connect this form to the live intake before launch. No account was created.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setStudentSubmitted(false);
                        setStudentForm(initialStudent);
                      }}
                      className="mt-4 text-sm font-medium text-[#FFC429] hover:text-[#FFD45C]"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleStudentSubmit} className="space-y-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="student-full-name" className={labelClass}>Full name</label>
                        <input
                          id="student-full-name"
                          name="fullName"
                          required
                          autoComplete="name"
                          className={inputClass}
                          value={studentForm.fullName}
                          onChange={(e) => setStudentForm((f) => ({ ...f, fullName: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label htmlFor="student-email" className={labelClass}>University email</label>
                        <input
                          id="student-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="you@uoguelph.ca"
                          className={inputClass}
                          value={studentForm.email}
                          onChange={(e) => setStudentForm((f) => ({ ...f, email: e.target.value }))}
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
                        value={studentForm.programYear}
                        onChange={(e) => setStudentForm((f) => ({ ...f, programYear: e.target.value }))}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={studentSubmitting}
                      className="rounded-[10px] bg-[#E51937] hover:bg-[#C4122E] text-white font-semibold px-6 py-3 text-sm transition-colors disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:ring-offset-2 focus:ring-offset-[#131313]"
                    >
                      {studentSubmitting ? 'Submitting…' : 'Request Student Access'}
                    </button>
                    <p className="text-[12px] text-[#777777] leading-relaxed">
                      Student access requests help us understand who wants to try the discovery side of the platform. Submitting does not create an account.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
