import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { goToDemoForm } from '../lib/cta';

/** Pricing page retired — kept as a redirect-style early access page for old links. */
export default function PricingPage() {
  const navigate = useNavigate();

  return (
    <div className="page-transition">
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0B0B0B] min-h-[70vh] flex items-center">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#FFC429] opacity-[0.04] blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-sans text-[#FFC429] uppercase tracking-wider mb-5 block">Early access</span>
            <h1 className="font-sans font-extrabold text-[#F5F5F5] mb-5 leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
              Early access for UofG clubs
            </h1>
            <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto mb-8">
              Gryph ClubConnect does not offer paid plans on this site. We are focused on early access with students and club leaders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="red"
                size="lg"
                onClick={() =>
                  goToDemoForm({ interest: 'Onboard my club', navigate, pathname: '/pricing' })
                }
              >
                Onboard Your Club
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() =>
                  goToDemoForm({ interest: 'Request a demo', navigate, pathname: '/pricing' })
                }
              >
                Request a Demo
              </Button>
            </div>
            <p className="text-[#777777] text-sm mt-8">
              Questions? Email{' '}
              <a href="mailto:gryphclubconnect@gmail.com" className="text-[#9CA3AF] underline underline-offset-2">
                gryphclubconnect@gmail.com
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
