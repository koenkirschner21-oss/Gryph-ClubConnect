import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TabKey = 'communication' | 'tasks' | 'events' | 'directory';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'communication', label: 'Communication' },
  { key: 'tasks', label: 'Tasks' },
  { key: 'events', label: 'Events' },
  { key: 'directory', label: 'Directory' },
];

function CommunicationMock() {
  return (
    <div className="flex h-full">
      <div className="w-36 bg-[#0D1117] border-r border-[#21262D] flex flex-col p-2 gap-0.5">
        <p className="text-[10px] text-[#6E7681] uppercase tracking-wider px-2 py-1 font-mono">Channels</p>
        {['# general', '# exec', '# events', '# resources'].map((ch, i) => (
          <div key={ch} className={`px-2 py-1.5 rounded text-xs cursor-pointer ${i === 0 ? 'bg-[#C8102E]/20 text-[#F0F6FC]' : 'text-[#8B949E]'}`}>{ch}</div>
        ))}
      </div>
      <div className="flex-1 flex flex-col">
        <div className="px-4 py-2 border-b border-[#21262D] text-xs text-[#8B949E] font-mono"># general</div>
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">
          {[
            { user: 'Priya S.', color: '#C8102E', msg: 'Reminder: Exec meeting tomorrow at 5pm!' },
            { user: 'Amir K.', color: '#3B82F6', msg: 'Thanks! I\'ll prepare the agenda 📋' },
            { user: 'Priya S.', color: '#C8102E', msg: 'Hackathon registrations are now open 🚀' },
          ].map((m, i) => (
            <div key={i} className="flex gap-2">
              <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: m.color }}>{m.user[0]}</div>
              <div>
                <span className="text-xs font-semibold text-[#F0F6FC]">{m.user}</span>
                <p className="text-xs text-[#8B949E] mt-0.5">{m.msg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TasksMock() {
  const cols = [
    { label: 'TO DO', color: '#6E7681', cards: ['Design poster', 'Book venue', 'Write newsletter'] },
    { label: 'IN PROGRESS', color: '#D4A017', cards: ['Sponsor outreach', 'RSVP form'] },
    { label: 'COMPLETE', color: '#22C55E', cards: ['Budget approved', 'Exec roster set'] },
  ];
  return (
    <div className="flex gap-3 h-full p-3 overflow-x-auto">
      {cols.map((col) => (
        <div key={col.label} className="flex-1 min-w-[120px]">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: col.color }} />
            <span className="text-[10px] font-mono font-semibold" style={{ color: col.color }}>{col.label}</span>
          </div>
          <div className="space-y-2">
            {col.cards.map((card) => (
              <div key={card} className="bg-[#0D1117] border border-[#21262D] rounded-lg p-2.5 text-xs text-[#8B949E]">{card}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function EventsMock() {
  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-7 gap-1 text-center">
        {['S','M','T','W','T','F','S'].map((d, i) => (
          <div key={i} className="text-[10px] text-[#6E7681] font-mono">{d}</div>
        ))}
        {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
          <div
            key={d}
            className={`text-[10px] rounded py-1 cursor-pointer ${
              d === 14 ? 'bg-[#C8102E] text-white font-bold' : d === 21 ? 'bg-[#D4A017]/20 text-[#D4A017]' : 'text-[#8B949E] hover:bg-[#21262D]'
            }`}
          >
            {d}
          </div>
        ))}
      </div>
      <div className="bg-[#0D1117] border border-[#C8102E]/30 rounded-lg p-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold text-[#F0F6FC]">Hackathon Kickoff</p>
            <p className="text-[10px] text-[#8B949E] mt-0.5">Fri Jan 14 · 5:00 PM · Room 104 AC</p>
          </div>
          <span className="text-[10px] bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20 px-2 py-0.5 rounded-full font-mono">24 RSVPs</span>
        </div>
      </div>
    </div>
  );
}

function DirectoryMock() {
  const members = [
    { name: 'Priya Sharma', role: 'President', avatar: 'PS', color: '#C8102E' },
    { name: 'Amir Khan', role: 'VP Events', avatar: 'AK', color: '#3B82F6' },
    { name: 'Lena Park', role: 'Treasurer', avatar: 'LP', color: '#D4A017' },
    { name: 'Devin R.', role: 'Member', avatar: 'DR', color: '#A855F7' },
    { name: 'Sofia M.', role: 'Member', avatar: 'SM', color: '#22C55E' },
  ];
  return (
    <div className="p-3 space-y-1.5">
      <div className="flex items-center gap-2 bg-[#0D1117] border border-[#21262D] rounded-lg px-3 py-2 mb-3">
        <span className="text-[10px] text-[#6E7681]">🔍 Search members...</span>
      </div>
      {members.map((m) => (
        <div key={m.name} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#21262D] transition-colors">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ backgroundColor: m.color }}>
            {m.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-[#F0F6FC] truncate">{m.name}</p>
            <p className="text-[10px] text-[#6E7681]">{m.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const mockComponents: Record<TabKey, React.ComponentType> = {
  communication: CommunicationMock,
  tasks: TasksMock,
  events: EventsMock,
  directory: DirectoryMock,
};

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState<TabKey>('communication');
  const MockComponent = mockComponents[activeTab];

  return (
    <section className="py-24 bg-[#161B22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-4">
            See it in action
          </h2>
          <p className="text-[#8B949E] text-lg">
            Every feature, beautifully integrated.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start">
          {/* Feature tabs */}
          <div className="lg:sticky lg:top-24 space-y-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                    isActive
                      ? 'bg-[#1A1F26] border border-[#C8102E]/40 text-[#F0F6FC]'
                      : 'bg-transparent border border-transparent text-[#8B949E] hover:bg-[#1A1F26] hover:text-[#F0F6FC]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="tab-dot"
                      className="w-2 h-2 rounded-full bg-[#C8102E] flex-shrink-0"
                    />
                  )}
                  {!isActive && <div className="w-2 h-2 rounded-full bg-[#21262D] flex-shrink-0" />}
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Mock UI */}
          <div className="bg-[#0D1117] border border-[#21262D] rounded-2xl overflow-hidden shadow-2xl" style={{ minHeight: '360px' }}>
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#21262D] bg-[#161B22]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="ml-2 text-xs text-[#6E7681] font-mono">
                {tabs.find(t => t.key === activeTab)?.label}
              </span>
            </div>

            <div style={{ height: '320px' }} className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full overflow-auto"
                >
                  <MockComponent />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
