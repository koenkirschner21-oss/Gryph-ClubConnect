import { useState, useEffect, useCallback, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FeatureScreenshotPlaceholder from '../features/FeatureScreenshotPlaceholder';

export type ClubWorkflowStep = {
  title: string;
  description: string;
  placeholderLabel: string;
  placeholderSubtext: string;
};

type Accent = 'red' | 'gold';

type ClubWorkflowSlideshowProps = {
  steps: ClubWorkflowStep[];
  accent?: Accent;
  screenshotSide?: 'left' | 'right';
  intervalMs?: number;
  footer?: ReactNode;
};

const accentStyles = {
  red: {
    stepNum: 'text-[#E51937]',
    activeBorder: 'border-l-[#E51937]',
    activeBg: 'bg-[rgba(229,25,55,0.06)]',
  },
  gold: {
    stepNum: 'text-[#FFC429]',
    activeBorder: 'border-l-[#FFC429]',
    activeBg: 'bg-[rgba(255,196,41,0.06)]',
  },
};

export default function ClubWorkflowSlideshow({
  steps,
  accent = 'gold',
  screenshotSide = 'right',
  intervalMs = 5500,
  footer,
}: ClubWorkflowSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const styles = accentStyles[accent];
  const active = steps[activeIndex];

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  }, [steps.length]);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(advance, intervalMs);
    return () => clearInterval(interval);
  }, [paused, advance, intervalMs, activeIndex]);

  const stepsPanel = (
    <div>
      <ol className="space-y-0 rounded-[12px] border border-white/[0.08] bg-[#131313] overflow-hidden">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={step.title}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-full flex gap-4 px-5 py-4 text-left border-l-2 transition-colors cursor-pointer ${
                  index < steps.length - 1 ? 'border-b border-white/[0.08]' : ''
                } ${
                  isActive
                    ? `${styles.activeBorder} ${styles.activeBg}`
                    : 'border-l-transparent hover:bg-[#161616]'
                }`}
              >
                <span
                  className={`shrink-0 w-8 text-[13px] font-semibold tabular-nums pt-0.5 ${
                    isActive ? styles.stepNum : 'text-[#555555]'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3
                    className={`font-semibold text-[15px] mb-1 ${
                      isActive ? 'text-[#F5F5F5]' : 'text-[#9CA3AF]'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-[13px] leading-relaxed ${
                      isActive ? 'text-[#9CA3AF]' : 'text-[#666666]'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </button>
            </li>
          );
        })}
      </ol>
      {footer}
    </div>
  );

  const screenshotPanel = (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={active.placeholderLabel}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <FeatureScreenshotPlaceholder
            label={active.placeholderLabel}
            subtext={active.placeholderSubtext}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
      {screenshotSide === 'left' ? (
        <>
          <div className="order-1">{screenshotPanel}</div>
          <div className="order-2">{stepsPanel}</div>
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{stepsPanel}</div>
          <div className="order-1 lg:order-2">{screenshotPanel}</div>
        </>
      )}
    </div>
  );
}
