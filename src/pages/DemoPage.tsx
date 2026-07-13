import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import {
  Compass,
  LayoutGrid,
  CalendarPlus,
  CheckSquare,
  UserCheck,
  Shield,
  Crown,
  Users,
  UserCog,
  Rocket,
  type LucideIcon,
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import FeatureScreenshotPlaceholder from '../components/features/FeatureScreenshotPlaceholder';
import DemoInterestForm from '../components/forms/DemoInterestForm';
import { goToDemoForm, DEMO_FORM_ID } from '../lib/cta';

const walkthroughCards: {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: 'red' | 'gold' | 'neutral';
}[] = [
  {
    icon: Compass,
    title: 'Student discovery',
    description:
      'See how students can find clubs, view public profiles, discover events, RSVP, and apply for roles.',
    accent: 'red',
  },
  {
    icon: LayoutGrid,
    title: 'Command Center',
    description:
      'See how presidents and execs can track pending actions, setup progress, tasks, applications, events, and quick actions.',
    accent: 'gold',
  },
  {
    icon: CalendarPlus,
    title: 'Events & RSVPs',
    description:
      'Walk through creating events, collecting RSVP answers, reviewing attendees, and connecting event planning tasks.',
    accent: 'neutral',
  },
  {
    icon: CheckSquare,
    title: 'Tasks & ownership',
    description:
      'See how exec teams can assign work, set due dates, review progress, and keep ownership clear.',
    accent: 'red',
  },
  {
    icon: UserCheck,
    title: 'Hiring & applications',
    description:
      'Review how clubs can post roles, collect applications, review candidates, and move applicants through a status pipeline.',
    accent: 'gold',
  },
  {
    icon: Shield,
    title: 'Members, roles & permissions',
    description:
      'See how clubs can manage members, promote people, assign roles, set reporting structure, and control access levels.',
    accent: 'neutral',
  },
];

const demoFocusItems = [
  'Club setup',
  'Public club profile',
  'Events and RSVPs',
  'Event planning tasks',
  'Announcements and chat',
  'Meeting agendas and notes',
  'Task assignment and review',
  'Hiring and applications',
  'Members and org structure',
  'Roles and permissions',
  'Documents and resources',
  'Analytics and activity tracking',
  'Student discovery flow',
];

const audienceCards: {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: 'red' | 'gold' | 'neutral';
}[] = [
  {
    icon: Crown,
    title: 'Presidents & Co-Presidents',
    description:
      'Understand how the full workspace works, from setup and permissions to members, events, hiring, and analytics.',
    accent: 'red',
  },
  {
    icon: UserCog,
    title: 'Managerial Executives',
    description:
      'See how team leads can oversee specific workflows like events, hiring, members, documents, or operations.',
    accent: 'gold',
  },
  {
    icon: Users,
    title: 'Club Executives',
    description:
      'See how execs can manage their own responsibilities without relying on scattered messages and spreadsheets.',
    accent: 'neutral',
  },
  {
    icon: Rocket,
    title: 'Clubs preparing for launch',
    description:
      'Use the walkthrough to decide what workflows your club should set up first.',
    accent: 'gold',
  },
];

const howItWorksSteps = [
  {
    title: 'Request a demo',
    description: 'Tell us your club name, your role, and what you want to see.',
  },
  {
    title: 'Pick the right workflows',
    description: 'We focus the walkthrough on the parts of the platform your club would actually use.',
  },
  {
    title: 'Walk through the workspace',
    description: 'See student discovery, club operations, permissions, and team workflows in action.',
  },
  {
    title: 'Decide the next step',
    description: 'If it makes sense, we can help prepare your club workspace for early access.',
  },
];

const prepareChecklist = [
  'How your club currently shares announcements',
  'How you manage events and RSVPs',
  'How your exec team assigns tasks',
  'How you recruit or review applicants',
  'How you store documents and meeting notes',
  'Who needs access to what',
];

const afterRequestSteps = [
  'We review your club and role',
  'We focus the walkthrough on the workflows you care about',
  'We show how your club could manage events, tasks, hiring, members, permissions, and updates',
  'If it makes sense, we help prepare your club for early access',
];

const accentBar = {
  red: 'bg-[#E51937]',
  gold: 'bg-[#FFC429]',
  neutral: 'bg-[rgba(255,255,255,0.22)]',
};

const iconAccent = {
  red: 'border-[#E51937]/30 bg-[rgba(229,25,55,0.12)] text-[#E51937]',
  gold: 'border-[#FFC429]/30 bg-[rgba(255,196,41,0.12)] text-[#FFC429]',
  neutral: 'border-white/[0.1] bg-white/[0.04] text-[#F5F5F5]',
};

const cardHover = {
  red: 'hover:border-[#E51937]/45 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(229,25,55,0.1)]',
  gold: 'hover:border-[#FFC429]/40 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,196,41,0.08)]',
  neutral: 'hover:border-white/[0.16] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]',
};

function TextCta({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#E51937] hover:text-[#FF6B7D] transition-colors"
    >
      {label}
      <ArrowRight size={16} />
    </button>
  );
}

export default function DemoPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace(/^#/, '');
    if (hash === DEMO_FORM_ID || hash === 'request-demo') {
      const t = window.setTimeout(() => {
        document.getElementById(DEMO_FORM_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => window.clearTimeout(t);
    }
  }, [location.hash, location.pathname]);

  const handleDemo = () => {
    goToDemoForm({ interest: 'Request a demo', navigate, pathname: '/demo' });
  };

  const handleOnboard = () => {
    goToDemoForm({ interest: 'Onboard my club', navigate, pathname: '/demo' });
  };

  return (
    <div className="page-transition">
      {/* 1. Hero */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-[#0B0B0B]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#E51937] opacity-[0.04] blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <AnimatedSection>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-4">
                Request a Demo
              </p>
              <h1
                className="font-sans font-extrabold text-[#F5F5F5] mb-5 leading-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)' }}
              >
                See how Gryph ClubConnect could work for your club.
              </h1>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-8 max-w-xl">
                Book a walkthrough of the student discovery flow and club workspace. We&apos;ll show how clubs can manage events, RSVPs, tasks, meetings, members, hiring, documents, analytics, roles, and permissions from one organized platform.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5">
                <Button variant="red" size="lg" onClick={handleDemo} className="w-full sm:w-auto">
                  Request a Demo
                </Button>
                <Button variant="ghost" size="lg" onClick={handleOnboard} className="w-full sm:w-auto">
                  Onboard Your Club
                </Button>
              </div>
              <p className="text-[13px] text-[#777777]">
                Requesting a demo does not create an account or officially register your club.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <FeatureScreenshotPlaceholder
                label="Demo walkthrough preview"
                subtext="Command Center, events, tasks, hiring, members, permissions, and student discovery."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 2. What you'll see */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-3">
              What the walkthrough covers
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans">
              A guided tour of the workflows your club actually uses.
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.05}>
            {walkthroughCards.map((card) => {
              const Icon = card.icon;
              return (
                <StaggerItem key={card.title}>
                  <div
                    className={`relative overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#131313] p-5 h-full transition-all duration-200 ${cardHover[card.accent]}`}
                  >
                    <span className={`absolute inset-x-0 top-0 h-[2px] ${accentBar[card.accent]}`} aria-hidden />
                    <div className={`w-9 h-9 rounded-[8px] border flex items-center justify-center mb-3 ${iconAccent[card.accent]}`}>
                      <Icon size={16} />
                    </div>
                    <h3 className="text-[#F5F5F5] font-semibold mb-2">{card.title}</h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">{card.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Choose your demo focus */}
      <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              Demo options
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans">
              Focus the walkthrough on what your club needs most.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <AnimatedSection>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-6">
                Every club runs differently. The demo can focus on the parts of Gryph ClubConnect that matter most to your team.
              </p>
              <TextCta label="Request a Demo" onClick={handleDemo} />
            </AnimatedSection>
            <AnimatedSection delay={0.06}>
              <div className="rounded-[14px] border border-white/[0.08] bg-[#131313] p-5 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  {demoFocusItems.map((item, index) => (
                    <span
                      key={item}
                      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[13px] font-medium ${
                        index % 3 === 0
                          ? 'border-[#E51937]/25 bg-[rgba(229,25,55,0.08)] text-[#F5F5F5]'
                          : index % 3 === 1
                            ? 'border-[#FFC429]/25 bg-[rgba(255,196,41,0.08)] text-[#F5F5F5]'
                            : 'border-white/[0.1] bg-white/[0.03] text-[#F5F5F5]'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. Who should book */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-3">
              Who it&apos;s for
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans">
              Built for the people running club operations.
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.05}>
            {audienceCards.map((card) => {
              const Icon = card.icon;
              return (
                <StaggerItem key={card.title}>
                  <div
                    className={`relative overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#131313] p-6 sm:p-7 h-full transition-all duration-200 ${cardHover[card.accent]}`}
                  >
                    <span className={`absolute inset-y-0 left-0 w-[3px] ${accentBar[card.accent]}`} aria-hidden />
                    <div className="flex items-start gap-4">
                      <div className={`w-11 h-11 shrink-0 rounded-[10px] border flex items-center justify-center ${iconAccent[card.accent]}`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">{card.title}</h3>
                        <p className="text-[#9CA3AF] text-sm leading-relaxed">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. How the demo works */}
      <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              How it works
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans">
              Simple walkthrough. No commitment.
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {howItWorksSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="rounded-[12px] border border-white/[0.08] bg-[#131313] p-5 h-full">
                    <span
                      className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border text-[11px] font-bold tabular-nums ${
                        index % 2 === 0
                          ? 'border-[#E51937]/35 bg-[rgba(229,25,55,0.12)] text-[#E51937]'
                          : 'border-[#FFC429]/35 bg-[rgba(255,196,41,0.12)] text-[#FFC429]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-base font-semibold text-[#F5F5F5] mb-1.5">{step.title}</h3>
                    <p className="text-sm text-[#9CA3AF] leading-relaxed">{step.description}</p>
                  </div>
                  {index < howItWorksSteps.length - 1 && (
                    <span
                      className="absolute top-1/2 -right-2 z-10 hidden lg:block text-[#444444]"
                      aria-hidden
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. What to prepare */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-3">
              Before the walkthrough
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">
              Bring your club&apos;s current process.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              The most useful demos happen when we understand how your club currently manages events, members, hiring, updates, and day-to-day work.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.06}>
            <div className="rounded-[14px] border border-white/[0.08] bg-[#131313] p-6 sm:p-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {prepareChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#FFC429]/30 bg-[rgba(255,196,41,0.1)] text-[#FFC429]">
                      <Check size={12} strokeWidth={2.5} />
                    </span>
                    <span className="text-sm text-[#F5F5F5] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 7. Request form */}
      <section
        id={DEMO_FORM_ID}
        className="relative py-16 sm:py-20 overflow-hidden bg-[#0B0B0B] border-t border-[#222222] scroll-mt-28"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <AnimatedSection>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
                Request a demo
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4">
                Ready to see how Gryph ClubConnect works?
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-8 max-w-xl">
                Request a walkthrough and see how your club could use Gryph ClubConnect to manage discovery, events, RSVPs, tasks, meetings, hiring, members, documents, analytics, roles, and permissions from one workspace.
              </p>

              <div className="rounded-[12px] border border-[#222222] bg-[#131313] p-5 sm:p-6 max-w-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFC429] mb-3">
                  What happens after you request a demo
                </p>
                <ol className="space-y-3">
                  {afterRequestSteps.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm">
                      <span className="shrink-0 w-6 h-6 rounded-full border border-[#E51937]/35 bg-[rgba(229,25,55,0.12)] text-[11px] font-bold text-[#E51937] flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="pt-0.5 text-[#9CA3AF] leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="rounded-[14px] border border-[#222222] bg-[#131313] p-6 sm:p-7 shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
                <h3 className="text-xl font-bold text-[#F5F5F5] font-sans mb-1">
                  Request a demo or club onboarding
                </h3>
                <p className="text-[#777777] text-sm mb-6 leading-relaxed">
                  Tell us about your club so we can focus the walkthrough on what matters most.
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
