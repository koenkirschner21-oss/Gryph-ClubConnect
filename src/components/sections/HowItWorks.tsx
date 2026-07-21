import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { goToDemoForm } from '../../lib/cta';

const onboardingSteps = [
  {
    step: '01',
    title: 'Tell us about your club',
    description:
      'Share your club, your role, and the areas you want to organize or improve.',
  },
  {
    step: '02',
    title: 'Walk through the right workflows',
    description:
      'See the workflows most relevant to your club, from events and communication to tasks, hiring, members, and permissions.',
  },
  {
    step: '03',
    title: 'Set up your club workspace',
    description:
      'Prepare your club profile, members, events, roles, documents, and core settings before launch.',
  },
  {
    step: '04',
    title: 'Share feedback before launch',
    description:
      'Help shape the platform around how student clubs actually operate.',
  },
];

const includedItems = [
  'Club profile setup',
  'Events and RSVP management',
  'Announcements and communication',
  'Tasks and ownership',
  'Meetings and follow-ups',
  'Members, roles, and permissions',
  'Hiring and applications',
  'Documents, resources, and analytics',
];

export default function HowItWorks() {
  const navigate = useNavigate();

  const handleDemo = () => {
    goToDemoForm({
      interest: 'Request a demo',
      navigate,
      pathname: '/',
    });
  };

  return (
    <section
      id="how-it-works"
      className="border-t border-[#222222] bg-[#0B0B0B] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 max-w-3xl sm:mb-12">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
            How early access works
          </p>

          <h2 className="mb-4 font-sans text-[2.1rem] font-extrabold leading-tight text-[#F5F5F5] sm:text-[2.75rem]">
            Start with a walkthrough. Get your club ready for launch.
          </h2>

          <p className="text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
            Gryph ClubConnect is helping University of Guelph clubs understand
            the platform, choose the right workflows, and prepare their
            workspace before launch.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <AnimatedSection>
            <ol className="relative space-y-0 overflow-hidden rounded-[12px] border border-[#222222] bg-[#131313]">
              {onboardingSteps.map((step, index) => (
                <li
                  key={step.step}
                  className={`relative flex gap-4 px-5 py-4 sm:px-6 sm:py-5 ${
                    index < onboardingSteps.length - 1
                      ? 'border-b border-[#222222]'
                      : ''
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E51937]/35 bg-[rgba(229,25,55,0.12)] text-[12px] font-bold tabular-nums text-[#E51937]">
                    {step.step}
                  </span>

                  <div className="min-w-0 pt-0.5">
                    <h3 className="mb-1.5 text-base font-semibold text-[#F5F5F5] sm:text-lg">
                      {step.title}
                    </h3>

                    <p className="text-[14px] leading-relaxed text-[#9CA3AF] sm:text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <button
              type="button"
              onClick={handleDemo}
              className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#E51937] transition-colors hover:text-[#FF6B7D]"
            >
              Ready to see it? Request a Demo
              <ArrowRight size={16} />
            </button>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="h-full overflow-hidden rounded-[12px] border border-[#222222] bg-[#131313]">
              <div className="h-[2px] bg-[#FFC429]" aria-hidden />

              <div className="p-6 sm:p-7">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFC429]">
                  Early access
                </p>

                <h3 className="mb-2 font-sans text-xl font-bold text-[#F5F5F5]">
                  What your club can use
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-[#9CA3AF]">
                  Early access can include the workflows that matter most to
                  your team.
                </p>

                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {includedItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 rounded-[10px] border border-[#222222] bg-[#0B0B0B] px-3 py-2.5"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E51937]" />
                      <span className="text-[13px] text-[#F5F5F5]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
