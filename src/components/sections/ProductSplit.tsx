import { Link } from 'react-router-dom';
import { ArrowRight, Compass, LayoutGrid } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';

const audiences = [
  {
    id: 'for-students',
    to: '/for-students',
    accent: 'red' as const,
    label: 'For students',
    title: 'For students',
    body: 'Discover clubs, browse events, view public club profiles, apply for roles, and track your involvement from one dashboard.',
    features: [
      'Explore clubs and profiles',
      'Sign up for events',
      'Apply for roles',
      'Track clubs, tasks, and applications',
    ],
    cta: 'Explore student features',
    icon: Compass,
  },
  {
    to: '/for-clubs',
    accent: 'gold' as const,
    label: 'For club leaders',
    title: 'For club leaders',
    body: 'Run the work behind your club with tools for events, RSVPs, announcements, tasks, meetings, documents, members, hiring, analytics, and permissions.',
    features: [
      'Manage events and RSVPs',
      'Assign tasks and host meetings',
      'Review applicants and members',
      'Control roles, analytics, and permissions',
    ],
    cta: 'Explore club leader tools',
    icon: LayoutGrid,
  },
];

const accentStyles = {
  red: {
    bar: 'bg-[#E51937]',
    iconWrap: 'bg-[rgba(229,25,55,0.12)] border-[#E51937]/30 text-[#E51937]',
    bullet: 'bg-[#E51937]',
    hover:
      'hover:border-[#E51937]/50 hover:bg-[#161616] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(229,25,55,0.12)]',
    cta: 'text-[#E51937] group-hover:text-[#FF6B7D]',
  },
  gold: {
    bar: 'bg-[#FFC429]',
    iconWrap: 'bg-[rgba(255,196,41,0.12)] border-[#FFC429]/30 text-[#FFC429]',
    bullet: 'bg-[#FFC429]',
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
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[14px] border border-[#222222] bg-[#131313] p-8 sm:p-9 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E51937] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] ${styles.hover}`}
                >
                  <span className={`absolute inset-x-0 top-0 h-[2px] ${styles.bar}`} aria-hidden />

                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-[10px] border flex items-center justify-center ${styles.iconWrap}`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777]">
                      {audience.label}
                    </span>
                  </div>

                  <h3 className="text-[1.5rem] sm:text-[1.75rem] font-bold text-[#F5F5F5] font-sans mb-3 tracking-tight">
                    {audience.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-[15px] sm:text-base leading-relaxed mb-6 max-w-md">
                    {audience.body}
                  </p>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {audience.features.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[14px] text-[#F5F5F5]">
                        <span className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${styles.bullet}`} />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

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
