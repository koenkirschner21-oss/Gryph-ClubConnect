import { Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { goToSection, ONBOARD_CLUB_ID } from '../../lib/cta';
import BrandLogo from '../ui/BrandLogo';

const platformLinks: { label: string; href?: string; hash?: string }[] = [
  { label: 'Features', href: '/features' },
  { label: 'For Clubs', href: '/for-clubs' },
  { label: 'Demo', hash: 'app-showcase' },
  { label: 'About', href: '/about' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/gryphclubconnect', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/gryphclubconnect', label: 'LinkedIn' },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="space-y-3">
            <BrandLogo variant="footer" />
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Discover campus life. Manage club life.
              <br />
              A student-built platform for UofG club life.
            </p>
            <div className="flex items-center gap-1.5 pt-0.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors p-2 rounded-lg hover:bg-[#222222]"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#F5F5F5] text-sm font-semibold mb-3">Platform</h4>
            <ul className="space-y-2">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.hash ? `/#/#${link.hash}` : `/#${link.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (link.hash) {
                        goToSection(link.hash, { navigate, pathname: location.pathname });
                        return;
                      }
                      if (link.href) navigate(link.href);
                    }}
                    className="text-[#9CA3AF] hover:text-[#F5F5F5] text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#F5F5F5] text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={`/#${link.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(link.href);
                    }}
                    className="text-[#9CA3AF] hover:text-[#F5F5F5] text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#F5F5F5] text-sm font-semibold mb-3">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@gryphclubconnect.com"
                className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors"
              >
                <Mail size={15} className="shrink-0" />
                hello@gryphclubconnect.com
              </a>
              <button
                type="button"
                onClick={() => goToSection(ONBOARD_CLUB_ID, { navigate, pathname: location.pathname })}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-sans bg-[rgba(229,25,55,0.12)] text-[#E51937] border border-[#E51937]/20 hover:bg-[rgba(229,25,55,0.2)] transition-colors"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E51937] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E51937]" />
                </span>
                Early access
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#222222] px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-2.5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[#9CA3AF] text-sm text-center sm:text-left">
              © 2026 Gryph ClubConnect.
            </p>
            <p className="text-[#9CA3AF] text-sm text-center sm:text-right">
              Built by students for UofG club life
            </p>
          </div>
          <p className="text-[#777777] text-xs text-center sm:text-left leading-relaxed max-w-3xl">
            Gryph ClubConnect is an independent student-built platform and is not officially affiliated with, endorsed by, or operated by the University of Guelph.
          </p>
        </div>
      </div>
    </footer>
  );
}
