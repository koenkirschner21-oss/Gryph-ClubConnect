import Hero from '../components/sections/Hero';
import ProductSplit from '../components/sections/ProductSplit';
import ProblemSection from '../components/sections/ProblemSection';
import StudentShowcase from '../components/sections/StudentShowcase';
import LeaderShowcase from '../components/sections/LeaderShowcase';
import AppShowcase from '../components/sections/AppShowcase';
import HowItWorks from '../components/sections/HowItWorks';
import LearningSection from '../components/sections/LearningSection';
import FinalCTA from '../components/sections/FinalCTA';

export default function HomePage() {
  return (
    <div className="page-transition">
      <Hero />
      <ProductSplit />
      <ProblemSection />
      <StudentShowcase />
      <LeaderShowcase />
      <AppShowcase />
      <HowItWorks />
      <LearningSection />
      <FinalCTA />
    </div>
  );
}
