import { motion } from 'framer-motion';
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { AnimatedScreenshotPlaceholder } from './ScreenshotPlaceholder';

export type WorkflowStep = {
  title: string;
  description: string;
  placeholderLabel: string;
  imageSrc?: string;
  imageAlt?: string;
};

type Accent = 'red' | 'gold';

type RotatingWorkflowShowcaseProps = {
  steps: WorkflowStep[];
  accent: Accent;
  screenshotSide?: 'left' | 'right';
  placeholderSubtitle?: string;
  intervalMs?: number;
  footer?: ReactNode;
};

const accentStyles = {
  red: {
    stepNum: 'text-[#FF5A70]',
    activeBorder: 'border-l-[#E51937]',
    activeBg: 'bg-[rgba(229,25,55,0.06)]',
    inactiveHover: 'hover:bg-[#161616]',
  },
  gold: {
    stepNum: 'text-[#FFC429]',
    activeBorder: 'border-l-[#FFC429]',
    activeBg: 'bg-[rgba(255,196,41,0.06)]',
    inactiveHover: 'hover:bg-[#161616]',
  },
};

const INTERACTION_PAUSE_MS = 12000;

export default function RotatingWorkflowShowcase({
  steps,
  accent,
  screenshotSide = 'right',
  placeholderSubtitle = 'Student workflow screenshot',
  intervalMs = 7000,
  footer,
}: RotatingWorkflowShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const interactionTimerRef = useRef<number | null>(null);

  const styles = accentStyles[accent];
  const paused = hoverPaused || interactionPaused;

  useEffect(() => {
    steps.forEach((step) => {
      if (!step.imageSrc) {
        return;
      }

      const image = new Image();
      image.src = `${import.meta.env.BASE_URL}${step.imageSrc}`;
    });
  }, [steps]);

  useEffect(() => {
    if (paused || steps.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((previousIndex) => {
        return (previousIndex + 1) % steps.length;
      });
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [paused, steps.length, intervalMs]);

  useEffect(() => {
    return () => {
      if (interactionTimerRef.current !== null) {
        window.clearTimeout(interactionTimerRef.current);
      }
    };
  }, []);

  const handleStepSelect = (index: number) => {
    if (index === activeIndex) {
      return;
    }

    setActiveIndex(index);
    setInteractionPaused(true);

    if (interactionTimerRef.current !== null) {
      window.clearTimeout(interactionTimerRef.current);
    }

    interactionTimerRef.current = window.setTimeout(() => {
      setInteractionPaused(false);
      interactionTimerRef.current = null;
    }, INTERACTION_PAUSE_MS);
  };

  const stepsPanel = (
    <div>
      <ol className="space-y-0 overflow-hidden rounded-[12px] border border-[#222222] bg-[#131313]">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;

          return (
            <li key={step.title}>
              <button
                type="button"
                onClick={() => handleStepSelect(index)}
                aria-pressed={isActive}
                className={`flex w-full gap-4 border-l-2 px-5 py-4 text-left transition-colors duration-200 sm:px-6 sm:py-4 ${
                  index < steps.length - 1
                    ? 'border-b border-[#222222]'
                    : ''
                } ${
                  isActive
                    ? `${styles.activeBorder} ${styles.activeBg}`
                    : `border-l-transparent ${styles.inactiveHover}`
                }`}
              >
                <span
                  className={`w-8 shrink-0 pt-0.5 text-[13px] font-semibold tabular-nums transition-colors duration-200 ${
                    isActive ? styles.stepNum : 'text-[#9CA3AF]'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="min-w-0">
                  <h3
                    className={`mb-1 text-[15px] font-semibold transition-colors duration-200 sm:text-base ${
                      isActive ? 'text-[#F5F5F5]' : 'text-[#BFC4CC]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed transition-colors duration-200 sm:text-[14px] ${
                      isActive ? 'text-[#9CA3AF]' : 'text-[#AEB4C0]'
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
    <div
      className="lg:sticky lg:top-28 lg:pt-6"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] border border-[#222222] bg-[#131313] shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;

          if (!step.imageSrc) {
            return (
              <motion.div
                key={step.placeholderLabel}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                }}
                transition={{
                  duration: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`absolute inset-0 ${
                  isActive ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
                aria-hidden={!isActive}
              >
                <AnimatedScreenshotPlaceholder
                  label={step.placeholderLabel}
                  subtitle={placeholderSubtitle}
                />
              </motion.div>
            );
          }

          return (
            <motion.div
              key={step.imageSrc}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
              }}
              transition={{
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`absolute inset-0 flex items-center justify-center ${
                isActive ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
              aria-hidden={!isActive}
            >
              <img
                src={`${import.meta.env.BASE_URL}${step.imageSrc}`}
                alt={isActive ? step.imageAlt ?? step.placeholderLabel : ''}
                className="block h-full w-full object-contain"
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  const desktopGridClass =
    screenshotSide === 'left'
      ? 'lg:grid-cols-[1.18fr_0.82fr] xl:grid-cols-[1.22fr_0.78fr]'
      : 'lg:grid-cols-[0.82fr_1.18fr] xl:grid-cols-[0.78fr_1.22fr]';

  return (
    <div
      className={`grid grid-cols-1 items-start gap-8 lg:gap-10 xl:gap-12 ${desktopGridClass}`}
    >
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
