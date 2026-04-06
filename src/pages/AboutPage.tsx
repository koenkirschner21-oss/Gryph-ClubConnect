import { useState } from 'react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';

const values = [
  { emoji: '🤝', title: 'Community First', description: 'Every decision we make starts with one question: does this make student clubs better? We build for the community, not for profit.' },
  { emoji: '🛠️', title: 'Student-Built', description: 'GCC was created by UofG students who lived the problem. We know what exec life looks like because we\'ve been in those exec meetings.' },
  { emoji: '💸', title: 'Always Free-ish', description: 'The core platform will always be free for small clubs. We believe access to great tools shouldn\'t depend on your club\'s budget.' },
];

const teamMembers = [
  { initials: 'KK', name: 'Khaled K.', role: 'Founder & CEO', color: '#C8102E', bio: 'CS student at UofG. Built GCC to solve the coordination mess he saw in every club he joined.' },
  { initials: 'AM', name: 'Aisha M.', role: 'Co-founder & Design', color: '#D4A017', bio: 'Product design student. Believes great software should feel invisible — it just works.' },
  { initials: 'RS', name: 'Ravi S.', role: 'Lead Engineer', color: '#3B82F6', bio: 'Software Engineering student. Makes sure GCC is fast, reliable, and actually ships on time.' },
];

const pageStats = [
  { value: '2025', label: 'Founded' },
  { value: '50+', label: 'clubs onboarded' },
  { value: '2,400+', label: 'members served' },
  { value: '❤️', label: 'Built in Guelph' },
];

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="page-transition">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#0D1117]">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#C8102E] opacity-[0.04] blur-[140px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(#F0F6FC 1px, transparent 1px), linear-gradient(90deg, #F0F6FC 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <span className="text-3xl mb-6 block">🦅</span>
              <h1 className="font-[Syne,sans-serif] font-extrabold text-[#F0F6FC] mb-5 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Built by Guelph students,<br />
                <span className="bg-gradient-to-r from-[#C8102E] to-[#D4A017] bg-clip-text text-transparent">
                  for Guelph students.
                </span>
              </h1>
              <p className="text-[#8B949E] text-lg max-w-2xl mx-auto leading-relaxed">
                We started GCC because we were tired of running clubs across five different apps. There had to be a better way.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-[#161B22]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <span className="text-xs font-mono text-[#C8102E] uppercase tracking-wider mb-4 block">Our Mission</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-5">Empowering every UofG club to thrive</h2>
                <p className="text-[#8B949E] text-base leading-relaxed">
                  Our mission is to empower every University of Guelph student club with the tools they need to thrive — without the cost or complexity of enterprise software.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="bg-[#1A1F26] border border-[#21262D] rounded-2xl p-8">
                  <div className="text-4xl mb-4">🎯</div>
                  <blockquote className="text-[#F0F6FC] text-lg font-medium leading-relaxed italic">
                    "Every student club deserves the same quality tools that professional teams use — just designed for how students actually work."
                  </blockquote>
                  <p className="text-[#6E7681] text-sm mt-4">— GCC Team</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Problem we're solving */}
        <section className="py-20 bg-[#0D1117]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <span className="text-xs font-mono text-[#C8102E] uppercase tracking-wider mb-4 block">The Backstory</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-4">We lived the problem</h2>
              <p className="text-[#8B949E] max-w-2xl mx-auto leading-relaxed">
                Student clubs at UofG were juggling iMessage, WhatsApp, Google Drive, Instagram DMs, and email blasts just to stay coordinated. New members got lost. Tasks got dropped. Events were stressful to plan.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  { stat: '3.7', label: 'apps per club on average', color: '#C8102E', emoji: '📱' },
                  { stat: '64%', label: 'of exec tasks go untracked', color: '#D4A017', emoji: '📋' },
                  { stat: '2.3h', label: 'wasted per event on logistics', color: '#3B82F6', emoji: '⏱️' },
                ].map((item) => (
                  <div key={item.label} className="bg-[#161B22] border border-[#21262D] rounded-xl p-6 text-center">
                    <div className="text-2xl mb-2">{item.emoji}</div>
                    <div className="text-3xl font-extrabold font-[Syne,sans-serif] mb-1" style={{ color: item.color }}>{item.stat}</div>
                    <p className="text-[#8B949E] text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 bg-[#161B22]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <span className="text-xs font-mono text-[#D4A017] uppercase tracking-wider mb-4 block">Our Vision</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-6">A campus where every student finds their community</h2>
              <p className="text-[#8B949E] text-lg leading-relaxed max-w-3xl mx-auto">
                We envision a campus where every student can find their community, contribute meaningfully, and build lifelong connections — and where the tools never get in the way.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-[#0D1117]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">What we stand for</h2>
              <p className="text-[#8B949E]">Three values that guide everything we build.</p>
            </AnimatedSection>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="bg-[#161B22] border border-[#21262D] rounded-2xl p-7 h-full hover:border-[#C8102E]/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="text-3xl mb-4">{v.emoji}</div>
                    <h3 className="text-[#F0F6FC] font-bold text-lg font-[Syne,sans-serif] mb-3">{v.title}</h3>
                    <p className="text-[#8B949E] text-sm leading-relaxed">{v.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-[#161B22]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">The team</h2>
              <p className="text-[#8B949E]">UofG students building for UofG students.</p>
            </AnimatedSection>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
              {teamMembers.map((member) => (
                <StaggerItem key={member.name}>
                  <div className="bg-[#1A1F26] border border-[#21262D] rounded-2xl p-7 text-center h-full hover:border-[#C8102E]/20 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white mx-auto mb-4 shadow-lg" style={{ backgroundColor: member.color }}>{member.initials}</div>
                    <h3 className="text-[#F0F6FC] font-bold text-lg font-[Syne,sans-serif] mb-0.5">{member.name}</h3>
                    <p className="text-xs font-mono mb-3" style={{ color: member.color }}>{member.role}</p>
                    <p className="text-[#8B949E] text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Built at UofG */}
        <section className="py-16 bg-[#0D1117]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#161B22] border border-[#21262D] mb-6">
                <span className="text-2xl">🍁</span>
                <span className="text-[#F0F6FC] font-semibold">Built at the University of Guelph</span>
              </div>
              <p className="text-[#8B949E] text-base leading-relaxed max-w-2xl mx-auto">
                We're proud to call Guelph home. From the UC to Reynolds Walk, this campus inspired every feature in GCC. We're building the platform we wished existed when we first joined our clubs.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-[#161B22]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {pageStats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-1">{s.value}</div>
                    <div className="text-[#6E7681] text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 overflow-hidden bg-[#0D1117]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#C8102E] opacity-[0.06] blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-4">Join the platform</h2>
              <p className="text-[#8B949E] text-base mb-8 max-w-xl mx-auto">Be part of the growing community of UofG clubs on GCC.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="red" size="lg" onClick={() => setModalOpen(true)}>Get Started Free</Button>
                <Button variant="ghost" size="lg">Read Our Story</Button>
              </div>
              <p className="text-[#6E7681] text-xs mt-5 font-mono">🔒 @uoguelph.ca emails only · Made in Guelph 🍁</p>
            </AnimatedSection>
          </div>
        </section>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
