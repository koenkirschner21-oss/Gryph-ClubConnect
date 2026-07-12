import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MockupImage, { type MockupKey } from '../mockups/MockupImage';

type TabKey = MockupKey;

const tabs: { key: TabKey; label: string; description: string }[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    description: 'Track upcoming events, announcements, tasks, and applications from one place.',
  },
  {
    key: 'explore',
    label: 'Explore',
    description: 'Browse clubs, club profiles, events, and open roles.',
  },
  {
    key: 'workspace',
    label: 'Workspace',
    description: 'Run club operations from the Command Center.',
  },
  {
    key: 'events',
    label: 'Events',
    description: 'Create events, manage sign-ups, and track who is coming.',
  },
  {
    key: 'tasks',
    label: 'Tasks',
    description: 'Assign work, set due dates, and review progress.',
  },
  {
    key: 'hiring',
    label: 'Hiring',
    description: 'Post roles, review applicants, and move people through a pipeline.',
  },
  {
    key: 'members',
    label: 'Members',
    description: 'Manage members, roles, invites, and permissions.',
  },
];

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState<TabKey>('dashboard');
  const [isHovered, setIsHovered] = useState(false);
  const active = tabs.find((t) => t.key === activeTab) ?? tabs[0];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const keys = tabs.map((t) => t.key);
        const idx = keys.indexOf(prev);
        return keys[(idx + 1) % keys.length];
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="app-showcase" className="py-16 sm:py-20 bg-[#0B0B0B] scroll-mt-24 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12 max-w-3xl">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
            Product workflows
          </p>
          <h2 className="text-[2.1rem] sm:text-[2.75rem] font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
            See how Gryph ClubConnect works
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Real workflows for students and club leaders. Demo data shown.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 lg:gap-8 items-start"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="lg:sticky lg:top-24 space-y-1.5">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`w-full rounded-[10px] border px-3.5 py-3 text-left transition-colors ${
                    isActive
                      ? 'bg-[#131313] border-[#E51937]/45 text-[#F5F5F5]'
                      : 'bg-transparent border-transparent text-[#9CA3AF] hover:bg-[#131313] hover:border-[#222222] hover:text-[#F5F5F5]'
                  }`}
                >
                  <span className="block text-sm font-semibold">{tab.label}</span>
                  <span className={`mt-1 block text-[12px] leading-snug ${isActive ? 'text-[#777777]' : 'text-[#555555]'}`}>
                    {tab.description}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-4">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F5]">
                      {active.label} view
                    </h3>
                    <span className="text-[11px] uppercase tracking-[0.14em] text-[#777777]">
                      Demo data shown.
                    </span>
                  </div>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-2xl">
                    {active.description}
                  </p>
                </div>
                <div className="rounded-[12px] border border-[#242424] bg-[#131313] p-2 sm:p-2.5 shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
                  <MockupImage
                    name={activeTab}
                    className="!shadow-none !border-0 rounded-[10px]"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
