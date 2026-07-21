import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from '../ui/AnimatedSection';

const problemCards = [
  {
    label: 'Discovery',
    title: 'Students miss clubs, events, and opportunities',
    body: 'Students miss events, roles, and club updates because information is spread across Instagram group chats, Teams messages, scattered links, and phone numbers with no clear person or role attached.',
    accent: 'red' as const,
  },
  {
    label: 'Ownership',
    title: 'Work falls through the cracks',
    body: 'Exec teams lose track of event dates, who is responsible for what, which tasks are still outstanding, and what was decided in previous meetings.',
    accent: 'gold' as const,
  },
  {
    label: 'Operations',
    title: 'Club operations live across too many tools',
    body: 'Events, RSVPs, members, documents, applications, and follow-ups are managed in different places with no shared source of truth.',
    accent: 'neutral' as const,
  },
];

const accentStyles = {
  red: {
    bar: 'bg-[#E51937]',
    hover:
      'hover:border-[rgba(229,25,55,0.34)] hover:shadow-[0_12px_32px_rgba(229,25,55,0.08)]',
  },
  gold: {
    bar: 'bg-[#FFC429]',
    hover:
      'hover:border-[rgba(255,196,41,0.34)] hover:shadow-[0_12px_32px_rgba(255,196,41,0.07)]',
  },
  neutral: {
    bar: 'bg-[rgba(255,255,255,0.22)]',
    hover:
      'hover:border-[rgba(255,255,255,0.16)] hover:shadow-[0_12px_32px_rgba(255,255,255,0.035)]',
  },
};

export default function ProblemSection() {
  return (
    <section className="bg-[#0B0B0B] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center sm:mb-14">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
            The problem
          </p>

          <h2 className="mb-4 font-sans text-[2.25rem] font-extrabold leading-tight text-[#F5F5F5] sm:text-[3.25rem]">
            Club life is harder than it should be.
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
            Students struggle to find clubs, events, and roles that match their
            interests. Club leaders are left coordinating across chats,
            spreadsheets, forms, and email.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3"
          staggerDelay={0.1}
        >
          {problemCards.map((card) => {
            const styles = accentStyles[card.accent];

            return (
              <StaggerItem key={card.title}>
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-[12px] border border-[#222222] bg-[#131313] p-6 transition-all duration-200 sm:p-7 ${styles.hover}`}
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-[2px] ${styles.bar}`}
                    aria-hidden
                  />

                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777]">
                    {card.label}
                  </p>

                  <h3 className="mb-3 font-sans text-xl font-bold leading-snug text-[#F5F5F5]">
                    {card.title}
                  </h3>

                  <p className="text-[15px] leading-relaxed text-[#9CA3AF]">
                    {card.body}
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
