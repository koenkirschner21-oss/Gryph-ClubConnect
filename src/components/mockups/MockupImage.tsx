const SCREENSHOTS = {
  dashboard: 'screenshots/hero-student-dashboard-adam.png',
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

/** Intrinsic pixel dimensions for CLS reservation (post-optimization). */
const DIMENSIONS: Record<MockupKey, { width: number; height: number }> = {
  dashboard: { width: 1200, height: 800 },
  explore: { width: 1200, height: 800 },
  workspace: { width: 1600, height: 900 },
  events: { width: 1200, height: 800 },
  tasks: { width: 1200, height: 800 },
  hiring: { width: 1200, height: 800 },
  members: { width: 1200, height: 800 },
  heroHero: { width: 1448, height: 1086 },
  studentHero: { width: 1600, height: 900 },
  demoHero: { width: 1448, height: 1086 },
};

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

function toWebpSrc(pngSrc: string): string {
  return pngSrc.replace(/\.png$/i, '.webp');
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
  const dims = DIMENSIONS[name];
  const resolvedWidth = width ?? dims.width;
  const resolvedHeight = height ?? dims.height;
  const pngSrc = mockupSrc(name);
  const webpSrc = toWebpSrc(pngSrc);

  return (
    <div
      className={`overflow-hidden rounded-[12px] border border-[#222222] bg-[#131313] shadow-[0_12px_40px_rgba(0,0,0,0.5)] ${className}`}
      style={{
        aspectRatio: `${resolvedWidth} / ${resolvedHeight}`,
      }}
    >
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={pngSrc}
          alt={alt ?? ALTS[name]}
          className={`block h-full w-full object-contain ${imgClassName}`}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'async' : 'async'}
          width={resolvedWidth}
          height={resolvedHeight}
        />
      </picture>
    </div>
  );
}
