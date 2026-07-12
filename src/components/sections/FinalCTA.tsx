import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import Modal, { type InterestTab } from '../ui/Modal';
import {
  goToSection,
  ONBOARD_CLUB_ID,
  REQUEST_DEMO_ID,
  STUDENT_ACCESS_ID,
} from '../../lib/cta';

export default function FinalCTA() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<InterestTab>('onboard');

  const openModal = (tab: InterestTab) => {
    setModalTab(tab);
    setModalOpen(true);
  };

  return (
    <>
      <section id={ONBOARD_CLUB_ID} className="relative py-28 overflow-hidden bg-[#0B0B0B] scroll-mt-24">
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
              Bring your club onto Gryph ClubConnect.
            </h2>
            <p className="text-[#9CA3AF] text-xl max-w-2xl mx-auto mb-8">
              We&apos;re onboarding UofG clubs ahead of launch. Request a demo, see how the platform works, and get your club set up for a cleaner way to manage events, members, tasks, hiring, and announcements.
            </p>

            <div id={REQUEST_DEMO_ID} className="scroll-mt-28" />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Button
                variant="red"
                size="lg"
                onClick={() => {
                  goToSection(ONBOARD_CLUB_ID, { navigate, pathname: '/' });
                  openModal('onboard');
                }}
              >
                Onboard Your Club
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => {
                  goToSection(REQUEST_DEMO_ID, { navigate, pathname: '/' });
                  openModal('demo');
                }}
              >
                Request a Demo
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

      <section id={STUDENT_ACCESS_ID} className="relative pb-28 pt-4 overflow-hidden bg-[#0B0B0B] scroll-mt-24">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-[16px] border border-[#222222] bg-[#131313] px-6 py-10 sm:px-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-sans mb-3">
                Want student access?
              </h3>
              <p className="text-[#9CA3AF] text-base sm:text-lg max-w-xl mx-auto mb-6 leading-relaxed">
                Students can request access to discover clubs, events, and opportunities as Gryph ClubConnect prepares for launch.
              </p>
              <Button
                variant="red"
                size="lg"
                onClick={() => openModal('student')}
              >
                Get Student Access
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} initialTab={modalTab} />
    </>
  );
}
