const items = [
  'Explore Clubs',
  'Events & Sign-ups',
  'Announcements',
  'Tasks & Assignments',
  'Member Directory',
  'Roles & Permissions',
  'Hiring & Applications',
  'Club Workspace',
  'Student Dashboard',
  'Early Testing',
];

const tripled = [...items, ...items, ...items];

export default function Ticker() {
  return (
    <div className="relative bg-gradient-to-r from-[#E51937] via-[#C4122E] to-[#E51937] py-3.5 overflow-hidden border-y border-[#C4122E]">
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#E51937] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#E51937] to-transparent z-10 pointer-events-none" />

      <div
        className="flex items-center whitespace-nowrap"
        style={{ animation: 'ticker 40s linear infinite' }}
      >
        {tripled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-2 text-white text-sm font-semibold tracking-wide">
            <span>{item}</span>
            <span className="text-white/40 text-xs">·</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
