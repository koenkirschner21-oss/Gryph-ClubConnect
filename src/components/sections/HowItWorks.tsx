import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { goToSection, REQUEST_DEMO_ID, setClubFormInterest } from '../../lib/cta';

const onboardingSteps = [
  {
    step: '01',
    title: 'Request a demo or onboarding',
    description: 'Tell us about your club, your role, and what you want to manage better.',
  },
  {
    step: '02',
    title: 'Walk through the right workflows',
    description:
      'See student discovery, the club workspace, events and RSVPs, tasks, hiring, members, meetings, documents, analytics, and permissions.',
  },
  {
    step: '03',
    title: 'Set up your club workspace',
    description:
      'Prepare your profile, members, announcements, events, roles, documents, and core settings before launch.',
  },
  {
    step: '04',
    title: 'Share feedback before rollout',
    description: 'Help shape the platform around how student clubs actually operate.',
  },
];

const includedItems = [
  'Club profile setup',
  'Events and RSVP management',
  'Announcements and chat',
  'Tasks and ownership',
  'Meetings and follow-ups',
  'Members and roles',
  'Hiring and applications',
  'Documents and resources',
  'Analytics',
  'Permissions',
];

export default function HowItWorks() {
  const navigate = useNavigate();

  const handleDemo = () => {
    setClubFormInterest('Request a demo');
    goToSection(REQUEST_DEMO_ID, { navigate, pathname: '/' });
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
            How early access works
          </p>
          <h2 className="text-[2.1rem] sm:text-[2.75rem] font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
            Start with a walkthrough. Build toward launch.
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Gryph ClubConnect is onboarding UofG clubs ahead of launch. We&apos;ll help you understand the platform, choose the right workflows, and prepare your club workspace.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <AnimatedSection>
            <ol className="relative space-y-0 rounded-[12px] border border-[#222222] bg-[#131313] overflow-hidden">
              {onboardingSteps.map((step, index) => (
                <li
                  key={step.step}
                  className={`relative flex gap-4 px-5 py-5 sm:px-6 sm:py-6 ${
                    index < onboardingSteps.length - 1 ? 'border-b border-[#222222]' : ''
                  }`}
                >
                  <span className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full border border-[#E51937]/35 bg-[rgba(229,25,55,0.12)] text-[12px] font-bold tabular-nums text-[#E51937]">
                    {step.step}
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-[#F5F5F5] font-semibold text-base sm:text-lg mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[#9CA3AF] text-[14px] sm:text-[15px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <button
              type="button"
              onClick={handleDemo}
              className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#E51937] hover:text-[#FF6B7D] transition-colors"
            >
              Ready to see it? Request a demo
              <ArrowRight size={16} />
            </button>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-[12px] border border-[#222222] bg-[#131313] overflow-hidden h-full">
              <div className="h-[2px] bg-[#FFC429]" aria-hidden />
              <div className="p-6 sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFC429] mb-2">
                  Early access
                </p>
                <h3 className="text-[#F5F5F5] font-bold text-xl font-sans mb-2">
                  What your club can use
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-5">
                  Early access can include the workflows that matter most to your team.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {includedItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 rounded-[10px] border border-[#222222] bg-[#0B0B0B] px-3 py-2.5"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E51937]" />
                      <span className="text-[13px] text-[#F5F5F5]">{item}</span>
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
