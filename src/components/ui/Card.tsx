import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = '', featured = false, onClick }: CardProps) {
  const borderBase = featured
    ? 'border border-[#FFC429]/40'
    : 'border border-[#222222]';

  const shadowBase = featured
    ? 'shadow-[0_4px_20px_rgba(0,0,0,0.45)]'
    : '';

  return (
    <motion.div
      onClick={onClick}
      whileHover={{
        y: -2,
        borderColor: featured ? 'rgba(255,196,41,0.55)' : 'rgba(229,25,55,0.35)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        transition: { duration: 0.2 },
      }}
      className={`bg-[#1A1A1A] ${borderBase} ${shadowBase} rounded-[12px] overflow-hidden ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {featured && (
        <div className="absolute inset-0 rounded-[12px] bg-gradient-to-br from-[#FFC429]/[0.04] to-transparent pointer-events-none" />
      )}
      {children}
    </motion.div>
  );
}
