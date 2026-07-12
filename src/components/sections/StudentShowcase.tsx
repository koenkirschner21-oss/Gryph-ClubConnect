import AnimatedSection from '../ui/AnimatedSection';
import MockupImage from '../mockups/MockupImage';

const workflowSteps = [
  {
    step: '01',
    title: 'Explore clubs',
    description: 'Search by club name, category, interest, or keyword.',
  },
  {
    step: '02',
    title: 'View real club profiles',
    description: 'See what a club does, when it meets, upcoming events, and open roles.',
  },
  {
    step: '03',
    title: 'Sign up for events',
    description: 'Find events across campus and register without digging through Instagram posts or group chats.',
  },
  {
    step: '04',
    title: 'Apply for roles',
    description: 'Browse open club positions and track application progress from one account.',
  },
  {
    step: '05',
    title: 'Stay organized',
    description: 'Use your dashboard to see saved clubs, upcoming events, applications, and announcements.',
  },
];

export default function StudentShowcase() {
  return (
    <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-start">
          <AnimatedSection>
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
              For students
            </p>
            <h2 className="text-[2.1rem] sm:text-[2.75rem] font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight max-w-xl">
              Find clubs, events, and roles without hunting through group chats.
            </h2>
            <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl">
              Gryph ClubConnect gives students one place to discover clubs, browse upcoming events, view open roles, and keep track of the groups they care about.
            </p>

            <ol className="space-y-0 border border-[#222222] rounded-[12px] bg-[#131313] overflow-hidden">
              {workflowSteps.map((item, index) => (
                <li
                  key={item.step}
                  className={`flex gap-4 px-5 py-4 sm:px-6 sm:py-5 ${
                    index < workflowSteps.length - 1 ? 'border-b border-[#222222]' : ''
                  }`}
                >
                  <span className="shrink-0 w-8 text-[13px] font-semibold tabular-nums text-[#E51937] pt-0.5">
                    {item.step}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[#F5F5F5] font-semibold text-[15px] sm:text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#9CA3AF] text-[13px] sm:text-[14px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="lg:pt-1">
            <div className="rounded-[12px] border border-[#242424] bg-[#131313] p-2 sm:p-2.5 shadow-[0_16px_48px_rgba(0,0,0,0.45)]">
              <MockupImage
                name="explore"
                alt="Gryph ClubConnect explore clubs"
                className="!shadow-none !border-0 rounded-[10px]"
              />
            </div>
            <div className="mt-4 px-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFC429] mb-1.5">
                Student discovery workflow
              </p>
              <p className="text-[#777777] text-sm leading-relaxed max-w-md">
                Explore clubs, events, roles, and updates from one student dashboard.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
