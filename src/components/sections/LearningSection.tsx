import { learningPoints } from '../../data/index';
import { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import AnimatedSection from '../ui/AnimatedSection';

export default function LearningSection() {
  return (
    <section className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-sm font-sans text-[#FFC429] uppercase tracking-wider mb-5 block">Early testing</span>
          <h2 className="text-[2.75rem] sm:text-[3.5rem] font-extrabold text-[#F5F5F5] font-sans mb-5">
            What we&apos;re learning from testing
          </h2>
          <p className="text-[#9CA3AF] text-xl max-w-xl mx-auto">
            Themes we keep hearing as we prepare Gryph ClubConnect with students and club leaders.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {learningPoints.map((item) => (
            <StaggerItem key={item.title}>
              <div className="bg-[#1A1A1A] border border-[#222222] hover:border-[#E51937]/30 rounded-2xl p-7 h-full flex flex-col transition-all duration-300">
                <h3 className="text-[#F5F5F5] font-bold text-lg font-sans mb-3">
                  {item.title}
                </h3>
                <p className="text-[#9CA3AF] text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
