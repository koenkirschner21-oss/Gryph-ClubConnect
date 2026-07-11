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
    container: 'bg-[rgba(229,25,55,0.12)] text-[#E51937] border border-[#E51937]/25',
    dot: 'bg-[#E51937]',
  },
  gold: {
    container: 'bg-[rgba(255,196,41,0.12)] text-[#FFC429] border border-[#FFC429]/25',
    dot: 'bg-[#FFC429]',
  },
  ghost: {
    container: 'bg-[#1A1A1A] text-[#9CA3AF] border border-[#222222]',
    dot: 'bg-[#9CA3AF]',
  },
  green: {
    container: 'bg-[rgba(34,197,94,0.12)] text-[#22C55E] border border-[#22C55E]/25',
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
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${container} ${className}`}
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
