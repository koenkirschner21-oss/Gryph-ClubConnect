import { useState } from 'react';
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
  MessagesSquare,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import MockupImage from '../components/mockups/MockupImage';
import ClubWorkflowSlideshow, {
  type ClubWorkflowStep,
} from '../components/clubs/ClubWorkflowSlideshow';
import {
  goToDemoForm,
} from '../lib/cta';

const problemCards = [
  {
    title: 'Scattered communication',
    body: 'Announcements, reminders, and decisions get buried across chats and social platforms.',
    icon: MessagesSquare,
    accent: 'red' as const,
    hover:
      'hover:border-[#E51937]/45 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(229,25,55,0.1)]',
  },
  {
    title: 'Unclear ownership',
    body: 'Teams lose track of who owns each task, what is overdue, and what still needs review.',
    icon: UserCheck,
    accent: 'gold' as const,
    hover:
      'hover:border-[#FFC429]/40 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,196,41,0.08)]',
  },
  {
    title: 'Disconnected workflows',
    body: 'Events, applications, meetings, documents, and member records live in separate tools.',
    icon: Workflow,
    accent: 'neutral' as const,
    hover:
      'hover:border-white/[0.16] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]',
  },
];

const commandCenterPoints = [
  'Setup progress and pending approvals',
  'Upcoming events and meetings',
  'Tasks, deadlines, and work awaiting review',
  'Applications, RSVPs, and member actions',
  'Quick access to the workflows your team uses most',
];

const accessLevels = [
  {
    title: 'President / Co-President',
    body: 'Full control across setup, settings, members, permissions, hiring, events, analytics, and club configuration.',
    tone: 'red' as const,
  },
  {
    title: 'Managerial Executive',
    body: 'Oversee teams and manage higher-level workflows across members, hiring, events, and operations.',
    tone: 'gold' as const,
  },
  {
    title: 'Executive',
    body: 'Manage the workflows connected to a specific executive responsibility.',
    tone: 'neutral' as const,
  },
  {
    title: 'General Member',
    body: 'View relevant updates, RSVP for events, complete assigned tasks, and stay involved.',
    tone: 'muted' as const,
  },
];

const execWorkflowGroups: {
  label: string;
  description: string;
  items: {
    icon: LucideIcon;
    title: string;
    description: string;
    accent: 'red' | 'gold' | 'neutral';
  }[];
}[] = [
  {
    label: 'Communicate',
    description: 'Keep information, decisions, and resources easy to find.',
    items: [
      { icon: Megaphone, title: 'Announcements', description: 'Post important updates members can find later.', accent: 'red' },
      { icon: NotebookPen, title: 'Meetings & notes', description: 'Prepare agendas, capture decisions, and assign follow-ups.', accent: 'gold' },
      { icon: FolderOpen, title: 'Documents & resources', description: 'Organize files, links, forms, and resources by visibility.', accent: 'neutral' },
    ],
  },
  {
    label: 'Coordinate',
    description: 'Connect people, responsibilities, and day-to-day club work.',
    items: [
      { icon: CalendarPlus, title: 'Events & RSVPs', description: 'Create events, collect sign-up answers, and manage attendees.', accent: 'gold' },
      { icon: ListTodo, title: 'Planning tasks', description: 'Connect planning work directly to the event it supports.', accent: 'gold' },
      { icon: CheckSquare, title: 'Tasks & review', description: 'Assign work, track status, and review completion.', accent: 'red' },
      { icon: Network, title: 'Members, roles & reporting', description: 'Assign titles, access, teams, and reporting relationships.', accent: 'red' },
    ],
  },
  {
    label: 'Manage and improve',
    description: 'Support club growth, leadership, and better decisions.',
    items: [
      { icon: UserCheck, title: 'Hiring pipeline', description: 'Post positions, review applicants, and manage candidate statuses.', accent: 'gold' },
      { icon: BarChart3, title: 'Analytics', description: 'Review activity across members, events, tasks, hiring, and engagement.', accent: 'gold' },
      { icon: Shield, title: 'Permissions', description: 'Control who can view and manage each club workflow.', accent: 'red' },
    ],
  },
];

const eventSteps: ClubWorkflowStep[] = [
  {
    title: 'Create the event',
    description: 'Set the date, location, visibility, details, and RSVP settings.',
    placeholderLabel: 'Create Event',
    placeholderSubtext: 'Event creation flow with event details, date, location, visibility, and description.',
    imageSrc: 'screenshots/for-clubs-events-create-event.png',
    imageAlt: 'Gryph ClubConnect event creation screen',
  },
  {
    title: 'Collect RSVPs',
    description: 'Add sign-up questions and let students or members respond.',
    placeholderLabel: 'RSVP Questions',
    placeholderSubtext: 'RSVP form with custom sign-up questions and response options.',
    imageSrc: 'screenshots/for-clubs-events-collect-rsvps.png',
    imageAlt: 'Gryph ClubConnect RSVP questions screen',
  },
  {
    title: 'Manage attendees',
    description: 'Review attendance, RSVP answers, and response status.',
    placeholderLabel: 'RSVP Answers',
    placeholderSubtext: 'Attendee list with RSVP responses, answers, and event status.',
    imageSrc: 'screenshots/for-clubs-events-review-attendees.png',
    imageAlt: 'Gryph ClubConnect event attendee and RSVP response screen',
  },
  {
    title: 'Connect planning tasks',
    description: 'Keep event preparation linked to the event it supports.',
    placeholderLabel: 'Event-Linked Tasks',
    placeholderSubtext: 'Tasks connected to an event with owners, due dates, and review status.',
    imageSrc: 'screenshots/for-clubs-events-planning-tasks.png',
    imageAlt: 'Gryph ClubConnect event planning tasks screen',
  },
];

const taskSteps: ClubWorkflowStep[] = [
  {
    title: 'Create and assign tasks',
    description: 'Add the task details, owner, due date, priority, and context.',
    placeholderLabel: 'Create Task',
    placeholderSubtext: 'Task creation with owner, due date, priority, and linked context.',
    imageSrc: 'screenshots/for-clubs-tasks-create-task.png',
    imageAlt: 'Gryph ClubConnect task creation screen',
  },
  {
    title: 'Track progress',
    description: 'Move work through To Do, In Progress, Needs Review, and Complete.',
    placeholderLabel: 'Task Status',
    placeholderSubtext: 'Task board showing status, assigned work, and ownership.',
    imageSrc: 'screenshots/for-clubs-tasks-track-progress.png',
    imageAlt: 'Gryph ClubConnect task progress screen',
  },
  {
    title: 'Review completed work',
    description: 'Send work back, approve completion, or leave comments.',
    placeholderLabel: 'Task Review',
    placeholderSubtext: 'Review completed workflow with comments, send-back states, and completion controls.',
    imageSrc: 'screenshots/for-clubs-tasks-review-work.png',
    imageAlt: 'Gryph ClubConnect task review screen',
  },
  {
    title: 'Connect tasks to events',
    description: 'Keep event planning tasks tied to the event they support.',
    placeholderLabel: 'Event Task Context',
    placeholderSubtext: 'Event-linked task view showing planning work connected to a specific event.',
    imageSrc: 'screenshots/for-clubs-tasks-connect-to-events.png',
    imageAlt: 'Gryph ClubConnect event-linked task screen',
  },
];

const meetingSteps: ClubWorkflowStep[] = [
  {
    title: 'Schedule a meeting',
    description: 'Create a meeting with date, time, location, visibility, and attendees.',
    placeholderLabel: 'Meeting Setup',
    placeholderSubtext: 'Meeting setup with date, location, attendees, and visibility.',
    imageSrc: 'screenshots/for-clubs-meetings-schedule.png',
    imageAlt: 'Gryph ClubConnect meeting scheduling screen',
  },
  {
    title: 'Build the agenda',
    description: 'Prepare agenda items before the meeting.',
    placeholderLabel: 'Meeting Agenda',
    placeholderSubtext: 'Agenda builder with discussion items and meeting structure.',
    imageSrc: 'screenshots/for-clubs-meetings-agenda.png',
    imageAlt: 'Gryph ClubConnect meeting agenda screen',
  },
  {
    title: 'Capture notes and decisions',
    description: 'Record what was discussed and what decisions were made.',
    placeholderLabel: 'Meeting Notes',
    placeholderSubtext: 'Meeting notes and decisions captured in one workspace.',
    imageSrc: 'screenshots/for-clubs-meetings-notes-decisions.png',
    imageAlt: 'Gryph ClubConnect meeting notes and decisions screen',
  },
  {
    title: 'Assign follow-up actions',
    description: 'Turn meeting outcomes into assigned actions with owners and due dates.',
    placeholderLabel: 'Meeting Follow-Ups',
    placeholderSubtext: 'Follow-up tasks created from meeting notes and assigned to owners.',
    imageSrc: 'screenshots/for-clubs-meetings-follow-ups.png',
    imageAlt: 'Gryph ClubConnect meeting follow-up tasks screen',
  },
];

const hiringSteps: ClubWorkflowStep[] = [
  {
    title: 'Post an open position',
    description: 'Publish a position with responsibilities, requirements, and application details.',
    placeholderLabel: 'Create Role',
    placeholderSubtext: 'Role posting setup with title, description, requirements, and application questions.',
    imageSrc: 'screenshots/for-clubs-hiring-post-role.png',
    imageAlt: 'Gryph ClubConnect role posting screen',
  },
  {
    title: 'Collect applications',
    description: 'Students apply with answers and supporting information.',
    placeholderLabel: 'Applicant List',
    placeholderSubtext: 'Applicant list with submitted applications and candidate details.',
    imageSrc: 'screenshots/for-clubs-hiring-collect-applications.png',
    imageAlt: 'Gryph ClubConnect applicant list screen',
  },
  {
    title: 'Review candidates',
    description: 'Review answers, add context, and evaluate applicants.',
    placeholderLabel: 'Applicant Review',
    placeholderSubtext: 'Applicant review view with answers, notes, and reviewer context.',
    imageSrc: 'screenshots/for-clubs-hiring-review-candidates.png',
    imageAlt: 'Gryph ClubConnect applicant review screen',
  },
  {
    title: 'Manage application statuses',
    description: 'Track candidates across Pending, Reviewed, Interview, Accepted, and Rejected.',
    placeholderLabel: 'Hiring Pipeline',
    placeholderSubtext: 'Candidate pipeline with statuses and application progress.',
  },
];

const memberSteps: ClubWorkflowStep[] = [
  {
    title: 'Manage join requests',
    description: 'Review requests, invitations, and invite-code activity.',
    placeholderLabel: 'Join Requests',
    placeholderSubtext: 'Pending requests, invitations, and invite-code activity.',
  },
  {
    title: 'Organize members',
    description: 'View active members, executives, and pending invitations.',
    placeholderLabel: 'Members Overview',
    placeholderSubtext: 'Member directory with roles, status, and invitations.',
    imageSrc: 'screenshots/for-clubs-members-executive-role.png',
    imageAlt: 'Gryph ClubConnect members and executive roles screen',
  },
  {
    title: 'Assign roles and titles',
    description: 'Promote members and give them custom leadership titles.',
    placeholderLabel: 'Roles and Titles',
    placeholderSubtext: 'Role assignment with custom titles and access levels.',
  },
  {
    title: 'Build reporting structure',
    description: 'Assign teams, managers, and reporting relationships.',
    placeholderLabel: 'Reporting Structure',
    placeholderSubtext: 'Organization structure with teams and reporting relationships.',
  },
  {
    title: 'Manage leadership transitions',
    description: 'Update ownership, responsibilities, and access as roles change.',
    placeholderLabel: 'Leadership Transition',
    placeholderSubtext: 'Ownership transfer and access updates during leadership turnover.',
  },
];

const analyticsPoints = [
  'Member growth',
  'Event and RSVP activity',
  'Task completion',
  'Hiring progress',
  'Public profile engagement',
];

const beforeTools = [
  'Group chats',
  'Separate forms',
  'Spreadsheets',
  'Shared drives',
  'Loose meeting notes',
  'Shared admin accounts',
];

const connectedTools = [
  'Connected communication and tasks',
  'Built-in RSVPs, join requests, and applications',
  'Organized members, roles, and reporting',
  'Documents grouped by category and visibility',
  'Meetings connected to decisions and follow-ups',
  'Role-based access for every team member',
];

const accentBar = {
  red: 'bg-[#E51937]',
  gold: 'bg-[#FFC429]',
  neutral: 'bg-[rgba(255,255,255,0.22)]',
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
            intervalMs={7000}
            footer={<TextCta label={ctaLabel} onClick={onCta} />}
          />
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function ForClubsPage() {
  const navigate = useNavigate();
  const [activeAccessLevel, setActiveAccessLevel] = useState(0);

  const handleOnboard = () => {
    goToDemoForm({ interest: 'Onboard my club', navigate, pathname: '/for-clubs' });
  };

  const handleDemo = () => {
    goToDemoForm({ interest: 'Request a demo', navigate, pathname: '/for-clubs' });
  };

  return (
    <div className="page-transition">
      {/* 1. Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#0B0B0B] lg:min-h-[calc(100vh-4rem)]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#E51937] opacity-[0.04] blur-[100px]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            <AnimatedSection className="flex min-w-0 flex-col gap-4 sm:gap-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFC429] sm:text-xs">
                For clubs
              </p>
              <h1
                className="max-w-[38rem] font-sans font-extrabold leading-[1.04] tracking-tight text-[#F5F5F5]"
                style={{ fontSize: 'clamp(2.2rem, 3.9vw, 3.55rem)' }}
              >
                Run your club from one organized workspace.
              </h1>
              <p
                className="max-w-[38rem] text-lg text-[#9CA3AF] sm:text-xl"
                style={{ lineHeight: '1.6' }}
              >
                Manage events, members, tasks, meetings, hiring, documents,
                announcements, permissions, and reporting from one connected
                club workspace.
              </p>
              <div className="flex flex-col items-stretch gap-3 pt-0.5 sm:flex-row sm:items-center">
                <Button
                  variant="red"
                  size="lg"
                  onClick={handleOnboard}
                  className="w-full shadow-[0_8px_24px_rgba(229,25,55,0.22)] sm:w-auto"
                >
                  Get Your Club Started
                </Button>
                <Button variant="ghost" size="lg" onClick={handleDemo} className="w-full sm:w-auto">
                  Request a Demo
                </Button>
              </div>
              <p className="text-[13px] text-[#777777]">
                Student-built for University of Guelph club teams. Independent from the University of Guelph.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="relative min-w-0">
              <MockupImage
                name="workspace"
                alt="Gryph ClubConnect club command center"
                className="relative !overflow-visible !rounded-none !border-0 !bg-transparent !shadow-none !ring-0"
                imgClassName="mx-auto h-auto w-full max-w-[680px] object-contain lg:scale-[0.94]"
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
              The challenge
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4">
              Club operations get scattered quickly.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Most clubs run across group chats, Google Forms, spreadsheets, shared drives, meeting notes, Instagram posts, and last-minute messages. That makes it harder to keep responsibilities clear and workflows connected.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.08}>
            {problemCards.map((card) => {
              const Icon = card.icon;
              return (
                <StaggerItem key={card.title}>
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#131313] p-6 transition-all duration-200 ${card.hover}`}
                  >
                    <span className={`absolute inset-x-0 top-0 h-[2px] ${accentBar[card.accent]}`} aria-hidden />
                    <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-[9px] border ${workflowIconAccent[card.accent]}`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="text-lg font-bold text-[#F5F5F5] font-sans mb-2">{card.title}</h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">{card.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
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
                See what needs attention across your club.
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-6">
                Give presidents and executives one overview for upcoming activity, pending decisions, assigned work, and the actions their team needs to handle next.
              </p>
              <FeatureList items={commandCenterPoints} />
              <TextCta label="See the Club Command Center" onClick={handleDemo} />
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <img
                src={`${import.meta.env.BASE_URL}screenshots/for-clubs-command-center-overview.png`}
                alt="Gryph ClubConnect Command Center overview"
                className="block h-auto w-full rounded-[14px] border border-white/[0.08] bg-[#0B0B0B] p-3 object-contain shadow-[0_16px_48px_rgba(0,0,0,0.35)] sm:p-4"
                loading="lazy"
                decoding="async"
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
                Give every club role the right level of access.
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-5">
                Assign permissions based on responsibility so presidents, managerial executives, executives, and general members only see and manage the workflows relevant to them.
              </p>
              <TextCta label="Talk through access levels" onClick={handleDemo} />
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <img
                src={`${import.meta.env.BASE_URL}screenshots/for-clubs-access-levels-permissions.png`}
                alt="Gryph ClubConnect access levels and permissions"
                className="block h-auto w-full rounded-[12px] border border-white/[0.08] bg-[#131313] object-contain shadow-[0_16px_48px_rgba(0,0,0,0.35)]"
                loading="lazy"
                decoding="async"
              />
            </AnimatedSection>
          </div>
          <AnimatedSection>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#131313]">
              {accessLevels.map((level, index) => {
                const active = activeAccessLevel === index;
                return (
                  <div
                    key={level.title}
                    className={index < accessLevels.length - 1 ? 'border-b border-white/[0.08]' : ''}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveAccessLevel(index)}
                      className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors ${
                        active ? 'bg-[rgba(229,25,55,0.08)]' : 'hover:bg-white/[0.025]'
                      }`}
                      aria-expanded={active}
                    >
                      <span className="text-sm font-semibold text-[#F5F5F5]">{level.title}</span>
                      <span className={`text-lg ${active ? 'text-[#E51937]' : 'text-[#777777]'}`}>
                        {active ? '−' : '+'}
                      </span>
                    </button>
                    {active && (
                      <div className="border-t border-white/[0.06] px-5 py-4">
                        <p className="text-sm leading-relaxed text-[#9CA3AF]">{level.body}</p>
                      </div>
                    )}
                  </div>
                );
              })}
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
              Give every executive a clear place to manage their responsibilities.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Organize the workflows your club uses most and give each executive the tools they need for their part of club operations.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {execWorkflowGroups.map((group) => (
              <AnimatedSection key={group.label}>
                <div className="h-full rounded-[14px] border border-white/[0.08] bg-[#131313] p-5 sm:p-6">
                  <h3 className="mb-2 text-lg font-bold text-[#F5F5F5]">{group.label}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-[#9CA3AF]">{group.description}</p>
                  <div className="space-y-4">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="flex gap-3">
                          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] border ${workflowIconAccent[item.accent]}`}>
                            <Icon size={15} />
                          </div>
                          <div>
                            <p className="mb-1 text-sm font-semibold text-[#F5F5F5]">{item.title}</p>
                            <p className="text-[12px] leading-relaxed text-[#9CA3AF]">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6–9. Workflow slideshows */}
      <WorkflowSection
        eyebrow="Event management"
        eyebrowColor="text-[#E51937]"
        title="Manage every step of an event from setup to follow-up."
        body="Create events, collect RSVPs, manage attendees, and keep preparation connected to the event."
        steps={eventSteps}
        accent="red"
        screenshotSide="right"
        dark={false}
        ctaLabel="Explore Event Management"
        onCta={handleDemo}
      />

      <WorkflowSection
        eyebrow="Task management"
        title="Keep ownership visible."
        body="Assign work, track progress, review completion, and connect planning tasks to the workflows they support."
        steps={taskSteps}
        accent="gold"
        screenshotSide="left"
        dark
        ctaLabel="Explore Task Management"
        onCta={handleDemo}
      />

      <WorkflowSection
        eyebrow="Meetings"
        eyebrowColor="text-[#E51937]"
        title="Turn meetings into clear next steps."
        body="Plan agendas, record notes and decisions, and turn meeting outcomes into assigned follow-up work."
        steps={meetingSteps}
        accent="red"
        screenshotSide="right"
        dark={false}
        ctaLabel="Explore Meeting Management"
        onCta={handleDemo}
      />

      <WorkflowSection
        eyebrow="Hiring"
        title="Manage club hiring from posting to decision."
        body="Publish open positions, collect applications, review candidates, and move applicants through a clear hiring process."
        steps={hiringSteps}
        accent="gold"
        screenshotSide="left"
        dark
        ctaLabel="Explore Club Hiring"
        onCta={handleDemo}
      />

      {/* 10. Member management */}
      <WorkflowSection
        eyebrow="Member management"
        title="Keep your club structure clear as responsibilities change."
        body="Manage join requests, roles, reporting relationships, and leadership transitions from one connected member workflow."
        steps={memberSteps}
        accent="gold"
        screenshotSide="right"
        dark={false}
        ctaLabel="Explore Member Management"
        onCta={handleDemo}
      />

      {/* 12. Analytics */}
      <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <AnimatedSection delay={0.08} className="order-2 lg:order-1">
              <img
                src={`${import.meta.env.BASE_URL}screenshots/for-clubs-club-analytics.png`}
                alt="Gryph ClubConnect club analytics dashboard"
                className="block h-auto w-full rounded-[12px] border border-white/[0.08] bg-[#131313] object-contain shadow-[0_16px_48px_rgba(0,0,0,0.35)]"
                loading="lazy"
                decoding="async"
              />
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
                Analytics
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
                Understand how your club is performing.
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-6">
                Review activity across members, events, RSVPs, tasks, announcements, hiring, and public club engagement.
              </p>
              <FeatureList items={analyticsPoints} bullet="red" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 12. Before and after */}
      <section className="border-t border-[#222222] bg-[#111111] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8 max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFC429] sm:text-xs">
              Before / After
            </p>
            <h2 className="font-sans text-2xl font-extrabold text-[#F5F5F5] sm:text-3xl">
              Replace scattered tools with connected club workflows.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <AnimatedSection>
              <div className="h-full rounded-[14px] border border-white/[0.08] bg-[#0B0B0B] p-6">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777]">
                  Before
                </p>
                <ul className="space-y-4">
                  {beforeTools.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#555555]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.06}>
              <div className="h-full rounded-[14px] border border-[#E51937]/20 bg-[#131313] p-6">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E51937]">
                  With Gryph ClubConnect
                </p>
                <ul className="space-y-4">
                  {connectedTools.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[#F5F5F5]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E51937]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 15. Final CTA — conversion panel */}
      <section className="relative py-16 sm:py-20 overflow-hidden bg-[#0B0B0B] border-t border-[#222222]">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="rounded-[14px] border border-white/[0.08] bg-[#131313] p-8 sm:p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div className="h-[2px] w-16 bg-[#E51937] mx-auto mb-6 rounded-full" aria-hidden />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">
                See how Gryph ClubConnect could work for your club.
              </h2>
              <p className="text-[#9CA3AF] text-base mb-8 max-w-2xl mx-auto leading-relaxed">
                Request a walkthrough focused on the workflows your team uses and see how your club could prepare for early access.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
                <Button variant="red" size="lg" onClick={handleOnboard} className="w-full sm:w-auto">
                  Get Your Club Started
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
