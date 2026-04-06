import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Clock, CreditCard } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

interface StatItem {
  value: string;
  label: string;
  numericEnd: number;
  prefix?: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { value: '50+', label: 'Active Clubs', numericEnd: 50, suffix: '+' },
  { value: '2,400+', label: 'Students', numericEnd: 2400, suffix: '+' },
  { value: 'Free', label: 'To Start', numericEnd: 0 },
];

function useCounter(end: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start || end === 0) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, duration, start]);
  return count;
}

function StatCounter({ item, animate }: { item: StatItem; animate: boolean }) {
  const count = useCounter(item.numericEnd, 1500, animate);
  const display = item.numericEnd === 0 ? item.value : `${count.toLocaleString()}${item.suffix ?? ''}`;
  return (
    <div className="text-center sm:text-left">
      <div className="text-2xl font-bold text-[#F0F6FC] font-mono tabular-nums">{display}</div>
      <div className="text-xs text-[rgba(240,246,252,0.35)] mt-0.5 uppercase tracking-[0.08em]" style={{ fontSize: '12px' }}>{item.label}</div>
    </div>
  );
}

const trustedClubs = [
  'Guelph Coding Society',
  'MSA Guelph',
  'Gryphon Racing',
  'Girl Talk',
  'Wildlife Club',
];

const chatMessages = [
  { user: 'Priya S.', color: '#C8102E', msg: 'Hackathon kickoff is this Friday! Who\'s in? 🚀', time: '9:14 AM' },
  { user: 'Amir K.', color: '#3B82F6', msg: 'Definitely in! Should we bring our own laptops?', time: '9:16 AM' },
  { user: 'Priya S.', color: '#C8102E', msg: 'Yes! Room 104 AC @ 5pm. RSVPs due by tomorrow.', time: '9:17 AM' },
];

function TypingIndicator() {
  return (
    <div className="flex gap-1 items-center px-2 py-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#6E7681]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

export default function Hero({ onGetStarted }: { onGetStarted?: () => void }) {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Staggered chat message animation
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const showMessage = (index: number) => {
      // Show typing indicator
      timers.push(setTimeout(() => setShowTyping(true), index === 0 ? 800 : 800 + index * 1000));
      // Hide typing, show message
      timers.push(setTimeout(() => {
        setShowTyping(false);
        setVisibleMessages(index + 1);
      }, index === 0 ? 1200 : 1200 + index * 1000));
    };
    for (let i = 0; i < chatMessages.length; i++) {
      showMessage(i);
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleSeeItInAction = () => {
    const el = document.getElementById('app-showcase');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D1117]">
      {/* Dot grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Radial glow top-right (red) */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#C8102E] opacity-[0.08] blur-[120px] pointer-events-none" />
      {/* Radial glow bottom-left (gold) */}
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#D4A017] opacity-[0.08] blur-[120px] pointer-events-none" />
      {/* Secondary accent */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#D4A017] opacity-[0.04] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div>
              <Badge variant="green" dot>Now Live — Free for all UofG clubs</Badge>
            </div>

            <h1 className="font-[Syne,sans-serif] font-extrabold leading-[1.08] tracking-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              <span className="block text-[#F0F6FC]">Every Club.</span>
              <span className="block gradient-text-gold">
                One Platform.
              </span>
            </h1>

            <p className="text-[#8B949E] text-lg sm:text-xl leading-relaxed" style={{ maxWidth: '480px' }}>
              Manage your entire club — communication, tasks, events — in one place. Built for UofG student organizations.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Button variant="red" size="lg" onClick={onGetStarted}>
                Get Started Free →
              </Button>
              <Button variant="ghost" size="lg" onClick={handleSeeItInAction}>
                See It In Action
              </Button>
            </div>

            {/* Trust bar with Lucide icons */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <p className="text-[#6E7681] text-xs font-mono flex items-center gap-1.5">
                <Shield size={13} className="text-[#6E7681]" />
                @uoguelph.ca emails only
              </p>
              <span className="text-[#21262D]">·</span>
              <p className="text-[#6E7681] text-xs font-mono flex items-center gap-1.5">
                <Clock size={13} className="text-[#6E7681]" />
                Setup in under 2 minutes
              </p>
              <span className="text-[#21262D]">·</span>
              <p className="text-[#6E7681] text-xs font-mono flex items-center gap-1.5">
                <CreditCard size={13} className="text-[#6E7681]" />
                No credit card
              </p>
            </div>

            {/* Separator line */}
            <div className="w-full h-px bg-[rgba(255,255,255,0.06)]" />

            {/* Stats row */}
            <div ref={statsRef} className="flex flex-wrap items-center gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-6">
                  <StatCounter item={stat} animate={statsVisible} />
                  {i < stats.length - 1 && (
                    <div className="h-10 w-px bg-[#21262D]" />
                  )}
                </div>
              ))}
            </div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-4 pt-1"
            >
              <div className="flex -space-x-2.5">
                {['#C8102E', '#3B82F6', '#D4A017', '#22C55E', '#A855F7'].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0D1117] flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                    style={{ backgroundColor: color }}
                  >
                    {trustedClubs[i][0]}
                  </div>
                ))}
              </div>
              <p className="text-[#6E7681] text-xs">
                Trusted by <span className="text-[#8B949E] font-medium">50+ UofG clubs</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right column: App mock UI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative justify-center lg:justify-end hidden sm:flex"
          >
            {/* Ambient glow behind the mock */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[90%] h-[80%] rounded-3xl bg-[#C8102E] opacity-[0.06] blur-[60px]" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-4 -left-4 z-20 bg-[#161B22]/95 backdrop-blur-sm border border-[#21262D] rounded-xl px-3 py-2.5 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F0F6FC]">204 members</div>
                  <div className="text-[10px] text-[#6E7681]">Guelph Coding Society</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 z-20 bg-[#161B22]/95 backdrop-blur-sm border border-[#21262D] rounded-xl px-3 py-2.5 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="text-lg">📅</div>
                <div>
                  <div className="text-xs font-semibold text-[#F0F6FC]">Next event in 2 days</div>
                  <div className="text-[10px] text-[#6E7681]">Hackathon Kickoff</div>
                </div>
              </div>
            </motion.div>

            {/* Task completed notification — constrained within mock area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute top-1/3 right-2 z-20 bg-[#161B22]/95 backdrop-blur-sm border border-[#22C55E]/30 rounded-xl px-3 py-2.5 shadow-xl hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">✅</span>
                <div>
                  <div className="text-[10px] font-semibold text-[#22C55E]">Task completed</div>
                  <div className="text-[10px] text-[#6E7681]">Book venue — Amir K.</div>
                </div>
              </div>
            </motion.div>

            {/* Dark card container with gradient border */}
            <div className="w-full max-w-[480px] relative">
              <div className="rounded-2xl p-px bg-gradient-to-br from-[#C8102E]/30 via-[#21262D] to-[#D4A017]/20 shadow-2xl shadow-black/50">
                <div className="bg-[#161B22] rounded-2xl overflow-hidden">
                  {/* Titlebar */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[#21262D] bg-[#0D1117]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>gryphclubconnect.ca</span>
                    </div>
                  </div>

                  <div className="flex h-[340px]">
                    {/* Sidebar */}
                    <div className="w-44 bg-[#0D1117] border-r border-[#21262D] flex flex-col">
                      <div className="px-3 py-3 border-b border-[#21262D]">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#C8102E] to-[#D4A017] flex items-center justify-center text-xs font-bold text-white">
                            GC
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-[#F0F6FC] leading-none">Guelph Coding</div>
                            <div className="text-[10px] text-[#6E7681] mt-0.5">204 members</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 px-2 py-2 overflow-y-auto">
                        <div className="mb-2">
                          <p className="text-[10px] text-[#6E7681] uppercase tracking-wider px-2 mb-1 font-mono">Channels</p>
                          {['# general', '# exec', '# events', '# resources'].map((ch, i) => (
                            <div
                              key={ch}
                              className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs cursor-pointer transition-colors ${
                                i === 0
                                  ? 'bg-[#C8102E]/20 text-[#F0F6FC]'
                                  : 'text-[#8B949E] hover:bg-[#21262D]'
                              }`}
                            >
                              {ch}
                            </div>
                          ))}
                        </div>
                        <div>
                          <p className="text-[10px] text-[#6E7681] uppercase tracking-wider px-2 mb-1 font-mono">Direct</p>
                          {['Priya S.', 'James O.'].map((name) => (
                            <div
                              key={name}
                              className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-[#8B949E] hover:bg-[#21262D] cursor-pointer"
                            >
                              <div className="w-4 h-4 rounded-full bg-[#21262D] flex items-center justify-center text-[8px] font-bold text-[#F0F6FC]">
                                {name[0]}
                              </div>
                              {name}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Chat area */}
                    <div className="flex-1 flex flex-col">
                      <div className="px-4 py-2.5 border-b border-[#21262D] flex items-center gap-2">
                        <span className="text-[#8B949E] text-xs font-mono"># general</span>
                        <span className="ml-auto text-[10px] text-[#6E7681]">204 members</span>
                      </div>
                      <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto">
                        <AnimatePresence>
                          {chatMessages.slice(0, visibleMessages).map((m, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex gap-2.5"
                            >
                              <div
                                className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white"
                                style={{ backgroundColor: m.color }}
                              >
                                {m.user[0]}
                              </div>
                              <div>
                                <div className="flex items-baseline gap-2">
                                  <span className="text-xs font-semibold text-[#F0F6FC]">{m.user}</span>
                                  <span className="text-[10px] text-[#6E7681]">{m.time}</span>
                                </div>
                                <p className="text-xs text-[#8B949E] mt-0.5 leading-relaxed">{m.msg}</p>
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                        {showTyping && visibleMessages < chatMessages.length && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex gap-2.5 items-center"
                          >
                            <div
                              className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white"
                              style={{ backgroundColor: chatMessages[visibleMessages].color }}
                            >
                              {chatMessages[visibleMessages].user[0]}
                            </div>
                            <TypingIndicator />
                          </motion.div>
                        )}
                      </div>
                      <div className="px-4 py-3 border-t border-[#21262D]">
                        <div className="flex items-center gap-2 bg-[#0D1117] border border-[#21262D] rounded-lg px-3 py-2">
                          <span className="text-xs text-[#6E7681]">Message #general...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
