const SCREENSHOTS = {
  dashboard: 'screenshots/01-hero-student-dashboard-adam.png',
  explore: 'screenshots/explore-clubs-grid.png',
  workspace: 'screenshots/clubconnect-club-command-center-hero.png',
  events: 'screenshots/events-management-outdoor.png',
  tasks: 'screenshots/tasks-assigned-to-me.png',
  hiring: 'screenshots/hiring-management-applicant-review.png',
  members: 'screenshots/members-president-view-invites-code.png',
  heroHero: 'screenshots/clubconnect-homepage-hero-phone-right.png',
  studentHero: 'screenshots/clubconnect-student-hero.png',
  demoHero: 'screenshots/clubconnect-demo-hero.png',
} as const;

export type MockupKey = keyof typeof SCREENSHOTS;

const ALTS: Record<MockupKey, string> = {
  dashboard: 'Gryph ClubConnect student dashboard',
  explore: 'Gryph ClubConnect explore clubs',
  workspace: 'Gryph ClubConnect club command center',
  events: 'Gryph ClubConnect events management',
  tasks: 'Gryph ClubConnect tasks assigned to me',
  hiring: 'Gryph ClubConnect hiring and applicant review',
  members: 'Gryph ClubConnect members and invite code',
  heroHero: 'Gryph ClubConnect homepage hero with laptop and phone',
  studentHero: 'Gryph ClubConnect student dashboard and club discovery',
  demoHero: 'Gryph ClubConnect demo walkthrough preview',
};

export function mockupSrc(key: MockupKey): string {
  return `${import.meta.env.BASE_URL}${SCREENSHOTS[key]}`;
}

export default function MockupImage({
  name,
  alt,
  className = '',
  imgClassName = '',
}: {
  name: MockupKey;
  alt?: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={`rounded-[12px] border border-[#222222] bg-[#131313] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.5)] ${className}`}
    >
      <img
        src={mockupSrc(name)}
        alt={alt ?? ALTS[name]}
        className={`w-full h-auto block object-contain ${imgClassName}`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
