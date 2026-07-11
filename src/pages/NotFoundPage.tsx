import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="page-transition">
      <section className="relative pt-32 pb-32 overflow-hidden bg-[#0B0B0B] min-h-[70vh] flex items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#E51937] opacity-[0.04] blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <AnimatedSection>
            <div className="text-8xl sm:text-9xl font-extrabold font-sans bg-gradient-to-r from-[#E51937] to-[#FFC429] bg-clip-text text-transparent mb-6">
              404
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] font-sans mb-4">
              Page not found
            </h1>
            <p className="text-[#9CA3AF] text-lg mb-8 max-w-md mx-auto">
              Looks like this page flew the coop. Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="red" href="/#/">Go Home</Button>
              <Button variant="ghost" href="/#/features">View Features</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
