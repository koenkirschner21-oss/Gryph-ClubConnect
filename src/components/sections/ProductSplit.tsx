import { Link } from 'react-router-dom';
import { ArrowRight, Compass, LayoutGrid } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';

const capabilities = [
  'Student Dashboard',
  'Explore Clubs',
  'Event Sign-Ups',
  'Role Applications',
  'Club Workspace',
  'Announcements',
  'Tasks',
  'Members',
  'Hiring',
  'Permissions',
];

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
    body: 'Manage members, announcements, events, tasks, hiring, and permissions from one organized workspace.',
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
    hover: 'hover:border-[#E51937]/45 hover:bg-[#161616]',
    cta: 'text-[#E51937] group-hover:text-[#FF6B7D]',
  },
  gold: {
    bar: 'bg-[#FFC429]',
    iconWrap: 'bg-[rgba(255,196,41,0.12)] border-[#FFC429]/30 text-[#FFC429]',
    chip: 'border-[#FFC429]/20 bg-[rgba(255,196,41,0.08)] text-[#F5F5F5]',
    hover: 'hover:border-[#FFC429]/40 hover:bg-[#161616]',
    cta: 'text-[#FFC429] group-hover:text-[#FFD45C]',
  },
};

export default function ProductSplit() {
  return (
    <section className="py-20 sm:py-24 bg-[#111111] border-t border-[#222222]">
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

        <AnimatedSection delay={0.05} className="mb-10 sm:mb-12">
          <div className="rounded-[12px] border border-[#222222] bg-[#0B0B0B] px-4 py-3.5 sm:px-5">
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#777777] font-medium mb-3">
              Product capabilities
            </p>
            <div className="flex flex-wrap gap-2">
              {capabilities.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[#131313] px-3 py-1.5 text-[12px] sm:text-[13px] text-[#9CA3AF]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6" staggerDelay={0.1}>
          {audiences.map((audience) => {
            const styles = accentStyles[audience.accent];
            const Icon = audience.icon;
            return (
              <StaggerItem key={audience.title}>
                <Link
                  to={audience.to}
                  id={audience.id}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[14px] border border-[#222222] bg-[#131313] p-7 sm:p-8 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E51937] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] ${styles.hover}`}
                >
                  <span className={`absolute inset-x-0 top-0 h-[2px] ${styles.bar}`} aria-hidden />

                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-[10px] border flex items-center justify-center ${styles.iconWrap}`}>
                      <Icon size={18} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777]">
                      {audience.label}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#F5F5F5] font-sans mb-3 tracking-tight">
                    {audience.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-[15px] leading-relaxed mb-6">
                    {audience.body}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {audience.features.map((item) => (
                      <span
                        key={item}
                        className={`inline-flex rounded-[8px] border px-2.5 py-1.5 text-[13px] ${styles.chip}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className={`mt-auto inline-flex items-center gap-1.5 text-sm font-semibold ${styles.cta}`}>
                    {audience.cta}
                    <ArrowRight
                      size={15}
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
