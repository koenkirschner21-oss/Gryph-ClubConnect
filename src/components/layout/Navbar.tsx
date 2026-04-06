import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../data/index';
import Button from '../ui/Button';
import Modal from '../ui/Modal';

function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return scrollY;
}

interface NavbarProps {
  onGetStarted?: () => void;
}

export default function Navbar({ onGetStarted }: NavbarProps) {
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 20;
  const [menuOpen, setMenuOpen] = useState(false);
  const [localModalOpen, setLocalModalOpen] = useState(false);
  const modalOpen = localModalOpen;
  const handleGetStarted = onGetStarted ?? (() => setLocalModalOpen(true));
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const path = href.replace('/#', '');
    navigate(path);
  };

  // Dynamic opacity: 70% at top → 95% when scrolled past 60px (rate = 0.25 / 40px)
  const OPACITY_TRANSITION_RATE = 0.00625;
  const bgOpacity = scrolled ? Math.min(0.95, 0.7 + (scrollY - 20) * OPACITY_TRANSITION_RATE) : 0;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl border-b border-[#21262D] shadow-lg shadow-black/20'
            : 'bg-transparent backdrop-blur-md'
        }`}
        style={scrolled ? { backgroundColor: `rgba(13,17,23,${bgOpacity})` } : undefined}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between py-2">
          {/* Logo — no background, transparent PNG only */}
          <Link
            to="/"
            className="flex items-center group transition-transform duration-200 hover:scale-[1.03]"
            onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-label="Gryph Club Connect Home"
          >
            <img
              src={`${import.meta.env.BASE_URL}logo-transparent.png`}
              alt="Gryph Club Connect"
              className="h-[68px] sm:h-20 w-auto drop-shadow-[0_0_8px_rgba(200,16,46,0.15)]"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2.5 text-[15px] font-medium transition-colors rounded-lg ${
                    active
                      ? 'text-[#F0F6FC]'
                      : 'text-[#8B949E] hover:text-[#F0F6FC] hover:bg-[#21262D]/50'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#C8102E] rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="md" onClick={handleGetStarted}>Sign In</Button>
            <Button variant="red" size="md" onClick={handleGetStarted} className="shadow-[0_2px_12px_rgba(200,16,46,0.3)]">
              Get Started
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2.5 text-[#8B949E] hover:text-[#F0F6FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8102E] rounded-lg"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
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
            className="fixed inset-x-0 top-[76px] z-40 bg-[#161B22]/95 backdrop-blur-lg border-b border-[#21262D] shadow-2xl md:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { handleNavClick(e, link.href); setMenuOpen(false); }}
                    className={`block px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all ${
                      active
                        ? 'text-[#F0F6FC] bg-[#C8102E]/10 border border-[#C8102E]/20'
                        : 'text-[#8B949E] hover:text-[#F0F6FC] hover:bg-[#21262D]'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-[#21262D] flex flex-col gap-2.5">
                <Button variant="ghost" size="md" className="w-full justify-center" onClick={() => { setMenuOpen(false); handleGetStarted(); }}>Sign In</Button>
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
