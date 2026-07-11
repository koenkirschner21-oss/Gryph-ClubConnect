import { MessageCircle, ClipboardList, Calendar, type LucideIcon } from 'lucide-react';
import { problems } from '../../data/index';
import { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import AnimatedSection from '../ui/AnimatedSection';

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  ClipboardList,
  Calendar,
};

export default function ProblemSection() {
  return (
    <section className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-sm font-sans text-[#E51937] uppercase tracking-wider mb-5 block">The Problem</span>
          <h2 className="text-[2.75rem] sm:text-[3.5rem] font-extrabold text-[#F5F5F5] font-sans mb-5">
            Club life is harder than it should be.
          </h2>
          <p className="text-[#9CA3AF] text-xl max-w-xl mx-auto">
            Students struggle to discover opportunities. Club leaders juggle too many tools. We&apos;re building for both.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {problems.map((problem) => {
            const Icon = iconMap[problem.icon] ?? MessageCircle;
            return (
              <StaggerItem key={problem.title}>
                <div className="group relative bg-[#131313] border border-[#222222] hover:border-[#E51937]/35 rounded-[12px] p-7 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] h-full">
                  <div className="absolute inset-0 rounded-[12px] pointer-events-none" />

                  <div className="relative">
                    <div className="w-[52px] h-[52px] rounded-[10px] bg-[rgba(229,25,55,0.1)] border border-[#E51937]/20 flex items-center justify-center mb-6">
                      <Icon size={26} className="text-[#E51937]" />
                    </div>

                    <h3 className="text-[#F5F5F5] font-bold text-xl mb-3 font-sans">
                      {problem.title}
                    </h3>
                    <p className="text-[#9CA3AF] text-[15px] leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
