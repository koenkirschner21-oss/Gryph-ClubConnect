import AnimatedSection from '../ui/AnimatedSection';
import RotatingWorkflowShowcase, {
  type WorkflowStep,
} from '../ui/RotatingWorkflowShowcase';

const workflowSteps: WorkflowStep[] = [
  {
    title: 'Explore clubs',
    description: 'Search by club name, category, interest, or keyword.',
    placeholderLabel: 'Explore clubs',
    imageSrc: 'screenshots/homepage-workflow-explore-clubs.png',
    imageAlt: 'Gryph ClubConnect Explore Clubs screen',
  },
  {
    title: 'View public club profiles',
    description:
      'See what a club does, when it meets, upcoming events, open roles, and how to get involved.',
    placeholderLabel: 'Club profile',
    imageSrc: 'screenshots/homepage-workflow-club-profile.png',
    imageAlt: 'Gryph ClubConnect public club profile',
  },
  {
    title: 'Sign up for events',
    description:
      'Discover campus events, RSVP, answer sign-up questions, and keep track of what is coming up.',
    placeholderLabel: 'Event sign-up',
    imageSrc: 'screenshots/homepage-workflow-event-rsvp.png',
    imageAlt: 'Gryph ClubConnect event RSVP screen',
  },
  {
    title: 'Apply for roles',
    description:
      'Browse open club positions, submit applications, and track application progress.',
    placeholderLabel: 'Role applications',
    imageSrc: 'screenshots/homepage-workflow-apply-role.png',
    imageAlt: 'Gryph ClubConnect club role application',
  },
  {
    title: 'Stay organized',
    description:
      'Use your dashboard to see clubs, events, tasks, applications, announcements, and inbox updates.',
    placeholderLabel: 'Student dashboard',
    imageSrc: 'screenshots/homepage-workflow-student-dashboard.png',
    imageAlt: 'Gryph ClubConnect student dashboard',
  },
];

export default function StudentShowcase() {
  return (
    <section className="border-t border-[#222222] bg-[#0B0B0B] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mx-0 lg:text-left">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
            For students
          </p>

          <h2 className="mb-4 font-sans text-[2.1rem] font-extrabold leading-tight text-[#F5F5F5] sm:text-[2.75rem]">
            Find clubs, events, and roles without hunting through group chats.
          </h2>

          <p className="text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
            Gryph ClubConnect gives students one place to explore clubs, view
            public profiles, sign up for events, apply for roles, and track
            involvement across the clubs they care about.
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
