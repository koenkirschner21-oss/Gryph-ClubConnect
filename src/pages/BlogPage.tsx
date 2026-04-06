import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';

export default function BlogPage() {
  return (
    <div className="page-transition">
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#0D1117]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#C8102E] opacity-[0.04] blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-3xl mb-6 block">📝</span>
            <h1 className="font-[Syne,sans-serif] font-extrabold text-[#F0F6FC] mb-5 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Blog
            </h1>
            <p className="text-[#8B949E] text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Stories, tips, and updates from the GCC team. We're working on some great content — check back soon!
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161B22] border border-[#21262D] text-[#D4A017] text-sm font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A017] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4A017]" />
              </span>
              Coming Soon
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-[#161B22]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-4">Want to be notified?</h2>
            <p className="text-[#8B949E] mb-6">We'll let you know when we publish our first post.</p>
            <Button variant="red" href="mailto:hello@gryphclubconnect.ca?subject=Notify me about the blog">
              Get Notified
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
