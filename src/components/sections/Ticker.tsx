const items = [
  'Team Channels',
  'Task Tracker',
  'Event Calendar',
  'Member Directory',
  'Multi-Club Support',
  'Admin Dashboard',
  'RSVP Management',
  'Role Permissions',
  '@UofG Verified',
  'Built for Guelph',
];

// Doubled for seamless infinite scroll
const doubled = [...items, ...items];

export default function Ticker() {
  return (
    <div className="relative bg-[#C8102E] py-3 overflow-hidden border-y border-[#A00C24]">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#C8102E] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#C8102E] to-transparent z-10 pointer-events-none" />

      <div
        className="flex items-center gap-0 whitespace-nowrap"
        style={{ animation: 'ticker 30s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 text-white text-sm font-semibold tracking-wide">
            <span>{item}</span>
            <span className="text-white/50 text-xs">✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
