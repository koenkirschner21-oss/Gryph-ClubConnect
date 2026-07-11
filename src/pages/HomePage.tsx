import Hero from '../components/sections/Hero';
import Ticker from '../components/sections/Ticker';
import ProblemSection from '../components/sections/ProblemSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import AppShowcase from '../components/sections/AppShowcase';
import HowItWorks from '../components/sections/HowItWorks';
import LearningSection from '../components/sections/LearningSection';
import FinalCTA from '../components/sections/FinalCTA';

export default function HomePage() {
  return (
    <div className="page-transition">
      <Hero />
      <Ticker />
      <ProblemSection />
      <FeaturesSection />
      <AppShowcase />
      <HowItWorks />
      <LearningSection />
      <FinalCTA />
    </div>
  );
}
