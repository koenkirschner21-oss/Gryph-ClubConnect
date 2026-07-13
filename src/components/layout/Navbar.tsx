import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../data/index';
import Button from '../ui/Button';
import BrandLogo from '../ui/BrandLogo';
import { goToSection, goToDemoForm, APP_LOGIN_URL } from '../../lib/cta';

function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return scrollY;
}

type NavItem = {
  label: string;
  href: string;
  hash?: string;
};

export default function Navbar() {
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 20;
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  const isActive = (link: NavItem) => {
    if (link.hash) return location.pathname === '/' && typeof window !== 'undefined';
    const path = link.href.replace('/#', '');
    return location.pathname === path;
  };

  const handleNavClick = (e: React.MouseEvent, link: NavItem) => {
    e.preventDefault();
    setMenuOpen(false);
    if (link.hash) {
      goToSection(link.hash, { navigate, pathname: location.pathname });
      return;
    }
    const path = link.href.replace('/#', '');
    navigate(path);
  };

  const handleOnboard = () => {
    setMenuOpen(false);
    goToDemoForm({ interest: 'Onboard my club', navigate, pathname: location.pathname });
  };

  const handleLogIn = () => {
    setMenuOpen(false);
    window.location.href = APP_LOGIN_URL;
  };

  const OPACITY_TRANSITION_RATE = 0.00625;
  const bgOpacity = scrolled ? Math.min(0.95, 0.7 + (scrollY - 20) * OPACITY_TRANSITION_RATE) : 0;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl border-b border-[#222222] shadow-lg shadow-black/20'
          : 'bg-transparent backdrop-blur-md'
      }`}
      style={scrolled ? { backgroundColor: `rgba(11,11,11,${bgOpacity})` } : undefined}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[64px] sm:h-[72px] flex items-center justify-between py-2">
        <Link
          to="/"
          className="flex items-center group transition-opacity duration-200 hover:opacity-90"
          onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          aria-label="Gryph ClubConnect Home"
        >
          <BrandLogo variant="nav" />
        </Link>

        <div className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const active = !link.hash && isActive(link);
            return (
              <a
                key={link.label}
                href={link.hash ? `/#/#${link.hash}` : link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative px-4 py-2.5 text-[15px] font-medium transition-colors rounded-lg ${
                  active
                    ? 'text-[#F5F5F5]'
                    : 'text-[#9CA3AF] hover:text-[#F5F5F5] hover:bg-[#222222]/50'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
                {active && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#E51937] rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="md" onClick={handleLogIn}>Log In</Button>
          <Button variant="red" size="md" onClick={handleOnboard} className="shadow-[0_2px_12px_rgba(229,25,55,0.3)]">
            Onboard Your Club
          </Button>
        </div>

        <button
          className="md:hidden p-2.5 text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E51937] rounded-lg"
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] sm:top-[72px] z-40 bg-[#111111]/95 backdrop-blur-lg border-b border-[#222222] shadow-2xl md:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link) => {
                const active = !link.hash && isActive(link);
                return (
                  <a
                    key={link.label}
                    href={link.hash ? `/#/#${link.hash}` : link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`block px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all ${
                      active
                        ? 'text-[#F5F5F5] bg-[#E51937]/10 border border-[#E51937]/20'
                        : 'text-[#9CA3AF] hover:text-[#F5F5F5] hover:bg-[#222222]'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-[#222222] flex flex-col gap-2.5">
                <Button variant="ghost" size="md" className="w-full justify-center" onClick={handleLogIn}>Log In</Button>
                <Button
                  variant="red"
                  size="md"
                  className="w-full justify-center"
                  onClick={handleOnboard}
                >
                  Onboard Your Club
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
