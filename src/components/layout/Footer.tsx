import {
  ArrowRight,
  Instagram,
  Linkedin,
  Mail,
  Youtube,
  type LucideIcon,
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { goToDemoForm } from '../../lib/cta';
import BrandLogo from '../ui/BrandLogo';

const platformLinks: { label: string; href: string }[] = [
  { label: 'For Clubs', href: '/for-clubs' },
  { label: 'For Students', href: '/for-students' },
  { label: 'Features', href: '/features' },
  { label: 'Demo', href: '/demo' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

function TikTokIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 4v10.2a4.2 4.2 0 1 1-3.2-4.08" />
      <path d="M14 4c.65 2.45 2.35 3.95 5 4.45" />
    </svg>
  );
}

type SocialLink = {
  label: string;
  href: string;
  icon?: LucideIcon;
  customIcon?: 'tiktok';
};

const socialLinks: SocialLink[] = [
  {
    icon: Instagram,
    href: 'https://instagram.com/gryphclubconnect',
    label: 'Instagram',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/gryph-clubconnect/',
    label: 'LinkedIn',
  },
  {
    icon: Youtube,
    href: 'https://www.youtube.com/@GryphClubConnect',
    label: 'YouTube',
  },
  {
    customIcon: 'tiktok',
    href: 'https://www.tiktok.com/@gryphclubconnect',
    label: 'TikTok',
  },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="border-t border-[#222222] bg-[#0B0B0B]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="space-y-3">
            <BrandLogo variant="footer" />

            <p className="text-sm leading-relaxed text-[#9CA3AF]">
              Discover campus life. Manage club life.
              <br />
              A student-built platform for University of Guelph students and
              club leaders.
            </p>

            <div className="flex items-center gap-1.5 pt-0.5">
              {socialLinks.map(({ icon: Icon, customIcon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-[#9CA3AF] transition-colors hover:bg-[#222222] hover:text-[#F5F5F5]"
                >
                  {customIcon === 'tiktok' ? (
                    <TikTokIcon />
                  ) : Icon ? (
                    <Icon size={17} />
                  ) : null}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-[#F5F5F5]">
              Platform
            </h4>

            <ul className="space-y-2">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(link.href);
                    }}
                    className="group inline-flex items-center gap-1 text-sm text-[#9CA3AF] transition-colors hover:text-[#F5F5F5]"
                  >
                    {link.label}
                    <ArrowRight
                      size={12}
                      className="-translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-[#F5F5F5]">
              Company
            </h4>

            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(link.href);
                    }}
                    className="group inline-flex items-center gap-1 text-sm text-[#9CA3AF] transition-colors hover:text-[#F5F5F5]"
                  >
                    {link.label}
                    <ArrowRight
                      size={12}
                      className="-translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-[#F5F5F5]">
              Contact
            </h4>

            <div className="space-y-3">
              <a
                href="mailto:gryphclubconnect@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] transition-colors hover:text-[#F5F5F5]"
              >
                <Mail size={15} className="shrink-0" />
                gryphclubconnect@gmail.com
              </a>

              <button
                type="button"
                onClick={() =>
                  goToDemoForm({
                    interest: 'Onboard my club',
                    navigate,
                    pathname: location.pathname,
                  })
                }
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E51937]/20 bg-[rgba(229,25,55,0.12)] px-2.5 py-1 font-sans text-xs text-[#E51937] transition-colors hover:bg-[rgba(229,25,55,0.2)]"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E51937] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#E51937]" />
                </span>
                Early access
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#222222] px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2.5">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p className="text-center text-sm text-[#9CA3AF] sm:text-left">
              © 2026 Gryph ClubConnect.
            </p>

            <p className="text-center text-sm text-[#9CA3AF] sm:text-right">
              Built by students for UofG club life
            </p>
          </div>

          <p className="max-w-3xl text-center text-xs leading-relaxed text-[#777777] sm:text-left">
            Gryph ClubConnect is an independent student-built platform and is
            not officially affiliated with, endorsed by, or operated by the
            University of Guelph.
          </p>
        </div>
      </div>
    </footer>
  );
}
