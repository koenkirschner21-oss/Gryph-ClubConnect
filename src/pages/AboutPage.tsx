import { useNavigate } from 'react-router-dom';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import {
  goToSection,
  ONBOARD_CLUB_ID,
  REQUEST_DEMO_ID,
  setClubFormInterest,
} from '../lib/cta';

const frictionCards = [
  {
    title: 'Students miss opportunities',
    accent: 'red' as const,
  },
  {
    title: 'Events and roles are hard to find',
    accent: 'gold' as const,
  },
  {
    title: 'Exec teams lose ownership',
    accent: 'red' as const,
  },
  {
    title: 'Club operations get scattered',
    accent: 'neutral' as const,
  },
];

const principles = [
  {
    title: 'Community first',
    description:
      'Features should help students find real opportunities and help clubs make involvement easier to manage.',
    accent: 'red' as const,
    hover:
      'hover:border-[#E51937]/45 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(229,25,55,0.1)]',
  },
  {
    title: 'Student-built',
    description:
      'Gryph ClubConnect is being built from the perspective of students who understand the friction of club discovery and exec coordination.',
    accent: 'gold' as const,
    hover:
      'hover:border-[#FFC429]/40 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,196,41,0.08)]',
  },
  {
    title: 'Honest early access',
    description:
      'We are building toward launch with real feedback from students and club leaders, without pretending to be official or overclaiming progress.',
    accent: 'neutral' as const,
    hover:
      'hover:border-white/[0.16] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]',
  },
];

const accentBar = {
  red: 'bg-[#E51937]',
  gold: 'bg-[#FFC429]',
  neutral: 'bg-[rgba(255,255,255,0.22)]',
};

export default function AboutPage() {
  const navigate = useNavigate();

  const handleOnboard = () => {
    setClubFormInterest('Onboard my club');
    goToSection(ONBOARD_CLUB_ID, { navigate, pathname: '/about' });
  };

  const handleDemo = () => {
    setClubFormInterest('Request a demo');
    goToSection(REQUEST_DEMO_ID, { navigate, pathname: '/about' });
  };

  return (
    <div className="page-transition">
      {/* 1. Hero */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-[#0B0B0B]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#E51937] opacity-[0.04] blur-[140px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-4">
              About Gryph ClubConnect
            </p>
            <h1
              className="font-sans font-extrabold text-[#F5F5F5] mb-5 leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Built by students for UofG club life.
            </h1>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Gryph ClubConnect is an independent student-built platform helping students discover campus opportunities and helping club teams manage the work behind them.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
              <Button variant="red" size="lg" onClick={handleOnboard}>
                Onboard Your Club
              </Button>
              <Button variant="ghost" size="lg" onClick={handleDemo}>
                Request a Demo
              </Button>
            </div>
            <p className="text-[13px] text-[#777777]">
              Independent from the University of Guelph.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. Why we're building this */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <AnimatedSection>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
                Our story
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4">
                Why we&apos;re building this
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed">
                Gryph ClubConnect started from a simple problem: campus involvement is valuable, but it is harder to discover and harder to manage than it should be. Students miss clubs, events, and roles because information is scattered. Club leaders and exec teams are left coordinating across group chats, forms, spreadsheets, shared drives, and last-minute messages.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="rounded-[14px] border border-white/[0.08] bg-[#131313] p-7 sm:p-8">
                <div className="h-[2px] w-10 bg-[#FFC429] mb-5 rounded-full" aria-hidden />
                <blockquote className="text-[#F5F5F5] text-lg font-medium leading-relaxed">
                  Students should have a clearer way to find community. Club teams should have a cleaner way to run the work behind it.
                </blockquote>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3. The friction */}
      <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl mx-auto text-center">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              The backstory
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4">
              The friction is real.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Club life often spreads across too many disconnected places. New members get lost. Events are hard to promote. Tasks get dropped. Meeting notes disappear. Applications live in separate forms. Permissions are unclear. The result is more work for the people trying to keep clubs running.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto" staggerDelay={0.06}>
            {frictionCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="relative overflow-hidden rounded-[10px] border border-white/[0.08] bg-[#131313] px-5 py-4">
                  <span className={`absolute inset-y-0 left-0 w-[2px] ${accentBar[card.accent]}`} aria-hidden />
                  <p className="text-sm font-semibold text-[#F5F5F5] pl-1">{card.title}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. What we're building */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl mx-auto text-center">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-3">
              Our focus
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4">
              Help students find community. Help clubs run better.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Gryph ClubConnect brings student discovery and club operations closer together. Students can explore clubs, events, roles, and updates. Club teams can manage members, events, RSVPs, tasks, meetings, hiring, documents, analytics, roles, and permissions from one workspace.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.08}>
            <StaggerItem>
              <div className="relative h-full overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#131313] p-6 sm:p-7">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-[#E51937]" aria-hidden />
                <h3 className="text-lg font-bold text-[#F5F5F5] font-sans mb-3">For students</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  Find clubs, discover events, RSVP, apply for roles, follow updates, and stay organized across the clubs they care about.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="relative h-full overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#131313] p-6 sm:p-7">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-[#FFC429]" aria-hidden />
                <h3 className="text-lg font-bold text-[#F5F5F5] font-sans mb-3">For club teams</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  Manage events, members, announcements, tasks, meetings, hiring, documents, analytics, roles, reporting, and permissions without relying on scattered tools.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Principles */}
      <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl mx-auto text-center">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              What we stand for
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">
              Principles guiding how we build.
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.08}>
            {principles.map((item) => (
              <StaggerItem key={item.title}>
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#131313] p-6 sm:p-7 transition-all duration-200 ${item.hover}`}
                >
                  <span className={`absolute inset-x-0 top-0 h-[2px] ${accentBar[item.accent]}`} aria-hidden />
                  <h3 className="text-lg font-bold text-[#F5F5F5] font-sans mb-3">{item.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. Independence */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-3">
              Independent platform
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4">
              Student-built. Independent. Built for campus club life.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed mb-6">
              Gryph ClubConnect is not officially affiliated with, endorsed by, or operated by the University of Guelph. It is an independent student-built platform inspired by the real challenges of discovering clubs and managing club operations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {['Independent', 'Student-built', 'Early access'].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-full border border-white/[0.08] bg-[#0B0B0B] px-3.5 py-1.5 text-[12px] font-medium text-[#9CA3AF]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="relative py-16 sm:py-20 overflow-hidden bg-[#0B0B0B] border-t border-[#222222]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#E51937] opacity-[0.05] blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">
              Want to see where Gryph ClubConnect is going?
            </h2>
            <p className="text-[#9CA3AF] text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Request a demo or onboard your club to see how Gryph ClubConnect can help students discover opportunities and help club teams manage operations from one workspace.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="red" size="lg" onClick={handleOnboard}>
                Onboard Your Club
              </Button>
              <Button variant="ghost" size="lg" onClick={handleDemo}>
                Request a Demo
              </Button>
            </div>
            <p className="mt-6 text-[13px] text-[#777777]">
              Submitting interest does not create an account or officially register your club.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
