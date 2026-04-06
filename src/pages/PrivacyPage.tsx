import AnimatedSection from '../components/ui/AnimatedSection';

export default function PrivacyPage() {
  return (
    <div className="page-transition">
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#0D1117]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#C8102E] opacity-[0.04] blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-3xl mb-6 block">🔒</span>
            <h1 className="font-[Syne,sans-serif] font-extrabold text-[#F0F6FC] mb-5 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Privacy Policy
            </h1>
            <p className="text-[#6E7681] text-sm font-mono">Last updated: April 2026</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-8 text-[#8B949E] text-base leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">1. Information We Collect</h2>
                <p>When you sign up for Gryph Club Connect, we collect your University of Guelph email address, display name, and club membership preferences. We do not sell or share your personal information with third parties.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">2. How We Use Your Information</h2>
                <p>Your information is used solely to provide and improve the GCC platform — including authenticating your identity, connecting you with clubs, and sending relevant notifications about your clubs' activities.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">3. Data Storage &amp; Security</h2>
                <p>Your data is stored securely and encrypted in transit and at rest. We follow industry best practices to protect your information. Access to user data is limited to authorized team members only.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">4. Cookies</h2>
                <p>We use essential cookies to keep you signed in and maintain your session. We do not use tracking cookies or third-party advertising cookies.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">5. Your Rights</h2>
                <p>You can request to view, update, or delete your personal data at any time by contacting us at <a href="mailto:hello@gryphclubconnect.ca" className="text-[#C8102E] hover:underline">hello@gryphclubconnect.ca</a>.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">6. Changes to This Policy</h2>
                <p>We may update this privacy policy from time to time. We will notify affected users of any material changes via email or in-app notification.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">7. Contact</h2>
                <p>If you have any questions about this policy, please contact us at <a href="mailto:hello@gryphclubconnect.ca" className="text-[#C8102E] hover:underline">hello@gryphclubconnect.ca</a>.</p>
              </section>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
