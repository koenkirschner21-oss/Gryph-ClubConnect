import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import { goToSection, JOIN_TESTING_ID, REQUEST_WALKTHROUGH_ID } from '../../lib/cta';

export default function FinalCTA() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<'testing' | 'walkthrough'>('testing');

  const openTesting = () => {
    setModalTab('testing');
    setModalOpen(true);
  };

  const openWalkthrough = () => {
    setModalTab('walkthrough');
    setModalOpen(true);
  };

  return (
    <>
      <section id={JOIN_TESTING_ID} className="relative py-28 overflow-hidden bg-[#0B0B0B] scroll-mt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] rounded-full bg-[#E51937] opacity-[0.05] blur-[90px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[180px] rounded-full bg-[#FFC429] opacity-[0.03] blur-[70px]" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-sans text-[#E51937] uppercase tracking-wider mb-5 block">Early access</span>
            <h2
              className="font-extrabold text-[#F5F5F5] font-sans mb-5 leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)' }}
            >
              Join the early testing group
            </h2>
            <p className="text-[#9CA3AF] text-xl max-w-2xl mx-auto mb-8">
              Help shape Gryph ClubConnect with students and club leaders. We&apos;re looking for people willing to try real workflows and share honest feedback.
            </p>

            <div id={REQUEST_WALKTHROUGH_ID} className="scroll-mt-28" />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Button
                variant="red"
                size="lg"
                onClick={() => {
                  goToSection(JOIN_TESTING_ID, { navigate, pathname: '/' });
                  openTesting();
                }}
              >
                Join Testing
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => {
                  goToSection(REQUEST_WALKTHROUGH_ID, { navigate, pathname: '/' });
                  openWalkthrough();
                }}
              >
                Request a Walkthrough
              </Button>
            </div>

            <p className="text-[#9CA3AF] text-sm max-w-lg mx-auto">
              Prefer email? Reach us at{' '}
              <a href="mailto:hello@gryphclubconnect.com" className="text-[#9CA3AF] hover:text-[#F5F5F5] underline underline-offset-2">
                hello@gryphclubconnect.com
              </a>
              {' '}and tell us whether you&apos;re a student or club leader. Interest forms on this site do not create an account.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} initialTab={modalTab} />
    </>
  );
}
