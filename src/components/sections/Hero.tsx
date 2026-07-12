import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import MockupImage from '../mockups/MockupImage';
import {
  goToSection,
  ONBOARD_CLUB_ID,
  REQUEST_DEMO_ID,
  setClubFormInterest,
} from '../../lib/cta';

export default function Hero() {
  const navigate = useNavigate();

  const handleOnboard = () => {
    setClubFormInterest('Onboard my club');
    goToSection(ONBOARD_CLUB_ID, { navigate, pathname: '/' });
  };

  const handleDemo = () => {
    setClubFormInterest('Request a demo');
    goToSection(REQUEST_DEMO_ID, { navigate, pathname: '/' });
  };

  return (
    <section className="relative flex items-center overflow-hidden bg-[#0B0B0B] min-h-[88vh] lg:min-h-[calc(100vh-4rem)]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-[#E51937] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-24 pb-12 sm:pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 sm:gap-5"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429]">
                Early access
              </span>
              <span className="h-px w-4 bg-[#E51937] shrink-0" aria-hidden />
              <p className="text-[13px] text-[#9CA3AF] leading-snug">
                Early access onboarding is open for UofG clubs.
              </p>
            </div>

            <h1
              className="font-sans font-extrabold leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.35rem, 5.2vw, 4rem)' }}
            >
              <span className="block text-[#F5F5F5]">Discover campus life.</span>
              <span className="block text-[#FFC429]">Manage club life.</span>
            </h1>

            <p
              className="text-[#9CA3AF] text-lg sm:text-xl max-w-[34rem]"
              style={{ lineHeight: '1.65' }}
            >
              Gryph ClubConnect helps students discover clubs, events, and opportunities while giving club leaders one workspace for members, announcements, events, tasks, hiring, meetings, documents, analytics, and permissions.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-0.5">
              <Button
                variant="red"
                size="lg"
                onClick={handleOnboard}
                className="shadow-[0_8px_24px_rgba(229,25,55,0.22)]"
              >
                Onboard Your Club
              </Button>
              <Button variant="ghost" size="lg" onClick={handleDemo}>
                Request a Demo
              </Button>
            </div>

            <div className="pt-0.5">
              <div className="h-px w-full max-w-md bg-[#222222]" />
              <p className="mt-2.5 text-[12px] sm:text-[13px] text-[#9CA3AF] font-medium tracking-tight">
                Student-built · Built for UofG club life · Early club onboarding now open
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative hidden sm:block lg:pl-2"
          >
            <MockupImage
              name="dashboard"
              alt="Gryph ClubConnect student dashboard"
              className="relative rounded-[12px] border border-[#242424] bg-[#131313] shadow-[0_20px_50px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.04]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
