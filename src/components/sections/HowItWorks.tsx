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
    <section id="how-it-works" className="py-24 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-mono text-[#22C55E] uppercase tracking-wider mb-3 block">Getting Started</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-4">
            Up and running in minutes
          </h2>
          <p className="text-[#8B949E] text-lg max-w-lg mx-auto">
            No complicated setup. No IT department required. Just sign up and go.
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
                      <div className="absolute left-[19px] top-[48px] bottom-[-8px] w-0.5 bg-gradient-to-b from-[#C8102E]/40 to-[#21262D]" />
                    )}

                    {/* Step number circle */}
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#C8102E] flex items-center justify-center text-white font-bold text-sm font-mono shadow-[0_0_20px_rgba(200,16,46,0.3)] z-10 relative">
                        {step.step}
                      </div>
                    </div>

                    <div className={`pb-10 ${isLast ? 'pb-0' : ''}`}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon size={16} className="text-[#C8102E]" />
                        <h3 className="text-[#F0F6FC] font-semibold text-lg font-[Syne,sans-serif]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-[#8B949E] text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Setup wizard mock */}
          <AnimatedSection delay={0.2}>
            <div className="bg-[#161B22] border border-[#21262D] rounded-2xl overflow-hidden shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#21262D] bg-[#0D1117]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <span className="ml-2 text-xs text-[#6E7681] font-mono">Setup Wizard</span>
              </div>

              <div className="p-6 space-y-5">
                {/* Step indicator */}
                <div className="flex items-center gap-2">
                  {['01', '02', '03', '04'].map((s, i) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                        i === 0 ? 'bg-[#C8102E] text-white' : 'bg-[#21262D] text-[#6E7681]'
                      }`}>
                        {s}
                      </div>
                      {i < 3 && <div className="flex-1 h-px bg-[#21262D] w-6" />}
                    </div>
                  ))}
                  <span className="ml-auto text-xs text-[#6E7681] font-mono">Step 1 of 4</span>
                </div>

                <div>
                  <h3 className="text-[#F0F6FC] font-semibold text-base mb-1">Create Your Club</h3>
                  <p className="text-[#8B949E] text-xs">Tell us about your club to get started.</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-[#8B949E] mb-1.5">Club Name</label>
                    <div className="bg-[#0D1117] border border-[#C8102E]/40 rounded-lg px-3 py-2.5 text-sm text-[#F0F6FC] flex items-center justify-between">
                      <span>Guelph Robotics Club</span>
                      <span className="w-px h-4 bg-[#C8102E] animate-pulse" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#8B949E] mb-1.5">University Email</label>
                    <div className="bg-[#0D1117] border border-[#21262D] rounded-lg px-3 py-2.5 text-sm text-[#6E7681]">
                      president@uoguelph.ca
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#8B949E] mb-1.5">Category</label>
                    <div className="bg-[#0D1117] border border-[#21262D] rounded-lg px-3 py-2.5 text-sm text-[#6E7681] flex items-center justify-between">
                      <span>Engineering</span>
                      <span className="text-[#6E7681]">▾</span>
                    </div>
                  </div>

                  <button className="w-full bg-[#C8102E] hover:bg-[#A00C24] text-white font-semibold py-2.5 rounded-lg text-sm transition-colors">
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
