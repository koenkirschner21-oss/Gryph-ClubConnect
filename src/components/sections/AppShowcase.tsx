import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { goToDemoForm } from '../../lib/cta';

const ROTATE_MS = 7000;
const INTERACTION_PAUSE_MS = 12000;

const workflows = [
  {
    key: 'dashboard',
    label: 'Student Dashboard',
    description:
      'Track clubs, events, tasks, applications, and inbox updates from one place.',
    highlights: [
      'Cross-club overview',
      'Upcoming events',
      'Tasks and applications',
    ],
    imageSrc: 'screenshots/homepage-app-dashboard.png',
    imageAlt: 'Gryph ClubConnect student dashboard view',
  },
  {
    key: 'explore',
    label: 'Explore Clubs',
    description: 'Browse clubs, public profiles, events, and open positions.',
    highlights: [
      'Search and filters',
      'Public club profiles',
      'Club discovery',
    ],
    imageSrc: 'screenshots/homepage-app-explore.png',
    imageAlt: 'Gryph ClubConnect Explore Clubs view',
  },
  {
    key: 'workspace',
    label: 'Command Center',
    description: 'Run club operations from one organized Command Center.',
    highlights: [
      'Pending actions',
      'Quick actions',
      'Club setup progress',
    ],
    imageSrc: 'screenshots/homepage-app-workspace.png',
    imageAlt: 'Gryph ClubConnect Command Center',
  },
  {
    key: 'events',
    label: 'Events & RSVPs',
    description:
      'Create events, collect RSVP answers, and manage attendees.',
    highlights: [
      'RSVP questions',
      'Attendee management',
      'Event planning tasks',
    ],
    imageSrc: 'screenshots/homepage-app-events-rsvps.png',
    imageAlt: 'Gryph ClubConnect events and RSVP management view',
  },
  {
    key: 'tasks',
    label: 'Task Management',
    description: 'Assign work, track progress, and review completion.',
    highlights: [
      'Owners and due dates',
      'Status tracking',
      'Review workflow',
    ],
    imageSrc: 'screenshots/homepage-app-tasks.png',
    imageAlt: 'Gryph ClubConnect task management view',
  },
  {
    key: 'hiring',
    label: 'Hiring',
    description:
      'Post positions, review applicants, and manage candidate statuses.',
    highlights: ['Position listings', 'Applicant review', 'Status pipeline'],
    imageSrc: 'screenshots/homepage-app-hiring.png',
    imageAlt: 'Gryph ClubConnect hiring view',
  },
  {
    key: 'members',
    label: 'Members & Roles',
    description:
      'Manage members, role titles, invites, club structure, and permissions.',
    highlights: [
      'Member directory',
      'Invites and join codes',
      'Roles and permissions',
    ],
    imageSrc: 'screenshots/homepage-app-members-roles.png',
    imageAlt: 'Gryph ClubConnect members and roles view',
  },
] as const;

export default function AppShowcase() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const interactionTimerRef = useRef<number | null>(null);

  const active = workflows[activeIndex];
  const paused = hoverPaused || interactionPaused;

  const advance = useCallback(() => {
    setActiveIndex((previousIndex) => {
      return (previousIndex + 1) % workflows.length;
    });
  }, []);

  useEffect(() => {
    if (paused) {
      return;
    }

    const interval = window.setInterval(advance, ROTATE_MS);
    return () => window.clearInterval(interval);
  }, [paused, advance]);

  useEffect(() => {
    return () => {
      if (interactionTimerRef.current !== null) {
        window.clearTimeout(interactionTimerRef.current);
      }
    };
  }, []);

  const handleSelect = (index: number) => {
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

  const handleDemo = () => {
    goToDemoForm({
      interest: 'Request a demo',
      navigate,
      pathname: '/',
    });
  };

  return (
    <section
      id="app-showcase"
      className="scroll-mt-24 border-t border-[#222222] bg-[#0B0B0B] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF5A70] sm:text-xs">
            Product tour
          </p>

          <h2 className="mb-4 font-sans text-[2.1rem] font-extrabold leading-tight text-[#F5F5F5] sm:text-[2.75rem]">
            See the platform in action
          </h2>

          <p className="text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
            Explore the core tools students and club leaders use across
            discovery, participation, and club management.
          </p>
        </div>

        <div
          className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,310px)_1fr] lg:gap-10"
          onMouseEnter={() => setHoverPaused(true)}
          onMouseLeave={() => setHoverPaused(false)}
        >
          <div className="space-y-2">
            {workflows.map((workflow, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={workflow.key}
                  type="button"
                  onClick={() => handleSelect(index)}
                  className={`relative w-full cursor-pointer overflow-hidden rounded-[10px] border px-4 py-3.5 text-left transition-colors ${
                    isActive
                      ? 'border-[#E51937]/45 bg-[#131313] text-[#F5F5F5]'
                      : 'border-white/[0.06] bg-transparent text-[#A5ABB5] hover:border-white/[0.1] hover:bg-[#131313] hover:text-[#F5F5F5]'
                  }`}
                >
                  <div className="flex gap-3">
                    <span
                      className={`shrink-0 pt-0.5 text-[12px] font-semibold tabular-nums ${
                        isActive ? 'text-[#FF5A70]' : 'text-[#9CA3AF]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="min-w-0">
                      <span className="block text-sm font-semibold">
                        {workflow.label}
                      </span>

                      <span
                        className={`mt-1 block text-[12px] leading-snug ${
                          isActive ? 'text-[#9CA3AF]' : 'text-[#AEB4C0]'
                        }`}
                      >
                        {workflow.description}
                      </span>
                    </div>
                  </div>

                  {isActive && !paused && (
                    <motion.div
                      key={`progress-${activeIndex}`}
                      className="absolute bottom-0 left-0 h-[2px] bg-[#E51937]"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{
                        duration: ROTATE_MS / 1000,
                        ease: 'linear',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{
                  duration: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="mb-5">
                  <h3 className="mb-1.5 text-lg font-bold text-[#F5F5F5] sm:text-xl">
                    {active.label}
                  </h3>

                  <p className="mb-4 max-w-xl text-sm leading-relaxed text-[#9CA3AF]">
                    {active.description}
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    {active.highlights.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center rounded-[8px] border border-white/[0.08] bg-[#131313] px-2.5 py-1 text-[12px] text-[#F5F5F5]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#131313] shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
                  <img
                    src={`${import.meta.env.BASE_URL}${active.imageSrc}`}
                    alt={active.imageAlt}
                    className="block h-auto w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="mb-1 text-sm text-[#9CA3AF]">
            Want to see how it works for your club?
          </p>

          <button
            type="button"
            onClick={handleDemo}
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#FF5A70] transition-colors hover:text-[#FF7A8D]"
          >
            Request a Demo
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
