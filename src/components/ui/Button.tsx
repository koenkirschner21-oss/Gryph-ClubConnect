import React from 'react';

type Variant = 'red' | 'gold' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const variantClasses: Record<Variant, string> = {
  red: 'bg-[#C8102E] hover:bg-[#A00C24] text-white font-semibold rounded-lg transition-all hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(200,16,46,0.4)] active:scale-[0.98]',
  gold: 'bg-[#D4A017] hover:bg-[#B8860B] text-[#0D1117] font-semibold rounded-lg transition-all hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(212,160,23,0.4)] active:scale-[0.98]',
  ghost: 'bg-transparent border border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.35)] text-[#F0F6FC] font-semibold rounded-lg transition-all',
  outline: 'bg-transparent border-2 border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white font-semibold rounded-lg transition-all hover:-translate-y-px active:scale-[0.98]',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

const focusClasses = 'focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2 focus:ring-offset-[#0D1117]';

export default function Button({
  variant = 'red',
  size = 'md',
  children,
  onClick,
  href,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const classes = [
    variantClasses[variant],
    sizeClasses[size],
    focusClasses,
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
    'inline-flex items-center justify-center gap-2',
    className,
  ].join(' ');

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
