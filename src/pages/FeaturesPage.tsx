import { useState } from 'react';
import {
  MessageSquare, CheckSquare, Calendar, Users, Layers, BarChart2,
  Hash, Bell, Plus, Check, ChevronRight, type LucideIcon,
} from 'lucide-react';
import { features } from '../data/index';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';

const iconMap: Record<string, LucideIcon> = {
  MessageSquare, CheckSquare, Calendar, Users, Layers, BarChart2,
};

type FeatureColor = 'red' | 'gold' | 'blue' | 'green' | 'purple' | 'orange';

const colorMap: Record<FeatureColor, { bg: string; text: string; border: string; glow: string }> = {
  red:    { bg: 'rgba(200,16,46,0.12)',  text: '#C8102E', border: 'rgba(200,16,46,0.3)',  glow: 'rgba(200,16,46,0.08)'  },
  gold:   { bg: 'rgba(212,160,23,0.12)', text: '#D4A017', border: 'rgba(212,160,23,0.3)', glow: 'rgba(212,160,23,0.08)' },
  blue:   { bg: 'rgba(59,130,246,0.12)', text: '#3B82F6', border: 'rgba(59,130,246,0.3)', glow: 'rgba(59,130,246,0.08)' },
  green:  { bg: 'rgba(34,197,94,0.12)',  text: '#22C55E', border: 'rgba(34,197,94,0.3)',  glow: 'rgba(34,197,94,0.08)'  },
  purple: { bg: 'rgba(168,85,247,0.12)', text: '#A855F7', border: 'rgba(168,85,247,0.3)', glow: 'rgba(168,85,247,0.08)' },
  orange: { bg: 'rgba(249,115,22,0.12)', text: '#F97316', border: 'rgba(249,115,22,0.3)', glow: 'rgba(249,115,22,0.08)' },
};

// ── Mock UIs ────────────────────────────────────────────────────────────────

function ChatMock() {
  const messages = [
    { user: 'Priya S.', color: '#C8102E', msg: 'Hackathon kickoff is this Friday! Who\'s in? 🚀', time: '9:14 AM' },
    { user: 'Amir K.',  color: '#3B82F6', msg: 'Definitely in! Should we bring our own laptops?', time: '9:16 AM' },
    { user: 'Priya S.', color: '#C8102E', msg: 'Yes! Room 104 AC @ 5pm. RSVPs due by tomorrow.', time: '9:17 AM' },
    { user: 'Jay M.',   color: '#22C55E', msg: 'Already submitted RSVP 🙌', time: '9:20 AM' },
  ];
  return (
    <div className="bg-[#0D1117] rounded-xl border border-[#21262D] overflow-hidden">
      <div className="flex h-52">
        <div className="w-36 bg-[#161B22] border-r border-[#21262D] p-2 flex flex-col gap-0.5">
          <p className="text-[9px] text-[#6E7681] uppercase tracking-wider px-2 mb-1 font-mono">Channels</p>
          {['# general', '# exec', '# events', '# resources', '# social'].map((ch, i) => (
            <div key={ch} className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] ${i === 0 ? 'bg-[#C8102E]/20 text-[#F0F6FC]' : 'text-[#8B949E]'}`}>
              <Hash size={9} />{ch.slice(2)}
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col">
          <div className="px-3 py-2 border-b border-[#21262D] flex items-center gap-1.5">
            <Hash size={11} className="text-[#8B949E]" />
            <span className="text-[10px] text-[#8B949E] font-mono">general</span>
            <Bell size={9} className="ml-auto text-[#6E7681]" />
          </div>
          <div className="flex-1 p-2 space-y-2 overflow-hidden">
            {messages.map((m, i) => (
              <div key={i} className="flex gap-1.5">
                <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[8px] font-bold text-white" style={{ backgroundColor: m.color }}>{m.user[0]}</div>
                <div>
                  <span className="text-[9px] font-semibold text-[#F0F6FC]">{m.user}</span>
                  <span className="text-[8px] text-[#6E7681] ml-1">{m.time}</span>
                  <p className="text-[9px] text-[#8B949E] leading-tight">{m.msg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TasksMock() {
  const columns = [
    { label: 'To Do', color: '#6E7681', tasks: ['Book venue for AGM', 'Design new logo'] },
    { label: 'In Progress', color: '#D4A017', tasks: ['Sponsor outreach email', 'Update website'] },
    { label: 'Done', color: '#22C55E', tasks: ['Setup GCC workspace', 'Onboard exec team'] },
  ];
  return (
    <div className="bg-[#0D1117] rounded-xl border border-[#21262D] p-3">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-semibold text-[#F0F6FC] font-mono">Sprint Board · Nov 2025</span>
        <div className="flex items-center gap-1 text-[9px] text-[#6E7681]"><Plus size={9} />Add task</div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {columns.map((col) => (
          <div key={col.label} className="space-y-1.5">
            <div className="flex items-center gap-1 mb-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: col.color }} />
              <span className="text-[9px] font-semibold text-[#8B949E] uppercase tracking-wider">{col.label}</span>
            </div>
            {col.tasks.map((t) => (
              <div key={t} className="bg-[#161B22] border border-[#21262D] rounded-lg p-2">
                <p className="text-[9px] text-[#F0F6FC] leading-tight">{t}</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#21262D] text-[7px] font-bold text-[#F0F6FC] flex items-center justify-center">P</div>
                  <span className="text-[8px] text-[#6E7681]">Nov 15</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function CalendarMock() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const events = [
    { day: 8,  label: 'AGM', color: '#C8102E' },
    { day: 14, label: 'Workshop', color: '#D4A017' },
    { day: 21, label: 'Social', color: '#3B82F6' },
    { day: 28, label: 'Elections', color: '#22C55E' },
  ];
  const cells = Array.from({ length: 35 }, (_, i) => i < 3 ? null : i - 2);
  return (
    <div className="bg-[#0D1117] rounded-xl border border-[#21262D] p-3">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-semibold text-[#F0F6FC] font-mono">November 2025</span>
        <div className="flex gap-1">
          <ChevronRight size={10} className="text-[#6E7681] rotate-180" />
          <ChevronRight size={10} className="text-[#6E7681]" />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-0.5 mb-1">
        {days.map((d) => <div key={d} className="text-[8px] text-[#6E7681] text-center font-mono">{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((n, i) => {
          if (!n) return <div key={i} />;
          const ev = events.find((e) => e.day === n);
          return (
            <div key={i} className={`h-6 flex flex-col items-center justify-center rounded text-[8px] relative ${ev ? 'font-bold' : 'text-[#8B949E]'}`} style={ev ? { color: ev.color, backgroundColor: `${ev.color}18` } : {}}>
              {n}
              {ev && <div className="w-1 h-1 rounded-full mt-0.5" style={{ backgroundColor: ev.color }} />}
            </div>
          );
        })}
      </div>
      <div className="mt-2 space-y-1">
        {events.map((e) => (
          <div key={e.label} className="flex items-center gap-1.5 px-1.5 py-1 rounded" style={{ backgroundColor: `${e.color}10` }}>
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: e.color }} />
            <span className="text-[9px] font-medium" style={{ color: e.color }}>{e.label}</span>
            <span className="text-[8px] text-[#6E7681] ml-auto">Nov {e.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DirectoryMock() {
  const members = [
    { initials: 'PS', name: 'Priya Sharma',    role: 'President',          color: '#C8102E', online: true  },
    { initials: 'JO', name: 'James Okafor',    role: 'VP Communications',  color: '#D4A017', online: true  },
    { initials: 'AL', name: 'Anya Lee',        role: 'Events Coordinator', color: '#22C55E', online: false },
    { initials: 'MK', name: 'Marcus Kim',      role: 'Treasurer',          color: '#3B82F6', online: true  },
    { initials: 'SR', name: 'Sofia Ramirez',   role: 'Secretary',          color: '#A855F7', online: false },
  ];
  return (
    <div className="bg-[#0D1117] rounded-xl border border-[#21262D] overflow-hidden">
      <div className="px-3 py-2 border-b border-[#21262D] flex items-center justify-between">
        <span className="text-[10px] font-semibold text-[#F0F6FC] font-mono">Member Directory</span>
        <span className="text-[9px] text-[#6E7681]">204 members</span>
      </div>
      <div className="divide-y divide-[#21262D]">
        {members.map((m) => (
          <div key={m.name} className="flex items-center gap-2 px-3 py-2">
            <div className="relative flex-shrink-0">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold text-white" style={{ backgroundColor: m.color }}>{m.initials}</div>
              {m.online && <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#22C55E] border border-[#0D1117]" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-semibold text-[#F0F6FC] truncate">{m.name}</p>
              <p className="text-[8px] text-[#6E7681] truncate">{m.role}</p>
            </div>
            <div className="w-10 h-3.5 rounded-full flex items-center justify-center text-[7px] font-semibold" style={{ backgroundColor: `${m.color}18`, color: m.color }}>{m.role.split(' ')[0]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MultiClubMock() {
  const clubs = [
    { initials: 'GC', name: 'Guelph Coding', unread: 3, color: '#C8102E' },
    { initials: 'GT', name: 'Girl Talk',     unread: 0, color: '#A855F7' },
    { initials: 'GR', name: 'Gryphon Racing', unread: 1, color: '#D4A017' },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="bg-[#0D1117] rounded-xl border border-[#21262D] overflow-hidden">
      <div className="flex h-44">
        <div className="w-12 bg-[#161B22] border-r border-[#21262D] flex flex-col items-center py-2 gap-2">
          {clubs.map((c, i) => (
            <button key={c.name} onClick={() => setActive(i)} className="relative">
              <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-[9px] font-bold text-white transition-all ${active === i ? 'rounded-lg' : 'rounded-2xl hover:rounded-lg'}`} style={{ backgroundColor: c.color }}>{c.initials}</div>
              {c.unread > 0 && <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#C8102E] flex items-center justify-center text-[7px] font-bold text-white">{c.unread}</div>}
              {active === i && <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-1 h-4 rounded-full bg-[#F0F6FC]" />}
            </button>
          ))}
        </div>
        <div className="flex-1 p-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[9px] font-bold text-white" style={{ backgroundColor: clubs[active].color }}>{clubs[active].initials}</div>
            <div>
              <p className="text-[10px] font-semibold text-[#F0F6FC]">{clubs[active].name}</p>
              <p className="text-[8px] text-[#6E7681]">Switch instantly</p>
            </div>
          </div>
          <div className="space-y-1.5 text-[9px] text-[#8B949E]">
            <div className="flex items-center gap-1.5"><Check size={9} className="text-[#22C55E]" />Same account, all clubs</div>
            <div className="flex items-center gap-1.5"><Check size={9} className="text-[#22C55E]" />Separate notification streams</div>
            <div className="flex items-center gap-1.5"><Check size={9} className="text-[#22C55E]" />Independent task boards</div>
            <div className="flex items-center gap-1.5"><Check size={9} className="text-[#22C55E]" />Unified calendar view</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminMock() {
  const metrics = [
    { label: 'Members', value: '204', delta: '+12', up: true, color: '#22C55E' },
    { label: 'Attendance', value: '84%', delta: '+6%', up: true, color: '#3B82F6' },
    { label: 'Tasks Done', value: '47', delta: '+8', up: true, color: '#D4A017' },
  ];
  const bars = [60, 80, 45, 90, 70, 85, 55, 95, 65, 75, 88, 72];
  return (
    <div className="bg-[#0D1117] rounded-xl border border-[#21262D] p-3">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-semibold text-[#F0F6FC] font-mono">Admin Dashboard</span>
        <span className="text-[8px] text-[#6E7681]">Last 30 days</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {metrics.map((m) => (
          <div key={m.label} className="bg-[#161B22] rounded-lg p-2">
            <p className="text-[8px] text-[#6E7681] mb-0.5">{m.label}</p>
            <p className="text-sm font-bold text-[#F0F6FC] font-[Syne,sans-serif]">{m.value}</p>
            <p className="text-[8px] font-semibold" style={{ color: m.color }}>{m.delta}</p>
          </div>
        ))}
      </div>
      <div className="bg-[#161B22] rounded-lg p-2">
        <p className="text-[8px] text-[#6E7681] mb-2">Member Growth</p>
        <div className="flex items-end gap-0.5 h-10">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: i === bars.length - 1 ? '#C8102E' : '#21262D' }} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mockComponents: Record<string, () => JSX.Element> = {
  chat:      ChatMock,
  tasks:     TasksMock,
  calendar:  CalendarMock,
  directory: DirectoryMock,
  multi:     MultiClubMock,
  admin:     AdminMock,
};

const extendedDescriptions: Record<string, string> = {
  'Team Channels':     'Stop losing important updates in a sea of group chat notifications. GCC channels let you separate exec conversations from member announcements, keep event planning in its own thread, and pin key resources for quick access. No more "did you see my message?" moments.',
  'Task Tracker':      'Assign action items directly from meetings, set due dates, and track progress in real time. Your exec team always knows what they own and what\'s overdue — no spreadsheets, no forgotten follow-ups. Kanban boards built for the pace of student club life.',
  'Event Calendar':    'From RSVP collection to reminder scheduling, GCC handles the logistics of your events. Share a single link your whole club can access, see who\'s coming at a glance, and send one-click reminders. Your event attendance will thank you.',
  'Member Directory':  'A live, searchable database of everyone in your club — their role, when they joined, and how to reach them. Perfect for new execs who need to get up to speed fast, or any time someone asks "wait, who is the treasurer again?"',
  'Multi-Club Support':'Many UofG students are active in 2, 3, or more clubs. GCC lets you switch workspaces instantly without logging out, while keeping your notifications, tasks, and channels completely separate per club. One account, zero confusion.',
  'Admin Dashboard':   'Track membership growth over time, see which events get the best turnout, monitor task completion rates, and identify your most engaged members. Make data-informed decisions for your club\'s future — no spreadsheet exports required.',
};

export default function FeaturesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="page-transition">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#0D1117]">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#C8102E] opacity-[0.05] blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(#F0F6FC 1px, transparent 1px), linear-gradient(90deg, #F0F6FC 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[rgba(200,16,46,0.12)] text-[#C8102E] border border-[#C8102E]/20 mb-6">
                6 Powerful Features
              </span>
              <h1 className="font-[Syne,sans-serif] font-extrabold text-[#F0F6FC] mb-5 leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}>
                Powerful tools for<br />
                <span className="bg-gradient-to-r from-[#C8102E] to-[#D4A017] bg-clip-text text-transparent">
                  student clubs
                </span>
              </h1>
              <p className="text-[#8B949E] text-lg max-w-2xl mx-auto leading-relaxed">
                Every tool your exec team needs to communicate, coordinate, and grow — built exclusively for University of Guelph clubs.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#0D1117]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon] ?? MessageSquare;
              const colors = colorMap[feature.color as FeatureColor] ?? colorMap.red;
              const MockUI = mockComponents[feature.mockType] ?? ChatMock;
              const isEven = index % 2 === 0;

              return (
                <AnimatedSection key={feature.title} delay={0.05}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Text side */}
                    <div className={isEven ? '' : 'lg:order-2'}>
                      <div
                        className="inline-flex w-12 h-12 rounded-xl items-center justify-center mb-5"
                        style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
                      >
                        <Icon size={24} color={colors.text} />
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-4">
                        {feature.title}
                      </h2>
                      <p className="text-[#8B949E] text-base leading-relaxed mb-4">
                        {extendedDescriptions[feature.title] ?? feature.description}
                      </p>
                      <p className="text-[#6E7681] text-sm leading-relaxed mb-6 italic">
                        {feature.description}
                      </p>
                      <Button variant="ghost" size="md" onClick={() => setModalOpen(true)}>
                        Try {feature.title} Free →
                      </Button>
                    </div>

                    {/* Mock UI side */}
                    <div className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div
                        className="absolute inset-0 rounded-2xl blur-3xl opacity-20 pointer-events-none"
                        style={{ background: `radial-gradient(ellipse at center, ${colors.glow}, transparent)` }}
                      />
                      <div className="relative">
                        <MockUI />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </section>

        {/* Feature grid summary */}
        <section className="py-24 bg-[#161B22]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">
                Everything in one place
              </h2>
              <p className="text-[#8B949E] text-base max-w-lg mx-auto">
                No integrations. No third-party tools. No extra cost.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.07}>
              {features.map((feature) => {
                const Icon = iconMap[feature.icon] ?? MessageSquare;
                const colors = colorMap[feature.color as FeatureColor] ?? colorMap.red;
                return (
                  <StaggerItem key={feature.title}>
                    <div className="bg-[#1A1F26] border border-[#21262D] rounded-xl p-5 flex items-start gap-4 hover:border-[#C8102E]/20 transition-all duration-300">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: colors.bg, border: `1px solid ${colors.border}` }}>
                        <Icon size={18} color={colors.text} />
                      </div>
                      <div>
                        <h3 className="text-[#F0F6FC] font-semibold text-sm mb-1">{feature.title}</h3>
                        <p className="text-[#6E7681] text-xs leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 overflow-hidden bg-[#0D1117]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#C8102E] opacity-[0.06] blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-4">
                Start using all features for free
              </h2>
              <p className="text-[#8B949E] text-base mb-8 max-w-xl mx-auto">
                No credit card. No setup fees. Just your @uoguelph.ca email and 2 minutes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="red" size="lg" onClick={() => setModalOpen(true)}>Get Started Free</Button>
                <Button variant="ghost" size="lg">See Pricing</Button>
              </div>
              <p className="text-[#6E7681] text-xs mt-5 font-mono">🔒 @uoguelph.ca emails only</p>
            </AnimatedSection>
          </div>
        </section>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
