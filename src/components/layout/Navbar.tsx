import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../../data/index';
import Button from '../ui/Button';
import BrandLogo from '../ui/BrandLogo';
import {
  APP_LOGIN_URL,
  goToDemoForm,
  goToSection,
} from '../../lib/cta';

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
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (location.hash) {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  const isActive = (link: NavItem) => {
    if (link.hash) {
      return location.pathname === '/' && typeof window !== 'undefined';
    }

    return location.pathname === link.href;
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: NavItem,
  ) => {
    event.preventDefault();
    setMenuOpen(false);

    if (link.hash) {
      goToSection(link.hash, {
        navigate,
        pathname: location.pathname,
      });
      return;
    }

    navigate(link.href);
  };

  const handleGetStarted = () => {
    setMenuOpen(false);

    goToDemoForm({
      interest: 'Onboard my club',
      navigate,
      pathname: location.pathname,
    });
  };

  const handleLogIn = () => {
    setMenuOpen(false);
    window.location.href = APP_LOGIN_URL;
  };

  const OPACITY_TRANSITION_RATE = 0.00625;
  const bgOpacity = scrolled
    ? Math.min(0.95, 0.7 + (scrollY - 20) * OPACITY_TRANSITION_RATE)
    : 0;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#222222] shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'bg-transparent backdrop-blur-md'
      }`}
      style={
        scrolled
          ? { backgroundColor: `rgba(11,11,11,${bgOpacity})` }
          : undefined
      }
    >
      <nav className="mx-auto flex h-[64px] max-w-7xl items-center justify-between px-4 py-2 sm:h-[72px] sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex min-w-0 shrink items-center transition-opacity duration-200 hover:opacity-90"
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Gryph ClubConnect Home"
        >
          <BrandLogo variant="nav" className="min-w-0" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = !link.hash && isActive(link);

            return (
              <a
                key={link.label}
                href={link.hash ? `/#${link.hash}` : link.href}
                onClick={(event) => handleNavClick(event, link)}
                className={`relative whitespace-nowrap rounded-lg px-3 py-2.5 text-[14px] font-medium transition-colors xl:px-4 xl:text-[15px] ${
                  active
                    ? 'text-[#F5F5F5]'
                    : 'text-[#9CA3AF] hover:bg-[#222222]/50 hover:text-[#F5F5F5]'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}

                {active && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#E51937] xl:left-4 xl:right-4"
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.4,
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Button variant="ghost" size="md" onClick={handleLogIn}>
            Log In
          </Button>

          <Button
            variant="red"
            size="md"
            onClick={handleGetStarted}
            className="whitespace-nowrap shadow-[0_2px_12px_rgba(229,25,55,0.3)]"
          >
            Get Your Club Started
          </Button>
        </div>

        <button
          className="rounded-lg p-2.5 text-[#9CA3AF] transition-colors hover:text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#E51937] lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
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
            className="fixed inset-x-0 top-[64px] z-40 max-h-[calc(100dvh-64px)] overflow-y-auto border-b border-[#222222] bg-[#111111]/95 shadow-2xl backdrop-blur-lg sm:top-[72px] sm:max-h-[calc(100dvh-72px)] lg:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1 px-4 py-5">
              {navLinks.map((link) => {
                const active = !link.hash && isActive(link);

                return (
                  <a
                    key={link.label}
                    href={link.hash ? `/#${link.hash}` : link.href}
                    onClick={(event) => handleNavClick(event, link)}
                    className={`block rounded-xl px-4 py-3.5 text-[15px] font-medium transition-all ${
                      active
                        ? 'border border-[#E51937]/20 bg-[#E51937]/10 text-[#F5F5F5]'
                        : 'text-[#9CA3AF] hover:bg-[#222222] hover:text-[#F5F5F5]'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="flex flex-col gap-2.5 border-t border-[#222222] pt-4">
                <Button
                  variant="ghost"
                  size="md"
                  className="w-full justify-center"
                  onClick={handleLogIn}
                >
                  Log In
                </Button>

                <Button
                  variant="red"
                  size="md"
                  className="w-full justify-center"
                  onClick={handleGetStarted}
                >
                  Get Your Club Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
