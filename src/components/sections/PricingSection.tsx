import { Check } from 'lucide-react';
import { pricingTiers } from '../../data/index';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import Button from '../ui/Button';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-[#161B22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-sm font-mono text-[#D4A017] uppercase tracking-wider mb-5 block">Pricing</span>
          <h2 className="text-[2.75rem] sm:text-[3.5rem] font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-5">
            Simple, transparent pricing
          </h2>
          <p className="text-[#9DA5AE] text-xl">
            Start free. Upgrade when you need more. No surprises.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
          staggerDelay={0.1}
        >
          {pricingTiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={`relative rounded-2xl border p-7 h-full flex flex-col transition-all duration-300 ${
                  tier.featured
                    ? 'bg-[#1A1F26] border-[#D4A017]/50 shadow-[0_0_40px_rgba(212,160,23,0.15)] scale-[1.03] md:scale-[1.05]'
                    : 'bg-[#1A1F26] border-[#21262D] hover:border-[#21262D]/60'
                }`}
              >
                {tier.featured && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4A017]/[0.04] to-transparent pointer-events-none" />
                )}

                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#D4A017] text-[#0D1117] font-mono shadow-lg">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-[#F0F6FC] font-bold text-xl font-[Syne,sans-serif] mb-1">{tier.name}</h3>
                  <p className="text-[#9DA5AE] text-[15px] mb-4">{tier.description}</p>
                  <div className="flex items-end gap-1.5">
                    <span className="text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif]">{tier.price}</span>
                    {tier.period !== 'forever' && tier.period !== 'contact us' && (
                      <span className="text-[#8B949E] text-sm mb-1">/{tier.period}</span>
                    )}
                    {tier.period === 'forever' && (
                      <span className="text-[#22C55E] text-sm mb-1 font-medium">forever</span>
                    )}
                    {tier.period === 'contact us' && (
                      <span className="text-[#8B949E] text-sm mb-1">contact us</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        tier.featured ? 'bg-[#D4A017]/20' : 'bg-[#C8102E]/10'
                      }`}>
                        <Check
                          size={12}
                          className={tier.featured ? 'text-[#D4A017]' : 'text-[#C8102E]'}
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-[#9DA5AE] text-[15px]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={tier.ctaVariant} size="md" className="w-full justify-center">
                  {tier.cta}
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <p className="text-[#8B949E] text-sm">
            All plans require a @uoguelph.ca email address. No credit card needed for Free plan.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
