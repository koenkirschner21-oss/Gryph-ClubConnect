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
  'Upcoming activity was unclear',
  'Tasks were hard to track',
  'Updates were scattered',
  'Multiple clubs were difficult to manage',
];

const leadershipPerspective = [
  'Responsibilities were difficult to coordinate',
  'Events and meetings were disconnected',
  'Applications and documents were scattered',
  'There was no shared operational view',
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
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#0B0B0B] lg:min-h-[calc(100vh-4rem)]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#E51937] opacity-[0.04] blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8 lg:pt-24">
          <AnimatedSection className="flex max-w-3xl min-w-0 flex-col">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
              About Gryph ClubConnect
            </p>

            <h1
              className="mt-4 max-w-[42rem] font-sans font-extrabold leading-[1.04] tracking-tight text-[#F5F5F5] sm:mt-5"
              style={{ fontSize: 'clamp(2.2rem, 3.9vw, 3.55rem)' }}
            >
              Built from the reality of running student clubs.
            </h1>

            <p
              className="mt-4 max-w-[42rem] text-lg text-[#9CA3AF] sm:mt-5 sm:text-xl"
              style={{ lineHeight: '1.6' }}
            >
              Gryph ClubConnect began with firsthand experience trying to stay
              organized across multiple student clubs, then grew into a platform
              designed to help club teams coordinate people, work, and opportunities
              in one place.
            </p>

            <div className="mt-6 flex flex-col items-start gap-3 sm:mt-7 sm:flex-row sm:items-center">
              <Button
                variant="red"
                size="md"
                onClick={handleOnboard}
                className="w-[230px] whitespace-nowrap shadow-[0_8px_24px_rgba(229,25,55,0.22)] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Get Your Club Started
              </Button>

              <Button
                variant="ghost"
                size="md"
                onClick={handleDemo}
                className="w-[230px] whitespace-nowrap sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Request a Demo
              </Button>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-[#9CA3AF] sm:mt-6">
              <span className="inline-flex items-center gap-2">
                <span className="text-[#E51937]">✓</span>
                Student-built
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="text-[#E51937]">✓</span>
                Shaped by real club experience
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="text-[#E51937]">✓</span>
                Built for UofG club life
              </span>
            </div>

            <p className="mt-4 max-w-[42rem] text-[13px] leading-relaxed text-[#777777]">
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
                What started as member confusion became a club-management problem.
              </h2>
              <div className="space-y-5">
                <div>
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E51937]">
                    01 — Trying to stay involved
                  </p>
                  <p className="text-base leading-relaxed text-[#9CA3AF]">
                    As a member of multiple clubs, I regularly lost track of upcoming events, responsibilities, updates, and tasks. The information existed, but it was spread across too many places.
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFC429]">
                    02 — Seeing the leadership burden
                  </p>
                  <p className="text-base leading-relaxed text-[#9CA3AF]">
                    After moving into roles with the Lang Students&apos; Association and GEMA, I saw how much coordination happened behind the scenes. Executives were managing people, meetings, events, applications, documents, permissions, and follow-ups across disconnected tools.
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F5F5F5]">
                    03 — Defining the product
                  </p>
                  <p className="text-base leading-relaxed text-[#9CA3AF]">
                    That changed the direction of Gryph ClubConnect. The priority became building a stronger operating system for clubs, then connecting it to discovery so students could find and participate in the opportunities those clubs create.
                  </p>
                </div>

                <div className="rounded-[12px] border border-[#E51937]/20 bg-[rgba(229,25,55,0.06)] p-5 text-center">
                  <p className="text-sm font-semibold leading-relaxed text-[#F5F5F5]">
                    The same problem affected both sides of club life—members lacked visibility, while leaders lacked structure.
                  </p>
                </div>
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
                        “What am I supposed to be doing?”
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
                        “How are we supposed to coordinate everyone?”
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
            <p className="mb-4 text-sm font-semibold text-[#F5F5F5]">
              That insight determined what Gryph ClubConnect needed to become.
            </p>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFC429] sm:text-xs">
              What we are building
            </p>
            <h2 className="mb-4 font-sans text-2xl font-extrabold leading-tight text-[#F5F5F5] sm:text-3xl">
              A club-management platform that also makes involvement easier to discover.
            </h2>
            <p className="text-base leading-relaxed text-[#9CA3AF]">
              Gryph ClubConnect is being built around the club workspace first: members, roles, tasks, events, meetings, hiring, documents, permissions, and reporting in one place. The discovery experience then connects students directly to those clubs, events, and opportunities.
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
                    <p className="mt-1 text-sm leading-relaxed text-[#9CA3AF]">
                      Give club teams the structure needed to coordinate people and work.
                    </p>
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
                    <p className="mt-1 text-sm leading-relaxed text-[#9CA3AF]">
                      Give students a clearer way to find and act on club opportunities.
                    </p>
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

          <AnimatedSection delay={0.08} className="mt-5">
            <div className="mx-auto max-w-3xl rounded-[12px] border border-white/[0.08] bg-[#111111] px-5 py-4 text-center">
              <p className="text-sm font-semibold text-[#F5F5F5]">
                Club teams create opportunities <span className="mx-2 text-[#777777]">→</span> students discover and engage with them.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-[#222222] bg-[#111111] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-[16px] border border-white/[0.08] bg-[#131313] p-7 text-center sm:p-9">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFC429] sm:text-xs">
                How it is being built
              </p>
              <h2 className="mb-4 font-sans text-2xl font-extrabold text-[#F5F5F5] sm:text-3xl">
                Independent, student-built, and shaped by real club experience.
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-[#9CA3AF]">
                Gryph ClubConnect is being developed independently from the University of Guelph and is not officially affiliated with, endorsed by, or operated by the University. The platform is shaped by firsthand club experience and feedback from the students and leaders it is designed to support.
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
              Help shape a better way to run student clubs.
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-[#9CA3AF]">
              Request a walkthrough, share how your club currently operates, and see how Gryph ClubConnect could support your team as the platform moves toward early access.
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
