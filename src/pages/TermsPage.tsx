import AnimatedSection from '../components/ui/AnimatedSection';

export default function TermsPage() {
  return (
    <div className="page-transition">
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#0D1117]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#D4A017] opacity-[0.04] blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-3xl mb-6 block">📜</span>
            <h1 className="font-[Syne,sans-serif] font-extrabold text-[#F0F6FC] mb-5 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Terms of Service
            </h1>
            <p className="text-[#6E7681] text-sm font-mono">Last updated: April 2026</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-8 text-[#8B949E] text-base leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">1. Acceptance of Terms</h2>
                <p>By accessing or using Gryph Club Connect ("GCC"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">2. Eligibility</h2>
                <p>GCC is available to current students, faculty, and staff of the University of Guelph with a valid @uoguelph.ca email address.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">3. User Accounts</h2>
                <p>You are responsible for maintaining the confidentiality of your account credentials. You agree not to share your account or impersonate another user.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">4. Acceptable Use</h2>
                <p>You agree to use GCC only for lawful purposes related to University of Guelph club activities. Harassment, spam, and abuse of the platform are strictly prohibited.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">5. Club Content</h2>
                <p>Club administrators are responsible for the content posted within their clubs. GCC reserves the right to remove content that violates these terms or university policies.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">6. Service Availability</h2>
                <p>GCC is provided on an "as-is" basis. We strive for reliability but do not guarantee uninterrupted access. We may modify or discontinue features with reasonable notice.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">7. Limitation of Liability</h2>
                <p>GCC and its team shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">8. Changes to Terms</h2>
                <p>We may update these terms from time to time. Continued use of GCC after changes constitutes acceptance of the updated terms.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">9. Contact</h2>
                <p>Questions about these terms? Reach out at <a href="mailto:hello@gryphclubconnect.ca" className="text-[#C8102E] hover:underline">hello@gryphclubconnect.ca</a>.</p>
              </section>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
