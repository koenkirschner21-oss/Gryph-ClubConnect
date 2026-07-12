import { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import AnimatedSection from '../ui/AnimatedSection';

const buildingAround = [
  {
    label: 'Discovery',
    accent: 'red' as const,
    title: 'Easier discovery for students',
    description:
      'Students need one place to find clubs, events, roles, and updates without digging through scattered links and group chats.',
  },
  {
    label: 'Operations',
    accent: 'gold' as const,
    title: 'Cleaner operations for club leaders',
    description:
      'Club leaders need a single workspace for members, announcements, events, tasks, hiring, and day-to-day coordination.',
  },
  {
    label: 'Trust',
    accent: 'neutral' as const,
    title: 'Trust through roles and permissions',
    description:
      'Role-based access helps clubs give the right people control without exposing every setting to every member.',
  },
];

const accentBar = {
  red: 'bg-[#E51937]',
  gold: 'bg-[#FFC429]',
  neutral: 'bg-[rgba(255,255,255,0.22)]',
};

export default function LearningSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-3">
            Built around real club workflows
          </p>
          <h2 className="text-[2.1rem] sm:text-[2.75rem] font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
            Designed for the way student clubs actually run.
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Gryph ClubConnect is shaped around the problems students and club leaders deal with every semester: discovery, coordination, ownership, and trust.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6" staggerDelay={0.1}>
          {buildingAround.map((item) => (
            <StaggerItem key={item.title}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[12px] border border-[#222222] bg-[#131313] p-6 sm:p-7">
                <span className={`absolute inset-x-0 top-0 h-[2px] ${accentBar[item.accent]}`} aria-hidden />
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777]">
                  {item.label}
                </p>
                <h3 className="mb-3 font-sans text-lg font-bold leading-snug text-[#F5F5F5]">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#9CA3AF]">
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
