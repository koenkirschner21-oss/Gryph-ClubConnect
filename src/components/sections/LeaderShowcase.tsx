import {
  LayoutGrid, Megaphone, CalendarPlus, CheckSquare, Users, UserCheck, Shield, type LucideIcon,
} from 'lucide-react';
import { leaderFeatures } from '../../data/index';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import { WorkspaceMock } from '../mockups/ProductMocks';

const iconMap: Record<string, LucideIcon> = {
  LayoutGrid, Megaphone, CalendarPlus, CheckSquare, Users, UserCheck, Shield,
};

export default function LeaderShowcase() {
  return (
    <section id="for-clubs-home" className="py-24 bg-[#111111] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <AnimatedSection delay={0.1} className="order-2 lg:order-1 lg:sticky lg:top-28">
            <WorkspaceMock />
          </AnimatedSection>

          <div className="order-1 lg:order-2">
            <AnimatedSection>
              <span className="text-sm font-sans text-[#FFC429] uppercase tracking-wider mb-4 block">For club leaders</span>
              <h2 className="text-[2.5rem] sm:text-[3.25rem] font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
                Run your club from one workspace.
              </h2>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-10 max-w-xl">
                Club leaders can manage the moving pieces of club life without scattering everything across group chats, spreadsheets, forms, and disconnected tools.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.06}>
              {leaderFeatures.map((feature) => {
                const Icon = iconMap[feature.icon] ?? LayoutGrid;
                return (
                  <StaggerItem key={feature.title}>
                    <div className="bg-[#131313] border border-[#222222] rounded-[12px] p-5 h-full hover:border-[rgba(255,196,41,0.35)] transition-colors">
                      <div className="w-9 h-9 rounded-[8px] bg-[rgba(255,196,41,0.12)] border border-[#FFC429]/25 flex items-center justify-center mb-3">
                        <Icon size={18} className="text-[#FFC429]" />
                      </div>
                      <h3 className="text-[#F5F5F5] font-semibold text-[15px] mb-1.5">{feature.title}</h3>
                      <p className="text-[#9CA3AF] text-[13px] leading-relaxed">{feature.description}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
