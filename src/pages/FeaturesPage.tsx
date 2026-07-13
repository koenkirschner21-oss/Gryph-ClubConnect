import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
  },
  {
    title: 'Club Operations',
    body: 'Club teams can manage announcements, chat, events, tasks, meetings, documents, members, and resources from one workspace.',
    examples: ['Command Center', 'Announcements', 'Events and tasks', 'Meetings and notes', 'Documents and members'],
    accent: 'gold' as const,
  },
  {
    title: 'Leadership Controls',
    body: 'Club leaders can review applicants, track analytics, manage setup, invite members, and control roles and permissions.',
    examples: ['Hiring pipeline', 'Analytics', 'Setup checklist', 'Invites and join codes', 'Roles and permissions'],
    accent: 'neutral' as const,
  },
];

const featureGroups = [
  {
    title: 'Student Discovery',
    accent: 'red' as const,
    cards: [
      { title: 'Explore Clubs', description: 'Browse clubs by name, category, interest, or activity.' },
      { title: 'Club Profiles', description: 'View what a club does, meeting info, events, roles, and ways to get involved.' },
      { title: 'Events & RSVPs', description: 'Discover events, sign up, answer questions, and keep track of what is coming up.' },
      { title: 'Role Applications', description: 'Browse open roles, submit applications, and track progress.' },
      { title: 'Student Dashboard', description: 'See clubs, events, tasks, applications, and inbox updates from one account.' },
      { title: 'Inbox & Notifications', description: 'Keep upcoming actions and updates visible.' },
    ],
  },
  {
    title: 'Club Operations',
    accent: 'gold' as const,
    cards: [
      { title: 'Command Center', description: 'See pending actions, setup progress, quick actions, events, tasks, and applications.' },
      { title: 'Announcements', description: 'Post updates members can find later instead of burying them in chats.' },
      { title: 'Chat & Messaging', description: 'Keep club conversations, direct messages, reactions, and replies inside the workspace.' },
      { title: 'Tasks & Assignments', description: 'Assign work, set due dates, track progress, and review completion.' },
      { title: 'Meetings & Notes', description: 'Prepare agendas, capture notes and decisions, and turn follow-ups into tasks.' },
      { title: 'Documents & Resources', description: 'Keep files, links, categories, and resources organized by visibility.' },
    ],
  },
  {
    title: 'Leadership & Admin',
    accent: 'neutral' as const,
    cards: [
      { title: 'Event Management', description: 'Create events, collect RSVP answers, manage attendees, and connect planning tasks.' },
      { title: 'Hiring Pipeline', description: 'Post roles, review applicants, and move candidates through statuses.' },
      { title: 'Members & Org Chart', description: 'Manage the roster, role titles, invites, and club structure.' },
      { title: 'Invites & Join Codes', description: 'Control how students join through open, approval, invite-only, or join-code flows.' },
      { title: 'Analytics', description: 'Track member growth, RSVP trends, task completion, announcements, hiring, and profile views.' },
      { title: 'Roles & Permissions', description: 'Give Presidents, executives, and members the right level of access.' },
    ],
  },
];

const deepDives = [
  {
    eyebrow: 'Deep dive · Dashboard',
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
    eyebrow: 'Deep dive · Discovery',
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
    eyebrow: 'Deep dive · Events & RSVPs',
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
    eyebrow: 'Deep dive · Command Center',
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
    eyebrow: 'Deep dive · Tasks',
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
    eyebrow: 'Deep dive · Meetings',
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
    eyebrow: 'Deep dive · Documents',
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
    eyebrow: 'Deep dive · Hiring',
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
    eyebrow: 'Deep dive · Members, Roles & Permissions',
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
    eyebrow: 'Deep dive · Analytics',
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

const flowSteps = [
  'A student discovers a club',
  'They view the public club profile',
  'They RSVP for an event or apply for a role',
  'Club leaders review interest, applications, and members',
  'The team manages events, tasks, meetings, announcements, and documents',
  'Roles, permissions, analytics, and notifications keep everyone organized',
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
  red: { bar: 'bg-[#E51937]', dot: 'bg-[#E51937]', text: 'text-[#E51937]' },
  gold: { bar: 'bg-[#FFC429]', dot: 'bg-[#FFC429]', text: 'text-[#FFC429]' },
  neutral: { bar: 'bg-[rgba(255,255,255,0.22)]', dot: 'bg-[#9CA3AF]', text: 'text-[#9CA3AF]' },
};

const groupAccent = {
  red: 'text-[#E51937]',
  gold: 'text-[#FFC429]',
  neutral: 'text-[#9CA3AF]',
};

function OverviewCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[10px] border border-white/[0.08] bg-[#131313] p-4 h-full">
      <h4 className="text-[#F5F5F5] font-semibold text-sm mb-1.5">{title}</h4>
      <p className="text-[#9CA3AF] text-[13px] leading-relaxed">{description}</p>
    </div>
  );
}

function DeepDiveSection({
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
}: (typeof deepDives)[number]) {
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
            <div className="inline-flex items-center rounded-[8px] border border-white/[0.08] bg-[#131313] px-3 py-2">
              <span className="text-[11px] text-[#777777] mr-2">Who uses it</span>
              <span className="text-[13px] text-[#F5F5F5] font-medium">{whoUsesIt}</span>
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
      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden bg-[#0B0B0B]">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#E51937] opacity-[0.04] blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-4">
              Features
            </p>
            <h1
              className="font-sans font-extrabold text-[#F5F5F5] mb-5 leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
            >
              Features built for the full club lifecycle.
            </h1>
            <p className="text-[#9CA3AF] text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              From discovering clubs to running events, reviewing applications, assigning tasks, managing members, hosting meetings, tracking analytics, and controlling permissions, Gryph ClubConnect brings club life into one organized platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
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
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#131313] p-6 sm:p-7">
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
          <div className="space-y-12">
            {featureGroups.map((group) => (
              <AnimatedSection key={group.title}>
                <h3 className={`text-sm font-semibold uppercase tracking-[0.14em] mb-4 ${groupAccent[group.accent]}`}>
                  {group.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {group.cards.map((card) => (
                    <OverviewCard key={card.title} title={card.title} description={card.description} />
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

      {/* 6. Deep Dives */}
      {deepDives.map((dive) => (
        <DeepDiveSection key={dive.title} {...dive} />
      ))}

      {/* 7. Connected Workflows */}
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
              {flowSteps.map((step, index) => (
                <div key={step} className="relative">
                  <div className="rounded-[10px] border border-white/[0.08] bg-[#131313] p-4 h-full flex flex-col">
                    <span
                      className={`mb-3 flex h-8 w-8 items-center justify-center rounded-full border text-[11px] font-bold tabular-nums ${
                        index % 2 === 0
                          ? 'border-[#E51937]/35 bg-[rgba(229,25,55,0.12)] text-[#E51937]'
                          : 'border-[#FFC429]/35 bg-[rgba(255,196,41,0.12)] text-[#FFC429]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-[13px] text-[#F5F5F5] leading-snug flex-1">{step}</p>
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
              ))}
            </div>

            <div className="lg:hidden space-y-3">
              {flowSteps.map((step, index) => (
                <div
                  key={step}
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
                  <p className="pt-1 text-[14px] text-[#F5F5F5] leading-snug">{step}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 8. Comparison */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl">
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
                  className={`grid grid-cols-1 sm:grid-cols-[minmax(0,200px)_1fr] gap-3 sm:gap-6 px-5 py-4 ${
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

      {/* 9. Final CTA */}
      <section className="relative py-20 sm:py-24 overflow-hidden bg-[#0B0B0B] border-t border-[#222222]">
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
