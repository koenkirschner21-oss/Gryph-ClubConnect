import { useNavigate } from 'react-router-dom';
import { Plus, UserPlus, MessageSquare, Globe, type LucideIcon } from 'lucide-react';
import { howItWorksSteps } from '../data/index';
import AnimatedSection from '../components/ui/AnimatedSection';
import FAQAccordion from '../components/ui/FAQAccordion';
import Button from '../components/ui/Button';
import { goToSection, JOIN_TESTING_ID, REQUEST_WALKTHROUGH_ID } from '../lib/cta';

const iconMap: Record<string, LucideIcon> = { Plus, UserPlus, MessageSquare, Globe };

const faqItems = [
  { question: 'Is Gryph ClubConnect officially part of the University of Guelph?', answer: 'No. Gryph ClubConnect is an independent student-built platform and is not officially affiliated with, endorsed by, or operated by the University of Guelph.' },
  { question: 'Who is early testing for?', answer: 'Students who want to discover clubs and events, and club leaders who want to try managing members, announcements, events, tasks, hiring, and permissions.' },
  { question: 'Does this website create a real account?', answer: 'No. Interest forms on this marketing site are placeholders for now. Real accounts will live in the app when you are invited into testing.' },
  { question: 'How do I request a walkthrough?', answer: 'Use Request a Walkthrough on this site or email hello@gryphclubconnect.com and tell us whether you are a student or club leader.' },
  { question: 'What should I expect in testing?', answer: 'Guided access to real workflows, honest feedback conversations, and a product that is still improving.' },
];

const expandedDescriptions: Record<string, string> = {
  'Join the testing group': 'Share whether you are a student or club leader and what you want to try. We use that to invite people into early testing.',
  'Get oriented': 'We will help you understand the product through a walkthrough or guided access based on your interest.',
  'Try real workflows': 'Students can explore discovery flows. Club leaders can try workspace flows like members, events, announcements, tasks, and hiring.',
  'Share feedback': 'Tell us what is clear, what is confusing, and what would make the product more useful for campus club life.',
};

export default function HowItWorksPage() {
  const navigate = useNavigate();

  return (
    <div className="page-transition">
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#0B0B0B]">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#E51937] opacity-[0.05] blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans bg-[rgba(229,25,55,0.12)] text-[#E51937] border border-[#E51937]/20 mb-6">
              Early testing
            </span>
            <h1 className="font-sans font-extrabold text-[#F5F5F5] mb-5 leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}>
              How testing<br />
              <span className="bg-gradient-to-r from-[#E51937] to-[#FFC429] bg-clip-text text-transparent">works</span>
            </h1>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
              Gryph ClubConnect is preparing for early testing with students and club leaders. Here is what involvement looks like.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {howItWorksSteps.map((step, index) => {
              const Icon = iconMap[step.icon] ?? Plus;
              const isEven = index % 2 === 0;
              return (
                <AnimatedSection key={step.step} delay={index * 0.05}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                    <div className={isEven ? '' : 'lg:order-2'}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#E51937] flex items-center justify-center text-white font-bold text-sm font-sans shadow-[0_0_20px_rgba(229,25,55,0.3)]">{step.step}</div>
                        <Icon size={18} className="text-[#E51937]" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">{step.title}</h2>
                      <p className="text-[#9CA3AF] text-base leading-relaxed mb-3">{expandedDescriptions[step.title] ?? step.description}</p>
                      <p className="text-[#777777] text-sm italic">{step.description}</p>
                    </div>
                    <div className={`bg-[#111111] border border-[#222222] rounded-2xl p-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-[#E51937]/10 border border-[#E51937]/20 flex items-center justify-center">
                          <Icon size={16} className="text-[#E51937]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#F5F5F5]">Step {step.step}</p>
                          <p className="text-[10px] text-[#777777]">{step.title}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 bg-[#0B0B0B] rounded-lg p-3">
                          <div className="w-4 h-4 rounded-full bg-[#E51937]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#E51937]" />
                          </div>
                          <p className="text-xs text-[#9CA3AF] leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-3">Frequently asked questions</h2>
            <p className="text-[#9CA3AF]">Straight answers for early testers.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <FAQAccordion items={faqItems} />
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden bg-[#0B0B0B]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#E51937] opacity-[0.06] blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] font-sans mb-4">Ready to get involved?</h2>
            <p className="text-[#9CA3AF] text-base mb-8 max-w-xl mx-auto">Join early testing or request a walkthrough. No account is created from this marketing site.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="red" size="lg" onClick={() => goToSection(JOIN_TESTING_ID, { navigate, pathname: '/how-it-works' })}>Join Testing</Button>
              <Button variant="ghost" size="lg" onClick={() => goToSection(REQUEST_WALKTHROUGH_ID, { navigate, pathname: '/how-it-works' })}>Request a Walkthrough</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
