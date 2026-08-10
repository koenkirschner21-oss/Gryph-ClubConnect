type ScreenshotImageProps = {
  /** Path relative to site root, e.g. screenshots/foo.png */
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  /** Prefer WebP when a sibling .webp exists in /public */
  preferWebp?: boolean;
};

function resolveSrc(src: string): string {
  if (src.startsWith('http') || src.startsWith('data:')) {
    return src;
  }

  const normalized = src.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${normalized}`;
}

function toWebpSrc(src: string): string | null {
  if (!/\.png$/i.test(src)) {
    return null;
  }

  return src.replace(/\.png$/i, '.webp');
}

/**
 * Product screenshot with optional WebP source + intrinsic dimensions for CLS.
 */
export default function ScreenshotImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  preferWebp = true,
}: ScreenshotImageProps) {
  const pngSrc = resolveSrc(src);
  const webpSrc = preferWebp ? toWebpSrc(pngSrc) : null;

  const img = (
    <img
      src={pngSrc}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      width={width}
      height={height}
    />
  );

  if (!webpSrc) {
    return img;
  }

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      {img}
    </picture>
  );
}
