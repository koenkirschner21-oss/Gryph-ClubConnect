import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ClipboardCheck,
  LayoutDashboard,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import MockupImage from '../components/mockups/MockupImage';
import DemoInterestForm from '../components/forms/DemoInterestForm';
import { goToDemoForm, DEMO_FORM_ID } from '../lib/cta';

type Accent = 'red' | 'gold' | 'neutral';

const walkthroughAreas: {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: Accent;
}[] = [
  {
    icon: LayoutDashboard,
    title: 'Student experience',
    description:
      'Explore discovery, public profiles, events, RSVPs, applications, and the student dashboard.',
    accent: 'red',
  },
  {
    icon: ClipboardCheck,
    title: 'Club operations',
    description:
      'See the Command Center, tasks, announcements, meetings, documents, and daily workflows.',
    accent: 'gold',
  },
  {
    icon: Users,
    title: 'People and hiring',
    description:
      'Review members, roles, applications, applicant management, and leadership transitions.',
    accent: 'red',
  },
  {
    icon: ShieldCheck,
    title: 'Leadership and insights',
    description:
      'Walk through permissions, setup, reporting, analytics, and activity visibility.',
    accent: 'neutral',
  },
];

const demoOptions = [
  {
    title: 'Getting your club set up',
    description:
      'Understand the foundation of the workspace and how access is organized.',
    items: ['Club setup', 'Public profile', 'Invite members', 'Roles and permissions'],
  },
  {
    title: 'Managing events and communication',
    description:
      'See how teams coordinate activity and keep members informed.',
    items: [
      'Events and RSVPs',
      'Event planning',
      'Announcements and chat',
      'Meetings and notes',
    ],
  },
  {
    title: 'Managing people and opportunities',
    description:
      'Review the workflows used to grow, structure, and support the club.',
    items: [
      'Hiring and applications',
      'Members and structure',
      'Join requests',
      'Leadership access',
    ],
  },
  {
    title: 'Staying organized',
    description:
      'Focus on the systems that keep ownership, information, and progress clear.',
    items: [
      'Tasks and review',
      'Documents and resources',
      'Analytics',
      'Student discovery',
    ],
  },
];

const audiences = [
  {
    label: 'Presidents',
    title: 'Presidents and Co-Presidents',
    description:
      'See the full workspace, including setup, members, events, hiring, analytics, and permissions.',
  },
  {
    label: 'Managerial executives',
    title: 'Managerial Executives',
    description:
      'Focus on the team workflows they oversee, such as events, hiring, operations, or member management.',
  },
  {
    label: 'Club executives',
    title: 'Club Executives',
    description:
      'See how individual responsibilities can be managed without relying on scattered messages or spreadsheets.',
  },
  {
    label: 'Clubs getting started',
    title: 'Clubs Getting Started',
    description:
      'Understand which workflows to set up first and how the workspace can grow with your team.',
  },
];

const howItWorksSteps = [
  {
    title: 'Tell us about your club',
    description: 'Share your role, priorities, and current process.',
  },
  {
    title: 'Choose the workflows',
    description: 'Select what your team wants to see.',
  },
  {
    title: 'Walk through the platform',
    description: 'See those workflows in action.',
  },
  {
    title: 'Decide the next step',
    description: 'Discuss early access when it makes sense.',
  },
];

const helpfulContext = [
  'How you currently manage events and RSVPs',
  'How tasks and responsibilities are assigned',
  'How applications and applicants are reviewed',
  'How documents and meeting notes are stored',
  'Who needs access to which workflows',
];

const afterRequestSteps = [
  'We review your club and role',
  'We focus the walkthrough on the workflows you select',
  'We show how the platform could support your team',
  'We discuss early access when it makes sense',
];

const accentStyles = {
  red: {
    bar: 'bg-[#E51937]',
    icon:
      'border-[#E51937]/30 bg-[rgba(229,25,55,0.12)] text-[#E51937]',
  },
  gold: {
    bar: 'bg-[#FFC429]',
    icon:
      'border-[#FFC429]/30 bg-[rgba(255,196,41,0.12)] text-[#FFC429]',
  },
  neutral: {
    bar: 'bg-white/25',
    icon: 'border-white/[0.1] bg-white/[0.04] text-[#F5F5F5]',
  },
};

export default function DemoPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDemoOption, setActiveDemoOption] = useState(0);
  const [activeAudience, setActiveAudience] = useState(0);

  useEffect(() => {
    const hash = location.hash.replace(/^#/, '');
    if (hash === DEMO_FORM_ID || hash === 'request-demo') {
      const timer = window.setTimeout(() => {
        document
          .getElementById(DEMO_FORM_ID)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);

      return () => window.clearTimeout(timer);
    }

    return undefined;
  }, [location.hash, location.pathname]);

  const handleDemo = () => {
    goToDemoForm({
      interest: 'Request a demo',
      navigate,
      pathname: '/demo',
    });
  };

  const handleOnboard = () => {
    goToDemoForm({
      interest: 'Onboard my club',
      navigate,
      pathname: '/demo',
    });
  };

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#0B0B0B] lg:min-h-[calc(100vh-4rem)]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#E51937] opacity-[0.04] blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 xl:gap-14">
            <AnimatedSection className="flex min-w-0 flex-col">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
                Request a demo
              </p>

              <h1
                className="mt-4 max-w-[38rem] font-sans font-extrabold leading-[1.04] tracking-tight text-[#F5F5F5] sm:mt-5"
                style={{ fontSize: 'clamp(2.2rem, 3.9vw, 3.55rem)' }}
              >
                See how Gryph ClubConnect could work for your club.
              </h1>

              <p
                className="mt-4 max-w-[38rem] text-lg text-[#9CA3AF] sm:mt-5 sm:text-xl"
                style={{ lineHeight: '1.6' }}
              >
                Book a walkthrough focused on the workflows your club uses most.
                See how Gryph ClubConnect can support events, members, tasks,
                meetings, hiring, permissions, and more from one connected
                workspace.
              </p>

              <div className="mt-6 flex flex-col items-start gap-3 sm:mt-7 sm:flex-row sm:items-center">
                <Button
                  variant="red"
                  size="md"
                  onClick={handleDemo}
                  className="w-[230px] whitespace-nowrap shadow-[0_8px_24px_rgba(229,25,55,0.22)] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                >
                  Request a Demo
                </Button>

                <Button
                  variant="ghost"
                  size="md"
                  onClick={handleOnboard}
                  className="w-[230px] whitespace-nowrap sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                >
                  Get Your Club Started
                </Button>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-[#9CA3AF] sm:mt-6">
                <span className="inline-flex items-center gap-2">
                  <span className="text-[#E51937]">✓</span>
                  Tailored walkthrough
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="text-[#E51937]">✓</span>
                  Club-specific workflows
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="text-[#E51937]">✓</span>
                  Early access guidance
                </span>
              </div>

              <p className="mt-4 max-w-[38rem] text-[13px] leading-relaxed text-[#777777]">
                Requesting a demo does not create an account or officially
                register your club.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.08} className="relative min-w-0">
              <div className="relative mx-auto block w-full max-w-[610px]">
                <MockupImage
                  name="demoHero"
                  alt="Gryph ClubConnect product overview preview"
                  className="relative !overflow-visible !rounded-none !border-0 !bg-transparent !shadow-none !ring-0"
                  imgClassName="mx-auto h-auto w-full object-contain lg:scale-[0.9]"
                />
                {/* Add the YouTube modal trigger here once the product overview video is published. */}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-t border-[#222222] bg-[#111111] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFC429] sm:text-xs">
              What the walkthrough covers
            </p>
            <h2 className="font-sans text-2xl font-extrabold text-[#F5F5F5] sm:text-3xl">
              A guided tour built around your club&apos;s real workflows.
            </h2>
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            staggerDelay={0.06}
          >
            {walkthroughAreas.map((area) => {
              const Icon = area.icon;
              const style = accentStyles[area.accent];

              return (
                <StaggerItem key={area.title}>
                  <div className="relative h-full overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#131313] p-5 transition-colors hover:border-white/[0.14]">
                    <span
                      className={`absolute inset-y-0 left-0 w-[3px] ${style.bar}`}
                      aria-hidden
                    />
                    <div
                      className={`mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] border ${style.icon}`}
                    >
                      <Icon size={18} />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-[#F5F5F5]">
                      {area.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#9CA3AF]">
                      {area.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-[#222222] bg-[#0B0B0B] py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
              Demo options
            </p>
            <h2 className="mb-3 font-sans text-2xl font-extrabold text-[#F5F5F5] sm:text-3xl">
              Choose what you want to see in the walkthrough.
            </h2>
            <p className="text-base leading-relaxed text-[#9CA3AF]">
              Every club operates differently. Focus the demo on the workflows
              your team is actively trying to improve.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mx-auto max-w-5xl overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#131313]">
              {demoOptions.map((option, index) => {
                const active = activeDemoOption === index;

                return (
                  <div
                    key={option.title}
                    className={
                      index < demoOptions.length - 1
                        ? 'border-b border-white/[0.08]'
                        : ''
                    }
                  >
                    <button
                      type="button"
                      onClick={() => setActiveDemoOption(index)}
                      className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors ${
                        active
                          ? 'bg-[rgba(229,25,55,0.08)]'
                          : 'hover:bg-white/[0.025]'
                      }`}
                      aria-expanded={active}
                    >
                      <span className="text-sm font-semibold text-[#F5F5F5] sm:text-base">
                        {option.title}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#777777] transition-transform ${
                          active ? 'rotate-180 text-[#E51937]' : ''
                        }`}
                      />
                    </button>
                    {active && (
                      <div className="border-t border-white/[0.06] px-5 py-6 sm:px-6">
                        <p className="mb-4 text-sm leading-relaxed text-[#9CA3AF]">
                          {option.description}
                        </p>
                        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                          {option.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-2.5 rounded-[9px] border border-white/[0.07] bg-[#0B0B0B] px-3.5 py-3 text-sm text-[#F5F5F5]"
                            >
                              <Check size={14} className="shrink-0 text-[#FFC429]" />
                              {item}
                            </div>
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={handleDemo}
                          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#E51937] transition-colors hover:text-[#FF6B7D]"
                        >
                          Request this demo focus
                          <ArrowRight size={15} />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-[#222222] bg-[#111111] py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFC429] sm:text-xs">
              Who it&apos;s for
            </p>
            <h2 className="font-sans text-2xl font-extrabold text-[#F5F5F5] sm:text-3xl">
              Built for every level of club leadership.
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-[14px] border border-white/[0.08] bg-[#131313] p-5 sm:p-6">
              <div className="mb-5 flex flex-wrap gap-2">
                {audiences.map((audience, index) => {
                  const active = activeAudience === index;

                  return (
                    <button
                      key={audience.label}
                      type="button"
                      onClick={() => setActiveAudience(index)}
                      className={`rounded-full border px-3.5 py-2 text-[13px] font-semibold transition-colors ${
                        active
                          ? 'border-[#E51937]/35 bg-[rgba(229,25,55,0.12)] text-[#F5F5F5]'
                          : 'border-white/[0.08] bg-[#0B0B0B] text-[#9CA3AF] hover:border-white/[0.14] hover:text-[#F5F5F5]'
                      }`}
                      aria-pressed={active}
                    >
                      {audience.label}
                    </button>
                  );
                })}
              </div>

              <div className="rounded-[11px] border border-white/[0.07] bg-[#0B0B0B] p-5 sm:p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#F5F5F5]">
                  {audiences[activeAudience].title}
                </h3>
                <p className="max-w-3xl text-sm leading-relaxed text-[#9CA3AF]">
                  {audiences[activeAudience].description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-[#222222] bg-[#0B0B0B] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
              How it works
            </p>
            <h2 className="font-sans text-2xl font-extrabold text-[#F5F5F5] sm:text-3xl">
              A simple walkthrough built around your club.
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {howItWorksSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="h-full rounded-[12px] border border-white/[0.08] bg-[#131313] p-4">
                    <span
                      className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border text-[11px] font-bold tabular-nums ${
                        index % 2 === 0
                          ? 'border-[#E51937]/35 bg-[rgba(229,25,55,0.12)] text-[#E51937]'
                          : 'border-[#FFC429]/35 bg-[rgba(255,196,41,0.12)] text-[#FFC429]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mb-1.5 text-base font-semibold text-[#F5F5F5]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#9CA3AF]">
                      {step.description}
                    </p>
                  </div>
                  {index < howItWorksSteps.length - 1 && (
                    <ArrowRight
                      size={15}
                      className="absolute top-1/2 -right-2 z-10 hidden -translate-y-1/2 text-[#444444] lg:block"
                      aria-hidden
                    />
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section
        id={DEMO_FORM_ID}
        className="relative scroll-mt-28 overflow-hidden border-t border-[#222222] bg-[#111111] py-16 sm:py-20"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <AnimatedSection className="lg:sticky lg:top-28">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
                Request a demo
              </p>
              <h2 className="mb-4 font-sans text-2xl font-extrabold text-[#F5F5F5] sm:text-3xl">
                Request a walkthrough built around your club.
              </h2>
              <p className="mb-7 max-w-xl text-base leading-relaxed text-[#9CA3AF]">
                Tell us what your team wants to improve and which workflows you
                would like to see. We&apos;ll focus the walkthrough around your
                club&apos;s needs.
              </p>

              <div className="max-w-md rounded-[12px] border border-[#222222] bg-[#131313] p-5 sm:p-6">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFC429]">
                  What happens next
                </p>
                <ol className="space-y-3">
                  {afterRequestSteps.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#E51937]/35 bg-[rgba(229,25,55,0.12)] text-[11px] font-bold text-[#E51937]">
                        {index + 1}
                      </span>
                      <span className="pt-0.5 leading-relaxed text-[#9CA3AF]">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="my-5 h-px bg-white/[0.08]" />
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777]">
                  Helpful context to share
                </p>
                <ul className="space-y-3">
                  {helpfulContext.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#FFC429]/30 bg-[rgba(255,196,41,0.1)] text-[#FFC429]">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span className="text-sm leading-relaxed text-[#9CA3AF]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="rounded-[14px] border border-[#222222] bg-[#131313] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.35)] sm:p-7">
                <h3 className="mb-1 font-sans text-xl font-bold text-[#F5F5F5]">
                  Tell us about your club
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-[#777777]">
                  Choose what you want to see and we&apos;ll focus the walkthrough around your team.
                </p>
                <DemoInterestForm variant="full" idPrefix="demo-page" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
