import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { goToDemoForm } from '../../lib/cta';

const ROTATE_MS = 6000;

const workflows = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    description: 'Track clubs, events, tasks, applications, and inbox updates from one place.',
    highlights: ['Cross-club overview', 'Upcoming events', 'Tasks and applications'],
    placeholderLabel: 'Dashboard view',
    placeholderSubtext:
      'Student dashboard with clubs, events, tasks, applications, and inbox updates.',
    imageSrc: 'screenshots/homepage-app-dashboard.png',
    imageAlt: 'Gryph ClubConnect dashboard view',
  },
  {
    key: 'explore',
    label: 'Explore',
    description: 'Browse clubs, public profiles, events, and open roles.',
    highlights: ['Search clubs', 'View public profiles', 'Discover opportunities'],
    placeholderLabel: 'Explore view',
    placeholderSubtext: 'Club discovery, public profiles, events, and open roles.',
    imageSrc: 'screenshots/homepage-app-explore.png',
    imageAlt: 'Gryph ClubConnect explore view',
  },
  {
    key: 'workspace',
    label: 'Workspace',
    description: 'Run club operations from the Command Center.',
    highlights: ['Pending actions', 'Quick actions', 'Club setup progress'],
    placeholderLabel: 'Workspace view',
    placeholderSubtext:
      'Command Center with pending actions, quick actions, events, tasks, and setup progress.',
    imageSrc: 'screenshots/homepage-app-workspace.png',
    imageAlt: 'Gryph ClubConnect workspace Command Center',
  },
  {
    key: 'events',
    label: 'Events & RSVPs',
    description: 'Create events, collect RSVP answers, and manage attendees.',
    highlights: ['RSVP questions', 'Attendee management', 'Event planning tasks'],
    placeholderLabel: 'Events & RSVPs view',
    placeholderSubtext:
      'Event management with RSVP answers, attendee lists, and planning tasks.',
    imageSrc: 'screenshots/homepage-app-events-rsvps.png',
    imageAlt: 'Gryph ClubConnect events and RSVP view',
  },
  {
    key: 'tasks',
    label: 'Tasks',
    description: 'Assign work, track progress, and review completion.',
    highlights: ['Owners and due dates', 'Status tracking', 'Review workflow'],
    placeholderLabel: 'Tasks view',
    placeholderSubtext: 'Task assignment, progress tracking, comments, and review states.',
    imageSrc: 'screenshots/homepage-app-tasks.png',
    imageAlt: 'Gryph ClubConnect tasks view',
  },
  {
    key: 'hiring',
    label: 'Hiring',
    description: 'Post roles, review applicants, and manage candidate statuses.',
    highlights: ['Role listings', 'Applicant review', 'Status pipeline'],
    placeholderLabel: 'Hiring view',
    placeholderSubtext:
      'Hiring pipeline with applications, custom questions, reviewers, and candidate statuses.',
    imageSrc: 'screenshots/homepage-app-hiring.png',
    imageAlt: 'Gryph ClubConnect hiring view',
  },
  {
    key: 'members',
    label: 'Members & Roles',
    description: 'Manage members, role titles, invites, org structure, and permissions.',
    highlights: ['Member directory', 'Invites and join codes', 'Roles and permissions'],
    placeholderLabel: 'Members & Roles view',
    placeholderSubtext: 'Member roster, role tiers, invites, org structure, and permission controls.',
    imageSrc: 'screenshots/homepage-app-members-roles.png',
    imageAlt: 'Gryph ClubConnect members and roles view',
  },
] as const;

export default function AppShowcase() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = workflows[activeIndex];

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % workflows.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(advance, ROTATE_MS);
    return () => clearInterval(interval);
  }, [paused, advance, activeIndex]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  const handleDemo = () => {
    goToDemoForm({ interest: 'Request a demo', navigate, pathname: '/' });
  };

  return (
    <section id="app-showcase" className="py-16 sm:py-20 bg-[#0B0B0B] scroll-mt-24 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12 max-w-3xl mx-auto text-center">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
            Product workflows
          </p>
          <h2 className="text-[2.1rem] sm:text-[2.75rem] font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
            See how Gryph ClubConnect works
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Explore the key workflows behind student discovery and club operations.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] gap-8 lg:gap-10 items-start"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="space-y-2">
            {workflows.map((workflow, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={workflow.key}
                  type="button"
                  onClick={() => handleSelect(index)}
                  className={`relative w-full rounded-[10px] border px-4 py-3.5 text-left transition-colors cursor-pointer overflow-hidden ${
                    isActive
                      ? 'bg-[#131313] border-[#E51937]/45 text-[#F5F5F5]'
                      : 'bg-transparent border-white/[0.06] text-[#9CA3AF] hover:bg-[#131313] hover:border-white/[0.1] hover:text-[#F5F5F5]'
                  }`}
                >
                  <div className="flex gap-3">
                    <span
                      className={`shrink-0 text-[12px] font-semibold tabular-nums pt-0.5 ${
                        isActive ? 'text-[#E51937]' : 'text-[#555555]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <span className="block text-sm font-semibold">{workflow.label}</span>
                      <span
                        className={`mt-1 block text-[12px] leading-snug ${
                          isActive ? 'text-[#9CA3AF]' : 'text-[#666666]'
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
                      transition={{ duration: ROTATE_MS / 1000, ease: 'linear' }}
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
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F5] mb-1.5">
                    {active.label} view
                  </h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-xl mb-2">
                    {active.description}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#777777] mb-4">
                    Demo data shown.
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
          <p className="text-sm text-[#9CA3AF] mb-1">Want to see the full workflow?</p>
          <button
            type="button"
            onClick={handleDemo}
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#E51937] hover:text-[#FF6B7D] transition-colors"
          >
            Request a demo
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
