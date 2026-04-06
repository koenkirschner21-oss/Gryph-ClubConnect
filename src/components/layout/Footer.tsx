import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const platformLinks = [
  { label: 'Features', href: '/#/features' },
  { label: 'How It Works', href: '/#/how-it-works' },
  { label: 'Pricing', href: '/#/pricing' },
  { label: 'For Clubs', href: '/#/for-clubs' },
];

const companyLinks = [
  { label: 'About', href: '/#/about' },
  { label: 'Blog', href: '/#/blog' },
  { label: 'Careers', href: '/#/careers' },
  { label: 'Privacy', href: '/#/privacy' },
  { label: 'Terms', href: '/#/terms' },
];

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/GryphClubCo', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/gryphclubconnect', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/gryphclubconnect', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/gryphclubconnect', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] border-t border-[#21262D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <span className="text-[#C8102E] font-bold italic text-xl font-serif">Club</span>
              <span className="text-[#D4A017] font-bold italic text-xl font-serif">Connect</span>
              <span className="ml-1 text-base">🦅</span>
            </div>
            <p className="text-[#8B949E] text-sm leading-relaxed">Every Club. One Platform.</p>
            <p className="text-[#6E7681] text-xs">Made in Guelph, Ontario 🍁</p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6E7681] hover:text-[#F0F6FC] transition-colors p-1.5 rounded-lg hover:bg-[#21262D]"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Platform */}
          <div>
            <h4 className="text-[#F0F6FC] text-sm font-semibold mb-4">Platform</h4>
            <ul className="space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#8B949E] hover:text-[#F0F6FC] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-[#F0F6FC] text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#8B949E] hover:text-[#F0F6FC] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-[#F0F6FC] text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <span className="text-[#6E7681] text-xs uppercase tracking-wide font-mono">Email</span>
                <p className="text-[#8B949E] hover:text-[#F0F6FC] text-sm transition-colors mt-0.5">
                  <a href="mailto:hello@gryphclubconnect.ca">hello@gryphclubconnect.ca</a>
                </p>
              </li>
              <li>
                <span className="text-[#6E7681] text-xs uppercase tracking-wide font-mono">Twitter</span>
                <p className="text-[#8B949E] hover:text-[#F0F6FC] text-sm transition-colors mt-0.5">
                  <a href="https://twitter.com/GryphClubCo" target="_blank" rel="noopener noreferrer">
                    @GryphClubCo
                  </a>
                </p>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-[rgba(200,16,46,0.12)] text-[#C8102E] border border-[#C8102E]/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8102E] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C8102E]" />
                  </span>
                  Beta · Free for UofG clubs
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#21262D] px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#6E7681] text-xs text-center sm:text-left">
            © 2026 Gryph Club Connect. University of Guelph.
          </p>
          <p className="text-[#6E7681] text-xs">
            Built for Gryphons, by Gryphons 🦅
          </p>
        </div>
      </div>
    </footer>
  );
}
