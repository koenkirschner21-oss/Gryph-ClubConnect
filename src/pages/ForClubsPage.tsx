import { useNavigate } from 'react-router-dom';
import {
  Megaphone, CalendarPlus, CheckSquare, Users, UserCheck, Shield, ListChecks, UserPlus,
  BookOpen, Heart, Briefcase, Palette, Trophy,
} from 'lucide-react';
import { clubTypes, learningPoints } from '../data/index';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { WorkspaceMock, TasksMock, MembersMock } from '../components/mockups/ProductMocks';
import { goToSection, JOIN_TESTING_ID, REQUEST_WALKTHROUGH_ID } from '../lib/cta';

const workflows = [
  { icon: Megaphone, title: 'Announcements', description: 'Post updates your members can find later — not buried in a group chat.' },
  { icon: CalendarPlus, title: 'Events', description: 'Create events, add sign-up questions, and review who is attending.' },
  { icon: CheckSquare, title: 'Tasks', description: 'Assign work, set due dates, and keep ownership clear across your team.' },
  { icon: Users, title: 'Members', description: 'See who is in the club, their roles, and how leadership is structured.' },
  { icon: UserCheck, title: 'Hiring', description: 'Open roles, review applicants, and move people through a status pipeline.' },
  { icon: Shield, title: 'Permissions', description: 'Control who can manage settings, members, events, and hiring.' },
  { icon: ListChecks, title: 'Setup checklist', description: 'A guided checklist to get a club workspace ready for members.' },
  { icon: UserPlus, title: 'Join approvals', description: 'Review join requests and approve or decline with clear status.' },
];

const typeIcons = [BookOpen, Heart, Briefcase, Palette, Users, Trophy];

export default function ForClubsPage() {
  const navigate = useNavigate();

  return (
    <div className="page-transition">
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#0B0B0B]">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#E51937] opacity-[0.04] blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans bg-[rgba(255,196,41,0.12)] text-[#FFC429] border border-[#FFC429]/20 mb-6">
              For club leaders
            </span>
            <h1 className="font-sans font-extrabold text-[#F5F5F5] mb-5 leading-tight max-w-3xl" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Built for club leaders managing{' '}
              <span className="bg-gradient-to-r from-[#E51937] to-[#FFC429] bg-clip-text text-transparent">
                more than one moving piece.
              </span>
            </h1>
            <p className="text-[#9CA3AF] text-lg max-w-2xl leading-relaxed mb-8">
              Gryph ClubConnect gives club leaders one workspace for members, announcements, events, tasks, hiring, permissions, and join approvals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="red" size="lg" onClick={() => goToSection(JOIN_TESTING_ID, { navigate, pathname: '/for-clubs' })}>
                Join Testing
              </Button>
              <Button variant="ghost" size="lg" onClick={() => goToSection(REQUEST_WALKTHROUGH_ID, { navigate, pathname: '/for-clubs' })}>
                Request a Walkthrough
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">
                Club workspace overview
              </h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-6">
                The command center helps leaders see setup progress, pending requests, and the next actions that keep a club organized.
              </p>
              <ul className="space-y-2.5">
                {['Setup checklist', 'Join request approvals', 'Quick actions for announcements and events'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[#F5F5F5] text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFC429]" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <WorkspaceMock />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-3">
              Workflows built for exec teams
            </h2>
            <p className="text-[#9CA3AF] max-w-lg mx-auto">
              Practical operations for clubs that juggle more than one channel of work.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.05}>
            {workflows.map((w) => {
              const Icon = w.icon;
              return (
                <StaggerItem key={w.title}>
                  <div className="bg-[#131313] border border-[#222222] rounded-[12px] p-5 h-full">
                    <div className="w-9 h-9 rounded-[8px] bg-[rgba(255,196,41,0.12)] border border-[#FFC429]/25 flex items-center justify-center mb-3">
                      <Icon size={18} className="text-[#FFC429]" />
                    </div>
                    <h3 className="text-[#F5F5F5] font-semibold mb-1.5">{w.title}</h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">{w.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <p className="text-sm text-[#FFC429] uppercase tracking-wider mb-3">Tasks</p>
              <h3 className="text-2xl font-bold text-[#F5F5F5] font-sans mb-4">Keep ownership visible</h3>
              <TasksMock />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-sm text-[#E51937] uppercase tracking-wider mb-3">Members</p>
              <h3 className="text-2xl font-bold text-[#F5F5F5] font-sans mb-4">Roles, structure, and access</h3>
              <MembersMock />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-3">What we&apos;re learning</h2>
            <p className="text-[#9CA3AF]">Themes from early conversations with students and club leaders.</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.08}>
            {learningPoints.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-[#131313] border border-[#222222] rounded-[12px] p-6 h-full">
                  <h3 className="text-[#F5F5F5] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-3">Who we&apos;re building for</h2>
            <p className="text-[#9CA3AF]">Generic club types across campus — not a list of current customers.</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.05}>
            {clubTypes.map((club, i) => {
              const Icon = typeIcons[i] ?? Users;
              return (
                <StaggerItem key={club.name}>
                  <div className="bg-[#131313] border border-[#222222] rounded-[12px] p-5 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-[10px] bg-[rgba(229,25,55,0.1)] border border-[#E51937]/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#E51937]" />
                    </div>
                    <div>
                      <p className="text-[#F5F5F5] text-sm font-semibold">{club.name}</p>
                      <p className="text-[#777777] text-xs mt-1 leading-relaxed">{club.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden bg-[#0B0B0B]">
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">Join the early testing group</h2>
            <p className="text-[#9CA3AF] text-base mb-8 max-w-xl mx-auto">
              If you lead a club and want to try Gryph ClubConnect, we&apos;d like your feedback.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="red" size="lg" onClick={() => goToSection(JOIN_TESTING_ID, { navigate, pathname: '/for-clubs' })}>
                Join Testing
              </Button>
              <Button variant="ghost" size="lg" onClick={() => goToSection(REQUEST_WALKTHROUGH_ID, { navigate, pathname: '/for-clubs' })}>
                Request a Walkthrough
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
