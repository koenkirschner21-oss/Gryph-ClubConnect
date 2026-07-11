import { Plus, UserPlus, MessageSquare, Globe, type LucideIcon } from 'lucide-react';
import { howItWorksSteps } from '../../data/index';
import AnimatedSection from '../ui/AnimatedSection';

const iconMap: Record<string, LucideIcon> = {
  Plus,
  UserPlus,
  MessageSquare,
  Globe,
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-sm font-sans text-[#22C55E] uppercase tracking-wider mb-5 block">How testing works</span>
          <h2 className="text-[2.75rem] sm:text-[3.5rem] font-extrabold text-[#F5F5F5] font-sans mb-5">
            Join testing, try workflows, share feedback
          </h2>
          <p className="text-[#9CA3AF] text-xl max-w-xl mx-auto">
            Gryph ClubConnect is in early testing. Here&apos;s how to get involved.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Steps */}
          <AnimatedSection>
            <div className="relative">
              {howItWorksSteps.map((step, index) => {
                const Icon = iconMap[step.icon] ?? Plus;
                const isLast = index === howItWorksSteps.length - 1;
                return (
                  <div key={step.step} className="relative flex gap-5">
                    {/* Vertical connector line */}
                    {!isLast && (
                      <div className="absolute left-[19px] top-[48px] bottom-[-8px] w-0.5 bg-gradient-to-b from-[#E51937]/40 to-[#222222]" />
                    )}

                    {/* Step number circle */}
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#E51937] flex items-center justify-center text-white font-bold text-sm font-sans shadow-[0_0_20px_rgba(229,25,55,0.3)] z-10 relative">
                        {step.step}
                      </div>
                    </div>

                    <div className={`pb-10 ${isLast ? 'pb-0' : ''}`}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon size={16} className="text-[#E51937]" />
                        <h3 className="text-[#F5F5F5] font-bold text-xl font-sans">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-[#9CA3AF] text-[15px] leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Setup wizard mock */}
          <AnimatedSection delay={0.2}>
            <div className="bg-[#111111] border border-[#222222] rounded-2xl overflow-hidden shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#222222] bg-[#0B0B0B]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <span className="ml-2 text-sm text-[#9CA3AF] font-sans">Early Testing Interest</span>
              </div>

              <div className="p-6 space-y-5">
                {/* Step indicator */}
                <div className="flex items-center gap-2">
                  {['01', '02', '03', '04'].map((s, i) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-sans font-bold ${
                        i === 0 ? 'bg-[#E51937] text-white' : 'bg-[#222222] text-[#777777]'
                      }`}>
                        {s}
                      </div>
                      {i < 3 && <div className="flex-1 h-px bg-[#222222] w-6" />}
                    </div>
                  ))}
                  <span className="ml-auto text-sm text-[#9CA3AF] font-sans">Step 1 of 4</span>
                </div>

                <div>
                  <h3 className="text-[#F5F5F5] font-semibold text-base mb-1">Join the testing group</h3>
                  <p className="text-[#9CA3AF] text-sm">Tell us how you&apos;d like to help test Gryph ClubConnect.</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-[#9CA3AF] mb-1.5">Your role</label>
                    <div className="bg-[#0B0B0B] border border-[#E51937]/40 rounded-lg px-3 py-2.5 text-sm text-[#F5F5F5] flex items-center justify-between">
                      <span>Club leader</span>
                      <span className="w-px h-4 bg-[#E51937] animate-pulse" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#9CA3AF] mb-1.5">Email</label>
                    <div className="bg-[#0B0B0B] border border-[#222222] rounded-lg px-3 py-2.5 text-sm text-[#9CA3AF]">
                      you@uoguelph.ca
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#9CA3AF] mb-1.5">Interest</label>
                    <div className="bg-[#0B0B0B] border border-[#222222] rounded-lg px-3 py-2.5 text-sm text-[#9CA3AF] flex items-center justify-between">
                      <span>Club workspace workflows</span>
                      <span className="text-[#9CA3AF]">▾</span>
                    </div>
                  </div>

                  <button className="w-full bg-[#E51937] hover:bg-[#C4122E] text-white font-semibold py-2.5 rounded-lg text-sm transition-colors">
                    Continue →
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
