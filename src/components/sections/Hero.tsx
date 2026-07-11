import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { goToSection, JOIN_TESTING_ID, REQUEST_WALKTHROUGH_ID } from '../../lib/cta';

const trustItems = [
  { icon: GraduationCap, label: 'Student-built' },
  { icon: Users, label: 'Built for UofG club life' },
  { icon: Shield, label: 'Testing with students and club leaders' },
];

const chatMessages = [
  { user: 'Priya S.', color: '#E51937', msg: 'Hackathon kickoff is this Friday! Who\'s in?', time: '9:14 AM' },
  { user: 'Amir K.', color: '#3B82F6', msg: 'Definitely in! Should we bring our own laptops?', time: '9:16 AM' },
  { user: 'Priya S.', color: '#E51937', msg: 'Yes! Room 104 AC @ 5pm. RSVPs due by tomorrow.', time: '9:17 AM' },
];

function TypingIndicator() {
  return (
    <div className="flex gap-1 items-center px-2 py-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#777777]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const navigate = useNavigate();
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const showMessage = (index: number) => {
      timers.push(setTimeout(() => setShowTyping(true), index === 0 ? 800 : 800 + index * 1000));
      timers.push(setTimeout(() => {
        setShowTyping(false);
        setVisibleMessages(index + 1);
      }, index === 0 ? 1200 : 1200 + index * 1000));
    };
    for (let i = 0; i < chatMessages.length; i++) {
      showMessage(i);
    }
    timersRef.current = timers;
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleJoin = () => goToSection(JOIN_TESTING_ID, { navigate, pathname: '/' });
  const handleWalkthrough = () => goToSection(REQUEST_WALKTHROUGH_ID, { navigate, pathname: '/' });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0B0B]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#E51937] opacity-[0.05] blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#FFC429] opacity-[0.04] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div>
              <Badge variant="green" dot>Currently in early testing</Badge>
            </div>

            <h1 className="font-sans font-extrabold leading-[1.04] tracking-tight" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)' }}>
              <span className="block text-[#F5F5F5]">Discover campus life.</span>
              <span className="block bg-gradient-to-r from-[#FFC429] to-[#FFD45C] bg-clip-text text-transparent">
                Manage club life.
              </span>
            </h1>

            <p className="text-[#9CA3AF] text-xl sm:text-[22px]" style={{ maxWidth: '520px', lineHeight: '1.65' }}>
              Gryph ClubConnect helps UofG students find clubs, events, and opportunities while giving club leaders one workspace to manage members, announcements, events, tasks, hiring, and more.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Button variant="red" size="lg" onClick={handleJoin}>
                Join Testing
              </Button>
              <Button variant="ghost" size="lg" onClick={handleWalkthrough}>
                Request a Walkthrough
              </Button>
            </div>

            <div className="w-full h-px bg-[rgba(255,255,255,0.06)]" />

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-6 sm:gap-y-2">
              {trustItems.map(({ icon: Icon, label }) => (
                <p key={label} className="text-[#9CA3AF] text-sm font-sans flex items-center gap-2">
                  <Icon size={15} className="text-[#9CA3AF] shrink-0" />
                  {label}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Product mock — structure preserved; visual alignment comes later */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative justify-center lg:justify-end hidden sm:flex"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[90%] h-[80%] rounded-3xl bg-[#E51937] opacity-[0.04] blur-[50px]" />
            </div>

            <div className="w-full max-w-[520px] relative">
              <div className="rounded-[12px] border border-[#222222] shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
                <div className="bg-[#131313] rounded-[12px] overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[#222222] bg-[#0B0B0B]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <span className="text-xs font-sans text-white/50">gryphclubconnect.com</span>
                    </div>
                  </div>

                  <div className="flex h-[340px]">
                    <div className="w-44 bg-[#0B0B0B] border-r border-[#222222] flex flex-col">
                      <div className="px-3 py-3 border-b border-[#222222]">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#E51937] to-[#FFC429] flex items-center justify-center text-xs font-bold text-white">
                            GC
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-[#F5F5F5] leading-none">Club Workspace</div>
                            <div className="text-[10px] text-[#777777] mt-0.5">Preview</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 px-2 py-2 overflow-y-auto">
                        <div className="mb-2">
                          <p className="text-[10px] text-[#777777] uppercase tracking-wider px-2 mb-1 font-sans">Channels</p>
                          {['# general', '# exec', '# events', '# resources'].map((ch, i) => (
                            <div
                              key={ch}
                              className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs cursor-pointer transition-colors ${
                                i === 0
                                  ? 'bg-[#E51937]/20 text-[#F5F5F5]'
                                  : 'text-[#9CA3AF] hover:bg-[#222222]'
                              }`}
                            >
                              {ch}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      <div className="px-4 py-2.5 border-b border-[#222222] flex items-center gap-2">
                        <span className="text-[#9CA3AF] text-xs font-sans"># general</span>
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
                                  <span className="text-xs font-semibold text-[#F5F5F5]">{m.user}</span>
                                  <span className="text-[10px] text-[#777777]">{m.time}</span>
                                </div>
                                <p className="text-xs text-[#9CA3AF] mt-0.5 leading-relaxed">{m.msg}</p>
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
                      <div className="px-4 py-3 border-t border-[#222222]">
                        <div className="flex items-center gap-2 bg-[#0B0B0B] border border-[#222222] rounded-lg px-3 py-2">
                          <span className="text-xs text-[#777777]">Message #general...</span>
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
