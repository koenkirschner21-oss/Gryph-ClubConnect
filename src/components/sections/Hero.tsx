import { motion } from 'framer-motion';
import { Shield, Users, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import MockupImage from '../mockups/MockupImage';
import { goToSection, JOIN_TESTING_ID, REQUEST_WALKTHROUGH_ID } from '../../lib/cta';

const trustItems = [
  { icon: GraduationCap, label: 'Student-built' },
  { icon: Users, label: 'Built for UofG club life' },
  { icon: Shield, label: 'Testing with students and club leaders' },
];

export default function Hero() {
  const navigate = useNavigate();

  const handleJoin = () => goToSection(JOIN_TESTING_ID, { navigate, pathname: '/' });
  const handleWalkthrough = () => goToSection(REQUEST_WALKTHROUGH_ID, { navigate, pathname: '/' });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0B0B]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#E51937] opacity-[0.05] blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#FFC429] opacity-[0.04] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div>
              <Badge variant="green" dot>Currently in early testing</Badge>
            </div>

            <h1 className="font-sans font-extrabold leading-[1.04] tracking-tight" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)' }}>
              <span className="block text-[#F5F5F5]">Discover campus life.</span>
              <span className="block bg-gradient-to-r from-[#FFC429] to-[#FFD45C] bg-clip-text text-transparent">
                Manage club life.
              </span>
            </h1>

            <p className="text-[#9CA3AF] text-xl sm:text-[22px]" style={{ maxWidth: '520px', lineHeight: '1.65' }}>
              Gryph ClubConnect helps UofG students find clubs, events, and opportunities while giving club leaders one workspace to manage members, announcements, events, tasks, hiring, and more.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Button variant="red" size="lg" onClick={handleJoin}>
                Join Testing
              </Button>
              <Button variant="ghost" size="lg" onClick={handleWalkthrough}>
                Request a Walkthrough
              </Button>
            </div>

            <div className="w-full h-px bg-[rgba(255,255,255,0.06)]" />

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-6 sm:gap-y-2">
              {trustItems.map(({ icon: Icon, label }) => (
                <p key={label} className="text-[#9CA3AF] text-sm font-sans flex items-center gap-2">
                  <Icon size={15} className="text-[#9CA3AF] shrink-0" />
                  {label}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative hidden sm:block"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[90%] h-[80%] rounded-3xl bg-[#E51937] opacity-[0.04] blur-[50px]" />
            </div>
            <div className="relative">
              <MockupImage
                name="dashboard"
                alt="Gryph ClubConnect student dashboard mockup"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
