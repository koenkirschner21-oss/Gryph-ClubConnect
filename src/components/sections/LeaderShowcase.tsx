import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import MockupImage from '../mockups/MockupImage';
import { goToSection, ONBOARD_CLUB_ID, setClubFormInterest } from '../../lib/cta';

const workflowSteps = [
  {
    step: '01',
    title: 'Start in the Command Center',
    description:
      'See pending actions, upcoming activity, open tasks, applications, and quick actions in one overview.',
  },
  {
    step: '02',
    title: 'Keep members updated',
    description: 'Post announcements and keep important club updates visible beyond group chats.',
  },
  {
    step: '03',
    title: 'Plan events and track sign-ups',
    description:
      'Create events, manage RSVPs, review sign-ups, and keep planning tasks connected.',
  },
  {
    step: '04',
    title: 'Assign and review tasks',
    description: 'Set ownership, due dates, priorities, and task status across your exec team.',
  },
  {
    step: '05',
    title: 'Manage members and roles',
    description:
      'View members, invite people, assign roles, and understand how your team is structured.',
  },
  {
    step: '06',
    title: 'Review hiring and applications',
    description:
      'Post open roles, review applicants, and move candidates through a clear status pipeline.',
  },
  {
    step: '07',
    title: 'Control permissions',
    description:
      'Give the right people access without giving every member the same controls.',
  },
];

export default function LeaderShowcase() {
  const navigate = useNavigate();

  const handleOnboard = () => {
    setClubFormInterest('Onboard my club');
    goToSection(ONBOARD_CLUB_ID, { navigate, pathname: '/' });
  };

  return (
    <section id="for-clubs-home" className="py-16 sm:py-20 bg-[#111111] scroll-mt-24 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-3">
            For club leaders
          </p>
          <h2 className="text-[2.1rem] sm:text-[2.75rem] font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
            Run events, members, tasks, and hiring from one workspace.
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Gryph ClubConnect gives club leaders a central workspace to manage the moving pieces of club life without spreading updates, planning, and responsibilities across group chats, spreadsheets, forms, and shared drives.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-14 items-start">
          <AnimatedSection delay={0.05} className="order-1">
            <div className="rounded-[12px] border border-[#242424] bg-[#131313] p-2 sm:p-2.5 shadow-[0_16px_48px_rgba(0,0,0,0.45)]">
              <MockupImage
                name="workspace"
                alt="Gryph ClubConnect club command center"
                className="!shadow-none !border-0 rounded-[10px]"
              />
            </div>
            <div className="mt-4 px-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFC429] mb-1.5">
                Club leader Command Center
              </p>
              <p className="text-[#777777] text-sm leading-relaxed max-w-md">
                Review pending actions, tasks, events, members, and hiring from one workspace.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="order-2">
            <ol className="space-y-0 border border-[#222222] rounded-[12px] bg-[#131313] overflow-hidden">
              {workflowSteps.map((item, index) => (
                <li
                  key={item.step}
                  className={`flex gap-4 px-5 py-3.5 sm:px-6 sm:py-4 ${
                    index < workflowSteps.length - 1 ? 'border-b border-[#222222]' : ''
                  }`}
                >
                  <span className="shrink-0 w-8 text-[13px] font-semibold tabular-nums text-[#FFC429] pt-0.5">
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
            <button
              type="button"
              onClick={handleOnboard}
              className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#FFC429] hover:text-[#FFD45C] transition-colors"
            >
              Onboard Your Club
              <ArrowRight size={16} />
            </button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
