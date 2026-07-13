import { type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Megaphone,
  CalendarPlus,
  ListTodo,
  CheckSquare,
  NotebookPen,
  UserCheck,
  FolderOpen,
  BarChart3,
  Shield,
  Network,
  type LucideIcon,
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import FeatureScreenshotPlaceholder from '../components/features/FeatureScreenshotPlaceholder';
import {
  goToSection,
  ONBOARD_CLUB_ID,
  REQUEST_DEMO_ID,
  setClubFormInterest,
} from '../lib/cta';

const problemCards = [
  {
    title: 'Scattered updates',
    body: 'Announcements, reminders, and decisions get buried in group chats.',
    accent: 'red' as const,
  },
  {
    title: 'Unclear ownership',
    body: 'Exec teams lose track of who owns what, what is overdue, what still needs review, and who is responsible.',
    accent: 'gold' as const,
  },
  {
    title: 'Disconnected workflows',
    body: 'Events, RSVP answers, hiring, meetings, documents, member records, and follow-ups end up living in separate tools.',
    accent: 'neutral' as const,
  },
];

const commandCenterPoints = [
  'Setup checklist and workspace progress',
  'Pending join requests and applications',
  'Upcoming events and meetings',
  'Overdue tasks and tasks needing review',
  'Low RSVPs or event attention items',
  'Quick actions for announcements, events, tasks, and hiring',
  'Visibility into what the exec team needs to handle next',
];

const execStructurePoints = [
  'Give executives ownership over events, hiring, tasks, meetings, announcements, or documents',
  'Promote members into executive or managerial roles when responsibilities change',
  'Assign role titles and access levels',
  'Keep reporting structure visible',
  'See who owns what across the club',
  'Let members participate without giving everyone full admin control',
  'Make leadership transitions easier when roles change',
];

const execWorkflows: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Megaphone, title: 'Announcements', description: 'Post important updates members can find later.' },
  { icon: CalendarPlus, title: 'Events & RSVPs', description: 'Create events, collect sign-up answers, and track who is coming.' },
  { icon: ListTodo, title: 'Event planning tasks', description: 'Connect planning work directly to the event it supports.' },
  { icon: CheckSquare, title: 'Tasks & review', description: 'Assign work, set due dates, track status, and review completion.' },
  { icon: NotebookPen, title: 'Meetings & notes', description: 'Prepare agendas, capture decisions, and assign follow-ups.' },
  { icon: Network, title: 'Members, roles, and reporting', description: 'Promote members, assign titles, set reporting lines, and keep club structure clear.' },
  { icon: UserCheck, title: 'Hiring pipeline', description: 'Post open roles, review applicants, and move candidates through statuses.' },
  { icon: FolderOpen, title: 'Documents & resources', description: 'Keep files, links, forms, and resources organized by visibility.' },
  { icon: BarChart3, title: 'Analytics', description: 'Track member growth, events, tasks, announcements, hiring, and profile activity.' },
  { icon: Shield, title: 'Permissions', description: 'Control who can manage events, hiring, members, settings, chat, documents, and club content.' },
];

const eventPoints = [
  'Create public or member-facing events',
  'Add RSVP/sign-up questions',
  'Review answers and attendee lists',
  'Track who is going, interested, or needs follow-up',
  'Create planning tasks tied to the event',
  'Keep event details connected to the club workspace',
  'Give event leads a clear workflow without handing them full club control',
];

const eventProcess = ['Create event', 'Collect RSVPs', 'Review answers', 'Assign planning tasks', 'Follow up'];

const taskPoints = [
  'Assign owners',
  'Set due dates and priority',
  'Track To Do, In Progress, Needs Review, and Complete',
  'Comment on work',
  'Send work back for review',
  'See assigned-to-me and assigned-by-me views',
  'Connect tasks to event planning where relevant',
  'Give execs ownership without losing president oversight',
];

const meetingPoints = [
  'Meeting schedule',
  'Agendas',
  'Notes and recaps',
  'Decisions',
  'Follow-up tasks',
  'Visibility for the right club roles',
  'Clear record of what was discussed and who owns the next step',
];

const hiringPoints = [
  'Post open roles',
  'Add custom application questions',
  'Review applicant profiles and answers',
  'Move candidates through statuses',
  'Keep reviewer context organized',
  'Give hiring reviewers access to the hiring workflow without giving them full club settings',
  'Connect accepted candidates to roles or next steps',
];

const membersPoints = [
  'Member directory with role visibility',
  'Promote members into executive or managerial roles',
  'Assign custom role titles',
  'Assign who members or executives report to',
  'View club structure and reporting relationships',
  'Invite members and manage join codes',
  'Approve or decline join requests',
  'Set access levels by role',
  'Control who can manage events, hiring, members, settings, chat, documents, and announcements',
  'Update access when leadership changes',
];

const accessLevels = [
  {
    title: 'President / Co-President',
    body: 'Full club control across settings, members, permissions, hiring, events, analytics, and setup.',
    tone: 'red' as const,
  },
  {
    title: 'Managerial Executive',
    body: 'Elevated access for overseeing teams, workflows, members, hiring, events, or operations.',
    tone: 'gold' as const,
  },
  {
    title: 'Executive',
    body: 'Workflow-level access for responsibilities like events, announcements, tasks, meetings, documents, or hiring review.',
    tone: 'neutral' as const,
  },
  {
    title: 'General Member',
    body: 'Member-level access to participate, view appropriate updates, RSVP, complete assigned tasks, and stay involved.',
    tone: 'muted' as const,
  },
];

const analyticsPoints = [
  'Member growth',
  'Event and RSVP trends',
  'Task completion',
  'Announcement engagement',
  'Hiring funnel',
  'Profile views / interest signals',
];

const comparisons = [
  {
    instead: 'group chats',
    helps: 'Use announcements, chat, tasks, and decisions in one workspace.',
  },
  {
    instead: 'Google Forms',
    helps: 'Collect RSVPs, join requests, and applications inside the platform.',
  },
  {
    instead: 'spreadsheets',
    helps: 'Track members, roles, reporting, tasks, hiring, and event context in one place.',
  },
  {
    instead: 'shared drives',
    helps: 'Organize documents, links, and resources by category and visibility.',
  },
  {
    instead: 'random meeting notes',
    helps: 'Capture agendas, decisions, recaps, and follow-up tasks.',
  },
  {
    instead: 'Instagram-only updates',
    helps: 'Keep public profiles, events, roles, and club updates discoverable.',
  },
  {
    instead: 'one shared admin login',
    helps: 'Give presidents, executives, and members the right level of access.',
  },
];

const accentBar = {
  red: 'bg-[#E51937]',
  gold: 'bg-[#FFC429]',
  neutral: 'bg-[rgba(255,255,255,0.22)]',
};

const accessTone = {
  red: 'border-[#E51937]/30 bg-[rgba(229,25,55,0.08)]',
  gold: 'border-[#FFC429]/30 bg-[rgba(255,196,41,0.08)]',
  neutral: 'border-white/[0.1] bg-[#131313]',
  muted: 'border-white/[0.08] bg-[#0B0B0B]',
};

function FeatureList({
  items,
  bullet = 'gold',
}: {
  items: string[];
  bullet?: 'red' | 'gold';
}) {
  const color = bullet === 'red' ? 'bg-[#E51937]' : 'bg-[#FFC429]';
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm">
          <span className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${color}`} />
          <span className="text-[#9CA3AF] leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TwoColumnSection({
  eyebrow,
  eyebrowColor = 'text-[#FFC429]',
  title,
  body,
  points,
  label,
  subtext,
  reverse = false,
  dark = true,
  bullet = 'gold',
  extra,
}: {
  eyebrow: string;
  eyebrowColor?: string;
  title: string;
  body: string;
  points: string[];
  label: string;
  subtext: string;
  reverse?: boolean;
  dark?: boolean;
  bullet?: 'red' | 'gold';
  extra?: ReactNode;
}) {
  return (
    <section className={`py-16 sm:py-20 border-t border-[#222222] ${dark ? 'bg-[#0B0B0B]' : 'bg-[#111111]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <AnimatedSection className={reverse ? 'order-1 lg:order-2' : ''}>
            <p className={`text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] mb-3 ${eyebrowColor}`}>
              {eyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed mb-6">{body}</p>
            <FeatureList items={points} bullet={bullet} />
            {extra}
          </AnimatedSection>
          <AnimatedSection delay={0.08} className={reverse ? 'order-2 lg:order-1' : ''}>
            <FeatureScreenshotPlaceholder label={label} subtext={subtext} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default function ForClubsPage() {
  const navigate = useNavigate();

  const handleOnboard = () => {
    setClubFormInterest('Onboard my club');
    goToSection(ONBOARD_CLUB_ID, { navigate, pathname: '/for-clubs' });
  };

  const handleDemo = () => {
    setClubFormInterest('Request a demo');
    goToSection(REQUEST_DEMO_ID, { navigate, pathname: '/for-clubs' });
  };

  return (
    <div className="page-transition">
      {/* 1. Hero */}
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 overflow-hidden bg-[#0B0B0B]">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#E51937] opacity-[0.04] blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <AnimatedSection>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-4">
                For clubs
              </p>
              <h1
                className="font-sans font-extrabold text-[#F5F5F5] mb-3 leading-tight"
                style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.5rem)' }}
              >
                Run your club from one workspace.
              </h1>
              <p className="text-[#9CA3AF] text-lg sm:text-xl mb-5 leading-snug">
                without chasing group chats, forms, spreadsheets, and shared drives.
              </p>
              <p className="text-[#9CA3AF] text-base max-w-xl leading-relaxed mb-7">
                Gryph ClubConnect gives presidents, executives, and club teams one place to manage events, RSVPs, tasks, meetings, announcements, members, hiring, documents, analytics, setup, roles, reporting, and permissions.
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
              <FeatureScreenshotPlaceholder
                label="Club Command Center"
                subtext="Command Center with pending actions, setup progress, events, tasks, hiring, join requests, quick actions, and team responsibilities."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 2. Problem / Value */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              The club ops problem
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4">
              Club work gets scattered fast.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Most clubs run across group chats, Google Forms, spreadsheets, shared drives, meeting notes, Instagram posts, and last-minute messages. Gryph ClubConnect brings the operational work into one workspace.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.08}>
            {problemCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#131313] p-6">
                  <span className={`absolute inset-x-0 top-0 h-[2px] ${accentBar[card.accent]}`} aria-hidden />
                  <h3 className="text-lg font-bold text-[#F5F5F5] font-sans mb-2">{card.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{card.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Command Center */}
      <TwoColumnSection
        eyebrow="Command Center"
        title="Start every club workflow from one overview."
        body="The Command Center helps presidents and execs see what needs attention across setup, join requests, events, tasks, applications, meetings, and quick actions."
        points={commandCenterPoints}
        label="Command Center Overview"
        subtext="President view with setup progress, pending actions, quick actions, upcoming activity, tasks, events, hiring, and team responsibilities."
        dark={false}
      />

      {/* 4. Exec Team Structure */}
      <TwoColumnSection
        eyebrow="Exec team structure"
        title="Built for the whole exec team."
        body="Club work is not handled by one person. Gryph ClubConnect helps presidents, managerial executives, executives, and members work from the right level of access so responsibilities stay clear."
        points={execStructurePoints}
        label="Exec Team Structure"
        subtext="Member management view with role titles, reporting structure, access levels, promoted executives, and ownership areas."
        reverse
        dark
      />

      {/* 5. Exec Workflow Grid */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-3">
              Exec workflows
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">
              Tools for the team running the club.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Give each executive a clearer way to own their part of club operations.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3" staggerDelay={0.04}>
            {execWorkflows.map((w) => {
              const Icon = w.icon;
              return (
                <StaggerItem key={w.title}>
                  <div className="rounded-[10px] border border-white/[0.08] bg-[#131313] p-4 h-full transition-colors duration-200 hover:border-[#FFC429]/35 hover:bg-[#161616]">
                    <div className="w-8 h-8 rounded-[8px] border border-[#FFC429]/25 bg-[rgba(255,196,41,0.12)] flex items-center justify-center mb-3">
                      <Icon size={15} className="text-[#FFC429]" />
                    </div>
                    <h3 className="text-[#F5F5F5] font-semibold text-sm mb-1">{w.title}</h3>
                    <p className="text-[#9CA3AF] text-[12px] leading-relaxed">{w.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. Event Management */}
      <TwoColumnSection
        eyebrow="Event management"
        eyebrowColor="text-[#E51937]"
        title="Run events from planning to follow-up."
        body="Club leaders can create events, collect RSVPs, review sign-up answers, manage attendee lists, and connect event planning tasks so nothing gets lost before event day."
        points={eventPoints}
        label="Event Management"
        subtext="Event management view with RSVP answers, attendee list, sign-up questions, and event-linked planning tasks."
        dark={false}
        bullet="red"
        extra={
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {eventProcess.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-white/[0.08] bg-[#131313] px-3 py-1.5 text-[12px] text-[#F5F5F5]">
                  {step}
                </span>
                {index < eventProcess.length - 1 && (
                  <span className="text-[#555555] text-sm" aria-hidden>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        }
      />

      {/* 7. Tasks */}
      <TwoColumnSection
        eyebrow="Tasks"
        title="Keep ownership visible."
        body="Gryph ClubConnect helps exec teams know who owns what, what is due, what is in progress, and what needs review."
        points={taskPoints}
        label="Tasks & Review"
        subtext="Tasks view with owners, due dates, priorities, comments, review states, and event-linked tasks."
        reverse
        dark
      />

      {/* 8. Meetings */}
      <TwoColumnSection
        eyebrow="Meetings"
        eyebrowColor="text-[#E51937]"
        title="Turn meetings into follow-through."
        body="Club teams can prepare agendas, capture notes, record decisions, and turn follow-ups into assigned tasks."
        points={meetingPoints}
        label="Meetings & Notes"
        subtext="Meeting detail view with agenda, notes, decisions, recaps, and follow-up tasks."
        dark={false}
        bullet="red"
      />

      {/* 9. Hiring */}
      <TwoColumnSection
        eyebrow="Hiring"
        title="Manage applications from posting to decision."
        body="Instead of collecting interest across forms, emails, and messages, clubs can post roles, collect applications, review candidates, and move people through a clear status pipeline."
        points={hiringPoints}
        label="Hiring Pipeline"
        subtext="Hiring view with open roles, applicant review, custom questions, reviewer notes, and candidate statuses."
        reverse
        dark
      />

      {/* 10. Members, Roles, Reporting, Permissions */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start mb-10">
            <AnimatedSection>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-3">
                Members & access
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
                Manage members, roles, reporting, and permissions.
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-6">
                Clubs can keep their team structure organized by assigning role titles, promoting members, setting reporting lines, controlling access levels, and making sure the right people can manage the right workflows.
              </p>
              <FeatureList items={membersPoints} />
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <FeatureScreenshotPlaceholder
                label="Members, Roles & Permissions"
                subtext="Member roster with role titles, reporting structure, promoted members, join requests, invite codes, and permission controls."
              />
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777] mb-4">
              Access levels
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {accessLevels.map((level) => (
                <div
                  key={level.title}
                  className={`rounded-[10px] border p-4 h-full ${accessTone[level.tone]}`}
                >
                  <h3 className="text-sm font-semibold text-[#F5F5F5] mb-2">{level.title}</h3>
                  <p className="text-[12px] text-[#9CA3AF] leading-relaxed">{level.body}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 11. Analytics */}
      <TwoColumnSection
        eyebrow="Analytics"
        eyebrowColor="text-[#E51937]"
        title="See what is working across your club."
        body="Club leaders can review activity across members, events, tasks, announcements, hiring, and public profile interest."
        points={analyticsPoints}
        label="Club Analytics"
        subtext="Analytics dashboard with member, event, task, announcement, hiring, and profile insights."
        reverse
        dark
        bullet="red"
      />

      {/* 12. Comparison */}
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
                  className={`grid grid-cols-1 sm:grid-cols-[minmax(0,220px)_1fr] gap-2 sm:gap-6 px-5 py-3.5 ${
                    index < comparisons.length - 1 ? 'border-b border-white/[0.08]' : ''
                  }`}
                >
                  <p className="text-sm text-[#777777]">Instead of {row.instead}:</p>
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

      {/* 14. Final CTA */}
      <section className="relative py-16 sm:py-20 overflow-hidden bg-[#0B0B0B] border-t border-[#222222]">
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">
              Bring your club onto Gryph ClubConnect.
            </h2>
            <p className="text-[#9CA3AF] text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Request a demo, walk through the club workspace, and see how Gryph ClubConnect can help your team manage events, RSVPs, tasks, meetings, members, hiring, documents, analytics, roles, reporting, and permissions from one place.
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
