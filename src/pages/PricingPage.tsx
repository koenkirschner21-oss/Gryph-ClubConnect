import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { pricingTiers } from '../data/index';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import FAQAccordion from '../components/ui/FAQAccordion';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';

const faqItems = [
  { question: 'Can I upgrade or downgrade?', answer: 'Yes, anytime. Changes take effect at the start of the next billing cycle.' },
  { question: 'Is there a free trial for Pro?', answer: 'Yes, 14 days free, no credit card required.' },
  { question: 'What payment methods do you accept?', answer: 'Visa, Mastercard, PayPal, and Interac.' },
  { question: 'Can multiple clubs share a Pro plan?', answer: 'Each club has its own plan. Contact us for institutional pricing to cover multiple clubs.' },
  { question: 'What happens to my data if I cancel?', answer: 'Your data is retained for 90 days after cancellation. You can export it anytime.' },
];

interface ComparisonRow {
  feature: string;
  free: boolean | string;
  pro: boolean | string;
  institutional: boolean | string;
}

const comparisonRows: ComparisonRow[] = [
  { feature: 'Members',          free: 'Up to 30',    pro: 'Unlimited',    institutional: 'Unlimited' },
  { feature: 'Channels',         free: '3 channels',  pro: 'Unlimited',    institutional: 'Unlimited' },
  { feature: 'Task Tracker',     free: 'Basic',       pro: 'Advanced',     institutional: 'Advanced' },
  { feature: 'Event Calendar',   free: true,          pro: true,           institutional: true },
  { feature: 'Member Directory', free: true,          pro: true,           institutional: true },
  { feature: 'Analytics',        free: false,         pro: true,           institutional: true },
  { feature: 'Custom Roles',     free: false,         pro: true,           institutional: true },
  { feature: 'Priority Support', free: false,         pro: true,           institutional: true },
  { feature: 'SSO',              free: false,         pro: false,          institutional: true },
];

function CellValue({ val }: { val: boolean | string }) {
  if (typeof val === 'string') return <span className="text-[#8B949E] text-sm">{val}</span>;
  if (val) return <Check size={16} className="text-[#22C55E] mx-auto" />;
  return <X size={16} className="text-[#6E7681] mx-auto" />;
}

export default function PricingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="page-transition">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#0D1117]">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#D4A017] opacity-[0.04] blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(#F0F6FC 1px, transparent 1px), linear-gradient(90deg, #F0F6FC 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h1 className="font-[Syne,sans-serif] font-extrabold text-[#F0F6FC] mb-5 leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}>
                Simple,{' '}
                <span className="bg-gradient-to-r from-[#C8102E] to-[#D4A017] bg-clip-text text-transparent">
                  transparent pricing
                </span>
              </h1>
              <p className="text-[#8B949E] text-lg max-w-xl mx-auto">
                Start free. Upgrade when you need more. No surprises.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 bg-[#0D1117]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start" staggerDelay={0.1}>
              {pricingTiers.map((tier) => (
                <StaggerItem key={tier.name}>
                  <div className={`relative rounded-2xl border p-7 h-full flex flex-col transition-all duration-300 ${tier.featured ? 'bg-[#1A1F26] border-[#D4A017]/50 shadow-[0_0_40px_rgba(212,160,23,0.15)] scale-[1.03]' : 'bg-[#161B22] border-[#21262D]'}`}>
                    {tier.featured && <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4A017]/[0.04] to-transparent pointer-events-none" />}
                    {tier.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#D4A017] text-[#0D1117] font-mono shadow-lg">{tier.badge}</span>
                      </div>
                    )}
                    <div className="mb-6">
                      <h3 className="text-[#F0F6FC] font-bold text-xl font-[Syne,sans-serif] mb-1">{tier.name}</h3>
                      <p className="text-[#8B949E] text-sm mb-4">{tier.description}</p>
                      <div className="flex items-end gap-1.5">
                        <span className="text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif]">{tier.price}</span>
                        {tier.period === 'forever' && <span className="text-[#22C55E] text-sm mb-1 font-medium">forever</span>}
                        {tier.period === 'per month' && <span className="text-[#6E7681] text-sm mb-1">/mo</span>}
                        {tier.period === 'contact us' && <span className="text-[#6E7681] text-sm mb-1">contact us</span>}
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${tier.featured ? 'bg-[#D4A017]/20' : 'bg-[#C8102E]/10'}`}>
                            <Check size={10} className={tier.featured ? 'text-[#D4A017]' : 'text-[#C8102E]'} strokeWidth={3} />
                          </div>
                          <span className="text-[#8B949E] text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant={tier.ctaVariant} size="md" className="w-full justify-center" onClick={() => setModalOpen(true)}>{tier.cta}</Button>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <AnimatedSection delay={0.3} className="text-center mt-8">
              <p className="text-[#6E7681] text-sm">All plans require a @uoguelph.ca email. No credit card needed for Free plan.</p>
            </AnimatedSection>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-[#161B22]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">Compare plans</h2>
              <p className="text-[#8B949E]">See exactly what's included at every tier.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-[#21262D] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#21262D] bg-[#1A1F26]">
                      <th className="text-left px-6 py-4 text-[#F0F6FC] font-semibold text-sm w-1/2">Feature</th>
                      <th className="text-center px-4 py-4 text-[#8B949E] font-semibold text-sm">Free</th>
                      <th className="text-center px-4 py-4 text-[#D4A017] font-semibold text-sm">Pro</th>
                      <th className="text-center px-4 py-4 text-[#8B949E] font-semibold text-sm">Institutional</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={row.feature} className={`border-b border-[#21262D] ${i % 2 === 0 ? 'bg-[#0D1117]' : 'bg-[#161B22]'}`}>
                        <td className="px-6 py-3.5 text-[#8B949E] text-sm">{row.feature}</td>
                        <td className="px-4 py-3.5 text-center"><CellValue val={row.free} /></td>
                        <td className="px-4 py-3.5 text-center"><CellValue val={row.pro} /></td>
                        <td className="px-4 py-3.5 text-center"><CellValue val={row.institutional} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#0D1117]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">Pricing FAQ</h2>
              <p className="text-[#8B949E]">Still have questions? We've got answers.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}><FAQAccordion items={faqItems} /></AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 overflow-hidden bg-[#161B22]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#C8102E] opacity-[0.06] blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-4">Start free today</h2>
              <p className="text-[#8B949E] text-base mb-8 max-w-xl mx-auto">No credit card required. Upgrade anytime.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="red" size="lg" onClick={() => setModalOpen(true)}>Get Started Free</Button>
                <Button variant="ghost" size="lg">Contact Us</Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
