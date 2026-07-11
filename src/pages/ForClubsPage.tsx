import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Briefcase, Palette, Heart, Trophy } from 'lucide-react';
import { clubTypes, learningPoints } from '../data/index';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { goToSection, JOIN_TESTING_ID, REQUEST_WALKTHROUGH_ID } from '../lib/cta';

const execBenefits = [
  {
    title: 'One workspace for club operations',
    description: 'Keep members, announcements, events, tasks, and hiring in one place instead of scattering work across chats and forms.',
  },
  {
    title: 'Clear ownership for your exec team',
    description: 'Assign tasks, manage roles and permissions, and review join requests without losing track of who owns what.',
  },
  {
    title: 'Easier ways to run events and hiring',
    description: 'Create events with sign-up details, review RSVPs, and manage applicants for open club roles.',
  },
];

const execRoles = [
  {
    role: 'President',
    color: '#E51937',
    workflow: ['Oversee club workspace', 'Assign exec roles', 'Manage permissions', 'Review club settings'],
  },
  {
    role: 'VP Communications',
    color: '#FFC429',
    workflow: ['Post announcements', 'Manage member directory', 'Share updates', 'Coordinate messaging'],
  },
  {
    role: 'Events Coordinator',
    color: '#3B82F6',
    workflow: ['Create event listings', 'Track RSVPs', 'Add sign-up questions', 'Follow up with attendees'],
  },
  {
    role: 'Recruiting / Hiring lead',
    color: '#22C55E',
    workflow: ['Post open roles', 'Review applicants', 'Update application status', 'Coordinate interviews'],
  },
  {
    role: 'Secretary / Ops',
    color: '#777777',
    workflow: ['Maintain member list', 'Track tasks', 'Support approvals', 'Keep records organized'],
  },
];

const typeIcons = [BookOpen, Heart, Briefcase, Palette, Users, Trophy];

export default function ForClubsPage() {
  const navigate = useNavigate();

  return (
    <div className="page-transition">
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#0B0B0B]">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#E51937] opacity-[0.05] blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans bg-[rgba(229,25,55,0.12)] text-[#E51937] border border-[#E51937]/20 mb-6">
              For club leaders
            </span>
            <h1 className="font-sans font-extrabold text-[#F5F5F5] mb-5 leading-tight max-w-3xl" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              One workspace for{' '}
              <span className="bg-gradient-to-r from-[#E51937] to-[#FFC429] bg-clip-text text-transparent">club operations.</span>
            </h1>
            <p className="text-[#9CA3AF] text-lg max-w-2xl leading-relaxed mb-8">
              Gryph ClubConnect gives club leaders a place to manage members, announcements, events, tasks, hiring, permissions, and more — without relying on scattered group chats and forms.
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
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-3">Built around how clubs actually run</h2>
            <p className="text-[#9CA3AF] max-w-lg mx-auto">Practical workflows for exec teams preparing for early testing.</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {execBenefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="bg-[#1A1A1A] border border-[#222222] rounded-2xl p-7 h-full hover:border-[#E51937]/20 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-[#F5F5F5] font-bold text-lg font-sans mb-3">{b.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{b.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-3">Support for common exec roles</h2>
            <p className="text-[#9CA3AF] max-w-lg mx-auto">Examples of how different roles can use the club workspace.</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {execRoles.map((r) => (
              <StaggerItem key={r.role}>
                <div className="bg-[#111111] border border-[#222222] rounded-xl p-6 h-full hover:border-[#222222]/80 transition-all duration-300" style={{ borderLeftColor: `${r.color}40`, borderLeftWidth: '3px' }}>
                  <h3 className="text-[#F5F5F5] font-bold font-sans mb-4" style={{ color: r.color }}>{r.role}</h3>
                  <ul className="space-y-2">
                    {r.workflow.map((w) => (
                      <li key={w} className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: r.color }} />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-3">What we&apos;re learning from testing</h2>
            <p className="text-[#9CA3AF]">Themes from early conversations with students and club leaders.</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {learningPoints.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-[#1A1A1A] border border-[#222222] rounded-2xl p-6 h-full">
                  <h3 className="text-[#F5F5F5] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-3">Who we&apos;re building for</h2>
            <p className="text-[#9CA3AF]">Generic club types across campus — not a list of current customers.</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.06}>
            {clubTypes.map((club, i) => {
              const Icon = typeIcons[i] ?? Users;
              return (
                <StaggerItem key={club.name}>
                  <div className="bg-[#111111] border border-[#222222] rounded-xl p-5 flex items-start gap-3 hover:border-[#E51937]/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(229,25,55,0.1)] border border-[#E51937]/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#E51937]" />
                    </div>
                    <div className="min-w-0">
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

      <section className="relative py-24 overflow-hidden bg-[#111111]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#E51937] opacity-[0.06] blur-[100px] pointer-events-none" />
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
