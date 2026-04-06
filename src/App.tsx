import { HashRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Modal from './components/ui/Modal';
import ErrorBoundary from './components/ui/ErrorBoundary';

const HomePage = lazy(() => import('./pages/HomePage'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ForClubsPage = lazy(() => import('./pages/ForClubsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-[#8B949E] text-sm font-mono">Loading…</div>
    </div>
  );
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <HashRouter>
      <ErrorBoundary>
        <div className="bg-[#0D1117] min-h-screen text-[#F0F6FC]">
          <Navbar onGetStarted={() => setModalOpen(true)} />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage onGetStarted={() => setModalOpen(true)} />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/for-clubs" element={<ForClubsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </ErrorBoundary>
    </HashRouter>
  );
}
