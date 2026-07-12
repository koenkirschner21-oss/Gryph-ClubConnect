import AnimatedSection from '../ui/AnimatedSection';

export default function FounderLine() {
  return (
    <section className="py-8 sm:py-10 bg-[#0B0B0B] border-y border-[#222222]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#9CA3AF]">
            Built by a UofG student to solve the scattered tools problem student clubs deal with every semester.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
