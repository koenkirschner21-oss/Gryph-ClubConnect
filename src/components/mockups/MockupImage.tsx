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

type MockupImageProps = {
  name: MockupKey;
  alt?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

export default function MockupImage({
  name,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  width,
  height,
}: MockupImageProps) {
  return (
    <div
      className={`overflow-hidden rounded-[12px] border border-[#222222] bg-[#131313] shadow-[0_12px_40px_rgba(0,0,0,0.5)] ${className}`}
    >
      <img
        src={mockupSrc(name)}
        alt={alt ?? ALTS[name]}
        className={`block h-auto w-full object-contain ${imgClassName}`}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        width={width}
        height={height}
      />
    </div>
  );
}
