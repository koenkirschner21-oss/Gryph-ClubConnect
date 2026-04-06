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
    <section className="py-24 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-mono text-[#C8102E] uppercase tracking-wider mb-3 block">The Problem</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-4">
            Your club runs on chaos.
          </h2>
          <p className="text-[#8B949E] text-lg max-w-xl mx-auto">
            You're doing great work — with terrible tools. Here's what we hear from club leaders every day.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {problems.map((problem) => {
            const Icon = iconMap[problem.icon] ?? MessageCircle;
            return (
              <StaggerItem key={problem.title}>
                <div className="group relative bg-[#1A1F26] border border-[#21262D] hover:border-[#C8102E]/40 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,16,46,0.08)] h-full">
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C8102E]/0 to-[#C8102E]/0 group-hover:from-[#C8102E]/[0.03] group-hover:to-transparent transition-all duration-300 pointer-events-none" />

                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-[rgba(200,16,46,0.1)] border border-[#C8102E]/20 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-[#C8102E]" />
                    </div>

                    <h3 className="text-[#F0F6FC] font-semibold text-lg mb-3 font-[Syne,sans-serif]">
                      {problem.title}
                    </h3>
                    <p className="text-[#8B949E] text-sm leading-relaxed mb-5">
                      {problem.description}
                    </p>

                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-[rgba(200,16,46,0.12)] text-[#C8102E] border border-[#C8102E]/20">
                      {problem.pain}
                    </span>
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
