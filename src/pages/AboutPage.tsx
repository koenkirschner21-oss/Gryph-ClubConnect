import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckSquare,
  Compass,
  FileText,
  LayoutDashboard,
  Search,
  ShieldCheck,
  UserRoundCheck,
  Users,
} from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { goToDemoForm } from '../lib/cta';

const memberExperience = [
  'Upcoming activity was hard to see',
  'Updates lived across different places',
  'Tasks and responsibilities were easy to lose track of',
  'Involvement was spread across multiple clubs',
];

const leadershipPerspective = [
  'People and responsibilities had to be coordinated',
  'Events, meetings, and follow-ups needed structure',
  'Applications, documents, and access had to be managed',
  'The team needed one shared source of truth',
];

const managementFeatures = [
  { label: 'Command Center', icon: LayoutDashboard },
  { label: 'Members and roles', icon: Users },
  { label: 'Events and tasks', icon: CalendarDays },
  { label: 'Meetings and documents', icon: FileText },
  { label: 'Hiring and analytics', icon: BriefcaseBusiness },
  { label: 'Permissions and reporting', icon: ShieldCheck },
];

const discoveryFeatures = [
  { label: 'Explore clubs', icon: Search },
  { label: 'View public profiles', icon: Compass },
  { label: 'Discover events', icon: CalendarDays },
  { label: 'Apply for positions', icon: BriefcaseBusiness },
  { label: 'Track involvement', icon: CheckSquare },
];

export default function AboutPage() {
  const navigate = useNavigate();

  const handleOnboard = () => {
    goToDemoForm({
      interest: 'Onboard my club',
      navigate,
      pathname: '/about',
    });
  };

  const handleDemo = () => {
    goToDemoForm({
      interest: 'Request a demo',
      navigate,
      pathname: '/about',
    });
  };

  return (
    <div className="page-transition">
      <section className="relative overflow-hidden bg-[#0B0B0B] pt-28 pb-14 sm:pt-32 sm:pb-16">
        <div className="pointer-events-none absolute -top-40 right-0 h-[540px] w-[540px] rounded-full bg-[#E51937] opacity-[0.035] blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
              About Gryph ClubConnect
            </p>
            <h1
              className="mb-5 font-sans font-extrabold leading-tight text-[#F5F5F5]"
              style={{ fontSize: 'clamp(2.35rem, 4.4vw, 3.65rem)' }}
            >
              Built from the reality of running student clubs.
            </h1>
            <p className="mb-4 max-w-2xl text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
              Gryph ClubConnect began with a simple realization: if staying organized as a club member is difficult, managing the people, events, tasks, meetings, and decisions behind a club must be even harder.
            </p>
            <p className="mb-7 max-w-2xl text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
              The platform is being built to give club teams a clearer way to run their operations while helping students discover where they can get involved.
            </p>
            <div className="mb-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button
                variant="red"
                size="lg"
                onClick={handleOnboard}
                className="w-full sm:w-auto"
              >
                Get Your Club Started
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={handleDemo}
                className="w-full sm:w-auto"
              >
                Request a Demo
              </Button>
            </div>
            <p className="text-[13px] text-[#777777]">
              Independent from the University of Guelph.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-[#222222] bg-[#111111] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <AnimatedSection>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
                The story behind it
              </p>
              <h2 className="mb-5 font-sans text-2xl font-extrabold leading-tight text-[#F5F5F5] sm:text-3xl">
                The problem became clearer from both sides of club life.
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-[#9CA3AF]">
                <p>
                  Gryph ClubConnect started from my own experience being involved in multiple student clubs at the University of Guelph. As a general member, I often did not know what was coming up, which tasks I was responsible for, where updates were being shared, or how to keep track of everything across different clubs.
                </p>
                <p>
                  As I moved into leadership roles—including Web Operations Manager for the Lang Students&apos; Association and a marketing-management role with GEMA—the problem became even more obvious. If members with limited responsibilities were already confused, the executives coordinating events, tasks, meetings, applications, documents, and people were carrying an even larger organizational burden.
                </p>
                <p>
                  That became the foundation for Gryph ClubConnect: build the club-management system first, then connect it to discovery so students can find clubs, events, and opportunities through the same platform.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="space-y-5">
                <div className="rounded-[14px] border border-white/[0.08] bg-[#131313] p-6 sm:p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#E51937]/30 bg-[rgba(229,25,55,0.1)] text-[#E51937]">
                      <UserRoundCheck size={18} />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777]">
                        First
                      </p>
                      <h3 className="text-lg font-semibold text-[#F5F5F5]">
                        Member experience
                      </h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {memberExperience.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#9CA3AF]">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#E51937]" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="rotate-90 text-[#555555]" size={18} />
                </div>

                <div className="rounded-[14px] border border-white/[0.08] bg-[#0B0B0B] p-6 sm:p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#FFC429]/30 bg-[rgba(255,196,41,0.1)] text-[#FFC429]">
                      <BriefcaseBusiness size={18} />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777]">
                        Then
                      </p>
                      <h3 className="text-lg font-semibold text-[#F5F5F5]">
                        Leadership perspective
                      </h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {leadershipPerspective.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#9CA3AF]">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFC429]" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-t border-[#222222] bg-[#0B0B0B] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFC429] sm:text-xs">
              What we are building
            </p>
            <h2 className="mb-4 font-sans text-2xl font-extrabold leading-tight text-[#F5F5F5] sm:text-3xl">
              A club-management platform that also makes involvement easier to discover.
            </h2>
            <p className="text-base leading-relaxed text-[#9CA3AF]">
              The core of Gryph ClubConnect is the club workspace: members, tasks, events, meetings, hiring, documents, permissions, and reporting in one place. The discovery experience connects students to those clubs, events, and opportunities instead of leaving them scattered across separate pages and social posts.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <AnimatedSection>
              <div className="relative h-full overflow-hidden rounded-[14px] border border-[#FFC429]/20 bg-[#131313] p-6 sm:p-7">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-[#FFC429]" />
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#FFC429]/30 bg-[rgba(255,196,41,0.1)] text-[#FFC429]">
                    <LayoutDashboard size={18} />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFC429]">
                      Core focus
                    </p>
                    <h3 className="text-xl font-bold text-[#F5F5F5]">
                      Club management
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {managementFeatures.map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-[10px] border border-white/[0.07] bg-[#0B0B0B] px-4 py-3"
                    >
                      <Icon size={16} className="shrink-0 text-[#FFC429]" />
                      <span className="text-sm font-medium text-[#F5F5F5]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.06}>
              <div className="relative h-full overflow-hidden rounded-[14px] border border-[#E51937]/20 bg-[#111111] p-6 sm:p-7">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-[#E51937]" />
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#E51937]/30 bg-[rgba(229,25,55,0.1)] text-[#E51937]">
                    <Compass size={18} />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E51937]">
                      Connected experience
                    </p>
                    <h3 className="text-xl font-bold text-[#F5F5F5]">
                      Student discovery
                    </h3>
                  </div>
                </div>
                <div className="space-y-3">
                  {discoveryFeatures.map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-[10px] border border-white/[0.07] bg-[#0B0B0B] px-4 py-3"
                    >
                      <Icon size={16} className="shrink-0 text-[#E51937]" />
                      <span className="text-sm font-medium text-[#F5F5F5]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-t border-[#222222] bg-[#111111] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-[16px] border border-white/[0.08] bg-[#131313] p-7 text-center sm:p-9">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFC429] sm:text-xs">
                Independent platform
              </p>
              <h2 className="mb-4 font-sans text-2xl font-extrabold text-[#F5F5F5] sm:text-3xl">
                Student-built and independent from the University of Guelph.
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-[#9CA3AF]">
                Gryph ClubConnect is not officially affiliated with, endorsed by, or operated by the University of Guelph. It is an independent student-built platform shaped by real experience in student clubs and developed with feedback from students and club leaders.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {['Independent', 'Student-built', 'Early access'].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border border-white/[0.08] bg-[#0B0B0B] px-3.5 py-1.5 text-[12px] font-medium text-[#9CA3AF]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[#222222] bg-[#0B0B0B] py-16 sm:py-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E51937] opacity-[0.05] blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <AnimatedSection>
            <h2 className="mb-4 font-sans text-3xl font-extrabold text-[#F5F5F5] sm:text-4xl">
              See how Gryph ClubConnect could support your club.
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-[#9CA3AF]">
              Request a walkthrough focused on your team&apos;s current workflows or get your club ready for early access.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              <Button
                variant="red"
                size="lg"
                onClick={handleOnboard}
                className="w-full sm:w-auto"
              >
                Get Your Club Started
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={handleDemo}
                className="w-full sm:w-auto"
              >
                Request a Demo
              </Button>
            </div>
            <p className="mt-6 text-[13px] text-[#777777]">
              Submitting interest does not create an account or officially register your club.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
