import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { categories } from '../../data/index';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ActiveTab = 'join' | 'create';

interface JoinFormData {
  name: string;
  email: string;
  club: string;
}

interface CreateFormData {
  clubName: string;
  email: string;
  category: string;
  description: string;
}

const clubs = [
  'Guelph Coding Society',
  "Muslim Students' Association",
  'Girl Talk Guelph',
  'Gryphon Racing',
  'The Wildlife Club',
  'Guelph Debate Club',
  'International Students Club',
  'Guelph Women in STEM',
  'Guelph Fitness & Wellness',
  'Off-Campus University Students',
];

function JoinForm({ onSuccess }: { onSuccess: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<JoinFormData>();

  const onSubmit = async (_data: JoinFormData) => {
    await new Promise((r) => setTimeout(r, 800));
    onSuccess();
  };

  const inputClass =
    'w-full bg-[#0D1117] border border-[#21262D] rounded-lg px-4 py-2.5 text-[#F0F6FC] text-sm placeholder:text-[#6E7681] focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-[#C8102E] transition-colors';
  const labelClass = 'block text-sm font-medium text-[#8B949E] mb-1.5';
  const errorClass = 'text-xs text-[#C8102E] mt-1';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className={labelClass}>Full Name</label>
        <input
          className={inputClass}
          placeholder="Your full name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      <div>
        <label className={labelClass}>University Email</label>
        <input
          className={inputClass}
          placeholder="you@uoguelph.ca"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^@]+@uoguelph\.ca$/i,
              message: 'Must be a @uoguelph.ca email address',
            },
          })}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Select Club</label>
        <select
          className={inputClass}
          {...register('club', { required: 'Please select a club' })}
        >
          <option value="">Choose a club...</option>
          {clubs.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {errors.club && <p className={errorClass}>{errors.club.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#C8102E] hover:bg-[#A00C24] text-white font-semibold py-3 rounded-lg transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2 focus:ring-offset-[#0D1117]"
      >
        {isSubmitting ? 'Joining...' : 'Join Club'}
      </button>
    </form>
  );
}

function CreateForm({ onSuccess }: { onSuccess: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateFormData>();

  const onSubmit = async (_data: CreateFormData) => {
    await new Promise((r) => setTimeout(r, 800));
    onSuccess();
  };

  const inputClass =
    'w-full bg-[#0D1117] border border-[#21262D] rounded-lg px-4 py-2.5 text-[#F0F6FC] text-sm placeholder:text-[#6E7681] focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-[#C8102E] transition-colors';
  const labelClass = 'block text-sm font-medium text-[#8B949E] mb-1.5';
  const errorClass = 'text-xs text-[#C8102E] mt-1';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className={labelClass}>Club Name</label>
        <input
          className={inputClass}
          placeholder="e.g. Guelph Robotics Club"
          {...register('clubName', { required: 'Club name is required', minLength: { value: 3, message: 'Minimum 3 characters' } })}
        />
        {errors.clubName && <p className={errorClass}>{errors.clubName.message}</p>}
      </div>

      <div>
        <label className={labelClass}>University Email</label>
        <input
          className={inputClass}
          placeholder="you@uoguelph.ca"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^@]+@uoguelph\.ca$/i,
              message: 'Must be a @uoguelph.ca email address',
            },
          })}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Category</label>
        <select
          className={inputClass}
          {...register('category', { required: 'Please select a category' })}
        >
          <option value="">Choose a category...</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {errors.category && <p className={errorClass}>{errors.category.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Description</label>
        <textarea
          className={`${inputClass} resize-none`}
          rows={3}
          placeholder="What is your club about?"
          {...register('description', { required: 'Description is required', minLength: { value: 20, message: 'At least 20 characters' } })}
        />
        {errors.description && <p className={errorClass}>{errors.description.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#C8102E] hover:bg-[#A00C24] text-white font-semibold py-3 rounded-lg transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2 focus:ring-offset-[#0D1117]"
      >
        {isSubmitting ? 'Creating...' : 'Create Club'}
      </button>
    </form>
  );
}

function SuccessState({ tab, onClose }: { tab: ActiveTab; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-10 text-center"
    >
      <div className="w-16 h-16 rounded-full bg-[rgba(34,197,94,0.15)] border border-[#22C55E]/30 flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-[#F0F6FC] mb-2">
        {tab === 'join' ? "You're in!" : 'Club Created!'}
      </h3>
      <p className="text-[#8B949E] text-sm mb-6 max-w-xs">
        {tab === 'join'
          ? "Check your @uoguelph.ca inbox for a confirmation link to complete your registration."
          : "Your club has been created. Check your @uoguelph.ca inbox to verify and activate it."}
      </p>
      <button
        onClick={onClose}
        className="px-6 py-2.5 bg-[#21262D] hover:bg-[#30363D] text-[#F0F6FC] rounded-lg text-sm font-medium transition-colors"
      >
        Close
      </button>
    </motion.div>
  );
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('join');
  const [success, setSuccess] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSuccess(false);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Focus trap
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
            className="relative w-full max-w-md bg-[#161B22] border border-[#21262D] rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-[#21262D]">
              <div className="flex items-center gap-2">
                <span className="text-[#C8102E] font-bold italic text-lg font-serif">Club</span>
                <span className="text-[#D4A017] font-bold italic text-lg font-serif">Connect</span>
                <span className="text-base">🦅</span>
              </div>
              <button
                onClick={onClose}
                tabIndex={0}
                className="text-[#6E7681] hover:text-[#F0F6FC] transition-colors p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Tabs */}
            {!success && (
              <div className="flex border-b border-[#21262D]">
                {(['join', 'create'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 text-sm font-medium transition-colors relative focus:outline-none focus:ring-inset focus:ring-2 focus:ring-[#C8102E] ${
                      activeTab === tab ? 'text-[#F0F6FC]' : 'text-[#6E7681] hover:text-[#8B949E]'
                    }`}
                  >
                    {tab === 'join' ? 'Join as Member' : 'Create Club'}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8102E]"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Body */}
            <div className="px-6 py-5">
              {success ? (
                <SuccessState tab={activeTab} onClose={onClose} />
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: activeTab === 'join' ? -16 : 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: activeTab === 'join' ? 16 : -16 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeTab === 'join' ? (
                      <JoinForm onSuccess={() => setSuccess(true)} />
                    ) : (
                      <CreateForm onSuccess={() => setSuccess(true)} />
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {!success && (
              <p className="px-6 pb-5 text-xs text-[#6E7681] text-center">
                🔒 @uoguelph.ca email required · University of Guelph students only
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
