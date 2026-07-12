import { useState, useEffect, type ReactNode } from 'react';
import { AnimatedScreenshotPlaceholder } from './ScreenshotPlaceholder';

export type WorkflowStep = {
  title: string;
  description: string;
  placeholderLabel: string;
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
    stepNum: 'text-[#E51937]',
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

export default function RotatingWorkflowShowcase({
  steps,
  accent,
  screenshotSide = 'right',
  placeholderSubtitle = 'Student workflow screenshot',
  intervalMs = 6000,
  footer,
}: RotatingWorkflowShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const styles = accentStyles[accent];
  const activeStep = steps[activeIndex];

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [paused, steps.length, intervalMs]);

  const stepsPanel = (
    <div>
      <ol className="space-y-0 rounded-[12px] border border-[#222222] bg-[#131313] overflow-hidden">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={step.title}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-full flex gap-4 px-5 py-4 sm:px-6 sm:py-4 text-left border-l-2 transition-colors ${
                  index < steps.length - 1 ? 'border-b border-[#222222]' : ''
                } ${
                  isActive
                    ? `${styles.activeBorder} ${styles.activeBg}`
                    : `border-l-transparent ${styles.inactiveHover}`
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
                    className={`font-semibold text-[15px] sm:text-base mb-1 ${
                      isActive ? 'text-[#F5F5F5]' : 'text-[#9CA3AF]'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-[13px] sm:text-[14px] leading-relaxed ${
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
      <AnimatedScreenshotPlaceholder
        label={activeStep.placeholderLabel}
        subtitle={placeholderSubtitle}
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-14 items-start">
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
