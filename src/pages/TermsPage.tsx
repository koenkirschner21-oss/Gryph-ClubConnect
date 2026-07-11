import AnimatedSection from '../components/ui/AnimatedSection';

export default function TermsPage() {
  return (
    <div className="page-transition">
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#0B0B0B]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#FFC429] opacity-[0.04] blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h1 className="font-sans font-extrabold text-[#F5F5F5] mb-5 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Terms of Service
            </h1>
            <p className="text-[#777777] text-sm font-sans">Last updated: April 2026</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-8 text-[#9CA3AF] text-base leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-[#F5F5F5] font-sans mb-3">1. Acceptance of Terms</h2>
                <p>By accessing or using Gryph Club Connect ("GCC"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F5F5F5] font-sans mb-3">2. Eligibility</h2>
                <p>Gryph ClubConnect is an independent student-built platform intended for people involved in UofG club life. Access requirements may change during early testing.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F5F5F5] font-sans mb-3">3. User Accounts</h2>
                <p>You are responsible for maintaining the confidentiality of your account credentials. You agree not to share your account or impersonate another user.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F5F5F5] font-sans mb-3">4. Acceptable Use</h2>
                <p>You agree to use Gryph ClubConnect only for lawful purposes related to campus club activities. Harassment, spam, and abuse of the platform are strictly prohibited.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F5F5F5] font-sans mb-3">5. Club Content</h2>
                <p>Club administrators are responsible for the content posted within their clubs. Gryph ClubConnect reserves the right to remove content that violates these terms.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F5F5F5] font-sans mb-3">6. Service Availability</h2>
                <p>GCC is provided on an "as-is" basis. We strive for reliability but do not guarantee uninterrupted access. We may modify or discontinue features with reasonable notice.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F5F5F5] font-sans mb-3">7. Limitation of Liability</h2>
                <p>GCC and its team shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F5F5F5] font-sans mb-3">8. Changes to Terms</h2>
                <p>We may update these terms from time to time. Continued use of GCC after changes constitutes acceptance of the updated terms.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F5F5F5] font-sans mb-3">9. Contact</h2>
                <p>Questions about these terms? Reach out at <a href="mailto:hello@gryphclubconnect.com" className="text-[#E51937] hover:underline">hello@gryphclubconnect.com</a>.</p>
              </section>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
