import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isActive = (href: string) => {
    const path = href.replace('/#', '');
    return location.pathname === path;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(13,17,23,0.92)] backdrop-blur-xl border-b border-[#21262D] shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between py-2">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group transition-transform duration-200 hover:scale-[1.03]"
            onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-label="ClubConnect Home"
          >
            <img
              src={`${import.meta.env.BASE_URL}logo-transparent.png`}
              alt="Gryph Club Connect — Every Club. One Platform."
              className="h-14 sm:h-16 w-auto drop-shadow-[0_0_8px_rgba(200,16,46,0.15)]"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                    active
                      ? 'text-[#F0F6FC]'
                      : 'text-[#8B949E] hover:text-[#F0F6FC] hover:bg-[#21262D]/50'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C8102E] rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </a>
              );
            })}
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
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="fixed inset-x-0 top-[72px] z-40 bg-[#161B22]/95 backdrop-blur-lg border-b border-[#21262D] shadow-2xl md:hidden"
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                      active
                        ? 'text-[#F0F6FC] bg-[#C8102E]/10 border border-[#C8102E]/20'
                        : 'text-[#8B949E] hover:text-[#F0F6FC] hover:bg-[#21262D]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-[#21262D] flex flex-col gap-2.5">
                <Button variant="ghost" size="md" className="w-full justify-center">Sign In</Button>
                <Button
                  variant="red"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => { setMenuOpen(false); handleGetStarted(); }}
                >
                  Get Started Free
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
