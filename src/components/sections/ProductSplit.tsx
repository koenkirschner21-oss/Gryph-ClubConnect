import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from '../ui/AnimatedSection';

const audiences = [
  {
    id: 'for-students',
    to: '/for-students',
    accent: 'red' as const,
    title: 'For students',
    body: 'Discover clubs and events, explore opportunities, apply for roles, and keep track of your involvement from one dashboard.',
    features: [
      'Explore clubs and opportunities',
      'Discover and RSVP to events',
      'Apply for open roles',
      'Track clubs, tasks, and applications',
    ],
    cta: 'Explore student features',
  },
  {
    to: '/for-clubs',
    accent: 'gold' as const,
    title: 'For club leaders',
    body: 'Manage your club’s members, events, communication, and day-to-day work from one organized workspace.',
    features: [
      'Manage events and RSVPs',
      'Assign tasks and run meetings',
      'Review applicants and members',
      'Control roles, permissions, and club access',
    ],
    cta: 'Explore club leader tools',
  },
];

const accentStyles = {
  red: {
    bar: 'bg-[#E51937]',
    bullet: 'bg-[#E51937]',
    hover:
      'hover:border-[#E51937]/50 hover:bg-[#161616] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(229,25,55,0.12)]',
    cta: 'text-[#E51937] group-hover:text-[#FF6B7D]',
  },
  gold: {
    bar: 'bg-[#FFC429]',
    bullet: 'bg-[#FFC429]',
    hover:
      'hover:border-[#FFC429]/45 hover:bg-[#161616] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,196,41,0.1)]',
    cta: 'text-[#FFC429] group-hover:text-[#FFD45C]',
  },
};

export default function ProductSplit() {
  return (
    <section className="border-t border-[#222222] bg-[#111111] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 max-w-3xl sm:mb-12">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
            The platform
          </p>

          <h2 className="mb-4 font-sans text-[2.25rem] font-extrabold leading-tight text-[#F5F5F5] sm:text-[3rem]">
            Built for both sides of club life.
          </h2>

          <p className="text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
            Students need a clear way to discover what is happening on campus.
            Club leaders need one place to run the work behind it.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2"
          staggerDelay={0.1}
        >
          {audiences.map((audience) => {
            const styles = accentStyles[audience.accent];

            return (
              <StaggerItem key={audience.title}>
                <Link
                  to={audience.to}
                  id={audience.id}
                  className={`group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[14px] border border-[#222222] bg-[#131313] p-8 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E51937] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] sm:p-9 ${styles.hover}`}
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-[2px] ${styles.bar}`}
                    aria-hidden
                  />

                  <h3 className="mb-3 font-sans text-[1.5rem] font-bold tracking-tight text-[#F5F5F5] sm:text-[1.75rem]">
                    {audience.title}
                  </h3>

                  <p className="mb-6 max-w-md text-[15px] leading-relaxed text-[#9CA3AF] sm:text-base">
                    {audience.body}
                  </p>

                  <ul className="mb-8 flex-1 space-y-2.5">
                    {audience.features.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[14px] text-[#F5F5F5]"
                      >
                        <span
                          className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${styles.bullet}`}
                        />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-auto inline-flex items-center gap-1.5 text-[15px] font-semibold ${styles.cta}`}
                  >
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
