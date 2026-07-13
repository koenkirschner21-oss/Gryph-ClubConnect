import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Compass,
  Building2,
  Calendar,
  Briefcase,
  LayoutDashboard,
  Bell,
  LayoutGrid,
  Megaphone,
  MessageSquare,
  CheckSquare,
  NotebookPen,
  FolderOpen,
  CalendarDays,
  UserCheck,
  Users,
  KeyRound,
  BarChart3,
  Shield,
  Search,
  Eye,
  ClipboardList,
  Settings2,
  FolderKanban,
  Layers,
  type LucideIcon,
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import FeatureScreenshotPlaceholder from '../components/features/FeatureScreenshotPlaceholder';
import {
  goToSection,
  ONBOARD_CLUB_ID,
  REQUEST_DEMO_ID,
  STUDENT_ACCESS_ID,
  setClubFormInterest,
} from '../lib/cta';

const pillars = [
  {
    title: 'Student Discovery',
    body: 'Students can explore clubs, view public profiles, discover events, RSVP, apply for roles, and track involvement from one account.',
    examples: ['Explore clubs', 'Public profiles', 'Events and RSVPs', 'Role applications', 'Student dashboard'],
    accent: 'red' as const,
    hover:
      'hover:border-[#E51937]/45 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(229,25,55,0.12)]',
  },
  {
    title: 'Club Operations',
    body: 'Club teams can manage announcements, chat, events, tasks, meetings, documents, members, and resources from one workspace.',
    examples: ['Command Center', 'Announcements', 'Events and tasks', 'Meetings and notes', 'Documents and members'],
    accent: 'gold' as const,
    hover:
      'hover:border-[#FFC429]/40 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,196,41,0.1)]',
  },
  {
    title: 'Leadership Controls',
    body: 'Club leaders can review applicants, track analytics, manage setup, invite members, and control roles and permissions.',
    examples: ['Hiring pipeline', 'Analytics', 'Setup checklist', 'Invites and join codes', 'Roles and permissions'],
    accent: 'neutral' as const,
    hover:
      'hover:border-white/[0.18] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]',
  },
];

const featureGroups: {
  title: string;
  accent: 'red' | 'gold' | 'neutral';
  cards: { title: string; description: string; icon: LucideIcon }[];
}[] = [
  {
    title: 'Student Discovery',
    accent: 'red',
    cards: [
      { title: 'Explore Clubs', description: 'Search by name, category, interest, or activity.', icon: Compass },
      { title: 'Club Profiles', description: 'View meeting info, events, roles, and join options.', icon: Building2 },
      { title: 'Events & RSVPs', description: 'Discover events, sign up, and track what is coming up.', icon: Calendar },
      { title: 'Role Applications', description: 'Apply for open roles and track progress.', icon: Briefcase },
      { title: 'Student Dashboard', description: 'See clubs, events, tasks, applications, and inbox updates.', icon: LayoutDashboard },
      { title: 'Inbox & Notifications', description: 'Keep upcoming actions visible.', icon: Bell },
    ],
  },
  {
    title: 'Club Operations',
    accent: 'gold',
    cards: [
      { title: 'Command Center', description: 'See pending actions, setup progress, events, tasks, and applications.', icon: LayoutGrid },
      { title: 'Announcements', description: 'Post updates members can find later.', icon: Megaphone },
      { title: 'Chat & Messaging', description: 'Keep club conversations inside the workspace.', icon: MessageSquare },
      { title: 'Tasks & Assignments', description: 'Assign work, track progress, and review completion.', icon: CheckSquare },
      { title: 'Meetings & Notes', description: 'Capture agendas, notes, decisions, and follow-ups.', icon: NotebookPen },
      { title: 'Documents & Resources', description: 'Organize files, links, and resources by visibility.', icon: FolderOpen },
    ],
  },
  {
    title: 'Leadership & Admin',
    accent: 'neutral',
    cards: [
      { title: 'Event Management', description: 'Manage RSVPs, attendees, and planning tasks.', icon: CalendarDays },
      { title: 'Hiring Pipeline', description: 'Review applicants and move candidates through statuses.', icon: UserCheck },
      { title: 'Members & Org Chart', description: 'Manage the roster, roles, invites, and structure.', icon: Users },
      { title: 'Invites & Join Codes', description: 'Control how students join the club.', icon: KeyRound },
      { title: 'Analytics', description: 'Track members, events, tasks, announcements, hiring, and views.', icon: BarChart3 },
      { title: 'Roles & Permissions', description: 'Give each role the right level of access.', icon: Shield },
    ],
  },
];

const featureDetails = [
  {
    eyebrow: 'Dashboard',
    eyebrowColor: 'text-[#E51937]',
    title: 'One dashboard for everything students are involved in.',
    body: 'Students can see upcoming events, tasks, club activity, applications, and inbox updates across the clubs they care about.',
    bullets: ['Cross-club overview', 'Upcoming events', 'Tasks and applications', 'Inbox updates and pending actions'],
    whoUsesIt: 'Students and members',
    label: 'Student Dashboard Overview',
    subtext: 'Student dashboard showing clubs, events, tasks, applications, and inbox updates.',
    reverse: false,
    dark: true,
  },
  {
    eyebrow: 'Discovery',
    eyebrowColor: 'text-[#E51937]',
    title: 'Discover clubs without hunting through scattered links.',
    body: 'Students can search clubs, browse categories, view public profiles, and find opportunities to get involved.',
    bullets: ['Search by club name, category, or interest', 'Browse public club profiles', 'View meetings, events, roles, and join options', 'Save or follow clubs for later'],
    whoUsesIt: 'Students and prospective members',
    label: 'Explore Clubs',
    subtext: 'Explore page with search, categories, club cards, and join states.',
    reverse: true,
    dark: false,
  },
  {
    eyebrow: 'Events & RSVPs',
    eyebrowColor: 'text-[#FFC429]',
    title: 'Make events easier to find, manage, and attend.',
    body: 'Students can discover events and sign up, while club leaders can collect RSVP answers, manage attendees, and connect event planning work.',
    bullets: ['Event discovery and RSVP flows', 'Signup questions and responses', 'Attendee lists and approval states', 'Event-linked planning tasks'],
    whoUsesIt: 'Students, members, executives, and event leads',
    label: 'Events & RSVP Management',
    subtext: 'Event management view with RSVP answers, attendee list, and planning tasks.',
    reverse: false,
    dark: true,
  },
  {
    eyebrow: 'Command Center',
    eyebrowColor: 'text-[#FFC429]',
    title: 'Run club operations from one workspace.',
    body: 'The Command Center gives club leaders a clear overview of pending actions, upcoming activity, quick actions, setup progress, applications, and tasks.',
    bullets: ['Pending actions and requests', 'Quick actions for common work', 'Upcoming activity at a glance', 'Setup checklist and workspace progress'],
    whoUsesIt: 'Presidents, Co-Presidents, and executives',
    label: 'Club Command Center',
    subtext: 'President view with pending actions, quick actions, events, tasks, hiring, and setup progress.',
    reverse: true,
    dark: false,
  },
  {
    eyebrow: 'Tasks',
    eyebrowColor: 'text-[#E51937]',
    title: 'Keep ownership clear.',
    body: 'Assign tasks, set due dates, review progress, and avoid work falling through the cracks.',
    bullets: ['Assigned to me and assigned by me views', 'Owners, due dates, and priority', 'Status tracking across work stages', 'Review, send-back, and completion flow'],
    whoUsesIt: 'Executives, members, and task owners',
    label: 'Tasks & Review',
    subtext: 'Tasks view with owners, due dates, statuses, comments, and review states.',
    reverse: false,
    dark: true,
  },
  {
    eyebrow: 'Meetings',
    eyebrowColor: 'text-[#FFC429]',
    title: 'Turn meetings into follow-through.',
    body: 'Club teams can prepare agendas, capture notes and decisions, and turn follow-ups into assigned tasks.',
    bullets: ['Meeting scheduling', 'Agendas and notes', 'Decisions and recaps', 'Follow-up tasks'],
    whoUsesIt: 'Executives and meeting participants',
    label: 'Meetings & Notes',
    subtext: 'Meeting detail view with agenda, notes, decisions, and follow-up tasks.',
    reverse: true,
    dark: false,
  },
  {
    eyebrow: 'Documents',
    eyebrowColor: 'text-[#E51937]',
    title: 'Keep resources where members can find them.',
    body: 'Clubs can organize documents, links, files, and resources by category and visibility so important materials do not disappear in shared drives.',
    bullets: ['File and resource library', 'Categories and search', 'Visibility controls', 'Links to external resources'],
    whoUsesIt: 'Executives and members',
    label: 'Documents & Resources',
    subtext: 'Documents library with categories, files, resource links, and visibility settings.',
    reverse: false,
    dark: true,
  },
  {
    eyebrow: 'Hiring',
    eyebrowColor: 'text-[#FFC429]',
    title: 'Manage club hiring from posting to decision.',
    body: 'Clubs can post roles, collect applications, review candidates, and move people through a clear status pipeline.',
    bullets: ['Public role listings', 'Custom application questions', 'Candidate review', 'Status pipeline'],
    whoUsesIt: 'Students, applicants, reviewers, and hiring leads',
    label: 'Hiring Pipeline',
    subtext: 'Hiring view with role listings, applications, reviewer notes, and candidate statuses.',
    reverse: true,
    dark: false,
  },
  {
    eyebrow: 'Members, Roles & Permissions',
    eyebrowColor: 'text-[#E51937]',
    title: 'Give people the right level of access.',
    body: 'Club leaders can manage members, invites, role titles, org structure, and permissions so the right people have the right controls.',
    bullets: ['Member directory', 'Invites and join codes', 'Role tiers and custom titles', 'Permission controls by access level'],
    whoUsesIt: 'Presidents, Co-Presidents, managerial executives, executives, and members',
    label: 'Members, Roles & Permissions',
    subtext: 'Member roster, org tiers, invites, and permission matrix.',
    reverse: false,
    dark: true,
  },
  {
    eyebrow: 'Analytics',
    eyebrowColor: 'text-[#FFC429]',
    title: 'See what is working across your club.',
    body: 'Club leaders can review trends across members, events, tasks, announcements, hiring, and public profile activity.',
    bullets: ['Member growth', 'RSVP and event trends', 'Task completion', 'Announcement engagement', 'Hiring funnel', 'Public profile views'],
    whoUsesIt: 'Presidents and managerial executives',
    label: 'Club Analytics',
    subtext: 'Analytics dashboard with member, event, task, announcement, hiring, and profile insights.',
    reverse: true,
    dark: false,
  },
];

const flowSteps: { title: string; description: string; icon: LucideIcon }[] = [
  { title: 'Discover', description: 'A student finds a club.', icon: Search },
  { title: 'View profile', description: 'They learn what the club does and how to get involved.', icon: Eye },
  { title: 'RSVP or apply', description: 'They sign up for an event or apply for a role.', icon: ClipboardList },
  { title: 'Review', description: 'Club leaders review interest, applications, and members.', icon: UserCheck },
  { title: 'Manage work', description: 'The team coordinates events, tasks, meetings, announcements, and documents.', icon: FolderKanban },
  { title: 'Stay organized', description: 'Roles, permissions, analytics, and notifications keep everyone aligned.', icon: Settings2 },
];

const comparisons = [
  {
    instead: 'Instagram posts',
    helps: 'Gryph ClubConnect gives clubs discoverable updates, events, and public profiles.',
  },
  {
    instead: 'Group chats',
    helps: 'Gryph ClubConnect keeps announcements, chat, tasks, and decisions organized in one workspace.',
  },
  {
    instead: 'Google Forms',
    helps: 'Gryph ClubConnect collects event RSVPs, signup questions, join requests, and applications.',
  },
  {
    instead: 'Spreadsheets',
    helps: 'Gryph ClubConnect tracks members, roles, tasks, hiring, and event attendance context.',
  },
  {
    instead: 'Shared drives',
    helps: 'Gryph ClubConnect keeps documents, links, and resources organized by category and visibility.',
  },
  {
    instead: 'Random meeting notes',
    helps: 'Gryph ClubConnect helps teams prepare agendas, capture decisions, and assign follow-up tasks.',
  },
  {
    instead: 'Random links',
    helps: 'Gryph ClubConnect keeps club info, events, roles, and join paths in one public profile.',
  },
];

const pillarAccent = {
  red: { bar: 'bg-[#E51937]', dot: 'bg-[#E51937]' },
  gold: { bar: 'bg-[#FFC429]', dot: 'bg-[#FFC429]' },
  neutral: { bar: 'bg-[rgba(255,255,255,0.22)]', dot: 'bg-[#9CA3AF]' },
};

const groupAccent = {
  red: {
    label: 'text-[#E51937]',
    icon: 'bg-[rgba(229,25,55,0.12)] border-[#E51937]/25 text-[#E51937]',
  },
  gold: {
    label: 'text-[#FFC429]',
    icon: 'bg-[rgba(255,196,41,0.12)] border-[#FFC429]/25 text-[#FFC429]',
  },
  neutral: {
    label: 'text-[#9CA3AF]',
    icon: 'bg-[#1A1A1A] border-white/[0.1] text-[#9CA3AF]',
  },
};

function HeroLifecycleVisual() {
  const layers = [
    { label: 'Student discovery', accent: 'border-l-[#E51937]', chip: 'bg-[rgba(229,25,55,0.12)] text-[#E51937]' },
    { label: 'Club workspace', accent: 'border-l-[#FFC429]', chip: 'bg-[rgba(255,196,41,0.12)] text-[#FFC429]' },
    { label: 'Leadership controls', accent: 'border-l-[rgba(255,255,255,0.28)]', chip: 'bg-[#1A1A1A] text-[#9CA3AF]' },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-full bg-[#E51937] opacity-[0.05] blur-[60px] pointer-events-none" />
      <div className="relative rounded-[14px] border border-white/[0.08] bg-[#131313] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.08] bg-[#0B0B0B]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          </div>
          <span className="ml-1 text-[11px] text-[#777777] font-medium tracking-tight">
            Club lifecycle
          </span>
        </div>
        <div
          className="p-5 sm:p-6 space-y-3"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Layers size={14} className="text-[#E51937]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777]">
              Three connected layers
            </p>
          </div>
          {layers.map((layer, index) => (
            <div
              key={layer.label}
              className={`rounded-[10px] border border-white/[0.08] border-l-[3px] ${layer.accent} bg-[#0B0B0B] px-4 py-3.5 flex items-center justify-between gap-3`}
            >
              <div>
                <p className="text-[10px] tabular-nums text-[#555555] mb-0.5">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="text-sm font-semibold text-[#F5F5F5]">{layer.label}</p>
              </div>
              <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${layer.chip}`}>
                Layer {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OverviewCard({
  title,
  description,
  icon: Icon,
  accent,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: 'red' | 'gold' | 'neutral';
}) {
  const styles = groupAccent[accent];
  return (
    <div className="rounded-[10px] border border-white/[0.08] bg-[#131313] p-4 h-full transition-colors duration-200 hover:border-white/[0.14] hover:bg-[#161616]">
      <div className={`w-8 h-8 rounded-[8px] border flex items-center justify-center mb-3 ${styles.icon}`}>
        <Icon size={15} />
      </div>
      <h4 className="text-[#F5F5F5] font-semibold text-sm mb-1">{title}</h4>
      <p className="text-[#9CA3AF] text-[13px] leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureDetailSection({
  eyebrow,
  eyebrowColor,
  title,
  body,
  bullets,
  whoUsesIt,
  label,
  subtext,
  reverse,
  dark,
}: (typeof featureDetails)[number]) {
  return (
    <section className={`py-16 sm:py-20 border-t border-[#222222] ${dark ? 'bg-[#0B0B0B]' : 'bg-[#111111]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <AnimatedSection className={reverse ? 'order-1 lg:order-2' : ''}>
            <span className={`text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] mb-3 block ${eyebrowColor}`}>
              {eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed mb-5">{body}</p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777] mb-3">
              What it helps with
            </p>
            <ul className="space-y-2 mb-5">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#E51937]" />
                  <span className="text-[#9CA3AF] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#1A1A1A] px-3 py-1.5 text-[12px] text-[#9CA3AF]">
              <span className="text-[#777777]">Used by:</span>
              <span className="text-[#C5C5C5]">{whoUsesIt}</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08} className={reverse ? 'order-2 lg:order-1' : ''}>
            <FeatureScreenshotPlaceholder label={label} subtext={subtext} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default function FeaturesPage() {
  const navigate = useNavigate();

  const handleOnboard = () => {
    setClubFormInterest('Onboard my club');
    goToSection(ONBOARD_CLUB_ID, { navigate, pathname: '/features' });
  };

  const handleDemo = () => {
    setClubFormInterest('Request a demo');
    goToSection(REQUEST_DEMO_ID, { navigate, pathname: '/features' });
  };

  const handleStudentAccess = () => {
    goToSection(STUDENT_ACCESS_ID, { navigate, pathname: '/features' });
  };

  return (
    <div className="page-transition">
      {/* 1. Hero */}
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 overflow-hidden bg-[#0B0B0B]">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#E51937] opacity-[0.04] blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <AnimatedSection>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-4">
                Features
              </p>
              <h1
                className="font-sans font-extrabold text-[#F5F5F5] mb-5 leading-tight"
                style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)' }}
              >
                Features built for the full club lifecycle.
              </h1>
              <p className="text-[#9CA3AF] text-base sm:text-lg max-w-xl leading-relaxed mb-7">
                From discovering clubs to running events, reviewing applications, assigning tasks, managing members, hosting meetings, tracking analytics, and controlling permissions — one organized platform.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5">
                <Button variant="red" size="lg" onClick={handleOnboard}>
                  Onboard Your Club
                </Button>
                <Button variant="ghost" size="lg" onClick={handleDemo}>
                  Request a Demo
                </Button>
              </div>
              <p className="text-[13px] text-[#777777]">
                Student-built for UofG club life. Independent from the University of Guelph.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <HeroLifecycleVisual />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 2. Product Pillars */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">
              Three layers of club life, connected.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Gryph ClubConnect supports the full path from discovery to day-to-day operations.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6" staggerDelay={0.08}>
            {pillars.map((pillar) => {
              const accent = pillarAccent[pillar.accent];
              return (
                <StaggerItem key={pillar.title}>
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#131313] p-6 sm:p-7 transition-all duration-200 cursor-default ${pillar.hover}`}
                  >
                    <span className={`absolute inset-x-0 top-0 h-[2px] ${accent.bar}`} aria-hidden />
                    <h3 className="text-lg font-bold text-[#F5F5F5] font-sans mb-3">{pillar.title}</h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed mb-5 flex-1">{pillar.body}</p>
                    <ul className="space-y-2">
                      {pillar.examples.map((ex) => (
                        <li key={ex} className="flex items-center gap-2 text-[13px] text-[#F5F5F5]">
                          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                          {ex}
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

      {/* 3. Grouped Feature Overview */}
      <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              Overview
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">
              What Gryph ClubConnect covers
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              The main workflows students and club leaders use across discovery, participation, and operations.
            </p>
          </AnimatedSection>
          <div className="space-y-10">
            {featureGroups.map((group) => (
              <AnimatedSection key={group.title}>
                <h3 className={`text-sm font-semibold uppercase tracking-[0.14em] mb-4 ${groupAccent[group.accent].label}`}>
                  {group.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {group.cards.map((card) => (
                    <OverviewCard
                      key={card.title}
                      title={card.title}
                      description={card.description}
                      icon={card.icon}
                      accent={group.accent}
                    />
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Student Features */}
      <section id="student-features" className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <AnimatedSection>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
                For students
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4">
                Discover, join, and stay organized.
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-6">
                Students can explore clubs, discover events, RSVP, apply for roles, and keep track of their involvement across clubs from one account.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  'Explore clubs by category, interest, or keyword',
                  'View public club profiles and meeting info',
                  'Discover events and RSVP',
                  'Apply for open club roles',
                  'Track applications, upcoming events, tasks, clubs, and inbox updates',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#E51937]" />
                    <span className="text-[#9CA3AF] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection('for-students', { navigate, pathname: '/features' });
                }}
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#E51937] hover:text-[#FF6B7D] transition-colors"
              >
                Explore student features
                <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <FeatureScreenshotPlaceholder
                label="Student Dashboard"
                subtext="Student dashboard with clubs, events, tasks, applications, and inbox updates."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 5. Club Leader Features */}
      <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <AnimatedSection delay={0.08} className="order-2 lg:order-1">
              <FeatureScreenshotPlaceholder
                label="Club Command Center"
                subtext="Command Center with pending actions, events, tasks, members, hiring, setup progress, and quick actions."
              />
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-3">
                For club leaders
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4">
                Run the work behind the club.
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-6">
                Club leaders can manage the operational side of club life without spreading work across group chats, spreadsheets, shared drives, forms, and last-minute messages.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  'Start from a Command Center with pending actions and quick actions',
                  'Create events, collect RSVP answers, and manage attendees',
                  'Assign tasks, review work, and track ownership',
                  'Run meetings with agendas, notes, decisions, and follow-ups',
                  'Manage documents, resources, members, invites, and roles',
                  'Review hiring applications and candidate statuses',
                  'View analytics and control permissions',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFC429]" />
                    <span className="text-[#9CA3AF] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/for-clubs"
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#FFC429] hover:text-[#FFD45C] transition-colors"
              >
                Explore club leader tools
                <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 6. Feature workflows intro */}
      <section className="py-14 sm:py-16 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              Feature workflows
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">
              Explore the core workflows.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed mb-3">
              Each workflow is designed around a real part of club life — from finding opportunities to managing events, tasks, meetings, members, hiring, and permissions.
            </p>
            <p className="text-[13px] text-[#777777]">
              Screenshots will be added as the product demo set is finalized.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 7. Feature detail sections */}
      {featureDetails.map((detail) => (
        <FeatureDetailSection key={detail.title} {...detail} />
      ))}

      {/* 8. Connected Workflows */}
      <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              Connected workflows
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">
              From discovery to club operations, everything connects.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Gryph ClubConnect is built so student interest, events, applications, tasks, meetings, members, and permissions work together instead of living in separate tools.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="hidden lg:grid lg:grid-cols-6 gap-3">
              {flowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative">
                    <div className="rounded-[10px] border border-white/[0.08] bg-[#131313] p-4 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full border text-[11px] font-bold tabular-nums ${
                            index % 2 === 0
                              ? 'border-[#E51937]/35 bg-[rgba(229,25,55,0.12)] text-[#E51937]'
                              : 'border-[#FFC429]/35 bg-[rgba(255,196,41,0.12)] text-[#FFC429]'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <Icon
                          size={15}
                          className={index % 2 === 0 ? 'text-[#E51937]' : 'text-[#FFC429]'}
                        />
                      </div>
                      <p className="text-sm font-semibold text-[#F5F5F5] mb-1.5">{step.title}</p>
                      <p className="text-[12px] text-[#9CA3AF] leading-snug flex-1">{step.description}</p>
                    </div>
                    {index < flowSteps.length - 1 && (
                      <span
                        className="absolute top-1/2 -right-2 z-10 hidden xl:block text-[#444444]"
                        aria-hidden
                      >
                        →
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="lg:hidden space-y-3">
              {flowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-[10px] border border-white/[0.08] bg-[#131313] px-4 py-4"
                  >
                    <span
                      className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full border text-[11px] font-bold tabular-nums ${
                        index % 2 === 0
                          ? 'border-[#E51937]/35 bg-[rgba(229,25,55,0.12)] text-[#E51937]'
                          : 'border-[#FFC429]/35 bg-[rgba(255,196,41,0.12)] text-[#FFC429]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-semibold text-[#F5F5F5]">{step.title}</p>
                        <Icon
                          size={14}
                          className={index % 2 === 0 ? 'text-[#E51937]' : 'text-[#FFC429]'}
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

      {/* 9. Comparison */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8 sm:mb-10 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-3">
              Compared
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans">
              Built to replace the scattered club stack.
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="rounded-[12px] border border-white/[0.08] bg-[#131313] overflow-hidden max-w-4xl">
              {comparisons.map((row, index) => (
                <div
                  key={row.instead}
                  className={`grid grid-cols-1 sm:grid-cols-[minmax(0,200px)_1fr] gap-2 sm:gap-6 px-5 py-3.5 ${
                    index < comparisons.length - 1 ? 'border-b border-white/[0.08]' : ''
                  }`}
                >
                  <p className="text-sm text-[#777777]">
                    Instead of {row.instead.toLowerCase()}:
                  </p>
                  <p className="text-sm text-[#F5F5F5] leading-relaxed flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#E51937]" />
                    {row.helps}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="relative py-16 sm:py-20 overflow-hidden bg-[#0B0B0B] border-t border-[#222222]">
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">
              Ready to see how it works for your club?
            </h2>
            <p className="text-[#9CA3AF] text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Gryph ClubConnect is onboarding UofG clubs ahead of launch. Request a demo, see the workflows, and get your club ready for a cleaner way to manage members, events, RSVPs, tasks, meetings, documents, hiring, announcements, analytics, and permissions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="red" size="lg" onClick={handleOnboard}>
                Onboard Your Club
              </Button>
              <Button variant="ghost" size="lg" onClick={handleDemo}>
                Request a Demo
              </Button>
            </div>
            <button
              type="button"
              onClick={handleStudentAccess}
              className="mt-6 text-sm text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors underline underline-offset-2"
            >
              Student? Request access to explore clubs and events.
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
