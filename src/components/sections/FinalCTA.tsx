import { Link, useNavigate } from 'react-router-dom';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { DEMO_PATH, FOR_STUDENTS_PATH, goToDemoForm, goToStudentAccess } from '../../lib/cta';

const nextSteps = [
  'We review your club info',
  'We focus a walkthrough on the workflows you care about',
  'We help prepare your club workspace for early access',
];

export default function FinalCTA() {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative py-16 sm:py-20 overflow-hidden bg-[#0B0B0B] scroll-mt-24 border-t border-[#222222]">
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

              <div className="rounded-[12px] border border-[#222222] bg-[#131313] p-5 sm:p-6 max-w-md mb-8">
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

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  variant="red"
                  size="lg"
                  onClick={() =>
                    goToDemoForm({ interest: 'Onboard my club', navigate, pathname: '/' })
                  }
                >
                  Onboard Your Club
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() =>
                    goToDemoForm({ interest: 'Request a demo', navigate, pathname: '/' })
                  }
                >
                  Request a Demo
                </Button>
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
              <div className="rounded-[14px] border border-[#222222] bg-[#131313] p-6 sm:p-7 shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
                <h3 className="text-xl font-bold text-[#F5F5F5] font-sans mb-2">
                  Request a demo or club onboarding
                </h3>
                <p className="text-[#777777] text-sm mb-6 leading-relaxed">
                  Use the demo form to tell us about your club, what you want to see, and how we can help.
                </p>
                <Link
                  to={{ pathname: DEMO_PATH, hash: 'request-demo' }}
                  className="inline-flex w-full items-center justify-center rounded-[10px] bg-[#E51937] hover:bg-[#C4122E] text-white font-semibold py-3 text-sm transition-colors"
                >
                  Go to demo form
                </Link>
                <p className="mt-4 text-[12px] text-[#777777] leading-relaxed">
                  Submitting the form does not create an account or officially register your club.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="relative pb-16 sm:pb-20 pt-2 overflow-hidden bg-[#0B0B0B] scroll-mt-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-[14px] border border-[#222222] bg-[#131313] p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
                <div>
                  <h3 className="text-2xl sm:text-[1.75rem] font-extrabold text-[#F5F5F5] font-sans mb-3">
                    For students
                  </h3>
                  <p className="text-[#9CA3AF] text-base leading-relaxed max-w-md mb-4">
                    Students can request access to explore clubs, events, roles, and opportunities as Gryph ClubConnect prepares for launch.
                  </p>
                  <p className="text-[12px] text-[#777777] leading-relaxed max-w-md">
                    Submitting a student access request does not create an account automatically.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Button
                    variant="red"
                    size="lg"
                    onClick={() => goToStudentAccess({ navigate, pathname: '/' })}
                  >
                    Get Student Access
                  </Button>
                  <Link
                    to={FOR_STUDENTS_PATH}
                    className="inline-flex items-center justify-center rounded-[10px] border border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.05)] px-8 py-4 text-base font-semibold text-[#F5F5F5] transition-colors"
                  >
                    Explore For Students
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
