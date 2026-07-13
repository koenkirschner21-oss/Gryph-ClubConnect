import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
import ClubWorkflowSlideshow, {
  type ClubWorkflowStep,
} from '../components/clubs/ClubWorkflowSlideshow';
import {
  goToDemoForm,
} from '../lib/cta';

const problemCards = [
  {
    title: 'Scattered updates',
    body: 'Announcements, reminders, and decisions get buried in group chats.',
    accent: 'red' as const,
    hover:
      'hover:border-[#E51937]/45 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(229,25,55,0.1)]',
  },
  {
    title: 'Unclear ownership',
    body: 'Exec teams lose track of who owns what, what is overdue, what still needs review, and who is responsible.',
    accent: 'gold' as const,
    hover:
      'hover:border-[#FFC429]/40 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,196,41,0.08)]',
  },
  {
    title: 'Disconnected workflows',
    body: 'Events, RSVP answers, hiring, meetings, documents, member records, and follow-ups end up living in separate tools.',
    accent: 'neutral' as const,
    hover:
      'hover:border-white/[0.16] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]',
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

const accessLevels = [
  {
    title: 'President / Co-President',
    body: 'Full control across setup, settings, members, permissions, hiring, events, analytics, and club configuration.',
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
    body: 'Member-level access to view appropriate updates, RSVP, complete assigned tasks, and stay involved.',
    tone: 'muted' as const,
  },
];

const execWorkflows: {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: 'red' | 'gold' | 'neutral';
}[] = [
  { icon: Megaphone, title: 'Announcements', description: 'Post important updates members can find later.', accent: 'red' },
  { icon: CalendarPlus, title: 'Events & RSVPs', description: 'Create events, collect sign-up answers, and track who is coming.', accent: 'gold' },
  { icon: ListTodo, title: 'Event planning tasks', description: 'Connect planning work directly to the event it supports.', accent: 'gold' },
  { icon: CheckSquare, title: 'Tasks & review', description: 'Assign work, set due dates, track status, and review completion.', accent: 'red' },
  { icon: NotebookPen, title: 'Meetings & notes', description: 'Prepare agendas, capture decisions, and assign follow-ups.', accent: 'gold' },
  { icon: Network, title: 'Members, roles, and reporting', description: 'Promote members, assign titles, set reporting lines, and keep club structure clear.', accent: 'red' },
  { icon: UserCheck, title: 'Hiring pipeline', description: 'Post open roles, review applicants, and move candidates through statuses.', accent: 'gold' },
  { icon: FolderOpen, title: 'Documents & resources', description: 'Keep files, links, forms, and resources organized by visibility.', accent: 'neutral' },
  { icon: BarChart3, title: 'Analytics', description: 'Track member growth, events, tasks, announcements, hiring, and profile activity.', accent: 'gold' },
  { icon: Shield, title: 'Permissions', description: 'Control who can manage events, hiring, members, settings, chat, documents, and club content.', accent: 'red' },
];

const eventSteps: ClubWorkflowStep[] = [
  {
    title: 'Create the event',
    description: 'Set event details, visibility, location, date, and event information.',
    placeholderLabel: 'Create Event',
    placeholderSubtext: 'Event creation flow with event details, date, location, visibility, and description.',
  },
  {
    title: 'Collect RSVPs',
    description: 'Add sign-up questions and let students or members respond.',
    placeholderLabel: 'RSVP Questions',
    placeholderSubtext: 'RSVP form with custom sign-up questions and response options.',
  },
  {
    title: 'Review attendees',
    description: 'View who is coming and review RSVP answers.',
    placeholderLabel: 'RSVP Answers',
    placeholderSubtext: 'Attendee list with RSVP responses, answers, and event status.',
  },
  {
    title: 'Assign planning tasks',
    description: 'Create event-linked tasks so planning work stays connected.',
    placeholderLabel: 'Event-Linked Tasks',
    placeholderSubtext: 'Tasks connected to an event with owners, due dates, and review status.',
  },
];

const taskSteps: ClubWorkflowStep[] = [
  {
    title: 'Create a task',
    description: 'Add title, description, owner, due date, and priority.',
    placeholderLabel: 'Create Task',
    placeholderSubtext: 'Task creation with owner, due date, priority, and linked context.',
  },
  {
    title: 'Track progress',
    description: 'Move work through To Do, In Progress, Needs Review, and Complete.',
    placeholderLabel: 'Task Status',
    placeholderSubtext: 'Task board showing status, assigned work, and ownership.',
  },
  {
    title: 'Review work',
    description: 'Send work back, approve completion, or leave comments.',
    placeholderLabel: 'Task Review',
    placeholderSubtext: 'Review workflow with comments, send-back states, and completion controls.',
  },
  {
    title: 'Connect work to events',
    description: 'Keep event planning tasks tied to the event they support.',
    placeholderLabel: 'Event Task Context',
    placeholderSubtext: 'Event-linked task view showing planning work connected to a specific event.',
  },
];

const meetingSteps: ClubWorkflowStep[] = [
  {
    title: 'Schedule the meeting',
    description: 'Create a meeting with date, time, location, visibility, and attendees.',
    placeholderLabel: 'Meeting Setup',
    placeholderSubtext: 'Meeting setup with date, location, attendees, and visibility.',
  },
  {
    title: 'Build the agenda',
    description: 'Prepare agenda items before the meeting.',
    placeholderLabel: 'Meeting Agenda',
    placeholderSubtext: 'Agenda builder with discussion items and meeting structure.',
  },
  {
    title: 'Capture notes and decisions',
    description: 'Record what was discussed and what decisions were made.',
    placeholderLabel: 'Meeting Notes',
    placeholderSubtext: 'Meeting notes and decisions captured in one workspace.',
  },
  {
    title: 'Assign follow-ups',
    description: 'Turn meeting outcomes into tasks with owners and due dates.',
    placeholderLabel: 'Meeting Follow-Ups',
    placeholderSubtext: 'Follow-up tasks created from meeting notes and assigned to owners.',
  },
];

const hiringSteps: ClubWorkflowStep[] = [
  {
    title: 'Post the role',
    description: 'Create an open role with responsibilities, requirements, and application details.',
    placeholderLabel: 'Create Role',
    placeholderSubtext: 'Role posting setup with title, description, requirements, and application questions.',
  },
  {
    title: 'Collect applications',
    description: 'Students apply with answers and supporting information.',
    placeholderLabel: 'Applicant List',
    placeholderSubtext: 'Applicant list with submitted applications and candidate details.',
  },
  {
    title: 'Review candidates',
    description: 'Review answers, add context, and evaluate applicants.',
    placeholderLabel: 'Applicant Review',
    placeholderSubtext: 'Applicant review view with answers, notes, and reviewer context.',
  },
  {
    title: 'Move through statuses',
    description: 'Track candidates across Pending, Reviewed, Interview, Accepted, and Rejected.',
    placeholderLabel: 'Hiring Pipeline',
    placeholderSubtext: 'Candidate pipeline with statuses and application progress.',
  },
];

const memberLifecycle = [
  { title: 'Join request', description: 'A student asks to join or is invited.' },
  { title: 'Member', description: 'They participate, RSVP, view updates, and complete assigned tasks.' },
  { title: 'Executive role', description: 'They can be promoted into a role with a custom title and workflow access.' },
  { title: 'Reporting structure', description: 'They can be assigned to a team, manager, or reporting line.' },
  { title: 'Leadership transition', description: 'Access can be updated when responsibilities change.' },
];

const memberPoints = [
  'Promote members into executive or managerial roles',
  'Assign custom titles',
  'Assign who someone reports to',
  'Manage join requests and invite codes',
  'Update access levels as leadership changes',
  'Control who can manage events, hiring, members, settings, chat, documents, and announcements',
];

const analyticsPoints = [
  'Member growth',
  'Event and RSVP trends',
  'Task completion',
  'Announcement engagement',
  'Hiring funnel',
  'Profile views / interest signals',
];

const beforeAfter = [
  { before: 'Group chats', after: 'Announcements, chat, tasks, and decisions in one workspace' },
  { before: 'Google Forms', after: 'RSVPs, join requests, and applications inside the platform' },
  { before: 'Spreadsheets', after: 'Members, roles, reporting, tasks, hiring, and event context in one place' },
  { before: 'Shared drives', after: 'Documents and links organized by category and visibility' },
  { before: 'Random meeting notes', after: 'Agendas, decisions, recaps, and follow-up tasks' },
  { before: 'One shared admin login', after: 'Role-based access for presidents, executives, and members' },
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

const workflowIconAccent = {
  red: 'bg-[rgba(229,25,55,0.12)] border-[#E51937]/25 text-[#E51937]',
  gold: 'bg-[rgba(255,196,41,0.12)] border-[#FFC429]/25 text-[#FFC429]',
  neutral: 'bg-[#1A1A1A] border-white/[0.1] text-[#9CA3AF]',
};

function TextCta({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#FFC429] hover:text-[#FFD45C] transition-colors"
    >
      {label}
      <ArrowRight size={15} />
    </button>
  );
}

function FeatureList({ items, bullet = 'gold' }: { items: string[]; bullet?: 'red' | 'gold' }) {
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

function WorkflowSection({
  eyebrow,
  eyebrowColor = 'text-[#FFC429]',
  title,
  body,
  steps,
  accent,
  screenshotSide,
  dark,
  ctaLabel,
  onCta,
}: {
  eyebrow: string;
  eyebrowColor?: string;
  title: string;
  body: string;
  steps: ClubWorkflowStep[];
  accent: 'red' | 'gold';
  screenshotSide: 'left' | 'right';
  dark: boolean;
  ctaLabel: string;
  onCta: () => void;
}) {
  return (
    <section className={`py-16 sm:py-20 border-t border-[#222222] ${dark ? 'bg-[#0B0B0B]' : 'bg-[#111111]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-8 sm:mb-10 max-w-3xl">
          <p className={`text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] mb-3 ${eyebrowColor}`}>
            {eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3 leading-tight">
            {title}
          </h2>
          <p className="text-[#9CA3AF] text-base leading-relaxed">{body}</p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <ClubWorkflowSlideshow
            steps={steps}
            accent={accent}
            screenshotSide={screenshotSide}
            footer={<TextCta label={ctaLabel} onClick={onCta} />}
          />
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function ForClubsPage() {
  const navigate = useNavigate();

  const handleOnboard = () => {
    goToDemoForm({ interest: 'Onboard my club', navigate, pathname: '/for-clubs' });
  };

  const handleDemo = () => {
    goToDemoForm({ interest: 'Request a demo', navigate, pathname: '/for-clubs' });
  };

  return (
    <div className="page-transition">
      {/* 1. Hero — keep mostly as-is */}
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
                <Button variant="red" size="lg" onClick={handleOnboard} className="w-full sm:w-auto">
                  Onboard Your Club
                </Button>
                <Button variant="ghost" size="lg" onClick={handleDemo} className="w-full sm:w-auto">
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

      {/* 2. Club ops problem */}
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
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#131313] p-6 transition-all duration-200 ${card.hover}`}
                >
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
      <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <AnimatedSection>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-3">
                Command Center
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
                Start every club workflow from one overview.
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-6">
                The Command Center helps presidents and execs see what needs attention across setup, join requests, events, tasks, applications, meetings, and quick actions.
              </p>
              <FeatureList items={commandCenterPoints} />
              <TextCta label="Request a demo of the club workspace" onClick={handleDemo} />
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <FeatureScreenshotPlaceholder
                label="Command Center Overview"
                subtext="President view with setup progress, pending actions, quick actions, upcoming activity, tasks, events, hiring, and team responsibilities."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. Access Levels — moved higher */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start mb-8">
            <AnimatedSection>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
                Access levels
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
                Give every role the right level of control.
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-5">
                Not every exec needs full admin access. Gryph ClubConnect helps clubs give presidents, managerial executives, executives, and general members the right permissions for the work they actually own.
              </p>
              <div className="rounded-[10px] border border-white/[0.08] bg-[#131313] px-4 py-3.5 mb-5">
                <p className="text-[13px] text-[#F5F5F5] leading-relaxed">
                  Promote members, assign titles, set reporting lines, and update access when leadership changes.
                </p>
              </div>
              <TextCta label="Talk through access levels" onClick={handleDemo} />
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <FeatureScreenshotPlaceholder
                label="Access Levels & Permissions"
                subtext="Role management view with access levels, promoted executives, reporting structure, and permission controls."
              />
            </AnimatedSection>
          </div>
          <AnimatedSection>
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

      {/* 5. Exec Workflow Grid */}
      <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
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
                  <div className="rounded-[10px] border border-white/[0.08] bg-[#131313] p-4 h-full transition-all duration-200 hover:border-white/[0.14] hover:bg-[#161616] hover:-translate-y-0.5">
                    <div
                      className={`w-8 h-8 rounded-[8px] border flex items-center justify-center mb-3 ${workflowIconAccent[w.accent]}`}
                    >
                      <Icon size={15} />
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

      {/* 6–9. Workflow slideshows */}
      <WorkflowSection
        eyebrow="Event management"
        eyebrowColor="text-[#E51937]"
        title="Run events from planning to follow-up."
        body="Create events, collect RSVPs, review sign-up answers, manage attendees, and connect planning tasks to the event."
        steps={eventSteps}
        accent="red"
        screenshotSide="right"
        dark={false}
        ctaLabel="See how your club could manage events"
        onCta={handleDemo}
      />

      <WorkflowSection
        eyebrow="Tasks"
        title="Keep ownership visible."
        body="Assign work, track progress, review completion, and keep exec responsibilities clear."
        steps={taskSteps}
        accent="gold"
        screenshotSide="left"
        dark
        ctaLabel="Explore task workflows"
        onCta={handleDemo}
      />

      <WorkflowSection
        eyebrow="Meetings"
        eyebrowColor="text-[#E51937]"
        title="Turn meetings into follow-through."
        body="Plan agendas, capture notes, record decisions, and turn follow-ups into assigned work."
        steps={meetingSteps}
        accent="red"
        screenshotSide="right"
        dark={false}
        ctaLabel="See how meetings stay organized"
        onCta={handleDemo}
      />

      <WorkflowSection
        eyebrow="Hiring"
        title="Manage applications from posting to decision."
        body="Post open roles, collect applications, review candidates, and move applicants through a clear pipeline."
        steps={hiringSteps}
        accent="gold"
        screenshotSide="left"
        dark
        ctaLabel="Review how hiring could work for your club"
        onCta={handleDemo}
      />

      {/* 11. Member Management — unique layout */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8 sm:mb-10 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-3">
              Member management
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3 leading-tight">
              Keep your club structure clear as people move into new roles.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              As students join, apply, volunteer, and take on more responsibility, Gryph ClubConnect helps clubs update roles, reporting lines, and permissions without losing track of who owns what.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <AnimatedSection>
              <ol className="rounded-[12px] border border-white/[0.08] bg-[#131313] overflow-hidden mb-6">
                {memberLifecycle.map((step, index) => (
                  <li
                    key={step.title}
                    className={`flex gap-4 px-5 py-4 ${
                      index < memberLifecycle.length - 1 ? 'border-b border-white/[0.08]' : ''
                    }`}
                  >
                    <span className="shrink-0 w-8 text-[13px] font-semibold tabular-nums text-[#E51937] pt-0.5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#F5F5F5] mb-1">{step.title}</p>
                      <p className="text-[13px] text-[#9CA3AF] leading-relaxed">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <FeatureList items={memberPoints} />
              <TextCta label="Talk through access levels" onClick={handleDemo} />
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <FeatureScreenshotPlaceholder
                label="Member Management"
                subtext="Member roster with join requests, custom titles, reporting structure, promoted members, and permission controls."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 12. Analytics */}
      <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <AnimatedSection delay={0.08} className="order-2 lg:order-1">
              <FeatureScreenshotPlaceholder
                label="Club Analytics"
                subtext="Analytics dashboard with member, event, task, announcement, hiring, and profile insights."
              />
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
                Analytics
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
                See what is working across your club.
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-6">
                Club leaders can review activity across members, events, RSVPs, tasks, announcements, hiring, and public profile interest.
              </p>
              <FeatureList items={analyticsPoints} bullet="red" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 13. Before / After comparison */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8 max-w-3xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-3">
              Before / After
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans">
              Replace scattered tools with connected workflows.
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="rounded-[12px] border border-white/[0.08] bg-[#131313] overflow-hidden max-w-4xl">
              <div className="grid grid-cols-2 border-b border-white/[0.08] bg-[#0B0B0B]">
                <div className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777]">
                  Before
                </div>
                <div className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777] border-l border-white/[0.08]">
                  After
                </div>
              </div>
              {beforeAfter.map((row, index) => (
                <div
                  key={row.before}
                  className={`grid grid-cols-1 sm:grid-cols-2 ${
                    index < beforeAfter.length - 1 ? 'border-b border-white/[0.08]' : ''
                  }`}
                >
                  <div className="px-5 py-3.5 text-sm text-[#777777]">{row.before}</div>
                  <div className="px-5 py-3.5 text-sm text-[#F5F5F5] sm:border-l border-white/[0.08] flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#E51937]" />
                    {row.after}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 15. Final CTA — conversion panel */}
      <section className="relative py-16 sm:py-20 overflow-hidden bg-[#0B0B0B] border-t border-[#222222]">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="rounded-[14px] border border-white/[0.08] bg-[#131313] p-8 sm:p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div className="h-[2px] w-16 bg-[#E51937] mx-auto mb-6 rounded-full" aria-hidden />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">
                Ready to map this to your club?
              </h2>
              <p className="text-[#9CA3AF] text-base mb-8 max-w-2xl mx-auto leading-relaxed">
                Request a demo and walk through how your club could manage events, RSVPs, tasks, meetings, members, hiring, roles, reporting, and permissions from one workspace.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
                <Button variant="red" size="lg" onClick={handleOnboard} className="w-full sm:w-auto">
                  Onboard Your Club
                </Button>
                <Button variant="ghost" size="lg" onClick={handleDemo} className="w-full sm:w-auto">
                  Request a Demo
                </Button>
              </div>
              <p className="mt-6 text-[13px] text-[#777777]">
                Submitting interest does not create an account or officially register your club.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
