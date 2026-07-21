import AnimatedSection from '../ui/AnimatedSection';
import DemoInterestForm from '../forms/DemoInterestForm';
import { HOMEPAGE_DEMO_FORM_ID } from '../../lib/cta';

const nextSteps = [
  {
    title: 'We review your request',
    description:
      'We review your club, your role, and what you are interested in.',
  },
  {
    title: 'We follow up with the right next step',
    description:
      'We schedule a walkthrough, answer your question, or discuss onboarding.',
  },
  {
    title: 'We tailor the experience to your club',
    description:
      'We focus on the workflows your team needs and help prepare your workspace for early access.',
  },
];

export default function FinalCTA() {
  return (
    <section
      id={HOMEPAGE_DEMO_FORM_ID}
      className="relative scroll-mt-28 overflow-hidden border-t border-[#222222] bg-[#0B0B0B] py-16 sm:py-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <AnimatedSection>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
              Early access
            </p>

            <h2 className="mb-4 font-sans text-[2.1rem] font-extrabold leading-tight text-[#F5F5F5] sm:text-[2.75rem]">
              See how Gryph ClubConnect can work for your club.
            </h2>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
              Request a walkthrough, explore the workflows that matter to your
              team, and prepare your club for early access.
            </p>

            <div className="mb-8 max-w-lg rounded-[12px] border border-[#222222] bg-[#131313] p-5 sm:p-6">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFC429]">
                What happens next
              </p>

              <ol className="space-y-4">
                {nextSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#E51937]/35 bg-[rgba(229,25,55,0.12)] text-[11px] font-bold text-[#E51937]">
                      {index + 1}
                    </span>

                    <div className="min-w-0">
                      <p className="mb-1 text-sm font-semibold text-[#F5F5F5]">
                        {step.title}
                      </p>
                      <p className="text-[13px] leading-relaxed text-[#9CA3AF] sm:text-sm">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <p className="max-w-md text-sm text-[#777777]">
              Prefer email? Reach us at{' '}
              <a
                href="mailto:gryphclubconnect@gmail.com"
                className="text-[#9CA3AF] underline underline-offset-2 transition-colors hover:text-[#F5F5F5]"
              >
                gryphclubconnect@gmail.com
              </a>
              .
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="rounded-[14px] border border-[#222222] bg-[#131313] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.35)] sm:p-7">
              <h3 className="mb-1 font-sans text-xl font-bold text-[#F5F5F5]">
                Tell us about your club
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-[#777777]">
                Choose what you are interested in and we&apos;ll follow up with
                the right next step.
              </p>

              <DemoInterestForm variant="compact" idPrefix="homepage-demo" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
