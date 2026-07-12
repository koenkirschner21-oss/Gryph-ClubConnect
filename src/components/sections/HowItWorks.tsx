import { Plus, UserPlus, MessageSquare, Globe, type LucideIcon } from 'lucide-react';
import { howItWorksSteps, whatYouCanTest } from '../../data/index';
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
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-sans text-[#22C55E] uppercase tracking-wider mb-5 block">How testing works</span>
          <h2 className="text-[2.75rem] sm:text-[3.5rem] font-extrabold text-[#F5F5F5] font-sans mb-5">
            Join testing, try workflows, share feedback
          </h2>
          <p className="text-[#9CA3AF] text-xl max-w-xl mx-auto">
            Gryph ClubConnect is in early testing. Here&apos;s how to get involved.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <AnimatedSection>
            <div className="relative">
              {howItWorksSteps.map((step, index) => {
                const Icon = iconMap[step.icon] ?? Plus;
                const isLast = index === howItWorksSteps.length - 1;
                return (
                  <div key={step.step} className="relative flex gap-5">
                    {!isLast && (
                      <div className="absolute left-[19px] top-[48px] bottom-[-8px] w-0.5 bg-gradient-to-b from-[#E51937]/40 to-[#222222]" />
                    )}
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#E51937] flex items-center justify-center text-white font-bold text-sm font-sans z-10 relative">
                        {step.step}
                      </div>
                    </div>
                    <div className={`pb-10 ${isLast ? 'pb-0' : ''}`}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon size={16} className="text-[#E51937]" />
                        <h3 className="text-[#F5F5F5] font-bold text-xl font-sans">{step.title}</h3>
                      </div>
                      <p className="text-[#9CA3AF] text-[15px] leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="bg-[#131313] border border-[#222222] rounded-[12px] p-6">
              <h3 className="text-[#F5F5F5] font-bold text-lg font-sans mb-2">What you can test</h3>
              <p className="text-[#9CA3AF] text-sm mb-5">
                Depending on your role, early testing may include these workflows:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {whatYouCanTest.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 bg-[#0B0B0B] border border-[#222222] rounded-[10px] px-3 py-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFC429] shrink-0" />
                    <span className="text-[13px] text-[#F5F5F5]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
