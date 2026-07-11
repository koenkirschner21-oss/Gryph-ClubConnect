import { MessageSquare, CheckSquare, Calendar, Users, Layers, BarChart2, type LucideIcon } from 'lucide-react';
import { features } from '../../data/index';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';

type FeatureColor = 'red' | 'gold' | 'blue' | 'green' | 'purple' | 'orange';

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  CheckSquare,
  Calendar,
  Users,
  Layers,
  BarChart2,
};

const colorMap: Record<FeatureColor, { bg: string; text: string; border: string }> = {
  red:    { bg: 'rgba(229,25,55,0.12)',  text: '#E51937', border: 'rgba(229,25,55,0.25)'  },
  gold:   { bg: 'rgba(255,196,41,0.12)', text: '#FFC429', border: 'rgba(255,196,41,0.25)' },
  blue:   { bg: 'rgba(59,130,246,0.12)', text: '#3B82F6', border: 'rgba(59,130,246,0.25)' },
  green:  { bg: 'rgba(34,197,94,0.12)',  text: '#22C55E', border: 'rgba(34,197,94,0.25)'  },
  purple: { bg: 'rgba(255,196,41,0.12)', text: '#FFC429', border: 'rgba(255,196,41,0.25)' },
  orange: { bg: 'rgba(229,25,55,0.12)',  text: '#E51937', border: 'rgba(229,25,55,0.25)'  },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 bg-[#0B0B0B] scroll-mt-24">
      <div id="for-students" className="scroll-mt-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-sm font-sans text-[#FFC429] uppercase tracking-wider mb-5 block">Features</span>
          <h2 className="text-[2.75rem] sm:text-[3.5rem] font-extrabold text-[#F5F5F5] font-sans mb-5">
            Built for students and club leaders
          </h2>
          <p className="text-[#9CA3AF] text-xl max-w-xl mx-auto">
            Discover clubs and events as a student. Manage members, announcements, events, tasks, and hiring as a club leader.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? MessageSquare;
            const colors = colorMap[feature.color as FeatureColor] ?? colorMap.red;

            return (
              <StaggerItem key={feature.title}>
                <div
                  className="group bg-[#131313] border border-[#222222] rounded-[12px] p-7 h-full transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(229,25,55,0.35)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
                >
                  <div
                    className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-6"
                    style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
                  >
                    <Icon size={26} color={colors.text} />
                  </div>

                  <h3 className="text-[#F5F5F5] font-bold text-xl mb-3 font-sans">
                    {feature.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-[15px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
