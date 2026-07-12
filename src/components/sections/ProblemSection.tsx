import { MessageCircle, ClipboardList, Calendar } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import AnimatedSection from '../ui/AnimatedSection';

const problemCards = [
  {
    label: 'Communication gap',
    title: 'Updates get scattered',
    body: 'Announcements, reminders, and important context get buried across group chats, DMs, and email.',
    icon: MessageCircle,
    accent: 'red' as const,
  },
  {
    label: 'Ownership gap',
    title: 'Tasks fall through cracks',
    body: 'Exec teams lose track of who owns what, what is overdue, and what still needs review.',
    icon: ClipboardList,
    accent: 'gold' as const,
  },
  {
    label: 'Planning gap',
    title: 'Events are harder to run than they should be',
    body: 'Sign-ups, reminders, attendance, and follow-ups often live in separate tools instead of one shared workflow.',
    icon: Calendar,
    accent: 'neutral' as const,
  },
];

const accentStyles = {
  red: {
    bar: 'bg-[#E51937]',
    icon: 'bg-[rgba(229,25,55,0.1)] border-[#E51937]/25 text-[#E51937]',
    hover: 'hover:border-[rgba(229,25,55,0.28)]',
  },
  gold: {
    bar: 'bg-[#FFC429]',
    icon: 'bg-[rgba(255,196,41,0.1)] border-[#FFC429]/25 text-[#FFC429]',
    hover: 'hover:border-[rgba(255,196,41,0.28)]',
  },
  neutral: {
    bar: 'bg-[rgba(255,255,255,0.22)]',
    icon: 'bg-[#1A1A1A] border-[#222222] text-[#9CA3AF]',
    hover: 'hover:border-[rgba(255,255,255,0.14)]',
  },
};

export default function ProblemSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-14">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
            The problem
          </p>
          <h2 className="text-[2.25rem] sm:text-[3.25rem] font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
            Club life is harder than it should be.
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Students struggle to find the right opportunities. Club leaders are left coordinating across chats, spreadsheets, forms, and email. Gryph ClubConnect brings both sides into one organized platform.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6" staggerDelay={0.1}>
          {problemCards.map((card) => {
            const Icon = card.icon;
            const styles = accentStyles[card.accent];
            return (
              <StaggerItem key={card.title}>
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-[12px] border border-[#222222] bg-[#131313] p-6 sm:p-7 transition-colors duration-200 ${styles.hover}`}
                >
                  <span className={`absolute inset-x-0 top-0 h-[2px] ${styles.bar}`} aria-hidden />

                  <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-[10px] border ${styles.icon}`}>
                    <Icon size={20} />
                  </div>

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

        <AnimatedSection delay={0.15} className="mt-10 sm:mt-12 text-center">
          <p className="mx-auto max-w-xl text-sm sm:text-[15px] leading-relaxed text-[#777777]">
            One platform for students to discover club life and for club leaders to manage it.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
