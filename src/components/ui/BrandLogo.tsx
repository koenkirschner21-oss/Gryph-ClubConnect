type BrandLogoProps = {
  /** nav: header lockup; footer: compact; hero: modest size */
  variant?: 'nav' | 'footer' | 'hero';
  className?: string;
};

/** Intrinsic pixel size of gryph-icon-sm (matches 740×430 source ratio). */
const LOGO_WIDTH = 207;
const LOGO_HEIGHT = 120;

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

  const pngSrc = `${import.meta.env.BASE_URL}gryph-icon-sm.png`;
  const webpSrc = `${import.meta.env.BASE_URL}gryph-icon-sm.webp`;

  return (
    <span
      className={`inline-flex items-center min-w-0 ${isNav ? 'gap-2.5 sm:gap-3' : 'gap-2 sm:gap-2.5'} ${className}`}
    >
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={pngSrc}
          alt=""
          width={LOGO_WIDTH}
          height={LOGO_HEIGHT}
          className={`shrink-0 object-contain ${iconHeight}`}
          decoding="async"
          fetchPriority={isNav ? 'high' : 'auto'}
          aria-hidden
        />
      </picture>
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
