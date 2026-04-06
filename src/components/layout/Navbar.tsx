import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../data/index';
import Button from '../ui/Button';
import Modal from '../ui/Modal';

function useScrollPosition() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return scrolled;
}

interface NavbarProps {
  onGetStarted?: () => void;
}

export default function Navbar({ onGetStarted }: NavbarProps) {
  const scrolled = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);
  const [localModalOpen, setLocalModalOpen] = useState(false);
  const modalOpen = localModalOpen;
  const handleGetStarted = onGetStarted ?? (() => setLocalModalOpen(true));

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(13,17,23,0.9)] backdrop-blur-xl border-b border-[#21262D] shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={() => setMenuOpen(false)}>
            <img
              src={`${import.meta.env.BASE_URL}logo-transparent.png`}
              alt="ClubConnect"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#8B949E] hover:text-[#F0F6FC] text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button variant="red" size="sm" onClick={handleGetStarted}>
              Get Started
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#8B949E] hover:text-[#F0F6FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8102E] rounded-lg"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#161B22] border-b border-[#21262D] shadow-2xl md:hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-[#8B949E] hover:text-[#F0F6FC] hover:bg-[#21262D] rounded-lg text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#21262D] flex flex-col gap-2">
                <Button variant="ghost" size="md" className="w-full justify-center">Sign In</Button>
                <Button
                  variant="red"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => { setMenuOpen(false); handleGetStarted(); }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Modal isOpen={modalOpen} onClose={() => setLocalModalOpen(false)} />
    </>
  );
}
