import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MockupImage, { type MockupKey } from '../mockups/MockupImage';

type TabKey = MockupKey;

const tabs: { key: TabKey; label: string; description: string }[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    description: 'Track upcoming events, announcements, tasks, and pending applications from one place.',
  },
  {
    key: 'explore',
    label: 'Explore',
    description: 'Search clubs, filter by category, save clubs you care about, and request to join.',
  },
  {
    key: 'workspace',
    label: 'Workspace',
    description: 'Club command center with setup checklist, join requests, and quick actions.',
  },
  {
    key: 'events',
    label: 'Events',
    description: 'Create events, add sign-up questions, and review who signed up.',
  },
  {
    key: 'tasks',
    label: 'Tasks',
    description: 'Assign work, track due dates, and mark items that need review.',
  },
  {
    key: 'hiring',
    label: 'Hiring',
    description: 'Open roles, review applicants, and move people through a clear status pipeline.',
  },
  {
    key: 'members',
    label: 'Members',
    description: 'See member roles, org structure, and access levels for permissions.',
  },
];

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState<TabKey>('dashboard');
  const [isHovered, setIsHovered] = useState(false);

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
    <section id="app-showcase" className="py-24 bg-[#0B0B0B] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-sans text-[#E51937] uppercase tracking-wider mb-3 block">Product workflows</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F5F5F5] font-sans mb-4">
            See how Gryph ClubConnect works
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            See the real workflows for students and club leaders. Demo data shown.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start"
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
                  className={`w-full flex items-start gap-3 px-4 py-3 rounded-[10px] text-sm font-medium transition-all text-left border ${
                    isActive
                      ? 'bg-[#131313] border-[#E51937]/40 text-[#F5F5F5]'
                      : 'bg-transparent border-transparent text-[#9CA3AF] hover:bg-[#131313] hover:text-[#F5F5F5]'
                  }`}
                >
                  <div className="flex-shrink-0 mt-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#E51937]' : 'bg-[#333]'}`} />
                  </div>
                  <div>
                    <span className="block">{tab.label}</span>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-xs text-[#777777] font-normal mt-1 leading-relaxed"
                      >
                        {tab.description}
                      </motion.p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <MockupImage name={activeTab} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
