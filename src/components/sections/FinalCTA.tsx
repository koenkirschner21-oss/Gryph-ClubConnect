import { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import Modal from '../ui/Modal';

const trustedClubs = [
  { name: 'Guelph Coding Society', color: '#C8102E' },
  { name: 'MSA Guelph', color: '#D4A017' },
  { name: 'Girl Talk', color: '#3B82F6' },
  { name: 'Gryphon Racing', color: '#22C55E' },
  { name: 'Wildlife Club', color: '#A855F7' },
];

export default function FinalCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-28 overflow-hidden bg-[#0D1117]">
        {/* Red glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#C8102E] opacity-[0.08] blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-[#D4A017] opacity-[0.05] blur-[80px]" />
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
              Your club deserves better<br className="hidden sm:block" /> than a group chat.
            </h2>
            <p className="text-[#8B949E] text-xl max-w-2xl mx-auto mb-8">
              Join 50+ University of Guelph clubs already using Gryph Club Connect to stay organized and connected.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Button variant="red" size="lg" onClick={() => setModalOpen(true)}>
                Get Started Free →
              </Button>
              <Button variant="ghost" size="lg">
                Book a Demo
              </Button>
            </div>

            <p className="text-[#6E7681] text-sm font-mono mb-8">
              🔒 @uoguelph.ca emails only · No credit card required
            </p>

            {/* Social proof avatars */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex -space-x-2">
                {trustedClubs.map((club, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0D1117] flex items-center justify-center text-[10px] font-bold text-white shadow-lg"
                    style={{ backgroundColor: club.color }}
                    title={club.name}
                  >
                    {club.name[0]}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-[#0D1117] bg-[#21262D] flex items-center justify-center text-[10px] font-medium text-[#8B949E]">
                  +45
                </div>
              </div>
              <p className="text-[#6E7681] text-xs">
                Trusted by <span className="text-[#8B949E] font-medium">2,400+ students</span> across campus
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
