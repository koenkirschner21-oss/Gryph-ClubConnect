import { Link } from 'react-router-dom';
import { ArrowRight, Compass, LayoutGrid } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';

const audiences = [
  {
    id: 'for-students',
    to: '/features',
    accent: 'red' as const,
    label: 'For students',
    title: 'For students',
    body: 'Find clubs, discover events, apply for roles, and keep track of the groups you care about from one account.',
    features: ['Explore clubs', 'Discover events', 'Apply for roles', 'Track involvement'],
    cta: 'Explore student features',
    icon: Compass,
  },
  {
    to: '/for-clubs',
    accent: 'gold' as const,
    label: 'For club leaders',
    title: 'For club leaders',
    body: 'Coordinate the work behind the club: members, announcements, events, tasks, hiring, and permissions.',
    features: ['Manage operations', 'Review requests', 'Assign tasks', 'Coordinate events'],
    cta: 'Explore club leader tools',
    icon: LayoutGrid,
  },
];

const accentStyles = {
  red: {
    bar: 'bg-[#E51937]',
    iconWrap: 'bg-[rgba(229,25,55,0.12)] border-[#E51937]/30 text-[#E51937]',
    chip: 'border-[#E51937]/20 bg-[rgba(229,25,55,0.08)] text-[#F5F5F5]',
    hover:
      'hover:border-[#E51937]/50 hover:bg-[#161616] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(229,25,55,0.12)]',
    cta: 'text-[#E51937] group-hover:text-[#FF6B7D]',
  },
  gold: {
    bar: 'bg-[#FFC429]',
    iconWrap: 'bg-[rgba(255,196,41,0.12)] border-[#FFC429]/30 text-[#FFC429]',
    chip: 'border-[#FFC429]/20 bg-[rgba(255,196,41,0.08)] text-[#F5F5F5]',
    hover:
      'hover:border-[#FFC429]/45 hover:bg-[#161616] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,196,41,0.1)]',
    cta: 'text-[#FFC429] group-hover:text-[#FFD45C]',
  },
};

export default function ProductSplit() {
  return (
    <section className="py-16 sm:py-20 bg-[#111111] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
            The platform
          </p>
          <h2 className="text-[2.25rem] sm:text-[3rem] font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
            Built for both sides of club life.
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Students need a clear way to discover what is happening on campus. Club leaders need one place to run the work behind it.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" staggerDelay={0.1}>
          {audiences.map((audience) => {
            const styles = accentStyles[audience.accent];
            const Icon = audience.icon;
            return (
              <StaggerItem key={audience.title}>
                <Link
                  to={audience.to}
                  id={audience.id}
                  className={`group relative flex h-full min-h-[320px] sm:min-h-[360px] flex-col overflow-hidden rounded-[14px] border border-[#222222] bg-[#131313] p-8 sm:p-10 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E51937] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] ${styles.hover}`}
                >
                  <span className={`absolute inset-x-0 top-0 h-[2px] ${styles.bar}`} aria-hidden />

                  <div className="flex items-center gap-3.5 mb-6">
                    <div className={`w-12 h-12 rounded-[10px] border flex items-center justify-center ${styles.iconWrap}`}>
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777]">
                      {audience.label}
                    </span>
                  </div>

                  <h3 className="text-[1.75rem] sm:text-[2rem] font-bold text-[#F5F5F5] font-sans mb-4 tracking-tight">
                    {audience.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-base sm:text-[17px] leading-relaxed mb-8 max-w-md">
                    {audience.body}
                  </p>

                  <div className="flex flex-wrap gap-2.5 mb-10">
                    {audience.features.map((item) => (
                      <span
                        key={item}
                        className={`inline-flex rounded-[8px] border px-3 py-2 text-[13px] sm:text-sm ${styles.chip}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className={`mt-auto inline-flex items-center gap-1.5 text-[15px] font-semibold ${styles.cta}`}>
                    {audience.cta}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
