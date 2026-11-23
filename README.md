# Gryph ClubConnect

The public website for Gryph ClubConnect, a student-built project that makes it easier for University of Guelph students to discover clubs and for club leaders to run them.

**[Visit the live site](https://gryphclubconnect.com/)** · **[Explore the product tour](https://gryphclubconnect.com/features)** · **[Run the companion UI gallery](https://github.com/koenkirschner21-oss/gryph-club-connect-ui-portfolio)**

This repository contains the marketing site and its early-access intake. It does **not** contain the authenticated ClubConnect application or its backend. The companion gallery runs independently and uses fictional data to show three product interfaces.

## What this site delivers

- **Separate paths for students and organizers.** Students can request early access, while club leaders can request a demo or onboarding. The site carries the selected intent into the right form rather than sending every visitor through the same intake.
- **A product tour without requiring an account.** The feature, student, and club pages walk through discovery, events, and club operations.
- **Opt-in analytics.** With a measurement ID configured, the site loads Google Analytics only after consent and records route views and funnel events.

## Architecture

| Layer | Implementation |
| --- | --- |
| Web app | React, TypeScript, Vite, Tailwind CSS, and Framer Motion |
| Routing | React Router with lazy-loaded page modules; Vercel rewrites support direct links to client routes |
| Intake | React Hook Form and Formspree, with shared intent, destination, and source-page definitions |
| Early access | A Vercel function checks a code using server-side configuration and returns the app login destination; authentication is handled by the separate application |
| Deploy | Vite production output served on Vercel |

Start with [`src/App.tsx`](src/App.tsx) for routing, [`src/lib/cta.ts`](src/lib/cta.ts) for intake navigation, [`src/lib/analytics.ts`](src/lib/analytics.ts) for analytics, or [`vercel.json`](vercel.json) for deployment routing.

## Run locally

```bash
npm ci
npm run dev
```

Run `npm run build` for the TypeScript compile and production bundle, then `npm run preview` to serve that bundle locally. Vite alone does not run the Vercel function. No secret is needed to browse the site locally; keep early-access configuration on the server and avoid submitting real data from a local copy because the intake endpoints are shared with the live site.
