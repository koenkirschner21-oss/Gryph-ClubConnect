import Hero from '../components/sections/Hero';
import Ticker from '../components/sections/Ticker';
import ProblemSection from '../components/sections/ProblemSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import AppShowcase from '../components/sections/AppShowcase';
import HowItWorks from '../components/sections/HowItWorks';
import PricingSection from '../components/sections/PricingSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FinalCTA from '../components/sections/FinalCTA';

interface HomePageProps {
  onGetStarted: () => void;
}

export default function HomePage({ onGetStarted }: HomePageProps) {
  return (
    <div className="page-transition">
      <Hero onGetStarted={onGetStarted} />
      <Ticker />
      <ProblemSection />
      <FeaturesSection />
      <AppShowcase />
      <HowItWorks />
      <PricingSection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
}
