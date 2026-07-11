import { useNavigate } from 'react-router-dom';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { goToSection, JOIN_TESTING_ID, REQUEST_WALKTHROUGH_ID } from '../lib/cta';

const values = [
  {
    title: 'Community first',
    description: 'We prioritize features that help students find community and help club leaders run clubs more clearly.',
  },
  {
    title: 'Student-built',
    description: 'Gryph ClubConnect is being built by students who have lived the friction of discovering clubs and coordinating exec work across too many tools.',
  },
  {
    title: 'Honest early stage',
    description: 'We are preparing for early testing. We would rather be clear about where we are than overclaim progress.',
  },
];

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="page-transition">
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#0B0B0B]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#E51937] opacity-[0.04] blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="font-sans font-extrabold text-[#F5F5F5] mb-5 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Built by students<br />
              <span className="bg-gradient-to-r from-[#E51937] to-[#FFC429] bg-clip-text text-transparent">
                for UofG club life.
              </span>
            </h1>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed">
              Gryph ClubConnect is an independent student-built platform for discovering clubs and managing club operations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-xs font-sans text-[#E51937] uppercase tracking-wider mb-4 block">Our story</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-5">Why we&apos;re building this</h2>
              <p className="text-[#9CA3AF] text-base leading-relaxed">
                Gryph ClubConnect is being built after seeing how difficult it can be for students to discover clubs and for club leaders to manage everything across scattered tools.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-[#1A1A1A] border border-[#222222] rounded-2xl p-8">
                <blockquote className="text-[#F5F5F5] text-lg font-medium leading-relaxed">
                  Students deserve clearer ways to find campus community. Club leaders deserve one workspace for the operational work that usually gets lost in group chats.
                </blockquote>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-sans text-[#E51937] uppercase tracking-wider mb-4 block">The backstory</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">The friction is real</h2>
            <p className="text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
              Club life often spans group chats, forms, drives, and social DMs. New members get lost. Tasks get dropped. Event planning becomes stressful. We&apos;re building a platform that brings discovery and club operations closer together.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-xs font-sans text-[#FFC429] uppercase tracking-wider mb-4 block">Our focus</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-6">Help students find community. Help clubs run better.</h2>
            <p className="text-[#9CA3AF] text-lg leading-relaxed max-w-3xl mx-auto">
              We want Gryph ClubConnect to make campus involvement easier to discover and easier to manage — while staying honest about being an independent student project in early testing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-3">What we stand for</h2>
            <p className="text-[#9CA3AF]">Principles guiding how we build.</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="bg-[#111111] border border-[#222222] rounded-2xl p-7 h-full hover:border-[#E51937]/20 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-[#F5F5F5] font-bold text-lg font-sans mb-3">{v.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0B0B0B] border border-[#222222] mb-6">
              <span className="text-[#F5F5F5] font-semibold">Independent · Student-built · Early testing</span>
            </div>
            <p className="text-[#9CA3AF] text-base leading-relaxed max-w-2xl mx-auto">
              Gryph ClubConnect is not officially affiliated with, endorsed by, or operated by the University of Guelph. It is an independent student-built platform inspired by campus club life in Guelph.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden bg-[#0B0B0B]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#E51937] opacity-[0.06] blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">Join early testing</h2>
            <p className="text-[#9CA3AF] text-base mb-8 max-w-xl mx-auto">
              Help us improve Gryph ClubConnect with real feedback from students and club leaders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="red" size="lg" onClick={() => goToSection(JOIN_TESTING_ID, { navigate, pathname: '/about' })}>
                Join Testing
              </Button>
              <Button variant="ghost" size="lg" onClick={() => goToSection(REQUEST_WALKTHROUGH_ID, { navigate, pathname: '/about' })}>
                Request a Walkthrough
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
