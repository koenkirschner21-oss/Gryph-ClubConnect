import { HashRouter } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Ticker from './components/sections/Ticker';
import ProblemSection from './components/sections/ProblemSection';
import FeaturesSection from './components/sections/FeaturesSection';
import AppShowcase from './components/sections/AppShowcase';
import HowItWorks from './components/sections/HowItWorks';
import PricingSection from './components/sections/PricingSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FinalCTA from './components/sections/FinalCTA';
import Modal from './components/ui/Modal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <HashRouter>
      <div className="bg-[#0D1117] min-h-screen text-[#F0F6FC]">
        <Navbar />
        <main>
          <Hero onGetStarted={() => setModalOpen(true)} />
          <Ticker />
          <ProblemSection />
          <FeaturesSection />
          <AppShowcase />
          <HowItWorks />
          <PricingSection />
          <TestimonialsSection />
          <FinalCTA />
        </main>
        <Footer />
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </HashRouter>
  );
}
