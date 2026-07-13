type BrandLogoProps = {
  /** nav: header lockup; footer: compact; hero: modest size */
  variant?: 'nav' | 'footer' | 'hero';
  className?: string;
};

export default function BrandLogo({
  variant = 'nav',
  className = '',
}: BrandLogoProps) {
  const isNav = variant === 'nav';
  const isFooter = variant === 'footer';

  const iconHeight = isNav
    ? 'h-9 w-auto sm:h-10'
    : isFooter
      ? 'h-8 w-auto'
      : 'h-8 w-auto sm:h-9 md:h-10';

  const textClass = isNav
    ? 'text-lg font-extrabold italic leading-none tracking-tight sm:text-xl md:text-[1.4rem]'
    : isFooter
      ? 'text-base font-extrabold italic leading-none tracking-tight'
      : 'text-sm font-extrabold italic leading-none tracking-tight sm:text-base md:text-lg';

  return (
    <span
      className={`inline-flex items-center min-w-0 ${isNav ? 'gap-2.5 sm:gap-3' : 'gap-2 sm:gap-2.5'} ${className}`}
    >
      <img
        src={`${import.meta.env.BASE_URL}gryph-icon.png`}
        alt=""
        className={`shrink-0 object-contain ${iconHeight}`}
        aria-hidden
      />
      <span
        className={`${textClass} truncate`}
        style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
      >
        <span style={{ color: '#E51937' }}>Club</span>
        <span style={{ color: '#FFC429' }}>Connect</span>
      </span>
    </span>
  );
}
