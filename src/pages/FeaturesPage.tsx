import { useNavigate } from 'react-router-dom';
import {
  Compass,
  Building2,
  Calendar,
  Briefcase,
  LayoutDashboard,
  Bookmark,
  LayoutGrid,
  Megaphone,
  CalendarPlus,
  CheckSquare,
  Users,
  UserCheck,
  Shield,
  MessageSquare,
  FolderOpen,
  type LucideIcon,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { studentFeatures, leaderFeatures } from '../data/index';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import {
  DashboardMock,
  WorkspaceMock,
  HiringMock,
  ExploreMock,
  EventsMock,
  ChatMock,
  TasksMock,
  PermissionsMock,
} from '../components/mockups/ProductMocks';
import {
  goToSection,
  ONBOARD_CLUB_ID,
  REQUEST_DEMO_ID,
  STUDENT_ACCESS_ID,
  setClubFormInterest,
} from '../lib/cta';

const studentIcons: Record<string, LucideIcon> = {
  Compass,
  Building2,
  Calendar,
  Briefcase,
  LayoutDashboard,
  Bookmark,
};

const leaderIcons: Record<string, LucideIcon> = {
  LayoutGrid,
  Megaphone,
  MessageSquare,
  CalendarPlus,
  CheckSquare,
  Users,
  UserCheck,
  Shield,
};

const overviewFeatures: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Compass,
    title: 'Club Discovery',
    description: 'Browse and search clubs by interest, category, and activity.',
  },
  {
    icon: Building2,
    title: 'Club Profiles',
    description: 'Public club pages with events, roles, and how to get involved.',
  },
  {
    icon: Calendar,
    title: 'Events & Sign-Ups',
    description: 'Discover events, register, and manage RSVPs from one place.',
  },
  {
    icon: Megaphone,
    title: 'Announcements',
    description: 'Post club updates members can find later — not buried in chats.',
  },
  {
    icon: MessageSquare,
    title: 'Chat & Messaging',
    description: 'Club chat and DMs with reactions and replies, without leaving the platform.',
  },
  {
    icon: CheckSquare,
    title: 'Tasks & Assignments',
    description: 'Assign work, set due dates, and keep ownership clear.',
  },
  {
    icon: Briefcase,
    title: 'Hiring & Applications',
    description: 'Open roles, review applicants, and track status through a pipeline.',
  },
  {
    icon: Users,
    title: 'Members & Org Chart',
    description: 'See who is in the club and how leadership is structured.',
  },
  {
    icon: Shield,
    title: 'Roles & Permissions',
    description: 'Give President, executives, and members the right level of access.',
  },
  {
    icon: FolderOpen,
    title: 'Documents & Resources',
    description: 'Keep shared club files and resources where members can find them.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard',
    description: 'Upcoming events, applications, tasks, and updates at a glance.',
  },
];

const flowSteps = [
  'A student discovers a club',
  'They view the club profile',
  'They sign up for an event or apply for a role',
  'Club leaders review interest, applications, and members',
  'The club manages events, tasks, chat, announcements, and permissions',
  'Everyone stays organized from one platform',
];

const comparisons = [
  { instead: 'Instagram posts', helps: 'Share discoverable club updates' },
  { instead: 'Group chats', helps: 'Keep announcements, chat, and tasks organized in one place' },
  { instead: 'Google Forms', helps: 'Collect event sign-ups and applications' },
  { instead: 'Spreadsheets', helps: 'Track members, roles, tasks, and hiring' },
  { instead: 'Random links', helps: 'Keep club info in one profile' },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  accent = 'red',
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: 'red' | 'gold';
}) {
  const iconWrap =
    accent === 'red'
      ? 'bg-[rgba(229,25,55,0.12)] border-[#E51937]/25 text-[#E51937]'
      : 'bg-[rgba(255,196,41,0.12)] border-[#FFC429]/25 text-[#FFC429]';

  return (
    <div className="bg-[#131313] border border-[#222222] rounded-[12px] p-5 h-full">
      <div className={`w-9 h-9 rounded-[8px] border flex items-center justify-center mb-3 ${iconWrap}`}>
        <Icon size={18} />
      </div>
      <h3 className="text-[#F5F5F5] font-semibold mb-1.5">{title}</h3>
      <p className="text-[#9CA3AF] text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function DeepDive({
  eyebrow,
  eyebrowColor = 'text-[#E51937]',
  title,
  copy,
  covers,
  mock,
  reverse = false,
  dark = true,
}: {
  eyebrow: string;
  eyebrowColor?: string;
  title: string;
  copy: string;
  covers: string[];
  mock: ReactNode;
  reverse?: boolean;
  dark?: boolean;
}) {
  return (
    <section className={`py-20 border-t border-[#222222] ${dark ? 'bg-[#0B0B0B]' : 'bg-[#111111]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className={reverse ? 'order-1 lg:order-2' : ''}>
            <span className={`text-sm uppercase tracking-wider mb-3 block ${eyebrowColor}`}>{eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed mb-6">{copy}</p>
            <ul className="space-y-2">
              {covers.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#F5F5F5]">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#E51937]" />
                  <span className="text-[#9CA3AF] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className={reverse ? 'order-2 lg:order-1' : ''}>
            {mock}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default function FeaturesPage() {
  const navigate = useNavigate();

  const handleOnboard = () => {
    setClubFormInterest('Onboard my club');
    goToSection(ONBOARD_CLUB_ID, { navigate, pathname: '/features' });
  };

  const handleDemo = () => {
    setClubFormInterest('Request a demo');
    goToSection(REQUEST_DEMO_ID, { navigate, pathname: '/features' });
  };

  const handleStudentAccess = () => {
    goToSection(STUDENT_ACCESS_ID, { navigate, pathname: '/features' });
  };

  return (
    <div className="page-transition">
      {/* 1. Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-[#0B0B0B]">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#E51937] opacity-[0.04] blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans bg-[rgba(229,25,55,0.12)] text-[#E51937] border border-[#E51937]/20 mb-6">
              Product features
            </span>
            <h1
              className="font-sans font-extrabold text-[#F5F5F5] mb-5 leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
            >
              Real workflows for
              <br />
              <span className="bg-gradient-to-r from-[#E51937] to-[#FFC429] bg-clip-text text-transparent">
                campus club life
              </span>
            </h1>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed">
              Gryph ClubConnect helps students discover clubs and opportunities while giving club leaders one workspace for members, announcements, events, chat, tasks, hiring, and permissions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. Feature Overview Grid */}
      <section className="py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 max-w-3xl">
            <span className="text-sm text-[#E51937] uppercase tracking-wider mb-3 block">Overview</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">
              What Gryph ClubConnect covers
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              From discovery to day-to-day club operations — the main workflows in one platform.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.04}>
            {overviewFeatures.map((f) => (
              <StaggerItem key={f.title}>
                <FeatureCard icon={f.icon} title={f.title} description={f.description} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. For Students */}
      <section className="py-20 bg-[#0B0B0B] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <AnimatedSection>
              <span className="text-sm text-[#E51937] uppercase tracking-wider mb-3 block">For students</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">
                Find your place on campus
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed">
                Explore clubs, discover events, apply for roles, and keep track of involvement from a personal dashboard.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <DashboardMock compact />
            </AnimatedSection>
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.05}>
            {studentFeatures.map((f) => {
              const Icon = studentIcons[f.icon] ?? Compass;
              return (
                <StaggerItem key={f.title}>
                  <FeatureCard icon={Icon} title={f.title} description={f.description} accent="red" />
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. For Club Leaders */}
      <section className="py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14 max-w-3xl">
            <span className="text-sm text-[#FFC429] uppercase tracking-wider mb-3 block">For club leaders</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">
              Tools for the people running the club
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Manage announcements, chat, events, tasks, members, hiring, and permissions without scattering work across chats and forms.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.05}>
            {leaderFeatures.map((f) => {
              const Icon = leaderIcons[f.icon] ?? LayoutGrid;
              return (
                <StaggerItem key={f.title}>
                  <FeatureCard icon={Icon} title={f.title} description={f.description} accent="gold" />
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Deep Dive: Club Discovery */}
      <DeepDive
        eyebrow="Deep dive · Discovery"
        title="Discover clubs without hunting through scattered links."
        copy="Students can browse clubs, search by category or interest, view public profiles, and find opportunities to get involved."
        covers={[
          'Search by club name, category, or interest',
          'Browse club cards with clear categories',
          'Open public profiles to see what a club does',
          'Save or follow clubs you want to keep an eye on',
        ]}
        mock={<ExploreMock />}
        dark
      />

      {/* 6. Deep Dive: Events & Sign-Ups */}
      <DeepDive
        eyebrow="Deep dive · Events"
        eyebrowColor="text-[#FFC429]"
        title="Make events easier to find, manage, and attend."
        copy="Students can discover events and sign up, while club leaders manage RSVPs, sign-up questions, and attendance from one place."
        covers={[
          'Event discovery across campus clubs',
          'RSVP and sign-up flows for students',
          'Custom sign-up questions for club leaders',
          'Attendee lists and event management in one view',
        ]}
        mock={<EventsMock />}
        reverse
        dark={false}
      />

      {/* 7. Deep Dive: Club Workspace */}
      <DeepDive
        eyebrow="Deep dive · Workspace"
        title="Run your club from one workspace."
        copy="The Command Center gives leaders a clear overview of pending actions, upcoming activity, quick actions, and club setup progress."
        covers={[
          'Command Center overview',
          'Pending actions and requests',
          'Upcoming activity at a glance',
          'Quick actions for common work',
          'Club setup checklist',
        ]}
        mock={<WorkspaceMock />}
        dark
      />

      {/* 8. Deep Dive: Chat & Messaging */}
      <DeepDive
        eyebrow="Deep dive · Chat"
        eyebrowColor="text-[#FFC429]"
        title="Keep conversations where the work happens."
        copy="Club-level chat, direct messages, reactions, and replies keep communication organized without splintering into five different group chats."
        covers={[
          'Club chat for member-wide updates and discussion',
          'Direct messages between members and execs',
          'Reactions and reply-to for clearer threads',
          'Add members to group chats when the team grows',
        ]}
        mock={<ChatMock />}
        reverse
        dark={false}
      />

      {/* 9. Deep Dive: Tasks & Ownership */}
      <DeepDive
        eyebrow="Deep dive · Tasks"
        title="Keep ownership clear."
        copy="Assign tasks, set due dates, review progress, and avoid work falling through the cracks."
        covers={[
          'Assigned to me and assigned by me views',
          'Due dates and priority on every task',
          'Review states for work that needs a second look',
          'Progress tracking across To do, In progress, and Needs review',
        ]}
        mock={<TasksMock />}
        dark
      />

      {/* 10. Deep Dive: Hiring & Applications */}
      <section className="py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm text-[#E51937] uppercase tracking-wider mb-3 block">
              Deep dive · Hiring
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">
              From discovery to decisions
            </h2>
            <p className="text-[#9CA3AF] max-w-xl mx-auto">
              Hiring and applicant review is one example of how club leaders can keep opportunities organized — from open roles to status pipeline.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="max-w-3xl mx-auto">
            <HiringMock />
          </AnimatedSection>
        </div>
      </section>

      {/* 11. Deep Dive: Roles & Permissions */}
      <DeepDive
        eyebrow="Deep dive · Permissions"
        eyebrowColor="text-[#FFC429]"
        title="Give people the right level of access."
        copy="President/Co-President, Managerial Executive, Executive, and General Member can each have different controls so clubs stay organized and secure."
        covers={[
          'Four-tier role structure matched to how clubs actually run',
          'Permission matrix for manage, hire, events, chat, and more',
          'Access control without giving every member the same settings',
          'Clear ownership of who can change club configuration',
        ]}
        mock={<PermissionsMock />}
        reverse
        dark
      />

      {/* 12. How It Works Together */}
      <section className="py-20 bg-[#0B0B0B] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl">
            <span className="text-sm text-[#E51937] uppercase tracking-wider mb-3 block">Connected workflows</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">
              From discovery to club operations, everything connects.
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <ol className="rounded-[12px] border border-[#222222] bg-[#131313] overflow-hidden max-w-3xl">
              {flowSteps.map((step, index) => (
                <li
                  key={step}
                  className={`flex gap-4 px-5 py-5 sm:px-6 sm:py-5 ${
                    index < flowSteps.length - 1 ? 'border-b border-[#222222]' : ''
                  }`}
                >
                  <span className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full border border-[#E51937]/35 bg-[rgba(229,25,55,0.12)] text-[12px] font-bold tabular-nums text-[#E51937]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="pt-1.5 text-[#F5F5F5] text-[15px] sm:text-base leading-snug">{step}</p>
                </li>
              ))}
            </ol>
          </AnimatedSection>
        </div>
      </section>

      {/* 13. Comparison Section */}
      <section className="py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl">
            <span className="text-sm text-[#FFC429] uppercase tracking-wider mb-3 block">Compared</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">
              Built to replace the scattered club stack.
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="rounded-[12px] border border-[#222222] bg-[#131313] overflow-hidden max-w-4xl">
              <div className="grid grid-cols-2 gap-0 border-b border-[#222222] bg-[#0B0B0B]">
                <div className="px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777]">
                  Instead of using
                </div>
                <div className="px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777] border-l border-[#222222]">
                  Gryph ClubConnect helps clubs
                </div>
              </div>
              {comparisons.map((row) => (
                <div
                  key={row.instead}
                  className="grid grid-cols-1 sm:grid-cols-2 border-b border-[#222222] last:border-0"
                >
                  <div className="px-5 py-4 text-sm text-[#9CA3AF]">{row.instead}</div>
                  <div className="px-5 py-4 text-sm text-[#F5F5F5] sm:border-l border-[#222222] flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#E51937]" />
                    {row.helps}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 14. Final CTA */}
      <section className="relative py-20 sm:py-24 overflow-hidden bg-[#0B0B0B] border-t border-[#222222]">
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">
              Ready to see how it works for your club?
            </h2>
            <p className="text-[#9CA3AF] text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Gryph ClubConnect is onboarding UofG clubs ahead of launch. Request a demo, see the workflows, and get your club ready for a cleaner way to manage members, events, chat, tasks, hiring, and announcements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="red" size="lg" onClick={handleOnboard}>
                Onboard Your Club
              </Button>
              <Button variant="ghost" size="lg" onClick={handleDemo}>
                Request a Demo
              </Button>
            </div>
            <button
              type="button"
              onClick={handleStudentAccess}
              className="mt-6 text-sm text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors underline underline-offset-2"
            >
              Student? Request access to explore clubs and events.
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
