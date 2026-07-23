import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CalendarDays,
  CheckSquare,
  Compass,
  Eye,
  FileText,
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  NotebookPen,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import {
  goToDemoForm,
  goToStudentAccess,
} from '../lib/cta';

type Accent = 'red' | 'gold' | 'neutral';

type TabItem = {
  id: string;
  label: string;
  title: string;
  body: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
};

const pillars: {
  title: string;
  body: string;
  points: string[];
  icon: LucideIcon;
  accent: Accent;
}[] = [
  {
    title: 'Student discovery',
    body: 'Help students find clubs, events, open positions, and clear ways to get involved.',
    points: ['Explore clubs', 'View profiles', 'RSVP and apply', 'Track involvement'],
    icon: Compass,
    accent: 'red',
  },
  {
    title: 'Club operations',
    body: 'Give club teams one workspace for the work that keeps their organization moving.',
    points: ['Command Center', 'Events and tasks', 'Meetings and notes', 'Documents and members'],
    icon: LayoutDashboard,
    accent: 'gold',
  },
  {
    title: 'Leadership controls',
    body: 'Give club leaders visibility and control over the workflows they are responsible for.',
    points: ['Hiring', 'Analytics', 'Roles and permissions', 'Setup and access'],
    icon: ShieldCheck,
    accent: 'neutral',
  },
];

const overviewBands: {
  title: string;
  description: string;
  accent: Accent;
  items: { label: string; icon: LucideIcon }[];
}[] = [
  {
    title: 'Explore',
    description: 'Help students find the right club, event, or opportunity.',
    accent: 'red',
    items: [
      { label: 'Clubs', icon: Compass },
      { label: 'Profiles', icon: Eye },
      { label: 'Events', icon: CalendarDays },
      { label: 'Applications', icon: Briefcase },
      { label: 'Student dashboard', icon: LayoutDashboard },
    ],
  },
  {
    title: 'Coordinate',
    description: 'Keep everyday club work organized in one workspace.',
    accent: 'gold',
    items: [
      { label: 'Command Center', icon: LayoutDashboard },
      { label: 'Announcements', icon: Megaphone },
      { label: 'Tasks', icon: CheckSquare },
      { label: 'Meetings', icon: NotebookPen },
      { label: 'Documents', icon: FileText },
    ],
  },
  {
    title: 'Lead',
    description: 'Manage the people, access, and decisions behind the club.',
    accent: 'neutral',
    items: [
      { label: 'Hiring', icon: UserCheck },
      { label: 'Members', icon: Users },
      { label: 'Permissions', icon: ShieldCheck },
      { label: 'Analytics', icon: BarChart3 },
      { label: 'Club access', icon: Users },
    ],
  },
];

const studentTabs: TabItem[] = [
  {
    id: 'explore',
    label: 'Explore clubs',
    title: 'Find clubs without relying on scattered posts and links.',
    body: 'Search clubs by name, category, interest, or keyword, then view public profiles, events, open positions, and joining options.',
    bullets: [
      'Search and filter clubs',
      'View public club profiles',
      'See events and open positions',
      'Save or follow clubs',
    ],
    imageSrc: 'screenshots/features-discovery-explore-clubs.png',
    imageAlt: 'Gryph ClubConnect Explore Clubs screen',
  },
  {
    id: 'dashboard',
    label: 'Student dashboard',
    title: 'Keep involvement organized across every club.',
    body: 'Students can keep upcoming events, applications, club updates, assigned tasks, and memberships visible from one account.',
    bullets: [
      'Cross-club overview',
      'Upcoming events',
      'Applications and tasks',
      'Inbox updates and pending actions',
    ],
    imageSrc: 'screenshots/features-dashboard-cross-club-overview.png',
    imageAlt: 'Gryph ClubConnect student dashboard',
  },
];

const coordinationTabs: TabItem[] = [
  {
    id: 'tasks',
    label: 'Tasks',
    title: 'Keep ownership, deadlines, and progress visible.',
    body: 'Assign work, track status, review completion, and keep task context connected to the club workflow it supports.',
    bullets: [
      'Owners, due dates, and priority',
      'Assigned-to-me and assigned-by-me views',
      'Status tracking',
      'Review and completion flow',
    ],
    imageSrc: 'screenshots/features-tasks-review-workflow.png',
    imageAlt: 'Gryph ClubConnect tasks and review workflow',
  },
  {
    id: 'meetings',
    label: 'Meetings',
    title: 'Turn meetings into clear next steps.',
    body: 'Plan agendas, record notes and decisions, and turn follow-up items into assigned work.',
    bullets: [
      'Meeting scheduling',
      'Agendas and notes',
      'Decisions and recaps',
      'Follow-up tasks',
    ],
    imageSrc: 'screenshots/features-meetings-follow-through.png',
    imageAlt: 'Gryph ClubConnect meetings workflow',
  },
];

const leadershipTabs: TabItem[] = [
  {
    id: 'members',
    label: 'Members and access',
    title: 'Organize members and give each role the right access.',
    body: 'Manage invitations, member roles, custom titles, reporting relationships, and permissions from one connected workspace.',
    bullets: [
      'Member directory',
      'Invites and join codes',
      'Role tiers and custom titles',
      'Permission controls',
    ],
    imageSrc: 'screenshots/features-members-roles-permissions.png',
    imageAlt: 'Gryph ClubConnect members, roles, and permissions',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    title: 'Understand how your club is performing.',
    body: 'Review activity across members, events, RSVPs, tasks, announcements, hiring, and public engagement.',
    bullets: [
      'Member growth',
      'Event and RSVP activity',
      'Task completion',
      'Hiring and profile engagement',
    ],
    imageSrc: 'screenshots/features-analytics-club-insights.png',
    imageAlt: 'Gryph ClubConnect club analytics',
  },
];

const flowSteps = [
  {
    title: 'Discover',
    description: 'A student finds a club, event, or open position.',
    icon: Search,
  },
  {
    title: 'Take action',
    description: 'They follow, RSVP, apply, or request to join.',
    icon: Briefcase,
  },
  {
    title: 'Club reviews',
    description: 'Club leaders review interest, responses, and applications.',
    icon: UserCheck,
  },
  {
    title: 'Team manages',
    description: 'The team coordinates members, events, tasks, and meetings.',
    icon: LayoutDashboard,
  },
  {
    title: 'Everyone stays informed',
    description: 'Roles, updates, analytics, and notifications stay connected.',
    icon: MessageSquare,
  },
];

const beforeItems = [
  'Instagram posts',
  'Group chats',
  'Separate forms',
  'Spreadsheets',
  'Shared drives',
  'Loose meeting notes',
];

const afterItems = [
  'Discoverable club profiles, events, and updates',
  'Connected communication and tasks',
  'Built-in RSVPs, applications, and join requests',
  'Organized members, roles, and ownership',
  'Documents grouped by category and visibility',
  'Meetings tied to decisions and follow-ups',
];

const accentStyles = {
  red: {
    text: 'text-[#E51937]',
    border: 'border-[#E51937]/30',
    background: 'bg-[rgba(229,25,55,0.1)]',
    top: 'bg-[#E51937]',
  },
  gold: {
    text: 'text-[#FFC429]',
    border: 'border-[#FFC429]/30',
    background: 'bg-[rgba(255,196,41,0.1)]',
    top: 'bg-[#FFC429]',
  },
  neutral: {
    text: 'text-[#9CA3AF]',
    border: 'border-white/[0.1]',
    background: 'bg-[#1A1A1A]',
    top: 'bg-white/25',
  },
};

function ProductMapVisual() {
  const columns = [
    {
      title: 'Discover',
      accent: 'red' as Accent,
      items: ['Clubs', 'Events', 'Open positions'],
    },
    {
      title: 'Participate',
      accent: 'gold' as Accent,
      items: ['RSVP', 'Apply', 'Join'],
    },
    {
      title: 'Manage',
      accent: 'neutral' as Accent,
      items: ['Tasks', 'Members', 'Permissions'],
    },
  ];

  return (
    <div className="relative mx-auto max-w-[610px] lg:ml-auto">
      <div className="pointer-events-none absolute -inset-6 rounded-full bg-[#E51937] opacity-[0.035] blur-[65px]" />
      <div className="relative rounded-[16px] border border-white/[0.08] bg-[#111111] p-4 shadow-[0_20px_55px_rgba(0,0,0,0.42)]">
        <div className="mb-3.5 flex items-center justify-between gap-4">
          <div>
            <p className="mb-1 text-[10px] uppercase tracking-[0.16em] text-[#777777]">
              How the platform connects
            </p>
            <p className="text-sm font-semibold text-[#F5F5F5]">
              Discovery becomes participation, then club management.
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-[#E51937]/15 bg-[rgba(229,25,55,0.07)] px-2.5 py-1 text-[10px] font-semibold text-[#E51937]">
            Gryph ClubConnect
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {columns.map((column, index) => {
            const style = accentStyles[column.accent];

            return (
              <div key={column.title} className="relative">
                <div className="h-full rounded-[12px] border border-white/[0.08] bg-[#0B0B0B] p-3">
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full border text-[10px] font-bold ${style.border} ${style.background} ${style.text}`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm font-semibold text-[#F5F5F5]">
                      {column.title}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {column.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-[8px] border border-white/[0.06] bg-[#131313] px-3 py-2 text-[12px] text-[#9CA3AF]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {index < columns.length - 1 && (
                  <ArrowRight
                    size={15}
                    className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-[#777777] sm:block"
                    aria-hidden
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ScreenshotFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-[14px] border border-white/[0.08] bg-[#0B0B0B] p-3 shadow-[0_18px_52px_rgba(0,0,0,0.38)] sm:p-4">
      <img
        src={`${import.meta.env.BASE_URL}${src}`}
        alt={alt}
        className="block h-auto w-full rounded-[9px] object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function TabbedFeatureSection({
  eyebrow,
  eyebrowColor,
  tabs,
  reverse = false,
  dark = true,
}: {
  eyebrow: string;
  eyebrowColor: string;
  tabs: TabItem[];
  reverse?: boolean;
  dark?: boolean;
}) {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <section
      className={`border-t border-[#222222] py-16 sm:py-20 ${
        dark ? 'bg-[#0B0B0B]' : 'bg-[#111111]'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <AnimatedSection className={reverse ? 'order-1 lg:order-2' : ''}>
            <p className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] sm:text-xs ${eyebrowColor}`}>
              {eyebrow}
            </p>
            <h2 className="mb-4 font-sans text-2xl font-extrabold leading-tight text-[#F5F5F5] sm:text-3xl">
              {active.title}
            </h2>
            <p className="mb-5 text-base leading-relaxed text-[#9CA3AF]">
              {active.body}
            </p>
            <ul className="mb-6 space-y-2">
              {active.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#E51937]" />
                  <span className="leading-snug text-[#9CA3AF]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const selected = tab.id === active.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveId(tab.id)}
                    className={`rounded-full border px-3.5 py-2 text-[13px] font-semibold transition-colors ${
                      selected
                        ? 'border-[#E51937]/35 bg-[rgba(229,25,55,0.12)] text-[#F5F5F5]'
                        : 'border-white/[0.08] bg-[#131313] text-[#9CA3AF] hover:border-white/[0.14] hover:text-[#F5F5F5]'
                    }`}
                    aria-pressed={selected}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay={0.08}
            className={reverse ? 'order-2 lg:order-1' : ''}
          >
            <ScreenshotFrame src={active.imageSrc} alt={active.imageAlt} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function SingleFeatureSection({
  eyebrow,
  eyebrowColor,
  title,
  body,
  bullets,
  imageSrc,
  imageAlt,
  reverse = false,
  dark = true,
}: {
  eyebrow: string;
  eyebrowColor: string;
  title: string;
  body: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  dark?: boolean;
}) {
  return (
    <section
      className={`border-t border-[#222222] py-16 sm:py-20 ${
        dark ? 'bg-[#0B0B0B]' : 'bg-[#111111]'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <AnimatedSection className={reverse ? 'order-1 lg:order-2' : ''}>
            <p className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] sm:text-xs ${eyebrowColor}`}>
              {eyebrow}
            </p>
            <h2 className="mb-4 font-sans text-2xl font-extrabold leading-tight text-[#F5F5F5] sm:text-3xl">
              {title}
            </h2>
            <p className="mb-5 text-base leading-relaxed text-[#9CA3AF]">
              {body}
            </p>
            <ul className="space-y-2">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#E51937]" />
                  <span className="leading-snug text-[#9CA3AF]">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection
            delay={0.08}
            className={reverse ? 'order-2 lg:order-1' : ''}
          >
            <ScreenshotFrame src={imageSrc} alt={imageAlt} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default function FeaturesPage() {
  const navigate = useNavigate();

  const handleOnboard = () => {
    goToDemoForm({
      interest: 'Onboard my club',
      navigate,
      pathname: '/features',
    });
  };

  const handleDemo = () => {
    goToDemoForm({
      interest: 'Request a demo',
      navigate,
      pathname: '/features',
    });
  };

  const handleStudentAccess = () => {
    goToStudentAccess({ navigate, pathname: '/features' });
  };

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#0B0B0B] lg:min-h-[calc(100vh-4rem)]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#E51937] opacity-[0.04] blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 xl:gap-14">
            <AnimatedSection className="flex min-w-0 flex-col">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
                Platform overview
              </p>

              <h1
                className="mt-4 max-w-[38rem] font-sans font-extrabold leading-[1.04] tracking-tight text-[#F5F5F5] sm:mt-5"
                style={{ fontSize: 'clamp(2.2rem, 3.9vw, 3.55rem)' }}
              >
                One platform connecting student discovery and club operations.
              </h1>

              <p
                className="mt-4 max-w-[38rem] text-lg text-[#9CA3AF] sm:mt-5 sm:text-xl"
                style={{ lineHeight: '1.6' }}
              >
                Gryph ClubConnect helps students discover clubs, events, and
                opportunities while giving club teams one workspace to manage
                members, tasks, meetings, hiring, permissions, and more.
              </p>

              <div className="mt-6 flex flex-col items-start gap-3 sm:mt-7 sm:flex-row sm:items-center">
                <Button
                  variant="red"
                  size="md"
                  onClick={handleOnboard}
                  className="w-[230px] whitespace-nowrap shadow-[0_8px_24px_rgba(229,25,55,0.22)] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                >
                  Get Your Club Started
                </Button>

                <Button
                  variant="ghost"
                  size="md"
                  onClick={handleDemo}
                  className="w-[230px] whitespace-nowrap sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                >
                  Request a Demo
                </Button>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-[#9CA3AF] sm:mt-6">
                <span className="inline-flex items-center gap-2">
                  <span className="text-[#E51937]">✓</span>
                  Student discovery
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="text-[#E51937]">✓</span>
                  Club operations
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="text-[#E51937]">✓</span>
                  Leadership controls
                </span>
              </div>

              <p className="mt-4 max-w-[38rem] text-[13px] leading-relaxed text-[#777777]">
                Student-built for UofG club life. Independent from the University
                of Guelph.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="relative min-w-0 lg:scale-[0.94] lg:origin-center">
              <ProductMapVisual />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-t border-[#222222] bg-[#111111] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
              How the platform connects
            </p>
            <h2 className="mb-3 font-sans text-2xl font-extrabold text-[#F5F5F5] sm:text-3xl">
              Built around the full path from discovery to club management.
            </h2>
            <p className="text-base leading-relaxed text-[#9CA3AF]">
              Students, club teams, and leaders work in different parts of the same connected system.
            </p>
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3"
            staggerDelay={0.08}
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const style = accentStyles[pillar.accent];

              return (
                <StaggerItem key={pillar.title}>
                  <div className="relative h-full overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#131313] p-6 sm:p-7">
                    <span className={`absolute inset-x-0 top-0 h-[2px] ${style.top}`} />
                    <div
                      className={`mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] border ${style.border} ${style.background} ${style.text}`}
                    >
                      <Icon size={18} />
                    </div>
                    <h3 className="mb-3 font-sans text-lg font-bold text-[#F5F5F5]">
                      {pillar.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-[#9CA3AF]">
                      {pillar.body}
                    </p>
                    <ul className="space-y-2">
                      {pillar.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-[13px] text-[#F5F5F5]"
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${style.top}`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-[#222222] bg-[#0B0B0B] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
              Platform overview
            </p>
            <h2 className="mb-3 font-sans text-2xl font-extrabold text-[#F5F5F5] sm:text-3xl">
              Explore, coordinate, and lead from one platform.
            </h2>
            <p className="text-base leading-relaxed text-[#9CA3AF]">
              A quick view of the core workflows before exploring the product in more detail.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {overviewBands.map((band) => {
              const style = accentStyles[band.accent];

              return (
                <AnimatedSection key={band.title}>
                  <div className="rounded-[14px] border border-white/[0.08] bg-[#131313] p-5 sm:p-6">
                    <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[0.32fr_0.68fr] lg:gap-8">
                      <div>
                        <p className={`mb-2 text-sm font-semibold uppercase tracking-[0.14em] ${style.text}`}>
                          {band.title}
                        </p>
                        <p className="text-sm leading-relaxed text-[#9CA3AF]">
                          {band.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 xl:grid-cols-5">
                        {band.items.map(({ label, icon: Icon }) => (
                          <div
                            key={label}
                            className="flex items-center gap-2.5 rounded-[10px] border border-white/[0.07] bg-[#0B0B0B] px-3 py-3"
                          >
                            <Icon size={15} className={style.text} />
                            <span className="text-[12px] font-medium text-[#F5F5F5]">
                              {label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <TabbedFeatureSection
        eyebrow="Student experience"
        eyebrowColor="text-[#E51937]"
        tabs={studentTabs}
        dark={false}
      />

      <SingleFeatureSection
        eyebrow="Events & RSVPs"
        eyebrowColor="text-[#FFC429]"
        title="Connect event discovery, sign-ups, and attendee management."
        body="Students can discover and RSVP for events while club teams collect responses, review attendees, and keep event planning connected."
        bullets={[
          'Public event discovery',
          'Custom RSVP questions',
          'Attendee lists and responses',
          'Event-linked planning tasks',
        ]}
        imageSrc="screenshots/features-events-rsvp-management.png"
        imageAlt="Gryph ClubConnect events and RSVP management"
        reverse
      />

      <SingleFeatureSection
        eyebrow="Command Center"
        eyebrowColor="text-[#FFC429]"
        title="See what needs attention across your club."
        body="Give presidents and executives one overview for pending actions, upcoming activity, assigned work, applications, and setup progress."
        bullets={[
          'Pending actions and requests',
          'Upcoming events and meetings',
          'Tasks awaiting action',
          'Applications and member requests',
        ]}
        imageSrc="screenshots/features-command-center-operations.png"
        imageAlt="Gryph ClubConnect Command Center"
        dark={false}
      />

      <section className="border-t border-[#222222] bg-[#111111] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 h-[2px] w-20 bg-gradient-to-r from-[#E51937] to-[#FFC429]" />
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
              Explore the platform
            </p>
            <h2 className="mb-3 font-sans text-2xl font-extrabold text-[#F5F5F5] sm:text-3xl">
              See how the core club workflows work together.
            </h2>
            <p className="text-base leading-relaxed text-[#9CA3AF]">
              From assigning work to managing applicants and access, each workflow stays connected to the wider club workspace.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <TabbedFeatureSection
        eyebrow="Team coordination"
        eyebrowColor="text-[#E51937]"
        tabs={coordinationTabs}
      />

      <SingleFeatureSection
        eyebrow="Hiring"
        eyebrowColor="text-[#FFC429]"
        title="Manage club hiring from posting to decision."
        body="Publish positions, collect structured applications, review candidates, and move applicants through a clear hiring process."
        bullets={[
          'Public role listings',
          'Custom application questions',
          'Candidate review',
          'Status pipeline',
        ]}
        imageSrc="screenshots/features-hiring-candidate-pipeline.png"
        imageAlt="Gryph ClubConnect hiring candidate pipeline"
        reverse
        dark={false}
      />

      <TabbedFeatureSection
        eyebrow="Club leadership"
        eyebrowColor="text-[#E51937]"
        tabs={leadershipTabs}
      />

      <section className="border-t border-[#222222] bg-[#111111] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl sm:mb-12">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
              Connected workflows
            </p>
            <h2 className="mb-3 font-sans text-2xl font-extrabold text-[#F5F5F5] sm:text-3xl">
              Every action connects to the next step.
            </h2>
            <p className="text-base leading-relaxed text-[#9CA3AF]">
              Student discovery, applications, events, club operations, and leadership controls work together instead of living in separate tools.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
              {flowSteps.map((step, index) => {
                const Icon = step.icon;
                const red = index % 2 === 0;

                return (
                  <div key={step.title} className="relative">
                    <div className="h-full rounded-[12px] border border-white/[0.08] bg-[#131313] p-4 text-center">
                      <div
                        className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border ${
                          red
                            ? 'border-[#E51937]/30 bg-[rgba(229,25,55,0.1)] text-[#E51937]'
                            : 'border-[#FFC429]/30 bg-[rgba(255,196,41,0.1)] text-[#FFC429]'
                        }`}
                      >
                        <Icon size={17} />
                      </div>
                      <p className="mb-1 text-[10px] tabular-nums text-[#666666]">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mb-1.5 text-sm font-semibold text-[#F5F5F5]">
                        {step.title}
                      </h3>
                      <p className="text-[12px] leading-snug text-[#9CA3AF]">
                        {step.description}
                      </p>
                    </div>

                    {index < flowSteps.length - 1 && (
                      <ArrowRight
                        size={15}
                        className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-[#4A4A4A] md:block"
                        aria-hidden
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-[#222222] bg-[#0B0B0B] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8 max-w-3xl sm:mb-10">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFC429] sm:text-xs">
              Before and after
            </p>
            <h2 className="mb-3 font-sans text-2xl font-extrabold text-[#F5F5F5] sm:text-3xl">
              Replace scattered tools with connected workflows.
            </h2>
            <p className="text-base leading-relaxed text-[#9CA3AF]">
              Bring the work clubs already do into a workspace designed to keep information, ownership, and follow-through connected.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#131313] lg:grid-cols-2">
              <div className="border-b border-white/[0.08] p-6 sm:p-7 lg:border-b-0 lg:border-r">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#777777]">
                  Before
                </p>
                <div className="space-y-3">
                  {beforeItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-[9px] border border-white/[0.06] bg-[#0B0B0B] px-4 py-3 text-sm text-[#777777]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E51937]">
                  With Gryph ClubConnect
                </p>
                <div className="space-y-3">
                  {afterItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 rounded-[9px] border border-[#E51937]/15 bg-[rgba(229,25,55,0.06)] px-4 py-3 text-sm text-[#F5F5F5]"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#E51937]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[#222222] bg-[#111111] py-16 sm:py-20">
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <AnimatedSection>
            <h2 className="mb-4 font-sans text-3xl font-extrabold text-[#F5F5F5] sm:text-4xl">
              See how Gryph ClubConnect could work for your club.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[#9CA3AF]">
              Request a walkthrough focused on the workflows your team uses and see how your club could prepare for early access.
            </p>

            <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              <Button
                variant="red"
                size="lg"
                onClick={handleOnboard}
                className="w-full sm:w-auto"
              >
                Get Your Club Started
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={handleDemo}
                className="w-full sm:w-auto"
              >
                Request a Demo
              </Button>
            </div>

            <button
              type="button"
              onClick={handleStudentAccess}
              className="mt-6 text-sm text-[#9CA3AF] underline underline-offset-2 transition-colors hover:text-[#F5F5F5]"
            >
              Looking for student access? Explore the student experience.
            </button>

            <div className="mt-4">
              <Link
                to="/for-students"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E51937] transition-colors hover:text-[#FF6B7D]"
              >
                View the For Students page
                <ArrowRight size={15} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
