import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';

export default function CareersPage() {
  return (
    <div className="page-transition">
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#0B0B0B]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#FFC429] opacity-[0.04] blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="font-sans font-extrabold text-[#F5F5F5] mb-5 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Careers
            </h1>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Gryph ClubConnect is a student-built project. We do not have open positions right now, but if you want to help with early testing or collaborate, we&apos;d like to hear from you.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] border border-[#222222] text-[#FFC429] text-sm font-sans">
              No open positions
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-bold text-[#F5F5F5] font-sans mb-4">Want to get involved?</h2>
            <p className="text-[#9CA3AF] mb-6">Email us and tell us how you&apos;d like to help.</p>
            <Button variant="red" href="mailto:hello@gryphclubconnect.com?subject=Interested in helping with Gryph ClubConnect">
              Reach Out
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
