import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import MockupImage from '../mockups/MockupImage';
import { goToDemoForm } from '../../lib/cta';

const trustPoints = [
  'Student-built',
  'Designed for UofG club life',
  'Early club onboarding open',
];

export default function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    goToDemoForm({
      interest: 'Onboard my club',
      navigate,
      pathname: '/',
    });
  };

  const handleDemo = () => {
    goToDemoForm({
      interest: 'Request a demo',
      navigate,
      pathname: '/',
    });
  };

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#0B0B0B] lg:min-h-[calc(100vh-4rem)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#E51937] opacity-[0.03] blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-4 sm:gap-5"
          >
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFC429] sm:text-xs">
                Early access
              </span>

              <span
                className="h-px w-4 shrink-0 bg-[#E51937]"
                aria-hidden
              />

              <p className="text-[13px] leading-snug text-[#9CA3AF]">
                Early access onboarding is open for University of Guelph clubs.
              </p>
            </div>

            <h1
              className="font-sans font-extrabold leading-[1.05] tracking-tight"
              style={{
                fontSize: 'clamp(2.25rem, 4.6vw, 3.55rem)',
              }}
            >
              <span className="block text-[#F5F5F5]">
                Discover campus life.
              </span>

              <span className="block text-[#FFC429]">
                Manage club life.
              </span>
            </h1>

            <p
              className="max-w-[36rem] text-lg text-[#9CA3AF] sm:text-xl"
              style={{
                lineHeight: '1.6',
              }}
            >
              Gryph ClubConnect helps students discover clubs, events, and
              opportunities while giving club leaders one organized workspace
              to manage their team and operations.
            </p>

            <div className="flex flex-col items-stretch gap-3 pt-0.5 sm:flex-row sm:items-center">
              <Button
                variant="red"
                size="lg"
                onClick={handleGetStarted}
                className="w-full shadow-[0_8px_24px_rgba(229,25,55,0.22)] sm:w-auto"
              >
                Get Your Club Started
              </Button>

              <Button
                variant="ghost"
                size="lg"
                onClick={handleDemo}
                className="w-full sm:w-auto"
              >
                Request a Demo
              </Button>
            </div>

            <div className="pt-0.5">
              <div className="h-px w-full max-w-xl bg-[#222222]" />

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-1.5 text-[12px] font-medium text-[#9CA3AF] sm:text-[13px]"
                  >
                    <Check
                      size={14}
                      strokeWidth={2}
                      className="shrink-0 text-[#E51937]"
                      aria-hidden
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            className="relative block lg:-mr-10 xl:-mr-16"
          >
            <MockupImage
              name="heroHero"
              alt="Gryph ClubConnect dashboard on a laptop with the mobile club discovery experience beside it"
              className="relative !overflow-visible !rounded-none !border-0 !bg-transparent !shadow-none !ring-0"
              imgClassName="h-auto w-full scale-[1.08] object-contain lg:scale-[1.15]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
