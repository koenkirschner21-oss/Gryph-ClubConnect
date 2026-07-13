import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  Compass,
  Building2,
  Calendar,
  ClipboardCheck,
  Briefcase,
  Bookmark,
  LayoutDashboard,
  Bell,
  Search,
  Eye,
  UserPlus,
  GraduationCap,
  Sparkles,
  Users,
  Ticket,
  type LucideIcon,
} from 'lucide-react';
import { useEffect } from 'react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import FeatureScreenshotPlaceholder from '../components/features/FeatureScreenshotPlaceholder';
import ClubWorkflowSlideshow, {
  type ClubWorkflowStep,
} from '../components/clubs/ClubWorkflowSlideshow';
import StudentAccessForm from '../components/forms/StudentAccessForm';
import { goToStudentAccess, STUDENT_ACCESS_ID } from '../lib/cta';

const problemCards = [
  {
    title: 'Missed clubs',
    body: 'Students do not always know what clubs exist or where to find them.',
    accent: 'red' as const,
    hover:
      'hover:border-[#E51937]/45 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(229,25,55,0.1)]',
  },
  {
    title: 'Scattered events',
    body: 'Events get posted across different places, making it hard to know what is happening.',
    accent: 'gold' as const,
    hover:
      'hover:border-[#FFC429]/40 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,196,41,0.08)]',
  },
  {
    title: 'Hidden opportunities',
    body: 'Open roles, applications, and ways to get involved are easy to miss.',
    accent: 'red' as const,
    hover:
      'hover:border-[#E51937]/45 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(229,25,55,0.1)]',
  },
  {
    title: 'Unclear next steps',
    body: 'Students often do not know whether to RSVP, apply, message someone, or just show up.',
    accent: 'neutral' as const,
    hover:
      'hover:border-white/[0.16] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]',
  },
];

const journeySteps: { title: string; description: string; icon: LucideIcon; accent: 'red' | 'gold' | 'neutral' }[] = [
  { title: 'Discover clubs', description: 'Search by name, category, interest, or keyword.', icon: Search, accent: 'red' },
  { title: 'View club profiles', description: 'See what a club does, meeting info, upcoming events, open roles, and ways to get involved.', icon: Eye, accent: 'gold' },
  { title: 'RSVP for events', description: 'Find events and sign up without digging through posts or group chats.', icon: Calendar, accent: 'red' },
  { title: 'Apply for roles', description: 'Browse open club positions and submit applications from one account.', icon: Briefcase, accent: 'gold' },
  { title: 'Follow or save clubs', description: 'Keep track of clubs you care about before or after joining.', icon: Bookmark, accent: 'neutral' },
  { title: 'Stay organized', description: 'Use your dashboard to see upcoming events, applications, club updates, tasks, and inbox alerts.', icon: LayoutDashboard, accent: 'red' },
];

const missingCards: {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: 'red' | 'gold' | 'neutral';
  hover: string;
}[] = [
  {
    title: 'Clubs to explore',
    description: 'Browse clubs by category, interest, activity, or keyword instead of relying on word of mouth.',
    icon: Compass,
    accent: 'red',
    hover: 'hover:border-[#E51937]/45 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(229,25,55,0.12)]',
  },
  {
    title: 'Events to attend',
    description: 'Find upcoming events across clubs and RSVP before they get buried in posts or group chats.',
    icon: Calendar,
    accent: 'gold',
    hover: 'hover:border-[#FFC429]/40 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(255,196,41,0.1)]',
  },
  {
    title: 'Roles to apply for',
    description: 'Discover open club positions and application opportunities without waiting for someone to send you the form.',
    icon: Briefcase,
    accent: 'neutral',
    hover: 'hover:border-white/[0.16] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.35)]',
  },
];

const workflowSteps: ClubWorkflowStep[] = [
  {
    title: 'Explore Clubs',
    description: 'Find clubs by name, category, interest, or keyword.',
    placeholderLabel: 'Explore Clubs',
    placeholderSubtext: 'Explore page with search, categories, club cards, and join states.',
  },
  {
    title: 'Club Profiles',
    description: 'See what a club does, when it meets, what it posts, and how to get involved.',
    placeholderLabel: 'Club Profile',
    placeholderSubtext: 'Public club profile with meeting info, upcoming events, open roles, announcements, and join options.',
  },
  {
    title: 'Event RSVP',
    description: 'Sign up for events and answer event questions from one place.',
    placeholderLabel: 'Event RSVP',
    placeholderSubtext: 'Event detail and RSVP flow with sign-up questions and confirmation.',
  },
  {
    title: 'Role Applications',
    description: 'Apply for open roles and keep track of where your application stands.',
    placeholderLabel: 'Role Application',
    placeholderSubtext: 'Open role page with application questions and application status.',
  },
  {
    title: 'Student Dashboard',
    description: 'Keep saved clubs, upcoming events, applications, updates, and tasks organized.',
    placeholderLabel: 'Student Dashboard',
    placeholderSubtext: 'Dashboard with saved clubs, upcoming events, applications, tasks, and inbox updates.',
  },
];

const canDoGroups: {
  label: string;
  cards: { title: string; description: string; icon: LucideIcon; accent: 'red' | 'gold' | 'neutral' }[];
}[] = [
  {
    label: 'Discover',
    cards: [
      { title: 'Explore Clubs', description: 'Search clubs by name, category, interest, or keyword.', icon: Compass, accent: 'red' },
      { title: 'View Public Profiles', description: 'See descriptions, meeting info, updates, events, and open roles.', icon: Building2, accent: 'gold' },
      { title: 'Find Events', description: 'Browse events across clubs and see what is coming up.', icon: Calendar, accent: 'red' },
    ],
  },
  {
    label: 'Take Action',
    cards: [
      { title: 'RSVP', description: 'Sign up for events and answer event questions.', icon: ClipboardCheck, accent: 'gold' },
      { title: 'Apply for Roles', description: 'Submit applications for open club positions.', icon: Briefcase, accent: 'red' },
      { title: 'Track Applications', description: 'See where your applications stand.', icon: Search, accent: 'gold' },
    ],
  },
  {
    label: 'Stay Organized',
    cards: [
      { title: 'Follow or Save Clubs', description: 'Keep an eye on clubs before joining or while deciding.', icon: Bookmark, accent: 'neutral' },
      { title: 'Student Dashboard', description: 'See upcoming events, applications, club updates, and tasks in one place.', icon: LayoutDashboard, accent: 'red' },
      { title: 'Inbox & Alerts', description: 'Keep important updates and pending actions visible.', icon: Bell, accent: 'gold' },
    ],
  },
];

const audienceCards: {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: 'red' | 'gold' | 'neutral';
}[] = [
  {
    title: 'New students',
    description: 'Find clubs, events, and communities before you already know where to look.',
    icon: GraduationCap,
    accent: 'red',
  },
  {
    title: 'Students exploring interests',
    description: 'Search by category, interest, or keyword and save clubs you want to revisit.',
    icon: Sparkles,
    accent: 'gold',
  },
  {
    title: 'Event seekers',
    description: 'See what is happening across clubs and RSVP before events pass you by.',
    icon: Ticket,
    accent: 'red',
  },
  {
    title: 'Students applying for roles',
    description: 'Find open positions, apply from one place, and keep track of application progress.',
    icon: Briefcase,
    accent: 'gold',
  },
  {
    title: 'Active members',
    description: 'Stay on top of events, updates, tasks, and announcements from the clubs you are part of.',
    icon: Users,
    accent: 'neutral',
  },
  {
    title: 'Future execs',
    description: 'Discover ways to get involved now and move toward leadership over time.',
    icon: UserPlus,
    accent: 'red',
  },
];

const connectedFlow = [
  { title: 'Student discovers', description: 'They find a club, event, or open role.' },
  { title: 'Student takes action', description: 'They RSVP, apply, follow, or request to join.' },
  { title: 'Club team follows up', description: 'Execs review responses and manage the next step.' },
];

const accentBar = {
  red: 'bg-[#E51937]',
  gold: 'bg-[#FFC429]',
  neutral: 'bg-[rgba(255,255,255,0.22)]',
};

const iconAccent = {
  red: 'bg-[rgba(229,25,55,0.12)] border-[#E51937]/25 text-[#E51937]',
  gold: 'bg-[rgba(255,196,41,0.12)] border-[#FFC429]/25 text-[#FFC429]',
  neutral: 'bg-[#1A1A1A] border-white/[0.1] text-[#9CA3AF]',
};

const audienceHover = {
  red: 'hover:border-[#E51937]/40 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(229,25,55,0.1)]',
  gold: 'hover:border-[#FFC429]/35 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,196,41,0.08)]',
  neutral: 'hover:border-white/[0.14] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]',
};

export default function ForStudentsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace(/^#/, '');
    if (hash === STUDENT_ACCESS_ID) {
      const t = window.setTimeout(() => {
        document.getElementById(STUDENT_ACCESS_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => window.clearTimeout(t);
    }
  }, [location.hash, location.pathname]);

  const handleStudentAccess = () => {
    goToStudentAccess({ navigate, pathname: '/for-students' });
  };

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 overflow-hidden bg-[#0B0B0B]">
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] rounded-full bg-[#E51937] opacity-[0.04] blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <AnimatedSection>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-4">
                For students
              </p>
              <h1
                className="font-sans font-extrabold text-[#F5F5F5] mb-5 leading-tight"
                style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)' }}
              >
                Find clubs, events, and roles without hunting through group chats.
              </h1>
              <p className="text-[#9CA3AF] text-base sm:text-lg max-w-xl leading-relaxed mb-7">
                Gryph ClubConnect gives students one place to explore clubs, view public profiles, discover events, RSVP, apply for roles, follow updates, and keep track of involvement from one account.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5">
                <Button variant="red" size="lg" onClick={handleStudentAccess} className="w-full sm:w-auto">
                  Get Student Access
                </Button>
                <Button variant="ghost" size="lg" onClick={() => navigate('/features')} className="w-full sm:w-auto">
                  Explore Clubs
                </Button>
              </div>
              <p className="text-[13px] text-[#777777]">
                Student access requests do not create an account automatically.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <FeatureScreenshotPlaceholder
                label="Student Dashboard"
                subtext="Student dashboard with saved clubs, upcoming events, applications, tasks, and inbox updates."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Student problem */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              The student problem
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4">
              Campus involvement is hard to find when everything is scattered.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Students often hear about clubs through Instagram posts, group chats, friends, random links, or tabling. That makes it easy to miss events, roles, and communities that would have been a good fit.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.06}>
            {problemCards.map((card) => (
              <StaggerItem key={card.title}>
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#131313] p-5 transition-all duration-200 ${card.hover}`}
                >
                  <span className={`absolute inset-x-0 top-0 h-[2px] ${accentBar[card.accent]}`} aria-hidden />
                  <h3 className="text-base font-bold text-[#F5F5F5] font-sans mb-2">{card.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{card.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Student journey */}
      <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              Student journey
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">
              From discovering a club to staying involved.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Gryph ClubConnect connects the steps students already take when getting involved on campus.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="hidden lg:grid lg:grid-cols-6 gap-3">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative">
                    <div className="rounded-[10px] border border-white/[0.08] bg-[#131313] p-4 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`text-[12px] font-semibold tabular-nums ${
                            step.accent === 'red'
                              ? 'text-[#E51937]'
                              : step.accent === 'gold'
                                ? 'text-[#FFC429]'
                                : 'text-[#9CA3AF]'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className={`w-7 h-7 rounded-[7px] border flex items-center justify-center ${iconAccent[step.accent]}`}>
                          <Icon size={13} />
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-[#F5F5F5] mb-1.5">{step.title}</p>
                      <p className="text-[12px] text-[#9CA3AF] leading-snug flex-1">{step.description}</p>
                    </div>
                    {index < journeySteps.length - 1 && (
                      <span className="absolute top-1/2 -right-2 z-10 hidden xl:block text-[#444444]" aria-hidden>
                        →
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="lg:hidden space-y-3">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-[10px] border border-white/[0.08] bg-[#131313] px-4 py-4"
                  >
                    <span
                      className={`shrink-0 text-[13px] font-semibold tabular-nums pt-0.5 ${
                        step.accent === 'red'
                          ? 'text-[#E51937]'
                          : step.accent === 'gold'
                            ? 'text-[#FFC429]'
                            : 'text-[#9CA3AF]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-semibold text-[#F5F5F5]">{step.title}</p>
                        <Icon
                          size={14}
                          className={
                            step.accent === 'red'
                              ? 'text-[#E51937]'
                              : step.accent === 'gold'
                                ? 'text-[#FFC429]'
                                : 'text-[#9CA3AF]'
                          }
                        />
                      </div>
                      <p className="text-[13px] text-[#9CA3AF] leading-snug">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What you might be missing */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              What you might be missing
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">
              Clubs, events, and roles are easier to find when they live in one place.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Instead of hoping the right post, message, or link reaches you, Gryph ClubConnect gives students one place to browse what clubs are doing and how to get involved.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.08}>
            {missingCards.map((card) => {
              const Icon = card.icon;
              return (
                <StaggerItem key={card.title}>
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#131313] p-6 sm:p-7 transition-all duration-200 ${card.hover}`}
                  >
                    <span className={`absolute inset-x-0 top-0 h-[2px] ${accentBar[card.accent]}`} aria-hidden />
                    <div className={`w-11 h-11 rounded-[10px] border flex items-center justify-center mb-5 ${iconAccent[card.accent]}`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-[#F5F5F5] font-sans mb-3">{card.title}</h3>
                    <p className="text-[#9CA3AF] text-[15px] leading-relaxed">{card.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Student workflows */}
      <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8 sm:mb-10 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              Student workflows
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">
              See the path from finding a club to getting involved.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Click through the student journey or let it rotate. Real product screenshots will be added as the demo set is finalized.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <ClubWorkflowSlideshow
              steps={workflowSteps}
              accent="red"
              screenshotSide="right"
              intervalMs={5500}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* What students can do — grouped */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              What students can do
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">
              Everything students need to find and follow club life.
            </h2>
          </AnimatedSection>
          <div className="space-y-8">
            {canDoGroups.map((group) => (
              <AnimatedSection key={group.label}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777] mb-3">
                  {group.label}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {group.cards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={card.title}
                        className="rounded-[10px] border border-white/[0.08] bg-[#131313] p-4 h-full transition-all duration-200 hover:border-white/[0.14] hover:bg-[#161616] hover:-translate-y-0.5"
                      >
                        <div className={`w-8 h-8 rounded-[8px] border flex items-center justify-center mb-3 ${iconAccent[card.accent]}`}>
                          <Icon size={15} />
                        </div>
                        <h3 className="text-[#F5F5F5] font-semibold text-sm mb-1">{card.title}</h3>
                        <p className="text-[#9CA3AF] text-[12px] leading-relaxed">{card.description}</p>
                      </div>
                    );
                  })}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who it helps */}
      <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-3">
              Who it helps
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">
              Whether you are new, involved, or trying to get more involved.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Gryph ClubConnect is built for students who want a clearer way to find clubs, keep up with events, and discover opportunities without needing to already know the right group chat or Instagram page.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.05}>
            {audienceCards.map((card) => {
              const Icon = card.icon;
              return (
                <StaggerItem key={card.title}>
                  <div
                    className={`relative overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#131313] p-5 h-full transition-all duration-200 ${audienceHover[card.accent]}`}
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

      {/* Connected club life */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              Connected club life
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">
              What students do connects to how clubs manage.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              When students RSVP, apply, follow, or request to join, club teams can review interest, manage attendees, organize applicants, and follow up from their workspace. Students get a clearer path in, and clubs get cleaner information to work with.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {connectedFlow.map((step, index) => (
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
                  {index < connectedFlow.length - 1 && (
                    <span
                      className="absolute top-1/2 -right-2 z-10 hidden md:block text-[#444444]"
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

      {/* Student access form */}
      <section
        id={STUDENT_ACCESS_ID}
        className="relative py-16 sm:py-20 overflow-hidden bg-[#0B0B0B] border-t border-[#222222] scroll-mt-28"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <AnimatedSection>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
                Student access
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4">
                Ready to find more of what is happening on campus?
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-6 max-w-xl">
                Request student access to follow Gryph ClubConnect as it prepares for launch and get a clearer way to discover clubs, events, and roles.
              </p>
              <Link
                to="/features"
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#E51937] hover:text-[#FF6B7D] transition-colors"
              >
                Explore Club Features
                <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="rounded-[14px] border border-[#222222] bg-[#131313] p-6 sm:p-7 shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
                <h3 className="text-xl font-bold text-[#F5F5F5] font-sans mb-1">
                  Get student access
                </h3>
                <p className="text-[#777777] text-sm mb-6 leading-relaxed">
                  Tell us a bit about yourself so we can follow up as access opens.
                </p>
                <StudentAccessForm sourcePage="For Students" idPrefix="for-students" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
