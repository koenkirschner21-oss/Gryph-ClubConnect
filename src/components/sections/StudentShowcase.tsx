import {
  Compass, Building2, Calendar, Briefcase, LayoutDashboard, Bookmark, type LucideIcon,
} from 'lucide-react';
import { studentFeatures } from '../../data/index';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import MockupImage from '../mockups/MockupImage';

const iconMap: Record<string, LucideIcon> = {
  Compass, Building2, Calendar, Briefcase, LayoutDashboard, Bookmark,
};

export default function StudentShowcase() {
  return (
    <section className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <AnimatedSection>
              <span className="text-sm font-sans text-[#E51937] uppercase tracking-wider mb-4 block">For students</span>
              <h2 className="text-[2.5rem] sm:text-[3.25rem] font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
                Find your place on campus.
              </h2>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-10 max-w-xl">
                Gryph ClubConnect gives students one place to explore clubs, discover events, apply for opportunities, and keep track of what they are involved in.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.06}>
              {studentFeatures.map((feature) => {
                const Icon = iconMap[feature.icon] ?? Compass;
                return (
                  <StaggerItem key={feature.title}>
                    <div className="bg-[#131313] border border-[#222222] rounded-[12px] p-5 h-full hover:border-[rgba(229,25,55,0.35)] transition-colors">
                      <div className="w-9 h-9 rounded-[8px] bg-[rgba(229,25,55,0.12)] border border-[#E51937]/25 flex items-center justify-center mb-3">
                        <Icon size={18} className="text-[#E51937]" />
                      </div>
                      <h3 className="text-[#F5F5F5] font-semibold text-[15px] mb-1.5">{feature.title}</h3>
                      <p className="text-[#9CA3AF] text-[13px] leading-relaxed">{feature.description}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          <AnimatedSection delay={0.15} className="lg:sticky lg:top-28">
            <MockupImage
              name="explore"
              alt="Gryph ClubConnect explore clubs"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
