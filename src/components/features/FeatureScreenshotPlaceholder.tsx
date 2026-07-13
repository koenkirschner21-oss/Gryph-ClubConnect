/** Premium screenshot placeholder for Features page only. No real images. */

export default function FeatureScreenshotPlaceholder({
  label,
  subtext,
  className = '',
}: {
  label: string;
  subtext: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[12px] border border-white/[0.08] bg-[#131313] overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.08] bg-[#0B0B0B]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
        </div>
        <span className="ml-1 text-[11px] text-[#777777] font-medium tracking-tight truncate">
          Gryph ClubConnect
        </span>
      </div>

      <div
        className="relative aspect-[16/10] min-h-[240px] w-full overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="absolute inset-0 p-5 sm:p-6 flex flex-col pointer-events-none">
          <div className="flex gap-2 mb-4">
            <div className="h-2 w-16 rounded bg-[#E51937]/40" />
            <div className="h-2 w-10 rounded bg-[#222222]" />
            <div className="h-2 w-10 rounded bg-[#222222]" />
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4 max-w-xs">
            <div className="h-12 rounded-[8px] border border-white/[0.06] bg-[#1A1A1A]" />
            <div className="h-12 rounded-[8px] border border-white/[0.06] bg-[#1A1A1A]" />
            <div className="h-12 rounded-[8px] border border-[#FFC429]/15 bg-[rgba(255,196,41,0.06)]" />
          </div>
          <div className="flex-1 grid grid-cols-2 gap-2 min-h-0">
            <div className="rounded-[8px] border border-white/[0.06] bg-[#1A1A1A]" />
            <div className="rounded-[8px] border border-[#E51937]/15 bg-[rgba(229,25,55,0.06)]" />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-[#0B0B0B]/78 backdrop-blur-[1px]">
          <div className="max-w-sm px-6 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777] mb-2">
              Placeholder screenshot
            </p>
            <p className="text-sm sm:text-[15px] font-medium text-[#F5F5F5] mb-2">
              Placeholder screenshot — {label}
            </p>
            <p className="text-[12px] sm:text-[13px] leading-relaxed text-[#9CA3AF]">{subtext}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
