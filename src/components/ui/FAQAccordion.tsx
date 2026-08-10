import { useId, useState } from 'react';
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
  const baseId = useId().replace(/:/g, '');

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, index) => {
        const panelId = `${baseId}-faq-panel-${index}`;
        const buttonId = `${baseId}-faq-button-${index}`;
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="border border-[#222222] rounded-xl overflow-hidden bg-[#1A1A1A] transition-colors hover:border-[#E51937]/30"
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E51937] focus-visible:ring-inset"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="text-[#F5F5F5] font-medium font-[DM_Sans,sans-serif] pr-4">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="flex-shrink-0 text-[#9CA3AF]"
                aria-hidden
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
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
        );
      })}
    </div>
  );
}
