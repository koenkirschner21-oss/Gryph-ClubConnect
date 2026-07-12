import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import BrandLogo from './BrandLogo';

export type InterestTab = 'onboard' | 'demo' | 'student';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: InterestTab;
}

interface InterestFormData {
  name: string;
  email: string;
  role: string;
  clubName: string;
  interest: string;
  message: string;
}

const tabCopy: Record<InterestTab, { intro: string; defaultInterest: string; submit: string }> = {
  onboard: {
    intro: 'Request club onboarding for Gryph ClubConnect. This form does not create an account or club workspace.',
    defaultInterest: 'Onboard my club',
    submit: 'Request Club Onboarding',
  },
  demo: {
    intro: 'Request a demo of Gryph ClubConnect. This form does not create an account.',
    defaultInterest: 'Request a demo',
    submit: 'Request Demo',
  },
  student: {
    intro: 'Request student access to discover clubs, events, and opportunities. This form does not create an account.',
    defaultInterest: 'Get student access',
    submit: 'Request Student Access',
  },
};

function InterestForm({
  tab,
  onSuccess,
}: {
  tab: InterestTab;
  onSuccess: () => void;
}) {
  const copy = tabCopy[tab];
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InterestFormData>({
    defaultValues: {
      interest: copy.defaultInterest,
      role: tab === 'student' ? 'student' : tab === 'onboard' ? 'club-leader' : '',
    },
  });

  const onSubmit = async (_data: InterestFormData) => {
    // Placeholder only — no backend
    await new Promise((r) => setTimeout(r, 600));
    onSuccess();
  };

  const inputClass =
    'w-full bg-[#0B0B0B] border border-[#222222] rounded-lg px-4 py-2.5 text-[#F5F5F5] text-sm placeholder:text-[#777777] focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:border-[#E51937] transition-colors';
  const labelClass = 'block text-sm font-medium text-[#9CA3AF] mb-1.5';
  const errorClass = 'text-xs text-[#E51937] mt-1';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <p className="text-sm text-[#9CA3AF] leading-relaxed">{copy.intro}</p>

      <div>
        <label className={labelClass}>Name</label>
        <input
          className={inputClass}
          placeholder="Your name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Email</label>
        <input
          className={inputClass}
          placeholder="you@uoguelph.ca"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              message: 'Enter a valid email address',
            },
          })}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Are you a student or club leader?</label>
        <select
          className={inputClass}
          {...register('role', { required: 'Please select an option' })}
        >
          <option value="">Select…</option>
          <option value="student">Student</option>
          <option value="club-leader">Club leader</option>
          <option value="both">Both</option>
          <option value="other">Other</option>
        </select>
        {errors.role && <p className={errorClass}>{errors.role.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Club name (if applicable)</label>
        <input
          className={inputClass}
          placeholder="Optional"
          {...register('clubName')}
        />
      </div>

      <div>
        <label className={labelClass}>What are you interested in?</label>
        <select className={inputClass} {...register('interest')}>
          <option value="Onboard my club">Onboard my club</option>
          <option value="Request a demo">Request a demo</option>
          <option value="Get student access">Get student access</option>
          <option value="Student discovery features">Student discovery features</option>
          <option value="Club leader workspace">Club leader workspace</option>
          <option value="Events and hiring">Events and hiring</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Optional message</label>
        <textarea
          className={`${inputClass} resize-none`}
          rows={3}
          placeholder="Anything else we should know?"
          {...register('message')}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#E51937] hover:bg-[#C4122E] text-white font-semibold py-3 rounded-lg transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:ring-offset-2 focus:ring-offset-[#0B0B0B]"
      >
        {isSubmitting ? 'Sending…' : copy.submit}
      </button>
    </form>
  );
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-10 text-center"
    >
      <div className="w-16 h-16 rounded-full bg-[rgba(255,196,41,0.12)] border border-[#FFC429]/30 flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-[#FFC429]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2">
        Interest noted
      </h3>
      <p className="text-[#9CA3AF] text-sm mb-6 max-w-xs">
        This is a placeholder confirmation — no account was created. Email{' '}
        <a href="mailto:hello@gryphclubconnect.com" className="text-[#9CA3AF] underline underline-offset-2">
          hello@gryphclubconnect.com
        </a>{' '}
        if you want to follow up directly.
      </p>
      <button
        onClick={onClose}
        className="px-6 py-2.5 bg-[#222222] hover:bg-[#2A2A2A] text-[#F5F5F5] rounded-lg text-sm font-medium transition-colors"
      >
        Close
      </button>
    </motion.div>
  );
}

const tabs: { key: InterestTab; label: string }[] = [
  { key: 'onboard', label: 'Onboard Club' },
  { key: 'demo', label: 'Request Demo' },
  { key: 'student', label: 'Student Access' },
];

export default function Modal({ isOpen, onClose, initialTab = 'onboard' }: ModalProps) {
  const [activeTab, setActiveTab] = useState<InterestTab>(initialTab);
  const [success, setSuccess] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) setActiveTab(initialTab);
  }, [isOpen, initialTab]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSuccess(false);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', trap);
    return () => document.removeEventListener('keydown', trap);
  }, [isOpen, activeTab, success]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md bg-[#111111] border border-[#222222] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-[#222222]">
              <div className="flex flex-col gap-2">
                <BrandLogo variant="footer" />
                <p className="text-[#777777] text-xs">Early access interest · No account is created</p>
              </div>
              <button
                onClick={onClose}
                tabIndex={0}
                className="text-[#777777] hover:text-[#F5F5F5] transition-colors p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E51937]"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {!success && (
              <div className="flex border-b border-[#222222]">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 py-3 px-1 text-xs sm:text-sm font-medium transition-colors relative focus:outline-none focus:ring-inset focus:ring-2 focus:ring-[#E51937] ${
                      activeTab === tab.key ? 'text-[#F5F5F5]' : 'text-[#777777] hover:text-[#9CA3AF]'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.key && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E51937]"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}

            <div className="px-6 py-5">
              {success ? (
                <SuccessState onClose={onClose} />
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <InterestForm tab={activeTab} onSuccess={() => setSuccess(true)} />
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {!success && (
              <p className="px-6 pb-5 text-xs text-[#777777] text-center">
                Or email{' '}
                <a href="mailto:hello@gryphclubconnect.com" className="underline underline-offset-2 hover:text-[#9CA3AF]">
                  hello@gryphclubconnect.com
                </a>
                . Interest forms on this site do not create an account.
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
