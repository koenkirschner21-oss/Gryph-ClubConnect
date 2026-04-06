import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Modal from './components/ui/Modal';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import ForClubsPage from './pages/ForClubsPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <HashRouter>
      <div className="bg-[#0D1117] min-h-screen text-[#F0F6FC]">
        <Navbar onGetStarted={() => setModalOpen(true)} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage onGetStarted={() => setModalOpen(true)} />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/for-clubs" element={<ForClubsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </HashRouter>
  );
}
