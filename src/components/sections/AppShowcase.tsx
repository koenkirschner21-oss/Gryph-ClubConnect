Today 10:41 AM
Okay I am starting a new chat because the other one is getting really laggy take a look at the weekday world breif chat and let me know if there is any issues I want you to refresh your memory and conitnue the conversation here
I already did that we are working on the exectutuon plan for the upcoming weeks to prepare for launch 
now based off that I need to know what I can work on while away from my personal laptop what can I work on from work 
So I have the codebase for my website on github but I use cursor to edit it and I use vercel to deploy it can I use copiolit in github ot update the old screenshots with the new mocks I have? 
blob:https://www.photoroom.com/06d517e3-ab90-48f1-97d3-d97223d03d99
This is what I am going to use as the hero for the homepage 
it stopped after that message
I don't have access to the image data from your attachment in this context. To proceed, I need you to provide the image file in one of these ways:

Base64 encoded string - You can convert the image to base64 and paste it here
Direct file content - If you have the image data available
Image URL - A direct link to the image file
Once you provide the image data, I'll:

Save it to public/screenshots/clubconnect-homepage-hero.png
Add a new hero key to the SCREENSHOTS object in MockupImage.tsx
Update Hero.tsx to use this new image with object-fit: contain
Preserve all existing layout and styling
Create a PR with all changes documented
Could you share the image data so I can proceed?

I have no clue what is going on
Okay I just uploaded it but not sure in the right place if you can tell copioloit to put it in the right place and swap it out now with the newly updated one 
Okay it is doing it now the pull request
Okay it didnt work can I just go in and update it manually
const SCREENSHOTS = {
  dashboard: 'screenshots/01-hero-student-dashboard-adam.png',
  explore: 'screenshots/explore-clubs-grid.png',
  workspace: 'screenshots/command-center-president-top.png',
  events: 'screenshots/events-management-outdoor.png',
  tasks: 'screenshots/tasks-assigned-to-me.png',
  hiring: 'screenshots/hiring-management-applicant-review.png',
  members: 'screenshots/members-president-view-invites-code.png',
  heroHero: 'screenshots/clubconnect-homepage-hero.png',
} as const;

export type MockupKey = keyof typeof SCREENSHOTS;

const ALTS: Record<MockupKey, string> = {
  dashboard: 'Gryph ClubConnect student dashboard',
  explore: 'Gryph ClubConnect explore clubs',
  workspace: 'Gryph ClubConnect club command center',
  events: 'Gryph ClubConnect events management',
  tasks: 'Gryph ClubConnect tasks assigned to me',
  hiring: 'Gryph ClubConnect hiring and applicant review',
  members: 'Gryph ClubConnect members and invite code',
  heroHero: 'Gryph ClubConnect homepage hero',
};

export function mockupSrc(key: MockupKey): string {
  return ${import.meta.env.BASE_URL}${SCREENSHOTS[key]};
}

export default function MockupImage({
  name,
  alt,
  className = '',
  imgClassName = '',
}: {
  name: MockupKey;
  alt?: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={rounded-[12px] border border-[#222222] bg-[#131313] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.5)] ${className}}
    >
      <img
        src={mockupSrc(name)}
        alt={alt ?? ALTS[name]}
        className={w-full h-auto block object-contain ${imgClassName}}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import MockupImage from '../mockups/MockupImage';
import { goToDemoForm } from '../../lib/cta';

export default function Hero() {
  const navigate = useNavigate();

  const handleOnboard = () => {
    goToDemoForm({ interest: 'Onboard my club', navigate, pathname: '/' });
  };

  const handleDemo = () => {
    goToDemoForm({ interest: 'Request a demo', navigate, pathname: '/' });
  };

  return (
    <section className="relative flex items-center overflow-hidden bg-[#0B0B0B] min-h-[88vh] lg:min-h-[calc(100vh-4rem)]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px),
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-[#E51937] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-24 pb-12 sm:pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 sm:gap-5"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429]">
                Early access
              </span>
              <span className="h-px w-4 bg-[#E51937] shrink-0" aria-hidden />
              <p className="text-[13px] text-[#9CA3AF] leading-snug">
                Early access onboarding is open for UofG clubs.
              </p>
            </div>

            <h1
              className="font-sans font-extrabold leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.35rem, 5.2vw, 4rem)' }}
            >
              <span className="block text-[#F5F5F5]">Discover campus life.</span>
              <span className="block text-[#FFC429]">Manage club life.</span>
            </h1>

            <p
              className="text-[#9CA3AF] text-lg sm:text-xl max-w-[34rem]"
              style={{ lineHeight: '1.65' }}
            >
              Gryph ClubConnect helps students discover clubs, events, and opportunities while giving club leaders one workspace for members, announcements, events, tasks, hiring, meetings, docume[...]
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-0.5">
              <Button
                variant="red"
                size="lg"
                onClick={handleOnboard}
                className="w-full sm:w-auto shadow-[0_8px_24px_rgba(229,25,55,0.22)]"
              >
                Onboard Your Club
              </Button>
              <Button variant="ghost" size="lg" onClick={handleDemo} className="w-full sm:w-auto">
                Request a Demo
              </Button>
            </div>

            <div className="pt-0.5">
              <div className="h-px w-full max-w-md bg-[#222222]" />
              <p className="mt-2.5 text-[12px] sm:text-[13px] text-[#9CA3AF] font-medium tracking-tight">
                Student-built · Built for UofG club life · Early club onboarding now open
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative hidden sm:block lg:pl-2"
          >
            <MockupImage
              name="heroHero"
              alt="Gryph ClubConnect homepage hero"
              className="relative rounded-[12px] border border-[#242424] bg-[#131313] shadow-[0_20px_50px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.04]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
just rewite the whole thing I am not going to look through all that
I dont think you can upload a photo is there a way to do it by just pasting code?
Okay I think I did it its in there 
It worked but I think the quaility is shit thoughts? 
Hero.tsx
TypeScript
just write the whole thing again
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import MockupImage from '../mockups/MockupImage';
import { goToDemoForm } from '../../lib/cta';

export default function Hero() {
  const navigate = useNavigate();

  const handleOnboard = () => {
    goToDemoForm({
      interest: 'Onboard my club',
      navigate,
      pathname: '/',
    });
  };

  const handleDemo = () => {
    goToDemoForm({
      interest: 'Request a demo',
      navigate,
      pathname: '/',
    });
  };

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#0B0B0B] lg:min-h-[calc(100vh-4rem)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#E51937] opacity-[0.03] blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-4 sm:gap-5"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFC429] sm:text-xs">
                Early access
              </span>

              <span
                className="h-px w-4 shrink-0 bg-[#E51937]"
                aria-hidden
              />

              <p className="text-[13px] leading-snug text-[#9CA3AF]">
                Early access onboarding is open for UofG clubs.
              </p>
            </div>

            <h1
              className="font-sans font-extrabold leading-[1.05] tracking-tight"
              style={{
                fontSize: 'clamp(2.35rem, 5.2vw, 4rem)',
              }}
            >
              <span className="block text-[#F5F5F5]">
                Discover campus life.
              </span>

              <span className="block text-[#FFC429]">
                Manage club life.
              </span>
            </h1>

            <p
              className="max-w-[34rem] text-lg text-[#9CA3AF] sm:text-xl"
              style={{
                lineHeight: '1.65',
              }}
            >
              Gryph ClubConnect helps students discover clubs, events, and
              opportunities while giving club leaders one workspace for
              members, announcements, events, tasks, hiring, meetings, and
              documents.
            </p>

            <div className="flex flex-col items-stretch gap-3 pt-0.5 sm:flex-row sm:items-center">
              <Button
                variant="red"
                size="lg"
                onClick={handleOnboard}
                className="w-full shadow-[0_8px_24px_rgba(229,25,55,0.22)] sm:w-auto"
              >
                Onboard Your Club
              </Button>

              <Button
                variant="ghost"
                size="lg"
                onClick={handleDemo}
                className="w-full sm:w-auto"
              >
                Request a Demo
              </Button>
            </div>

            <div className="pt-0.5">
              <div className="h-px w-full max-w-md bg-[#222222]" />

              <p className="mt-2.5 text-[12px] font-medium tracking-tight text-[#9CA3AF] sm:text-[13px]">
                Student-built · Built for UofG club life · Early club
                onboarding now open
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            className="relative block lg:-mr-10 xl:-mr-16"
          >
            <MockupImage
              name="heroHero"
              alt="Gryph ClubConnect homepage hero"
              className="relative !overflow-visible !rounded-none !border-0 !bg-transparent !shadow-none !ring-0"
              imgClassName="h-auto w-full scale-[1.12] object-contain lg:scale-[1.20]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
Now I want to do the same for the club command center 

Yep — same process.

For the For Clubs page, the placeholder is almost certainly using the existing workspace screenshot mapping:

workspace: 'screenshots/command-center-president-top.png',

So the cleanest approach is:

Create your new polished command-center mockup.
Upload it to:
public/screenshots
Name it:
clubconnect-club-command-center-hero.png
In MockupImage.tsx, add:
clubHero: 'screenshots/clubconnect-club-command-center-hero.png',

and in ALTS add:

clubHero: 'Gryph ClubConnect club command center hero',
Then open the clubs page component and replace the placeholder/old hero image with:
<MockupImage
  name="clubHero"
  alt="Gryph ClubConnect club command center hero"
  className="relative !overflow-visible !rounded-none !border-0 !bg-transparent !shadow-none !ring-0"
  imgClassName="h-auto w-full object-contain"
/>

The file to look for is probably something like:

src/pages/ForClubs.tsx

or:

src/components/sections/ForClubsHero.tsx

Search the repo for this exact placeholder text:

Placeholder screenshot — Club Command Center

That will take you directly to the right file.

First lets work on the mock up I think It should be the same type of visual with the laptop and the phone mayb ejust the laptop for this one ? can you make it I will remove the background my self so dont worry abou tthat 
Worked for 58s
Edit
Okay now lets do it lets get it in 
I need a step by step this is confusing me 
This is it if I can just replace the whole thing
const SCREENSHOTS = {
  dashboard: 'screenshots/01-hero-student-dashboard-adam.png',
  explore: 'screenshots/explore-clubs-grid.png',
  workspace: 'screenshots/command-center-president-top.png',
  events: 'screenshots/events-management-outdoor.png',
  tasks: 'screenshots/tasks-assigned-to-me.png',
  hiring: 'screenshots/hiring-management-applicant-review.png',
  members: 'screenshots/members-president-view-invites-code.png',
  heroHero: 'screenshots/clubconnect-homepage-hero.png',
} as const;

export type MockupKey = keyof typeof SCREENSHOTS;

const ALTS: Record<MockupKey, string> = {
  dashboard: 'Gryph ClubConnect student dashboard',
  explore: 'Gryph ClubConnect explore clubs',
  workspace: 'Gryph ClubConnect club command center',
  events: 'Gryph ClubConnect events management',
  tasks: 'Gryph ClubConnect tasks assigned to me',
  hiring: 'Gryph ClubConnect hiring and applicant review',
  members: 'Gryph ClubConnect members and invite code',
  heroHero: 'Gryph ClubConnect homepage hero',
};

export function mockupSrc(key: MockupKey): string {
  return ${import.meta.env.BASE_URL}${SCREENSHOTS[key]};
}

export default function MockupImage({
  name,
  alt,
  className = '',
  imgClassName = '',
}: {
  name: MockupKey;
  alt?: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={rounded-[12px] border border-[#222222] bg-[#131313] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.5)] ${className}}
    >
      <img
        src={mockupSrc(name)}
        alt={alt ?? ALTS[name]}
        className={w-full h-auto block object-contain ${imgClassName}}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
I dont think it worked
this was the old one public/screenshots/command-center-president-top.png
public/screenshots/command-center-pr7esident-top.png
what are you talking about 
Okay lets re do it I uploaded the new proper version what should the name be
Okay did it 
non comes up
didnt we just face this issue with the first one cant we just do the same process to fix it
Pasted text(27).txt
Document
Take a look 
Okay now we need to do the same process for the for clubs page what is your suggestion in terms of laptop or phone mock  and what should we showcase 
I think these would be the best for it dont worry about the background I will handle that but make it I have no mock for phone or laptop yet so fit it jow you think it should and make sure that the content on it is accuarate based on what I sent and ensure that it is visbile and readabke 
Worked for 1m 16s
Edit
Edit

Exactly. The image file existing at:

public/screenshots/clubconnect-student-hero.png

does not make it appear automatically. We need to update the actual For Students page component, just like we did for the Clubs page.

Do this next:

In GitHub, search for this exact headline:
Find clubs, events, and roles without hunting through group chats.
Open the code file containing that headline.
Copy the entire file and paste or upload it here.

I’ll verify the actual hero code, add the correct MockupImage import, replace the FeatureScreenshotPlaceholder, and rewrite the full file for you to copy and paste. We will not change MockupImage.tsx or guess which key the page uses until we inspect that real file.

Pasted text(28).txt
Document

I updated the actual For Students page file using the same process that worked for the Clubs page. The current hero was still rendering FeatureScreenshotPlaceholder, so I replaced that exact block with the new student mockup.

ForStudentsPage.tsx

Before pasting it in, update MockupImage.tsx so it includes this entry:

studentHero: 'screenshots/clubconnect-student-hero.png',

and this alt text:

studentHero: 'Gryph ClubConnect student dashboard and club discovery',

Then replace the full For Students page file with the downloaded version and commit it. 

need the new copy and paste

Replace the entire MockupImage.tsx file with this:

const SCREENSHOTS = {
  dashboard: 'screenshots/01-hero-student-dashboard-adam.png',
  explore: 'screenshots/explore-clubs-grid.png',
  workspace: 'screenshots/clubconnect-club-command-center-hero.png',
  events: 'screenshots/events-management-outdoor.png',
  tasks: 'screenshots/tasks-assigned-to-me.png',
  hiring: 'screenshots/hiring-management-applicant-review.png',
  members: 'screenshots/members-president-view-invites-code.png',
  heroHero: 'screenshots/clubconnect-homepage-hero.png',
  studentHero: 'screenshots/clubconnect-student-hero.png',
} as const;

export type MockupKey = keyof typeof SCREENSHOTS;

const ALTS: Record<MockupKey, string> = {
  dashboard: 'Gryph ClubConnect student dashboard',
  explore: 'Gryph ClubConnect explore clubs',
  workspace: 'Gryph ClubConnect club command center',
  events: 'Gryph ClubConnect events management',
  tasks: 'Gryph ClubConnect tasks assigned to me',
  hiring: 'Gryph ClubConnect hiring and applicant review',
  members: 'Gryph ClubConnect members and invite code',
  heroHero: 'Gryph ClubConnect homepage hero',
  studentHero: 'Gryph ClubConnect student dashboard and club discovery',
};

export function mockupSrc(key: MockupKey): string {
  return `${import.meta.env.BASE_URL}${SCREENSHOTS[key]}`;
}

export default function MockupImage({
  name,
  alt,
  className = '',
  imgClassName = '',
}: {
  name: MockupKey;
  alt?: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={`rounded-[12px] border border-[#222222] bg-[#131313] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.5)] ${className}`}
    >
      <img
        src={mockupSrc(name)}
        alt={alt ?? ALTS[name]}
        className={`w-full h-auto block object-contain ${imgClassName}`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

Then commit this file. After that, replace the full For Students page with the updated file:

ForStudentsPage.tsx

help

The fix is simple: remove this unused import from ForStudentsPage.tsx:

import FeatureScreenshotPlaceholder from '../components/features/FeatureScreenshotPlaceholder';

You replaced the hero placeholder, so that import is no longer used anywhere in the file.

The top of the file should include:

import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import MockupImage from '../components/mockups/MockupImage';
import ClubWorkflowSlideshow, {
  type ClubWorkflowStep,
} from '../components/clubs/ClubWorkflowSlideshow';

Delete only the FeatureScreenshotPlaceholder import, commit the change, and Vercel should build again.

confused step by step

Do this exactly:

Open this file in GitHub:
src/pages/ForStudentsPage.tsx
At the top, find this line:
import FeatureScreenshotPlaceholder from '../components/features/FeatureScreenshotPlaceholder';
Delete that entire line.
Make sure this line is still there:
import MockupImage from '../components/mockups/MockupImage';
Click Commit changes.
Wait for Vercel to run again.

That is the only fix needed for this error.

Pasted text(29).txt
Document
this is it now what do we need to change it to and just give me the copy and paste for it 

I created the entire corrected file with the unused import removed.

ForStudentsPage-fixed.tsx

Open:

src/pages/ForStudentsPage.tsx

Delete everything currently inside it, paste the full contents of the downloaded file, and commit the change. 

thoughts 

This looks strong and consistent with the Clubs page.

What works well:

The student mockup is clearly different from the club-management mockup.
The tablet + phone composition fits the student use case better.
The headline, copy, and visual all support the same message.
The device screens are readable enough at this size.
The right side has good visual weight without feeling oversized.
The black background blends cleanly with the device edges.

I would keep it as-is. The only optional adjustment would be moving the mockup slightly left or making it about 3–5% larger, but it is already launch-ready.

next its this one for the demo page what do you think should go there in the mean time we dont have demo videos yet 

Until the real demo videos are ready, I’d use a premium “product tour preview” mockup instead of another plain screenshot.

Best option:

Laptop in the back showing the Club Command Center
Phone in front showing Explore Clubs or Events
A subtle centered play button overlay
Small label like “Demo walkthrough coming soon”
Keep the devices readable and the overlay minimal so it still feels like a real product preview

That visual fits the page better because the demo page is supposed to represent the full platform, not only the club side or only the student side.

I’d showcase:

Laptop: Club Command Center
Phone: Explore Clubs
Optional small tablet or floating card: Upcoming Events

The message becomes:

See both sides of ClubConnect in one walkthrough.

I would not use a fake video player full of placeholder text. A polished device composition with a play icon will look intentional now, and later you can replace it with the actual embedded demo without changing the whole layout.

you have the command center already but if you want to use any of these go ahead and make it now 
Worked for 1m 18s
Edit

Yep. Same exact process.

Step 1: Download the demo mockup

clubconnect_app_showcase_on_devices.png

Step 2: Upload it to GitHub

Put it in:

public/screenshots

Name it exactly:

clubconnect-demo-hero.png

So the final path is:

public/screenshots/clubconnect-demo-hero.png
Step 3: Find the real Demo page file

Search your repo for this exact headline:

See how Gryph ClubConnect could work for your club.

Open the file containing that text and upload or paste the full file here.

Then I’ll rewrite the actual Demo page so it:

imports MockupImage
replaces the placeholder
uses clubconnect-demo-hero.png
removes the placeholder card styling
keeps the current layout and copy
sizes the device mockup properly

Do not change MockupImage.tsx yet until we inspect the real Demo page file.

Pasted text(30).txt
Document

I updated the entire Demo page file using the same process that worked for the Clubs and Students pages.

DemoPage-fixed.tsx

Before replacing the page file, update MockupImage.tsx and add:

demoHero: 'screenshots/clubconnect-demo-hero.png',

inside SCREENSHOTS, and:

demoHero: 'Gryph ClubConnect demo walkthrough preview',

inside ALTS.

Then open:

src/pages/DemoPage.tsx

Delete everything, paste the full contents of the downloaded file, commit, and wait for Vercel to rebuild. 

Just give me the whole thing and tell me what to do first
thoughts ? 

Good. For the homepage, we should follow the process that has been working:

Identify the first mock screenshot currently shown on the homepage.
Decide what real product screen should replace it.
Create the polished mockup.
Upload it to public/screenshots with a clean filename.
Open the actual homepage component that renders that screenshot.
Replace the placeholder or old image block in that real component.
Update MockupImage.tsx only if the new image needs a new key.
Commit and check the Vercel preview before moving to the next screenshot.

Send me a screenshot of the first homepage mock screenshot you want to replace, along with the real product screenshots you think should go there.

This is it it is part of a slideshow that happens so we need to upate the mock screenshots for every number I have the screenshots just need to add it to the website
sorry missed 5

Great. Next we need the actual homepage slideshow component so we can connect each of the five steps to the correct image.

Search your repo for:

Stay organized

or:

Placeholder screenshot — Explore clubs

Open the file that contains the five workflow steps and paste or upload the full file here.

I’ll then wire these exact images into the slideshow:

public/screenshots/homepage-workflow-explore-clubs.png
public/screenshots/homepage-workflow-club-profile.png
public/screenshots/homepage-workflow-event-rsvp.png
public/screenshots/homepage-workflow-apply-role.png
public/screenshots/homepage-workflow-student-dashboard.png
I have no clue where to find this wouldnt it be on the homep page tsx

Most likely, yes.

Start here:

src/pages/HomePage.tsx

Search inside that file for:

Stay organized

or:

Explore clubs

If you see all five steps there, that is the correct file. Paste or upload the full HomePage.tsx and I’ll wire in all five screenshots for you.

If HomePage.tsx only imports another component, look for something like:

<StudentWorkflowSlideshow />

or:

<WorkflowSection />

Then open that imported component instead.

Yes — this confirms the slideshow is almost certainly inside:

src/components/sections/StudentShowcase.tsx

Open that file next and paste the whole thing here.

That is the component rendered by:

<StudentShowcase />

Once you send it, I’ll wire the five uploaded screenshots into the slideshow and give you the full replacement file.

import AnimatedSection from '../ui/AnimatedSection';
import RotatingWorkflowShowcase, { type WorkflowStep } from '../ui/RotatingWorkflowShowcase';

const workflowSteps: WorkflowStep[] = [
  {
    title: 'Explore clubs',
    description: 'Search by club name, category, interest, or keyword.',
    placeholderLabel: 'Explore clubs',
  },
  {
    title: 'View public club profiles',
    description:
      'See what a club does, when it meets, upcoming events, open roles, and how to get involved.',
    placeholderLabel: 'Club profile',
  },
  {
    title: 'Sign up for events',
    description:
      'Discover campus events, RSVP, answer sign-up questions, and keep track of what is coming up.',
    placeholderLabel: 'Event sign-up',
  },
  {
    title: 'Apply for roles',
    description:
      'Browse open club positions, submit applications, and track application progress.',
    placeholderLabel: 'Role applications',
  },
  {
    title: 'Stay organized',
    description:
      'Use your dashboard to see clubs, events, tasks, applications, announcements, and inbox updates.',
    placeholderLabel: 'Student dashboard',
  },
];

export default function StudentShowcase() {
  return (
    <section className="py-16 sm:py-20 bg-[#0B0B0B] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
            For students
          </p>
          <h2 className="text-[2.1rem] sm:text-[2.75rem] font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
            Find clubs, events, and roles without hunting through group chats.
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Gryph ClubConnect gives students one place to explore clubs, view public profiles, sign up for events, apply for roles, and track involvement across the clubs they care about.
          </p>
        </AnimatedSection>

        <RotatingWorkflowShowcase
          steps={workflowSteps}
          accent="red"
          screenshotSide="right"
          placeholderSubtitle="Student workflow screenshot"
        />
      </div>
    </section>
  );
}

This confirms StudentShowcase.tsx only defines the five steps. The actual screenshot logic lives inside:

src/components/ui/RotatingWorkflowShowcase.tsx

Open that file and paste the whole thing here.

Once I can see what fields WorkflowStep supports and how the image panel is rendered, I’ll rewrite the full working file so these five screenshots connect correctly:

screenshots/homepage-workflow-explore-clubs.png
screenshots/homepage-workflow-club-profile.png
screenshots/homepage-workflow-event-rsvp.png
screenshots/homepage-workflow-apply-role.png
screenshots/homepage-workflow-student-dashboard.png
import { useState, useEffect, type ReactNode } from 'react';
import { AnimatedScreenshotPlaceholder } from './ScreenshotPlaceholder';

export type WorkflowStep = {
  title: string;
  description: string;
  placeholderLabel: string;
};

type Accent = 'red' | 'gold';

type RotatingWorkflowShowcaseProps = {
  steps: WorkflowStep[];
  accent: Accent;
  screenshotSide?: 'left' | 'right';
  placeholderSubtitle?: string;
  intervalMs?: number;
  footer?: ReactNode;
};

const accentStyles = {
  red: {
    stepNum: 'text-[#E51937]',
    activeBorder: 'border-l-[#E51937]',
    activeBg: 'bg-[rgba(229,25,55,0.06)]',
    inactiveHover: 'hover:bg-[#161616]',
  },
  gold: {
    stepNum: 'text-[#FFC429]',
    activeBorder: 'border-l-[#FFC429]',
    activeBg: 'bg-[rgba(255,196,41,0.06)]',
    inactiveHover: 'hover:bg-[#161616]',
  },
};

export default function RotatingWorkflowShowcase({
  steps,
  accent,
  screenshotSide = 'right',
  placeholderSubtitle = 'Student workflow screenshot',
  intervalMs = 6000,
  footer,
}: RotatingWorkflowShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const styles = accentStyles[accent];
  const activeStep = steps[activeIndex];

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [paused, steps.length, intervalMs]);

  const stepsPanel = (
    <div>
      <ol className="space-y-0 rounded-[12px] border border-[#222222] bg-[#131313] overflow-hidden">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={step.title}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={w-full flex gap-4 px-5 py-4 sm:px-6 sm:py-4 text-left border-l-2 transition-colors ${
                  index < steps.length - 1 ? 'border-b border-[#222222]' : ''
                } ${
                  isActive
                    ? ${styles.activeBorder} ${styles.activeBg}
                    : border-l-transparent ${styles.inactiveHover}
                }}
              >
                <span
                  className={shrink-0 w-8 text-[13px] font-semibold tabular-nums pt-0.5 ${
                    isActive ? styles.stepNum : 'text-[#555555]'
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3
                    className={font-semibold text-[15px] sm:text-base mb-1 ${
                      isActive ? 'text-[#F5F5F5]' : 'text-[#9CA3AF]'
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={text-[13px] sm:text-[14px] leading-relaxed ${
                      isActive ? 'text-[#9CA3AF]' : 'text-[#666666]'
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </button>
            </li>
          );
        })}
      </ol>
      {footer}
    </div>
  );

  const screenshotPanel = (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <AnimatedScreenshotPlaceholder
        label={activeStep.placeholderLabel}
        subtitle={placeholderSubtitle}
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-14 items-start">
      {screenshotSide === 'left' ? (
        <>
          <div className="order-1">{screenshotPanel}</div>
          <div className="order-2">{stepsPanel}</div>
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{stepsPanel}</div>
          <div className="order-1 lg:order-2">{screenshotPanel}</div>
        </>
      )}
    </div>
  );
}

We found the exact component. It currently only supports placeholders, so we need to update two files:

RotatingWorkflowShowcase.tsx so it can display real images.
StudentShowcase.tsx so each numbered step points to its screenshot.
Step 1 — Replace RotatingWorkflowShowcase.tsx

Open:

src/components/ui/RotatingWorkflowShowcase.tsx

Delete everything and paste this:

import { useEffect, useState, type ReactNode } from 'react';
import { AnimatedScreenshotPlaceholder } from './ScreenshotPlaceholder';

export type WorkflowStep = {
  title: string;
  description: string;
  placeholderLabel: string;
  imageSrc?: string;
  imageAlt?: string;
};

type Accent = 'red' | 'gold';

type RotatingWorkflowShowcaseProps = {
  steps: WorkflowStep[];
  accent: Accent;
  screenshotSide?: 'left' | 'right';
  placeholderSubtitle?: string;
  intervalMs?: number;
  footer?: ReactNode;
};

const accentStyles = {
  red: {
    stepNum: 'text-[#E51937]',
    activeBorder: 'border-l-[#E51937]',
    activeBg: 'bg-[rgba(229,25,55,0.06)]',
    inactiveHover: 'hover:bg-[#161616]',
  },
  gold: {
    stepNum: 'text-[#FFC429]',
    activeBorder: 'border-l-[#FFC429]',
    activeBg: 'bg-[rgba(255,196,41,0.06)]',
    inactiveHover: 'hover:bg-[#161616]',
  },
};

export default function RotatingWorkflowShowcase({
  steps,
  accent,
  screenshotSide = 'right',
  placeholderSubtitle = 'Student workflow screenshot',
  intervalMs = 6000,
  footer,
}: RotatingWorkflowShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const styles = accentStyles[accent];
  const activeStep = steps[activeIndex];

  useEffect(() => {
    if (paused || steps.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((previousIndex) => {
        return (previousIndex + 1) % steps.length;
      });
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [paused, steps.length, intervalMs]);

  const stepsPanel = (
    <div>
      <ol className="space-y-0 overflow-hidden rounded-[12px] border border-[#222222] bg-[#131313]">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;

          return (
            <li key={step.title}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex w-full gap-4 border-l-2 px-5 py-4 text-left transition-colors sm:px-6 sm:py-4 ${
                  index < steps.length - 1
                    ? 'border-b border-[#222222]'
                    : ''
                } ${
                  isActive
                    ? `${styles.activeBorder} ${styles.activeBg}`
                    : `border-l-transparent ${styles.inactiveHover}`
                }`}
              >
                <span
                  className={`w-8 shrink-0 pt-0.5 text-[13px] font-semibold tabular-nums ${
                    isActive ? styles.stepNum : 'text-[#555555]'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="min-w-0">
                  <h3
                    className={`mb-1 text-[15px] font-semibold sm:text-base ${
                      isActive ? 'text-[#F5F5F5]' : 'text-[#9CA3AF]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed sm:text-[14px] ${
                      isActive ? 'text-[#9CA3AF]' : 'text-[#666666]'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </button>
            </li>
          );
        })}
      </ol>

      {footer}
    </div>
  );

  const screenshotPanel = (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {activeStep.imageSrc ? (
        <div className="overflow-hidden rounded-[12px] border border-[#222222] bg-[#131313] shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
          <img
            key={activeStep.imageSrc}
            src={`${import.meta.env.BASE_URL}${activeStep.imageSrc}`}
            alt={activeStep.imageAlt ?? activeStep.placeholderLabel}
            className="block h-auto w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <AnimatedScreenshotPlaceholder
          label={activeStep.placeholderLabel}
          subtitle={placeholderSubtitle}
        />
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
      {screenshotSide === 'left' ? (
        <>
          <div className="order-1">{screenshotPanel}</div>
          <div className="order-2">{stepsPanel}</div>
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{stepsPanel}</div>
          <div className="order-1 lg:order-2">{screenshotPanel}</div>
        </>
      )}
    </div>
  );
}

Commit that change.

Step 2 — Replace StudentShowcase.tsx

Open:

src/components/sections/StudentShowcase.tsx

Delete everything and paste this:

import AnimatedSection from '../ui/AnimatedSection';
import RotatingWorkflowShowcase, {
  type WorkflowStep,
} from '../ui/RotatingWorkflowShowcase';

const workflowSteps: WorkflowStep[] = [
  {
    title: 'Explore clubs',
    description: 'Search by club name, category, interest, or keyword.',
    placeholderLabel: 'Explore clubs',
    imageSrc: 'screenshots/homepage-workflow-explore-clubs.png',
    imageAlt: 'Gryph ClubConnect Explore Clubs screen',
  },
  {
    title: 'View public club profiles',
    description:
      'See what a club does, when it meets, upcoming events, open roles, and how to get involved.',
    placeholderLabel: 'Club profile',
    imageSrc: 'screenshots/homepage-workflow-club-profile.png',
    imageAlt: 'Gryph ClubConnect public club profile',
  },
  {
    title: 'Sign up for events',
    description:
      'Discover campus events, RSVP, answer sign-up questions, and keep track of what is coming up.',
    placeholderLabel: 'Event sign-up',
    imageSrc: 'screenshots/homepage-workflow-event-rsvp.png',
    imageAlt: 'Gryph ClubConnect event RSVP screen',
  },
  {
    title: 'Apply for roles',
    description:
      'Browse open club positions, submit applications, and track application progress.',
    placeholderLabel: 'Role applications',
    imageSrc: 'screenshots/homepage-workflow-apply-role.png',
    imageAlt: 'Gryph ClubConnect club role application',
  },
  {
    title: 'Stay organized',
    description:
      'Use your dashboard to see clubs, events, tasks, applications, announcements, and inbox updates.',
    placeholderLabel: 'Student dashboard',
    imageSrc: 'screenshots/homepage-workflow-student-dashboard.png',
    imageAlt: 'Gryph ClubConnect student dashboard',
  },
];

export default function StudentShowcase() {
  return (
    <section className="border-t border-[#222222] bg-[#0B0B0B] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mx-0 lg:text-left">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
            For students
          </p>

          <h2 className="mb-4 font-sans text-[2.1rem] font-extrabold leading-tight text-[#F5F5F5] sm:text-[2.75rem]">
            Find clubs, events, and roles without hunting through group chats.
          </h2>

          <p className="text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
            Gryph ClubConnect gives students one place to explore clubs, view
            public profiles, sign up for events, apply for roles, and track
            involvement across the clubs they care about.
          </p>
        </AnimatedSection>

        <RotatingWorkflowShowcase
          steps={workflowSteps}
          accent="red"
          screenshotSide="right"
          placeholderSubtitle="Student workflow screenshot"
        />
      </div>
    </section>
  );
}

Commit that second change.

Then Vercel should rebuild and the image should change automatically as slides 01–05 rotate.

Take a look 

Sounds good. Leave the code as-is for now. Later, just have Cursor standardize screenshots 02 and 04 to the same wide aspect ratio and visual scale as 01, 03, and 05, while keeping the filenames unchanged so the website updates automatically.

Okay lets continue to the next set for the homepage 

Yep — this is the club-management slideshow, and it has seven steps:

Start in the Command Center
Keep members updated
Plan events and track RSVPs
Assign and review tasks
Run meetings and follow-ups
Manage members and resources
Review hiring and permissions

Do the same thing as before. Upload seven screenshots into:

public/screenshots

Use these filenames:

homepage-club-command-center.png
homepage-club-announcements.png
homepage-club-events-rsvps.png
homepage-club-tasks.png
homepage-club-meetings.png
homepage-club-members-resources.png
homepage-club-hiring-permissions.png

Keep them as full in-app screenshots with no device mockup or transparent background.

Then open:

src/components/sections/LeaderShowcase.tsx

Paste the whole file here. We will likely only need to add the seven imageSrc values because the rotating component now already supports real screenshots.

Okay done all uploaded with the correct names

Great. Next open:

src/components/sections/LeaderShowcase.tsx

Paste the whole file here.

Since we already updated RotatingWorkflowShowcase.tsx, this next step should just be wiring each of the seven items to the screenshots you uploaded.

import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import RotatingWorkflowShowcase, { type WorkflowStep } from '../ui/RotatingWorkflowShowcase';
import { goToDemoForm } from '../../lib/cta';

const workflowSteps: WorkflowStep[] = [
  {
    title: 'Start in the Command Center',
    description:
      'See pending actions, upcoming activity, open tasks, applications, quick actions, and setup progress in one overview.',
    placeholderLabel: 'Command Center',
  },
  {
    title: 'Keep members updated',
    description:
      'Post announcements, keep important updates visible, and support club communication beyond scattered group chats.',
    placeholderLabel: 'Announcements',
  },
  {
    title: 'Plan events and track RSVPs',
    description:
      'Create events, collect sign-ups, review RSVP answers, manage attendees, and connect planning tasks to the event.',
    placeholderLabel: 'Events & RSVPs',
  },
  {
    title: 'Assign and review tasks',
    description:
      'Set ownership, due dates, priorities, comments, and review states across your team.',
    placeholderLabel: 'Tasks',
  },
  {
    title: 'Run meetings and follow-ups',
    description:
      'Prepare agendas, capture notes and decisions, and turn follow-ups into assigned tasks.',
    placeholderLabel: 'Meetings',
  },
  {
    title: 'Manage members and resources',
    description:
      'Use member lists, role titles, org structure, invite codes, documents, and resources to keep the club organized.',
    placeholderLabel: 'Members & resources',
  },
  {
    title: 'Review hiring and permissions',
    description:
      'Post roles, review applicants, move candidates through statuses, view analytics, and control who can access what.',
    placeholderLabel: 'Hiring & permissions',
  },
];

export default function LeaderShowcase() {
  const navigate = useNavigate();

  const handleOnboard = () => {
    goToDemoForm({ interest: 'Onboard my club', navigate, pathname: '/' });
  };

  return (
    <section id="for-clubs-home" className="py-16 sm:py-20 bg-[#111111] scroll-mt-24 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 sm:mb-12 max-w-3xl">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FFC429] mb-3">
            For club leaders
          </p>
          <h2 className="text-[2.1rem] sm:text-[2.75rem] font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
            Run events, members, tasks, hiring, and meetings from one workspace.
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Gryph ClubConnect gives club leaders a central workspace for the moving pieces of club life: announcements, events, RSVPs, tasks, meetings, documents, members, hiring, analytics, and permissions.
          </p>
        </AnimatedSection>

        <RotatingWorkflowShowcase
          steps={workflowSteps}
          accent="gold"
          screenshotSide="left"
          placeholderSubtitle="Club leader workflow screenshot"
          footer={
            <button
              type="button"
              onClick={handleOnboard}
              className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#FFC429] hover:text-[#FFD45C] transition-colors"
            >
              Onboard Your Club
              <ArrowRight size={16} />
            </button>
          }
        />
      </div>
    </section>
  );
}

Replace the entire LeaderShowcase.tsx file with this:

import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import RotatingWorkflowShowcase, {
  type WorkflowStep,
} from '../ui/RotatingWorkflowShowcase';
import { goToDemoForm } from '../../lib/cta';

const workflowSteps: WorkflowStep[] = [
  {
    title: 'Start in the Command Center',
    description:
      'See pending actions, upcoming activity, open tasks, applications, quick actions, and setup progress in one overview.',
    placeholderLabel: 'Command Center',
    imageSrc: 'screenshots/homepage-club-command-center.png',
    imageAlt: 'Gryph ClubConnect club Command Center',
  },
  {
    title: 'Keep members updated',
    description:
      'Post announcements, keep important updates visible, and support club communication beyond scattered group chats.',
    placeholderLabel: 'Announcements',
    imageSrc: 'screenshots/homepage-club-announcements.png',
    imageAlt: 'Gryph ClubConnect club announcements screen',
  },
  {
    title: 'Plan events and track RSVPs',
    description:
      'Create events, collect sign-ups, review RSVP answers, manage attendees, and connect planning tasks to the event.',
    placeholderLabel: 'Events & RSVPs',
    imageSrc: 'screenshots/homepage-club-events-rsvps.png',
    imageAlt: 'Gryph ClubConnect events and RSVP management screen',
  },
  {
    title: 'Assign and review tasks',
    description:
      'Set ownership, due dates, priorities, comments, and review states across your team.',
    placeholderLabel: 'Tasks',
    imageSrc: 'screenshots/homepage-club-tasks.png',
    imageAlt: 'Gryph ClubConnect club task management screen',
  },
  {
    title: 'Run meetings and follow-ups',
    description:
      'Prepare agendas, capture notes and decisions, and turn follow-ups into assigned tasks.',
    placeholderLabel: 'Meetings',
    imageSrc: 'screenshots/homepage-club-meetings.png',
    imageAlt: 'Gryph ClubConnect meeting management screen',
  },
  {
    title: 'Manage members and resources',
    description:
      'Use member lists, role titles, org structure, invite codes, documents, and resources to keep the club organized.',
    placeholderLabel: 'Members & resources',
    imageSrc: 'screenshots/homepage-club-members-resources.png',
    imageAlt: 'Gryph ClubConnect members and resources screen',
  },
  {
    title: 'Review hiring and permissions',
    description:
      'Post roles, review applicants, move candidates through statuses, view analytics, and control who can access what.',
    placeholderLabel: 'Hiring & permissions',
    imageSrc: 'screenshots/homepage-club-hiring-permissions.png',
    imageAlt: 'Gryph ClubConnect hiring and permissions screen',
  },
];

export default function LeaderShowcase() {
  const navigate = useNavigate();

  const handleOnboard = () => {
    goToDemoForm({
      interest: 'Onboard my club',
      navigate,
      pathname: '/',
    });
  };

  return (
    <section
      id="for-clubs-home"
      className="scroll-mt-24 border-t border-[#222222] bg-[#111111] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 max-w-3xl sm:mb-12">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFC429] sm:text-xs">
            For club leaders
          </p>

          <h2 className="mb-4 font-sans text-[2.1rem] font-extrabold leading-tight text-[#F5F5F5] sm:text-[2.75rem]">
            Run events, members, tasks, hiring, and meetings from one workspace.
          </h2>

          <p className="text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
            Gryph ClubConnect gives club leaders a central workspace for the
            moving pieces of club life: announcements, events, RSVPs, tasks,
            meetings, documents, members, hiring, analytics, and permissions.
          </p>
        </AnimatedSection>

        <RotatingWorkflowShowcase
          steps={workflowSteps}
          accent="gold"
          screenshotSide="left"
          placeholderSubtitle="Club leader workflow screenshot"
          footer={
            <button
              type="button"
              onClick={handleOnboard}
              className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#FFC429] transition-colors hover:text-[#FFD45C]"
            >
              Onboard Your Club
              <ArrowRight size={16} />
            </button>
          }
        />
      </div>
    </section>
  );
}

Commit it, wait for Vercel, then test all seven slides. The screenshot should now switch as each step becomes active.

Okay on to the last 7 of the homepage take a look 

Yep — this is the final homepage slideshow, and it has these seven steps:

Dashboard
Explore
Workspace
Events & RSVPs
Tasks
Hiring
Members & Roles

Upload the seven screenshots into:

public/screenshots

Use these exact filenames:

homepage-app-dashboard.png
homepage-app-explore.png
homepage-app-workspace.png
homepage-app-events-rsvps.png
homepage-app-tasks.png
homepage-app-hiring.png
homepage-app-members-roles.png

Keep them as clean full app screenshots, no device mockups, no transparent background.

Once they are uploaded, open:

src/components/sections/AppShowcase.tsx

Paste the full file here and I’ll wire all seven into the slideshow.

Pasted text(31).txt
Document

I found the correct AppShowcase.tsx. It has its own slideshow logic and placeholder component, so I updated the full file to use the seven screenshots you uploaded.

Do this now

Open:

src/components/sections/AppShowcase.tsx

Delete everything in it, then paste the contents of this file:

AppShowcase-updated.tsx

It is connected to:

screenshots/homepage-app-dashboard.png
screenshots/homepage-app-explore.png
screenshots/homepage-app-workspace.png
screenshots/homepage-app-events-rsvps.png
screenshots/homepage-app-tasks.png
screenshots/homepage-app-hiring.png
screenshots/homepage-app-members-roles.png

Commit the change, wait for Vercel, and then test all seven numbered cards.

Library
/
AppShowcase-updated.tsx
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { goToDemoForm } from '../../lib/cta';

const ROTATE_MS = 6000;

const workflows = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    description: 'Track clubs, events, tasks, applications, and inbox updates from one place.',
    highlights: ['Cross-club overview', 'Upcoming events', 'Tasks and applications'],
    placeholderLabel: 'Dashboard view',
    placeholderSubtext:
      'Student dashboard with clubs, events, tasks, applications, and inbox updates.',
    imageSrc: 'screenshots/homepage-app-dashboard.png',
    imageAlt: 'Gryph ClubConnect dashboard view',
  },
  {
    key: 'explore',
    label: 'Explore',
    description: 'Browse clubs, public profiles, events, and open roles.',
    highlights: ['Search clubs', 'View public profiles', 'Discover opportunities'],
    placeholderLabel: 'Explore view',
    placeholderSubtext: 'Club discovery, public profiles, events, and open roles.',
    imageSrc: 'screenshots/homepage-app-explore.png',
    imageAlt: 'Gryph ClubConnect explore view',
  },
  {
    key: 'workspace',
    label: 'Workspace',
    description: 'Run club operations from the Command Center.',
    highlights: ['Pending actions', 'Quick actions', 'Club setup progress'],
    placeholderLabel: 'Workspace view',
    placeholderSubtext:
      'Command Center with pending actions, quick actions, events, tasks, and setup progress.',
    imageSrc: 'screenshots/homepage-app-workspace.png',
    imageAlt: 'Gryph ClubConnect workspace Command Center',
  },
  {
    key: 'events',
    label: 'Events & RSVPs',
    description: 'Create events, collect RSVP answers, and manage attendees.',
    highlights: ['RSVP questions', 'Attendee management', 'Event planning tasks'],
    placeholderLabel: 'Events & RSVPs view',
    placeholderSubtext:
      'Event management with RSVP answers, attendee lists, and planning tasks.',
    imageSrc: 'screenshots/homepage-app-events-rsvps.png',
    imageAlt: 'Gryph ClubConnect events and RSVP view',
  },
  {
    key: 'tasks',
    label: 'Tasks',
    description: 'Assign work, track progress, and review completion.',
    highlights: ['Owners and due dates', 'Status tracking', 'Review workflow'],
    placeholderLabel: 'Tasks view',
    placeholderSubtext: 'Task assignment, progress tracking, comments, and review states.',
    imageSrc: 'screenshots/homepage-app-tasks.png',
    imageAlt: 'Gryph ClubConnect tasks view',
  },
  {
    key: 'hiring',
    label: 'Hiring',
    description: 'Post roles, review applicants, and manage candidate statuses.',
    highlights: ['Role listings', 'Applicant review', 'Status pipeline'],
    placeholderLabel: 'Hiring view',
    placeholderSubtext:
      'Hiring pipeline with applications, custom questions, reviewers, and candidate statuses.',
    imageSrc: 'screenshots/homepage-app-hiring.png',
    imageAlt: 'Gryph ClubConnect hiring view',
  },
  {
    key: 'members',
    label: 'Members & Roles',
    description: 'Manage members, role titles, invites, org structure, and permissions.',
    highlights: ['Member directory', 'Invites and join codes', 'Roles and permissions'],
    placeholderLabel: 'Members & Roles view',
    placeholderSubtext: 'Member roster, role tiers, invites, org structure, and permission controls.',
    imageSrc: 'screenshots/homepage-app-members-roles.png',
    imageAlt: 'Gryph ClubConnect members and roles view',
  },
] as const;

export default function AppShowcase() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = workflows[activeIndex];

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % workflows.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(advance, ROTATE_MS);
    return () => clearInterval(interval);
  }, [paused, advance, activeIndex]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  const handleDemo = () => {
    goToDemoForm({ interest: 'Request a demo', navigate, pathname: '/' });
  };

  return (
    <section id="app-showcase" className="py-16 sm:py-20 bg-[#0B0B0B] scroll-mt-24 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12 max-w-3xl mx-auto text-center">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E51937] mb-3">
            Product workflows
          </p>
          <h2 className="text-[2.1rem] sm:text-[2.75rem] font-extrabold text-[#F5F5F5] font-sans mb-4 leading-tight">
            See how Gryph ClubConnect works
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Explore the key workflows behind student discovery and club operations.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] gap-8 lg:gap-10 items-start"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="space-y-2">
            {workflows.map((workflow, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={workflow.key}
                  type="button"
                  onClick={() => handleSelect(index)}
                  className={`relative w-full rounded-[10px] border px-4 py-3.5 text-left transition-colors cursor-pointer overflow-hidden ${
                    isActive
                      ? 'bg-[#131313] border-[#E51937]/45 text-[#F5F5F5]'
                      : 'bg-transparent border-white/[0.06] text-[#9CA3AF] hover:bg-[#131313] hover:border-white/[0.1] hover:text-[#F5F5F5]'
                  }`}
                >
                  <div className="flex gap-3">
                    <span
                      className={`shrink-0 text-[12px] font-semibold tabular-nums pt-0.5 ${
                        isActive ? 'text-[#E51937]' : 'text-[#555555]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <span className="block text-sm font-semibold">{workflow.label}</span>
                      <span
                        className={`mt-1 block text-[12px] leading-snug ${
                          isActive ? 'text-[#9CA3AF]' : 'text-[#666666]'
                        }`}
                      >
                        {workflow.description}
                      </span>
                    </div>
                  </div>
                  {isActive && !paused && (
                    <motion.div
                      key={`progress-${activeIndex}`}
                      className="absolute bottom-0 left-0 h-[2px] bg-[#E51937]"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: ROTATE_MS / 1000, ease: 'linear' }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F5] mb-1.5">
                    {active.label} view
                  </h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-xl mb-2">
                    {active.description}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#777777] mb-4">
                    Demo data shown.
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {active.highlights.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center rounded-[8px] border border-white/[0.08] bg-[#131313] px-2.5 py-1 text-[12px] text-[#F5F5F5]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#131313] shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
                  <img
                    src={`${import.meta.env.BASE_URL}${active.imageSrc}`}
                    alt={active.imageAlt}
                    className="block h-auto w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-[#9CA3AF] mb-1">Want to see the full workflow?</p>
          <button
            type="button"
            onClick={handleDemo}
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#E51937] hover:text-[#FF6B7D] transition-colors"
          >
            Request a demo
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
