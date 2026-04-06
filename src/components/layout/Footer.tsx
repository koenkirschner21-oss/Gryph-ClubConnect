import { Twitter, Instagram, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';

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
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0D1117] border-t border-[#21262D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <img
              src={`${import.meta.env.BASE_URL}logo-transparent.png`}
              alt="Gryph Club Connect"
              className="h-12 w-auto"
              loading="lazy"
            />
            <p className="text-[#9DA5AE] text-sm leading-relaxed">
              Every Club. One Platform.<br />
              Built for University of Guelph student clubs.
            </p>
            <p className="text-[#8B949E] text-sm">Made in Guelph, Ontario 🍁</p>
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B949E] hover:text-[#F0F6FC] transition-all p-2.5 rounded-lg hover:bg-[#21262D] hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Platform */}
          <div>
            <h4 className="text-[#F0F6FC] text-base font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#9DA5AE] hover:text-[#F0F6FC] text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-[#F0F6FC] text-base font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#9DA5AE] hover:text-[#F0F6FC] text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter + Contact */}
          <div>
            <h4 className="text-[#F0F6FC] text-base font-semibold mb-4">Stay Updated</h4>
            {subscribed ? (
              <div className="bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-lg px-4 py-3">
                <p className="text-[#22C55E] text-sm font-medium">✓ You're subscribed!</p>
                <p className="text-[#9DA5AE] text-sm mt-1">We'll keep you in the loop.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <p className="text-[#9DA5AE] text-sm">Get product updates and club tips.</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 relative">
                    <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B949E]" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@uoguelph.ca"
                      className="w-full bg-[#161B22] border border-[#21262D] rounded-lg pl-9 pr-3 py-2.5 text-sm text-[#F0F6FC] placeholder:text-[#8B949E] focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-[#C8102E] transition-colors"
                      required
                      aria-label="Email for newsletter"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#C8102E] hover:bg-[#A00C24] text-white p-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2 focus:ring-offset-[#0D1117]"
                    aria-label="Subscribe"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}

            <div className="mt-5 space-y-3">
              <div>
                <span className="text-[#8B949E] text-sm uppercase tracking-wide font-mono">Email</span>
                <p className="text-sm mt-0.5">
                  <a href="mailto:hello@gryphclubconnect.ca" className="text-[#9DA5AE] hover:text-[#F0F6FC] transition-colors">
                    hello@gryphclubconnect.ca
                  </a>
                </p>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-[rgba(200,16,46,0.12)] text-[#C8102E] border border-[#C8102E]/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8102E] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C8102E]" />
                  </span>
                  Beta · Free for UofG clubs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#21262D] px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#8B949E] text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Gryph Club Connect. University of Guelph.
          </p>
          <p className="text-[#8B949E] text-sm">
            Built for Gryphons, by Gryphons 🦅
          </p>
        </div>
      </div>
    </footer>
  );
}
