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
  Search,
  Eye,
  UserPlus,
  type LucideIcon,
} from 'lucide-react';
import { useEffect } from 'react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import MockupImage from '../components/mockups/MockupImage';
import ClubWorkflowSlideshow, {
  type ClubWorkflowStep,
} from '../components/clubs/ClubWorkflowSlideshow';
import StudentAccessForm from '../components/forms/StudentAccessForm';
import { goToStudentAccess, STUDENT_ACCESS_ID } from '../lib/cta';

const problemCards = [
  {
    title: 'Missed clubs',
    body: 'Students do not always know which clubs exist or where to find accurate information.',
    accent: 'red' as const,
    hover:
      'hover:border-[#E51937]/45 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(229,25,55,0.1)]',
  },
  {
    title: 'Scattered events',
    body: 'Events are shared across different platforms, making it difficult to know what is happening.',
    accent: 'gold' as const,
    hover:
      'hover:border-[#FFC429]/40 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,196,41,0.08)]',
  },
  {
    title: 'Hidden opportunities',
    body: 'Open positions and other ways to get involved are easy to miss.',
    accent: 'red' as const,
    hover:
      'hover:border-[#E51937]/45 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(229,25,55,0.1)]',
  },
  {
    title: 'Unclear next steps',
    body: 'Students are often unsure whether to RSVP, apply, request to join, or contact an executive.',
    accent: 'neutral' as const,
    hover:
      'hover:border-white/[0.16] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]',
  },
];

const journeySteps: { title: string; description: string; icon: LucideIcon; accent: 'red' | 'gold' | 'neutral' }[] = [
  { title: 'Discover clubs', description: 'Search by category, interest, or keyword and compare clubs in one place.', icon: Search, accent: 'red' },
  { title: 'Explore club profiles', description: 'Learn what a club does, when it meets, and how to get involved.', icon: Eye, accent: 'gold' },
  { title: 'Join an event', description: 'View upcoming events and RSVP from one place.', icon: Calendar, accent: 'red' },
  { title: 'Apply for club positions', description: 'Find open positions and submit an application.', icon: Briefcase, accent: 'gold' },
  { title: 'Follow or join clubs', description: 'Save clubs, request to join, and keep track of the communities you care about.', icon: Bookmark, accent: 'neutral' },
  { title: 'Stay involved', description: 'Use your dashboard to follow events, updates, applications, and club activity.', icon: LayoutDashboard, accent: 'red' },
];

const missingCards: {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: 'red' | 'gold' | 'neutral';
  hover: string;
}[] = [
  {
    title: 'Clubs that fit your interests',
    description: 'Browse clubs by category, activity, or keyword and learn what each community is about.',
    icon: Compass,
    accent: 'red',
    hover: 'hover:border-[#E51937]/45 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(229,25,55,0.12)]',
  },
  {
    title: 'Events happening across campus',
    description: 'See upcoming club events and find new ways to participate.',
    icon: Calendar,
    accent: 'gold',
    hover: 'hover:border-[#FFC429]/40 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(255,196,41,0.1)]',
  },
  {
    title: 'Open club positions',
    description: 'Discover leadership and executive opportunities and apply from one place.',
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
    imageSrc: 'screenshots/for-students-explore-clubs.png',
    imageAlt: 'Gryph ClubConnect Explore Clubs screen',
  },
  {
    title: 'View Club Profiles',
    description: 'Learn what a club does, when it meets, what it has coming up, and how to get involved.',
    placeholderLabel: 'Club Profile',
    placeholderSubtext: 'Public club profile with meeting info, upcoming events, open roles, announcements, and join options.',
    imageSrc: 'screenshots/for-students-club-profiles.png',
    imageAlt: 'Gryph ClubConnect public club profile screen',
  },
  {
    title: 'RSVP for Events',
    description: 'View event details, answer sign-up questions, and confirm attendance.',
    placeholderLabel: 'Event RSVP',
    placeholderSubtext: 'Event detail and RSVP flow with sign-up questions and confirmation.',
    imageSrc: 'screenshots/for-students-event-rsvp.png',
    imageAlt: 'Gryph ClubConnect event RSVP screen',
  },
  {
    title: 'Apply for Club Positions',
    description: 'Browse open positions, complete applications, and track your progress.',
    placeholderLabel: 'Role Application',
    placeholderSubtext: 'Open role page with application questions and application status.',
    imageSrc: 'screenshots/for-students-role-applications.png',
    imageAlt: 'Gryph ClubConnect role application screen',
  },
  {
    title: 'Use Your Student Dashboard',
    description: 'Keep upcoming events, applications, saved clubs, updates, and tasks organized.',
    placeholderLabel: 'Student Dashboard',
    placeholderSubtext: 'Dashboard with saved clubs, upcoming events, applications, tasks, and inbox updates.',
    imageSrc: 'screenshots/for-students-student-dashboard.png',
    imageAlt: 'Gryph ClubConnect student dashboard screen',
  },
];

const canDoGroups: {
  label: string;
  cards: { title: string; description: string; icon: LucideIcon; accent: 'red' | 'gold' | 'neutral' }[];
}[] = [
  {
    label: 'Discover',
    cards: [
      { title: 'Explore Clubs', description: 'Search by name, category, interest, or keyword.', icon: Compass, accent: 'red' },
      { title: 'View Club Profiles', description: 'See club information, meeting details, events, updates, and open positions.', icon: Building2, accent: 'gold' },
      { title: 'Find Events', description: 'Browse upcoming events from clubs across campus.', icon: Calendar, accent: 'red' },
    ],
  },
  {
    label: 'Take Action',
    cards: [
      { title: 'RSVP for Events', description: 'Register for events and complete sign-up questions.', icon: ClipboardCheck, accent: 'gold' },
      { title: 'Apply for Club Positions', description: 'Submit applications for executive and leadership opportunities.', icon: Briefcase, accent: 'red' },
      { title: 'Request to Join', description: 'Join open clubs or submit a request when approval is required.', icon: UserPlus, accent: 'gold' },
    ],
  },
  {
    label: 'Stay Organized',
    cards: [
      { title: 'Save Clubs', description: 'Keep track of clubs you want to revisit or follow.', icon: Bookmark, accent: 'neutral' },
      { title: 'Track Applications', description: 'See the status of every club position you apply for.', icon: Search, accent: 'red' },
      { title: 'Manage Your Involvement', description: 'View events, updates, tasks, and club activity from your dashboard.', icon: LayoutDashboard, accent: 'gold' },
    ],
  },
];

const connectedFlow = [
  { title: 'Students discover opportunities', description: 'They find a club, event, or open position.' },
  { title: 'Students take action', description: 'They RSVP, apply, save a club, or request to join.' },
  { title: 'Club teams manage the next step', description: 'Executives review responses, organize applicants, and follow up.' },
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
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#0B0B0B] lg:min-h-[calc(100vh-4rem)]">
        <div className="pointer-events-none absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-[#E51937] opacity-[0.04] blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            <AnimatedSection className="flex min-w-0 flex-col gap-4 sm:gap-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
                For students
              </p>

              <h1
                className="max-w-[38rem] font-sans font-extrabold leading-[1.04] tracking-tight text-[#F5F5F5]"
                style={{ fontSize: 'clamp(2.2rem, 3.9vw, 3.55rem)' }}
              >
                Find clubs, events, and club hiring positions all in one place.
              </h1>

              <p
                className="max-w-[36rem] text-lg text-[#9CA3AF] sm:text-xl"
                style={{ lineHeight: '1.6' }}
              >
                Explore University of Guelph clubs, discover upcoming events,
                apply for open positions, and keep track of your involvement
                from one organized account.
              </p>

              <div className="flex flex-col items-stretch gap-3 pt-0.5 sm:flex-row sm:items-center">
                <Button
                  variant="red"
                  size="lg"
                  onClick={handleStudentAccess}
                  className="w-full shadow-[0_8px_24px_rgba(229,25,55,0.22)] sm:w-auto"
                >
                  Request Student Access
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => navigate('/features')}
                  className="w-full sm:w-auto"
                >
                  Explore Features
                </Button>
              </div>

              <p className="text-[13px] text-[#777777]">
                Student access requests do not create an account automatically.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="relative min-w-0">
              <MockupImage
                name="studentHero"
                alt="Gryph ClubConnect student dashboard and club discovery"
                className="relative !overflow-visible !rounded-none !border-0 !bg-transparent !shadow-none !ring-0"
                imgClassName="mx-auto h-auto w-full max-w-[620px] object-contain lg:scale-[0.94]"
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
              Finding the right club should not depend on knowing where to look.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Club information is spread across Instagram posts, group chats, friends, tabling, and separate forms. That makes it easy to miss events, open positions, and communities that could be a great fit.
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

      {/* How students get involved */}
      <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              Student journey
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">
              From discovering a club to becoming part of it.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Gryph ClubConnect guides students through the full path of campus involvement—from finding the right club to attending events, applying for positions, and staying connected after joining.
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

      {/* Discover more on campus */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              What you might be missing
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">
              See more opportunities without searching across different platforms.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Gryph ClubConnect brings club profiles, upcoming events, and open positions into one organized place so students can explore more of campus life.
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
              See how students move from discovery to involvement.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Explore the key steps students take—from finding a club to joining events, applying for positions, and staying organized.
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
              Everything you need to explore and manage your club involvement.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Use one account to discover opportunities, take action, and stay organized across every club you interact with.
            </p>
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

      {/* Connected club life */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              Connected club life
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">
              Student actions connect directly to club operations.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              When students RSVP, apply, follow, or request to join, club leaders can review that activity and manage the next step from their workspace. Students get a clearer way to participate, while clubs receive organized information they can act on.
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
                Get ready to explore club life in one organized place.
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-6 max-w-xl">
                Request student access to follow Gryph ClubConnect as it prepares for launch and be among the first students to explore clubs, events, and open positions.
              </p>
              <Link
                to="/features"
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#E51937] hover:text-[#FF6B7D] transition-colors"
              >
                Explore Platform Features
                <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="rounded-[14px] border border-[#222222] bg-[#131313] p-6 sm:p-7 shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
                <h3 className="text-xl font-bold text-[#F5F5F5] font-sans mb-1">
                  Request student access
                </h3>
                <p className="text-[#777777] text-sm mb-6 leading-relaxed">
                  Tell us a bit about yourself and we’ll follow up as student access becomes available.
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
