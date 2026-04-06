import { testimonials } from '../../data/index';
import { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import AnimatedSection from '../ui/AnimatedSection';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-4">
            Trusted by club leaders
          </h2>
          <p className="text-[#8B949E] text-lg max-w-lg mx-auto">
            Hear from the executives actually running their clubs on GCC.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="bg-[#1A1F26] border border-[#21262D] hover:border-[#C8102E]/20 rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden">
                {/* Large quote decoration */}
                <div
                  className="absolute -top-2 -left-1 text-7xl font-serif leading-none select-none pointer-events-none"
                  style={{ color: t.avatarColor, opacity: 0.12 }}
                  aria-hidden="true"
                >
                  "
                </div>

                {/* Quote */}
                <blockquote className="relative text-[#8B949E] text-sm leading-relaxed italic mb-5 flex-1 pt-4">
                  "{t.quote}"
                </blockquote>

                {/* Stat badge */}
                <div className="mb-5">
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-semibold"
                    style={{
                      backgroundColor: `${t.avatarColor}18`,
                      color: t.avatarColor,
                      border: `1px solid ${t.avatarColor}30`,
                    }}
                  >
                    📈 {t.stats}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#21262D]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: t.avatarColor }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-[#F0F6FC] text-sm font-semibold">{t.name}</p>
                    <p className="text-[#6E7681] text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
