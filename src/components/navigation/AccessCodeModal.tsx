import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, KeyRound, Loader2, LockKeyhole, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BrandLogo from '../ui/BrandLogo';
import { goToDemoForm } from '../../lib/cta';

type AccessCodeModalProps = {
  open: boolean;
  onClose: () => void;
};

type VerifyAccessResponse = {
  ok?: boolean;
  loginUrl?: string;
  error?: string;
};

export default function AccessCodeModal({
  open,
  onClose,
}: AccessCodeModalProps) {
  const navigate = useNavigate();
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [code, setCode] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 120);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !submitting) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose, submitting]);

  useEffect(() => {
    if (!open) {
      setCode('');
      setError('');
      setSubmitting(false);
    }
  }, [open]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedCode = code.trim();

    if (!normalizedCode) {
      setError('Enter your early-access code.');
      inputRef.current?.focus();
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/verify-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ code: normalizedCode }),
      });

      const result = (await response.json()) as VerifyAccessResponse;

      if (!response.ok || !result.ok || !result.loginUrl) {
        setError(
          result.error ??
            'That code could not be verified. Check it and try again.',
        );
        return;
      }

      window.sessionStorage.setItem(
        'clubconnect-login-access',
        String(Date.now()),
      );
      window.location.assign(result.loginUrl);
    } catch {
      setError(
        'We could not verify the code right now. Please try again shortly.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleRequestAccess = () => {
    onClose();

    goToDemoForm({
      interest: 'Ask a question',
      navigate,
      pathname: window.location.pathname,
    });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 px-4 py-8 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="access-code-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget && !submitting) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-[460px] overflow-hidden rounded-[18px] border border-white/[0.1] bg-[#111111] shadow-[0_28px_90px_rgba(0,0,0,0.65)]"
          >
            <span
              className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#E51937] via-[#FFC429] to-[#E51937]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#E51937] opacity-[0.08] blur-[65px]"
              aria-hidden
            />

            <button
              type="button"
              onClick={onClose}
              disabled={submitting}
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-[#0B0B0B] text-[#9CA3AF] transition-colors hover:border-white/[0.16] hover:text-[#F5F5F5] disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Close early access window"
            >
              <X size={17} />
            </button>

            <div className="relative p-6 sm:p-7">
              <BrandLogo variant="footer" />

              <div className="mt-7 inline-flex h-11 w-11 items-center justify-center rounded-[11px] border border-[#E51937]/30 bg-[rgba(229,25,55,0.12)] text-[#E51937]">
                <LockKeyhole size={20} />
              </div>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#FFC429]">
                Private early access
              </p>

              <h2
                id="access-code-title"
                className="mt-2 font-sans text-2xl font-extrabold leading-tight text-[#F5F5F5] sm:text-[1.75rem]"
              >
                Enter your ClubConnect access code.
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-[#9CA3AF]">
                The app is currently limited to approved testers and participating
                club teams while we prepare for launch.
              </p>

              <form onSubmit={handleSubmit} className="mt-6">
                <label
                  htmlFor={inputId}
                  className="mb-1.5 block text-[13px] font-medium text-[#9CA3AF]"
                >
                  Access code
                </label>

                <div className="relative">
                  <KeyRound
                    size={16}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#777777]"
                    aria-hidden
                  />
                  <input
                    ref={inputRef}
                    id={inputId}
                    value={code}
                    onChange={(event) => {
                      setCode(event.target.value);
                      if (error) {
                        setError('');
                      }
                    }}
                    disabled={submitting}
                    autoComplete="one-time-code"
                    spellCheck={false}
                    placeholder="Enter access code"
                    className="w-full rounded-[10px] border border-[#2A2A2A] bg-[#0B0B0B] py-3 pl-10 pr-3.5 text-sm text-[#F5F5F5] outline-none transition-colors placeholder:text-[#666666] focus:border-[#E51937] focus:ring-2 focus:ring-[#E51937]/30 disabled:opacity-60"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${inputId}-error` : undefined}
                  />
                </div>

                {error && (
                  <p
                    id={`${inputId}-error`}
                    className="mt-2 text-[13px] leading-relaxed text-[#FF6B7D]"
                    role="alert"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#E51937] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C4122E] focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:ring-offset-2 focus:ring-offset-[#111111] disabled:cursor-not-allowed disabled:opacity-65"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Verifying code…
                    </>
                  ) : (
                    <>
                      Continue to Login
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-5 border-t border-white/[0.08] pt-5 text-center">
                <p className="text-[13px] text-[#777777]">
                  Don&apos;t have a code?
                </p>
                <button
                  type="button"
                  onClick={handleRequestAccess}
                  className="mt-1 text-[13px] font-semibold text-[#E51937] transition-colors hover:text-[#FF6B7D]"
                >
                  Request early access
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
