import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-[#222222] rounded-xl overflow-hidden bg-[#1A1A1A] transition-colors hover:border-[#E51937]/30"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-[#E51937] focus:ring-inset"
            aria-expanded={openIndex === index}
          >
            <span className="text-[#F5F5F5] font-medium font-[DM_Sans,sans-serif] pr-4">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="flex-shrink-0 text-[#9CA3AF]"
            >
              <ChevronDown size={18} />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="px-6 pb-5 text-[#9CA3AF] text-sm leading-relaxed border-t border-[#222222] pt-4">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
