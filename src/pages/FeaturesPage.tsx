import { useNavigate } from 'react-router-dom';
import {
  Compass, Building2, Calendar, Briefcase, LayoutDashboard, Bookmark,
  LayoutGrid, Megaphone, CalendarPlus, CheckSquare, Users, UserCheck, Shield,
  type LucideIcon,
} from 'lucide-react';
import { studentFeatures, leaderFeatures } from '../data/index';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { DashboardMock, WorkspaceMock, HiringMock } from '../components/mockups/ProductMocks';
import { goToSection, JOIN_TESTING_ID, REQUEST_WALKTHROUGH_ID } from '../lib/cta';

const studentIcons: Record<string, LucideIcon> = {
  Compass, Building2, Calendar, Briefcase, LayoutDashboard, Bookmark,
};

const leaderIcons: Record<string, LucideIcon> = {
  LayoutGrid, Megaphone, CalendarPlus, CheckSquare, Users, UserCheck, Shield,
};

export default function FeaturesPage() {
  const navigate = useNavigate();

  return (
    <div className="page-transition">
      <section className="relative pt-32 pb-16 overflow-hidden bg-[#0B0B0B]">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#E51937] opacity-[0.04] blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans bg-[rgba(229,25,55,0.12)] text-[#E51937] border border-[#E51937]/20 mb-6">
              Product features
            </span>
            <h1 className="font-sans font-extrabold text-[#F5F5F5] mb-5 leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}>
              Real workflows for<br />
              <span className="bg-gradient-to-r from-[#E51937] to-[#FFC429] bg-clip-text text-transparent">
                campus club life
              </span>
            </h1>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed">
              Gryph ClubConnect helps students discover clubs and opportunities while giving club leaders one workspace for members, announcements, events, tasks, hiring, and permissions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* For Students */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <AnimatedSection>
              <span className="text-sm text-[#E51937] uppercase tracking-wider mb-3 block">For students</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">Find your place on campus</h2>
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
                  <div className="bg-[#131313] border border-[#222222] rounded-[12px] p-5 h-full">
                    <div className="w-9 h-9 rounded-[8px] bg-[rgba(229,25,55,0.12)] border border-[#E51937]/25 flex items-center justify-center mb-3">
                      <Icon size={18} className="text-[#E51937]" />
                    </div>
                    <h3 className="text-[#F5F5F5] font-semibold mb-1.5">{f.title}</h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">{f.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* For Club Leaders */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <WorkspaceMock />
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <span className="text-sm text-[#FFC429] uppercase tracking-wider mb-3 block">For club leaders</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">Run your club from one workspace</h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed">
                Manage announcements, events, tasks, members, hiring, and permissions without scattering work across chats and forms.
              </p>
            </AnimatedSection>
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.05}>
            {leaderFeatures.map((f) => {
              const Icon = leaderIcons[f.icon] ?? LayoutGrid;
              return (
                <StaggerItem key={f.title}>
                  <div className="bg-[#131313] border border-[#222222] rounded-[12px] p-5 h-full">
                    <div className="w-9 h-9 rounded-[8px] bg-[rgba(255,196,41,0.12)] border border-[#FFC429]/25 flex items-center justify-center mb-3">
                      <Icon size={18} className="text-[#FFC429]" />
                    </div>
                    <h3 className="text-[#F5F5F5] font-semibold mb-1.5">{f.title}</h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">{f.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Platform workflows */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm text-[#E51937] uppercase tracking-wider mb-3 block">Platform workflows</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">From discovery to decisions</h2>
            <p className="text-[#9CA3AF] max-w-xl mx-auto">
              Hiring and applicant review is one example of how club leaders can keep opportunities organized.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="max-w-3xl mx-auto">
            <HiringMock />
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden bg-[#0B0B0B]">
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">
              Join the early testing group
            </h2>
            <p className="text-[#9CA3AF] text-base mb-8 max-w-xl mx-auto">
              Try the workflows that matter to you and share feedback as we prepare Gryph ClubConnect.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="red" size="lg" onClick={() => goToSection(JOIN_TESTING_ID, { navigate, pathname: '/features' })}>
                Join Testing
              </Button>
              <Button variant="ghost" size="lg" onClick={() => goToSection(REQUEST_WALKTHROUGH_ID, { navigate, pathname: '/features' })}>
                Request a Walkthrough
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
