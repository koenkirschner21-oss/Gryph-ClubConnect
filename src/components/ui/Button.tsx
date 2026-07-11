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
  red: 'bg-[#E51937] hover:bg-[#C4122E] text-white font-semibold rounded-[10px] transition-colors active:scale-[0.98]',
  gold: 'bg-[#FFC429] hover:bg-[#E0A800] text-[#0B0B0B] font-semibold rounded-[10px] transition-colors active:scale-[0.98]',
  ghost: 'bg-transparent border border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.2)] text-[#F5F5F5] font-semibold rounded-[10px] transition-colors',
  outline: 'bg-transparent border border-[#E51937] text-[#E51937] hover:bg-[#E51937] hover:text-white font-semibold rounded-[10px] transition-colors active:scale-[0.98]',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const focusClasses = 'focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:ring-offset-2 focus:ring-offset-[#0B0B0B]';

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
    'inline-flex items-center justify-center gap-2 font-[Inter,ui-sans-serif,system-ui,sans-serif]',
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
