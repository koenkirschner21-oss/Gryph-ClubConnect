import { useState } from 'react';
import { Plus, UserPlus, MessageSquare, Globe, type LucideIcon } from 'lucide-react';
import { howItWorksSteps } from '../data/index';
import AnimatedSection from '../components/ui/AnimatedSection';
import FAQAccordion from '../components/ui/FAQAccordion';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';

const iconMap: Record<string, LucideIcon> = { Plus, UserPlus, MessageSquare, Globe };

const faqItems = [
  { question: 'Is GCC really free?', answer: 'Yes! The Free plan is forever free for clubs with up to 30 members. No credit card required.' },
  { question: 'Do I need a @uoguelph.ca email?', answer: 'Yes, GCC is exclusive to University of Guelph students to maintain community integrity.' },
  { question: 'How long does setup take?', answer: 'Most clubs are fully set up in under 10 minutes. Create your club, invite your exec, add channels — done.' },
  { question: 'Can I migrate from WhatsApp/Discord?', answer: "You don't need to migrate overnight. Run GCC alongside your current tools and switch when your club is ready." },
  { question: 'How do members join?', answer: "Share your club's unique link. Members sign up with their UofG email and are automatically verified." },
];

const expandedDescriptions: Record<string, string> = {
  'Create Your Club': 'Sign up with your @uoguelph.ca email — no approval process, no waiting period. Give your club a name, pick a category, and write a short description. Your workspace is live in under 2 minutes.',
  'Invite Your Exec': 'Copy your exec invite link and share it in your existing group chat. Each exec member clicks the link, verifies their @uoguelph.ca email, and is automatically assigned to your club with the right permissions.',
  'Set Up Channels': 'Start with our recommended channel templates (#general, #exec, #events) or build your own structure. Pin important messages, set channel purposes, and decide which members can post to which channels.',
  'Open to Members': 'Generate your public club link and post it anywhere — Instagram bio, CS Central, Gryphlife. Members sign up with their UofG email and instantly see your channels, upcoming events, and team.',
};

export default function HowItWorksPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="page-transition">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#0D1117]">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#C8102E] opacity-[0.05] blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(#F0F6FC 1px, transparent 1px), linear-gradient(90deg, #F0F6FC 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[rgba(200,16,46,0.12)] text-[#C8102E] border border-[#C8102E]/20 mb-6">
                Setup in under 10 minutes
              </span>
              <h1 className="font-[Syne,sans-serif] font-extrabold text-[#F0F6FC] mb-5 leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}>
                Up and running<br />
                <span className="bg-gradient-to-r from-[#C8102E] to-[#D4A017] bg-clip-text text-transparent">in minutes</span>
              </h1>
              <p className="text-[#8B949E] text-lg max-w-2xl mx-auto">
                No IT department. No complicated onboarding. Just sign up, invite your team, and go.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-[#0D1117]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {howItWorksSteps.map((step, index) => {
                const Icon = iconMap[step.icon] ?? Plus;
                const isEven = index % 2 === 0;
                return (
                  <AnimatedSection key={step.step} delay={index * 0.05}>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                      <div className={isEven ? '' : 'lg:order-2'}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-[#C8102E] flex items-center justify-center text-white font-bold text-sm font-mono shadow-[0_0_20px_rgba(200,16,46,0.3)]">{step.step}</div>
                          <Icon size={18} className="text-[#C8102E]" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">{step.title}</h2>
                        <p className="text-[#8B949E] text-base leading-relaxed mb-3">{expandedDescriptions[step.title] ?? step.description}</p>
                        <p className="text-[#6E7681] text-sm italic">{step.description}</p>
                      </div>
                      <div className={`bg-[#161B22] border border-[#21262D] rounded-2xl p-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-[#C8102E]/10 border border-[#C8102E]/20 flex items-center justify-center">
                            <Icon size={16} className="text-[#C8102E]" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-[#F0F6FC]">Step {step.step}</p>
                            <p className="text-[10px] text-[#6E7681]">{step.title}</p>
                          </div>
                          <div className="ml-auto px-2 py-0.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[9px] text-[#22C55E] font-mono">~2 min</div>
                        </div>
                        <div className="space-y-2">
                          {[step.description].map((d, i) => (
                            <div key={i} className="flex items-start gap-2 bg-[#0D1117] rounded-lg p-3">
                              <div className="w-4 h-4 rounded-full bg-[#C8102E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                              </div>
                              <p className="text-xs text-[#8B949E] leading-relaxed">{d}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">Frequently asked questions</h2>
              <p className="text-[#8B949E]">Everything you need to know before getting started.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <FAQAccordion items={faqItems} />
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 overflow-hidden bg-[#0D1117]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#C8102E] opacity-[0.06] blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-4">Ready to get started?</h2>
              <p className="text-[#8B949E] text-base mb-8 max-w-xl mx-auto">Your club workspace is 10 minutes away. No credit card, no complexity.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="red" size="lg" onClick={() => setModalOpen(true)}>Create Your Club</Button>
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
