import AnimatedSection from '../ui/AnimatedSection';
import RotatingWorkflowShowcase, { type WorkflowStep } from '../ui/RotatingWorkflowShowcase';

const workflowSteps: WorkflowStep[] = [
  {
    title: 'Explore clubs',
    description: 'Search by club name, category, interest, or keyword.',
    placeholderLabel: 'Explore clubs',
  },
  {
    title: 'View public club profiles',
    description:
      'See what a club does, when it meets, upcoming events, open roles, and how to get involved.',
    placeholderLabel: 'Club profile',
  },
  {
    title: 'Sign up for events',
    description:
      'Discover campus events, RSVP, answer sign-up questions, and keep track of what is coming up.',
    placeholderLabel: 'Event sign-up',
  },
  {
    title: 'Apply for roles',
    description:
      'Browse open club positions, submit applications, and track application progress.',
    placeholderLabel: 'Role applications',
  },
  {
    title: 'Stay organized',
    description:
      'Use your dashboard to see clubs, events, tasks, applications, announcements, and inbox updates.',
    placeholderLabel: 'Student dashboard',
  },
];

export default function StudentShowcase() {
  return (
    <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
            For students
          </p>
          <h2 className="text-[2.1rem] sm:text-[2.75rem] font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
            Find clubs, events, and roles without hunting through group chats.
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Gryph ClubConnect gives students one place to explore clubs, view public profiles, sign up for events, apply for roles, and track involvement across the clubs they care about.
          </p>
        </AnimatedSection>

        <RotatingWorkflowShowcase
          steps={workflowSteps}
          accent="red"
          screenshotSide="right"
          placeholderSubtitle="Student workflow screenshot"
        />
      </div>
    </section>
  );
}
