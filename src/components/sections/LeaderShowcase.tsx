import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import RotatingWorkflowShowcase, {
  type WorkflowStep,
} from '../ui/RotatingWorkflowShowcase';
import { goToDemoForm } from '../../lib/cta';

const workflowSteps: WorkflowStep[] = [
  {
    title: 'Start in the Command Center',
    description:
      'See pending actions, upcoming activity, open work, and setup progress from one clear overview.',
    placeholderLabel: 'Command Center',
    imageSrc: 'screenshots/homepage-leaders-command-center-final.png',
    imageAlt:
      'Gryph ClubConnect Club Command Center showing pending actions, upcoming activity, tasks, and hiring activity.',
  },
  {
    title: 'Keep members updated',
    description:
      'Post announcements, keep important updates visible, and support club communication beyond scattered group chats.',
    placeholderLabel: 'Announcements',
    imageSrc: 'screenshots/homepage-leaders-announcements-final.png',
    imageAlt:
      'Gryph ClubConnect Announcements page showing pinned club updates, visibility controls, and post management.',
  },
  {
    title: 'Plan events and track RSVPs',
    description:
      'Create events, collect sign-ups, review RSVP answers, manage attendees, and connect planning tasks to the event.',
    placeholderLabel: 'Events & RSVPs',
    imageSrc: 'screenshots/homepage-leaders-events-management-final.png',
    imageAlt:
      'Gryph ClubConnect Events management page showing upcoming events, RSVPs, attendees, and planning tasks.',
  },
  {
    title: 'Assign and review tasks',
    description:
      'Set ownership, due dates, priorities, comments, and review states across your team.',
    placeholderLabel: 'Tasks',
    imageSrc: 'screenshots/homepage-leaders-tasks-final.png',
    imageAlt:
      'Gryph ClubConnect Tasks page showing assignments, due dates, priorities, progress, and completion status.',
  },
  {
    title: 'Run meetings and follow-ups',
    description:
      'Prepare agendas, capture notes and decisions, and turn follow-ups into assigned tasks.',
    placeholderLabel: 'Meetings',
    imageSrc: 'screenshots/homepage-leaders-meetings-final.png',
    imageAlt:
      'Gryph ClubConnect meeting workspace showing agenda items, preparation notes, attendees, and meeting details.',
  },
  {
    title: 'Manage members and roles',
    description:
      'Organize your member directory, role titles, access levels, invites, and club structure.',
    placeholderLabel: 'Members & roles',
    imageSrc: 'screenshots/homepage-leaders-members-roles-final.png',
    imageAlt:
      'Gryph ClubConnect Members page showing the club role hierarchy, member counts, invites, and access levels.',
  },
  {
    title: 'Review applicants and manage hiring',
    description:
      'Post roles, review applications, schedule interviews, and move candidates through a clear status pipeline.',
    placeholderLabel: 'Hiring',
    imageSrc: 'screenshots/homepage-leaders-hiring-final.png',
    imageAlt:
      'Gryph ClubConnect Hiring page showing open positions, applicants, review statuses, and hiring actions.',
  },
];

export default function LeaderShowcase() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    goToDemoForm({
      interest: 'Onboard my club',
      navigate,
      pathname: '/',
    });
  };

  return (
    <section
      id="for-clubs-home"
      className="scroll-mt-24 border-t border-[#222222] bg-[#111111] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 max-w-3xl sm:mb-12">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFC429] sm:text-xs">
            For club leaders
          </p>

          <h2 className="mb-4 font-sans text-[2rem] font-extrabold leading-tight text-[#F5F5F5] sm:text-[2.55rem]">
            Run your club from one organized workspace.
          </h2>

          <p className="text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
            Gryph ClubConnect brings your club’s communication, planning,
            members, and day-to-day work into one organized workspace.
          </p>
        </AnimatedSection>

        <RotatingWorkflowShowcase
          steps={workflowSteps}
          accent="gold"
          screenshotSide="left"
          placeholderSubtitle="Club leader workflow screenshot"
          footer={
            <button
              type="button"
              onClick={handleGetStarted}
              className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#FFC429] transition-colors hover:text-[#FFD45C]"
            >
              Get Your Club Started
              <ArrowRight size={16} />
            </button>
          }
        />
      </div>
    </section>
  );
}
