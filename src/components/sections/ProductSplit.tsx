import { Compass, LayoutGrid } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';

export default function ProductSplit() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-sm font-sans text-[#E51937] uppercase tracking-wider mb-4 block">The product</span>
          <h2 className="text-[2.5rem] sm:text-[3.25rem] font-extrabold text-[#F5F5F5] font-sans mb-4">
            Built for both sides of club life.
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Students need discovery. Club leaders need operations. Gryph ClubConnect connects both in one platform.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
          <StaggerItem>
            <div id="for-students" className="scroll-mt-24 h-full bg-[#131313] border border-[#222222] rounded-[12px] p-8 border-t-[3px] border-t-[#E51937]">
              <div className="w-11 h-11 rounded-[10px] bg-[rgba(229,25,55,0.12)] border border-[#E51937]/25 flex items-center justify-center mb-5">
                <Compass size={22} className="text-[#E51937]" />
              </div>
              <h3 className="text-2xl font-bold text-[#F5F5F5] font-sans mb-3">For students</h3>
              <p className="text-[#9CA3AF] text-[15px] leading-relaxed mb-6">
                Discover clubs, find events, apply for roles, and keep track of the groups you care about from one account.
              </p>
              <ul className="space-y-2.5">
                {['Explore clubs', 'Sign up for events', 'Apply for roles', 'Track involvement'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#F5F5F5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E51937] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="h-full bg-[#131313] border border-[#222222] rounded-[12px] p-8 border-t-[3px] border-t-[#FFC429]">
              <div className="w-11 h-11 rounded-[10px] bg-[rgba(255,196,41,0.12)] border border-[#FFC429]/25 flex items-center justify-center mb-5">
                <LayoutGrid size={22} className="text-[#FFC429]" />
              </div>
              <h3 className="text-2xl font-bold text-[#F5F5F5] font-sans mb-3">For club leaders</h3>
              <p className="text-[#9CA3AF] text-[15px] leading-relaxed mb-6">
                Manage members, announcements, events, tasks, hiring, and permissions from one organized workspace.
              </p>
              <ul className="space-y-2.5">
                {['Manage club operations', 'Review requests and applications', 'Assign tasks', 'Coordinate events'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#F5F5F5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFC429] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
