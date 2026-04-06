import { useState } from 'react';
import { clubs, testimonials } from '../data/index';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';

const execBenefits = [
  {
    emoji: '📋',
    title: 'Run better meetings',
    description: 'Shared agenda, notes, and action items all in GCC. Every exec arrives prepared and every decision is documented — no more "wait, what did we agree on?"',
  },
  {
    emoji: '🚀',
    title: 'Onboard new members instantly',
    description: 'They click your link, verify their UofG email, and immediately see your channels, upcoming events, and club announcements. Zero friction, zero confusion.',
  },
  {
    emoji: '✅',
    title: 'Never drop the ball',
    description: 'Task assignments with deadlines, reminders, and ownership. Your exec team always knows what they own, what\'s overdue, and what\'s done.',
  },
];

const execRoles = [
  {
    role: 'President',
    emoji: '👑',
    color: '#C8102E',
    workflow: ['Set channel permissions', 'Assign exec roles', 'View analytics dashboard', 'Manage club settings'],
  },
  {
    role: 'VP Communications',
    emoji: '📢',
    color: '#D4A017',
    workflow: ['Post announcements', 'Manage member directory', 'Send event reminders', 'Draft meeting notes'],
  },
  {
    role: 'Events Coordinator',
    emoji: '📅',
    color: '#3B82F6',
    workflow: ['Create event listings', 'Track RSVPs', 'Schedule reminders', 'Post event recaps'],
  },
  {
    role: 'Treasurer',
    emoji: '💰',
    color: '#22C55E',
    workflow: ['Track budget tasks', 'Document spending decisions', 'Share finance updates', 'Coordinate with sponsors'],
  },
  {
    role: 'Secretary',
    emoji: '📝',
    color: '#A855F7',
    workflow: ['Record meeting minutes', 'Maintain member list', 'Archive announcements', 'Manage task backlog'],
  },
];

const stats = [
  { value: '50+', label: 'clubs on GCC' },
  { value: '2,400+', label: 'members served' },
  { value: '84%', label: 'avg task completion' },
];

export default function ForClubsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const displayClubs = clubs.slice(0, 8);

  return (
    <>
      <div className="page-transition">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#0D1117]">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#C8102E] opacity-[0.05] blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(#F0F6FC 1px, transparent 1px), linear-gradient(90deg, #F0F6FC 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[rgba(200,16,46,0.12)] text-[#C8102E] border border-[#C8102E]/20 mb-6">
                Built for exec teams
              </span>
              <h1 className="font-[Syne,sans-serif] font-extrabold text-[#F0F6FC] mb-5 leading-tight max-w-3xl" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Built for club executives who actually{' '}
                <span className="bg-gradient-to-r from-[#C8102E] to-[#D4A017] bg-clip-text text-transparent">get things done.</span>
              </h1>
              <p className="text-[#8B949E] text-lg max-w-2xl leading-relaxed mb-8">
                Stop wasting exec meeting time on coordination. GCC gives your team a single workspace to communicate, track tasks, and run events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="red" size="lg" onClick={() => setModalOpen(true)}>Create Your Club Workspace</Button>
                <Button variant="ghost" size="lg">See Features</Button>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={0.2} className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-[#21262D]">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif]">{s.value}</div>
                  <div className="text-sm text-[#6E7681]">{s.label}</div>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* Why execs love GCC */}
        <section className="py-20 bg-[#161B22]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">Why club execs love GCC</h2>
              <p className="text-[#8B949E] max-w-lg mx-auto">Three things that make your exec team's life dramatically easier.</p>
            </AnimatedSection>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
              {execBenefits.map((b) => (
                <StaggerItem key={b.title}>
                  <div className="bg-[#1A1F26] border border-[#21262D] rounded-2xl p-7 h-full hover:border-[#C8102E]/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="text-3xl mb-4">{b.emoji}</div>
                    <h3 className="text-[#F0F6FC] font-bold text-lg font-[Syne,sans-serif] mb-3">{b.title}</h3>
                    <p className="text-[#8B949E] text-sm leading-relaxed">{b.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Exec role cards */}
        <section className="py-20 bg-[#0D1117]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">Every exec role, covered</h2>
              <p className="text-[#8B949E] max-w-lg mx-auto">GCC is designed around how exec teams actually operate.</p>
            </AnimatedSection>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
              {execRoles.map((r) => (
                <StaggerItem key={r.role}>
                  <div className="bg-[#161B22] border border-[#21262D] rounded-xl p-6 h-full hover:border-[#21262D]/80 transition-all duration-300" style={{ borderLeftColor: `${r.color}40`, borderLeftWidth: '3px' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{r.emoji}</span>
                      <h3 className="text-[#F0F6FC] font-bold font-[Syne,sans-serif]" style={{ color: r.color }}>{r.role}</h3>
                    </div>
                    <ul className="space-y-2">
                      {r.workflow.map((w) => (
                        <li key={w} className="flex items-center gap-2 text-sm text-[#8B949E]">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: r.color }} />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#161B22]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">Exec teams that swear by GCC</h2>
              <p className="text-[#8B949E]">Real results from real UofG club leaders.</p>
            </AnimatedSection>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
              {testimonials.map((t) => (
                <StaggerItem key={t.name}>
                  <div className="bg-[#1A1F26] border border-[#21262D] rounded-2xl p-6 h-full flex flex-col hover:border-[#C8102E]/20 transition-all duration-300">
                    <blockquote className="text-[#8B949E] text-sm leading-relaxed italic mb-5 flex-1">"{t.quote}"</blockquote>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-semibold mb-4" style={{ backgroundColor: `${t.avatarColor}18`, color: t.avatarColor, border: `1px solid ${t.avatarColor}30` }}>
                      📈 {t.stats}
                    </span>
                    <div className="flex items-center gap-3 pt-4 border-t border-[#21262D]">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ backgroundColor: t.avatarColor }}>{t.avatar}</div>
                      <div>
                        <p className="text-[#F0F6FC] text-sm font-semibold">{t.name}</p>
                        <p className="text-[#6E7681] text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Clubs using GCC */}
        <section className="py-20 bg-[#0D1117]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">Which clubs use GCC</h2>
              <p className="text-[#8B949E]">From engineering teams to faith groups — GCC works for every type of club.</p>
            </AnimatedSection>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.06}>
              {displayClubs.map((club) => (
                <StaggerItem key={club.name}>
                  <div className="bg-[#161B22] border border-[#21262D] rounded-xl p-4 flex items-center gap-3 hover:border-[#C8102E]/20 transition-all duration-300">
                    <span className="text-2xl">{club.emoji}</span>
                    <div className="min-w-0">
                      <p className="text-[#F0F6FC] text-sm font-semibold truncate">{club.name}</p>
                      <p className="text-[#6E7681] text-xs">{club.members} members · {club.category}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 overflow-hidden bg-[#161B22]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#C8102E] opacity-[0.06] blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-4">Create your club workspace for free</h2>
              <p className="text-[#8B949E] text-base mb-8 max-w-xl mx-auto">Join 50+ UofG clubs already running on GCC. No credit card, no setup fees.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="red" size="lg" onClick={() => setModalOpen(true)}>Get Started Free</Button>
                <Button variant="ghost" size="lg">Learn More</Button>
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
