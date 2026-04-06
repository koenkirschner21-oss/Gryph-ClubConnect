import { motion } from 'framer-motion';

type BadgeVariant = 'red' | 'gold' | 'ghost' | 'green';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  dot?: boolean;
  className?: string;
}

const variantClasses: Record<BadgeVariant, { container: string; dot: string }> = {
  red: {
    container: 'bg-[rgba(200,16,46,0.15)] text-[#C8102E] border border-[#C8102E]/30',
    dot: 'bg-[#C8102E]',
  },
  gold: {
    container: 'bg-[rgba(212,160,23,0.15)] text-[#D4A017] border border-[#D4A017]/30',
    dot: 'bg-[#D4A017]',
  },
  ghost: {
    container: 'bg-[#21262D] text-[#8B949E] border border-[#21262D]',
    dot: 'bg-[#8B949E]',
  },
  green: {
    container: 'bg-[rgba(34,197,94,0.15)] text-[#22C55E] border border-[#22C55E]/30',
    dot: 'bg-[#22C55E]',
  },
};

export default function Badge({ variant = 'ghost', children, dot = false, className = '' }: BadgeProps) {
  const { container, dot: dotColor } = variantClasses[variant];

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium ${container} ${className}`}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotColor} opacity-75`} />
          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${dotColor}`} />
        </span>
      )}
      {children}
    </motion.span>
  );
}
