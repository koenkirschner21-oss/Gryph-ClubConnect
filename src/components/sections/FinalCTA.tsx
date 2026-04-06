import { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import Modal from '../ui/Modal';

export default function FinalCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-28 overflow-hidden bg-[#0D1117]">
        {/* Red glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#C8102E] opacity-[0.07] blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-[#D4A017] opacity-[0.04] blur-[80px]" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#F0F6FC 1px, transparent 1px), linear-gradient(90deg, #F0F6FC 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="font-extrabold text-[#F0F6FC] font-[Syne,sans-serif] mb-5 leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Your club deserves better than a group chat.
            </h2>
            <p className="text-[#8B949E] text-xl max-w-2xl mx-auto mb-8">
              Join 50+ University of Guelph clubs already using Gryph Club Connect.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
              <Button variant="red" size="lg" onClick={() => setModalOpen(true)}>
                Get Started Free
              </Button>
              <Button variant="ghost" size="lg">
                Book a Demo
              </Button>
            </div>

            <p className="text-[#6E7681] text-sm font-mono">
              🔒 @uoguelph.ca emails only · No credit card required
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
