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
  red:    { bg: 'rgba(200,16,46,0.12)',  text: '#C8102E', border: 'rgba(200,16,46,0.25)'  },
  gold:   { bg: 'rgba(212,160,23,0.12)', text: '#D4A017', border: 'rgba(212,160,23,0.25)' },
  blue:   { bg: 'rgba(59,130,246,0.12)', text: '#3B82F6', border: 'rgba(59,130,246,0.25)' },
  green:  { bg: 'rgba(34,197,94,0.12)',  text: '#22C55E', border: 'rgba(34,197,94,0.25)'  },
  purple: { bg: 'rgba(168,85,247,0.12)', text: '#A855F7', border: 'rgba(168,85,247,0.25)' },
  orange: { bg: 'rgba(249,115,22,0.12)', text: '#F97316', border: 'rgba(249,115,22,0.25)' },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-sm font-mono text-[#D4A017] uppercase tracking-wider mb-5 block">Features</span>
          <h2 className="text-[2.75rem] sm:text-[3.5rem] font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-5">
            Everything your club needs
          </h2>
          <p className="text-[#9DA5AE] text-xl max-w-xl mx-auto">
            6 powerful tools, one unified platform — designed for how student clubs actually work.
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
                  className="group bg-[#1A1F26] border border-[#21262D] rounded-xl p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(200,16,46,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                >
                  <div
                    className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-6"
                    style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
                  >
                    <Icon size={26} color={colors.text} />
                  </div>

                  <h3 className="text-[#F0F6FC] font-bold text-xl mb-3 font-[Syne,sans-serif]">
                    {feature.title}
                  </h3>
                  <p className="text-[#9DA5AE] text-[15px] leading-relaxed">
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
