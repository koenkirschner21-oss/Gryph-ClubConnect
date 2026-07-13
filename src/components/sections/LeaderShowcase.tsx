import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import RotatingWorkflowShowcase, { type WorkflowStep } from '../ui/RotatingWorkflowShowcase';
import { goToDemoForm } from '../../lib/cta';

const workflowSteps: WorkflowStep[] = [
  {
    title: 'Start in the Command Center',
    description:
      'See pending actions, upcoming activity, open tasks, applications, quick actions, and setup progress in one overview.',
    placeholderLabel: 'Command Center',
  },
  {
    title: 'Keep members updated',
    description:
      'Post announcements, keep important updates visible, and support club communication beyond scattered group chats.',
    placeholderLabel: 'Announcements',
  },
  {
    title: 'Plan events and track RSVPs',
    description:
      'Create events, collect sign-ups, review RSVP answers, manage attendees, and connect planning tasks to the event.',
    placeholderLabel: 'Events & RSVPs',
  },
  {
    title: 'Assign and review tasks',
    description:
      'Set ownership, due dates, priorities, comments, and review states across your team.',
    placeholderLabel: 'Tasks',
  },
  {
    title: 'Run meetings and follow-ups',
    description:
      'Prepare agendas, capture notes and decisions, and turn follow-ups into assigned tasks.',
    placeholderLabel: 'Meetings',
  },
  {
    title: 'Manage members and resources',
    description:
      'Use member lists, role titles, org structure, invite codes, documents, and resources to keep the club organized.',
    placeholderLabel: 'Members & resources',
  },
  {
    title: 'Review hiring and permissions',
    description:
      'Post roles, review applicants, move candidates through statuses, view analytics, and control who can access what.',
    placeholderLabel: 'Hiring & permissions',
  },
];

export default function LeaderShowcase() {
  const navigate = useNavigate();

  const handleOnboard = () => {
    goToDemoForm({ interest: 'Onboard my club', navigate, pathname: '/' });
  };

  return (
    <section id="for-clubs-home" className="py-16 sm:py-20 bg-[#111111] scroll-mt-24 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-3">
            For club leaders
          </p>
          <h2 className="text-[2.1rem] sm:text-[2.75rem] font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
            Run events, members, tasks, hiring, and meetings from one workspace.
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Gryph ClubConnect gives club leaders a central workspace for the moving pieces of club life: announcements, events, RSVPs, tasks, meetings, documents, members, hiring, analytics, and permissions.
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
              onClick={handleOnboard}
              className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#FFC429] hover:text-[#FFD45C] transition-colors"
            >
              Onboard Your Club
              <ArrowRight size={16} />
            </button>
          }
        />
      </div>
    </section>
  );
}
