import { motion, AnimatePresence } from 'framer-motion';

type ScreenshotPlaceholderProps = {
  label: string;
  subtitle?: string;
  className?: string;
};

export default function ScreenshotPlaceholder({
  label,
  subtitle = 'Placeholder screenshot',
  className = '',
}: ScreenshotPlaceholderProps) {
  return (
    <div
      className={`flex aspect-[16/10] min-h-[240px] w-full items-center justify-center rounded-[10px] border border-[#242424] bg-[#0B0B0B] ${className}`}
    >
      <div className="px-6 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777] mb-2">
          {subtitle}
        </p>
        <p className="text-sm sm:text-[15px] font-medium text-[#9CA3AF]">
          Placeholder screenshot — {label}
        </p>
      </div>
    </div>
  );
}

export function AnimatedScreenshotPlaceholder({
  label,
  subtitle = 'Placeholder screenshot',
  className = '',
}: ScreenshotPlaceholderProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={label}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className={`rounded-[12px] border border-[#242424] bg-[#131313] p-2 sm:p-2.5 shadow-[0_16px_48px_rgba(0,0,0,0.4)] ${className}`}
      >
        <ScreenshotPlaceholder label={label} subtitle={subtitle} />
      </motion.div>
    </AnimatePresence>
  );
}
