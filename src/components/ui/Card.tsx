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
    ? 'border border-[#D4A017]/50'
    : 'border border-[#21262D]';

  const shadowBase = featured
    ? 'shadow-[0_0_30px_rgba(212,160,23,0.12)]'
    : '';

  return (
    <motion.div
      onClick={onClick}
      whileHover={{
        y: -4,
        borderColor: featured ? 'rgba(212,160,23,0.7)' : 'rgba(200,16,46,0.3)',
        boxShadow: featured
          ? '0 0 40px rgba(212,160,23,0.2), 0 20px 40px rgba(0,0,0,0.3)'
          : '0 0 30px rgba(200,16,46,0.12), 0 20px 40px rgba(0,0,0,0.3)',
        transition: { duration: 0.2 },
      }}
      className={`bg-[#1A1F26] ${borderBase} ${shadowBase} rounded-xl overflow-hidden ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {featured && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#D4A017]/5 to-transparent pointer-events-none" />
      )}
      {children}
    </motion.div>
  );
}
