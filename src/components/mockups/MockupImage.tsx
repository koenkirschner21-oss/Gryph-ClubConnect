const MOCKUPS = {
  dashboard: 'mockups/student-dashboard.png',
  explore: 'mockups/explore-clubs.png',
  workspace: 'mockups/club-workspace.png',
} as const;

export type MockupKey = keyof typeof MOCKUPS;

const ALTS: Record<MockupKey, string> = {
  dashboard: 'Gryph ClubConnect student dashboard mockup',
  explore: 'Gryph ClubConnect explore clubs mockup',
  workspace: 'Gryph ClubConnect club workspace mockup',
};

export function mockupSrc(key: MockupKey): string {
  return `${import.meta.env.BASE_URL}${MOCKUPS[key]}`;
}

export default function MockupImage({
  name,
  alt,
  className = '',
}: {
  name: MockupKey;
  alt?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[12px] border border-[#222222] bg-[#131313] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.45)] ${className}`}
    >
      <img
        src={mockupSrc(name)}
        alt={alt ?? ALTS[name]}
        className="w-full h-auto block"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
