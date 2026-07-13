/**
 * Formspree endpoints for early-access intake.
 * Replace REPLACE_* IDs with real Formspree form IDs before launch.
 */
export const DEMO_FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_DEMO_FORM_ID';
/** Shared demo/onboarding Formspree endpoint used by homepage + Demo page forms. */
export const DEMO_FORM_ENDPOINT = DEMO_FORMSPREE_ENDPOINT;

export const STUDENT_ACCESS_FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_STUDENT_FORM_ID';

export const DEMO_FORM_SOURCE = 'Gryph ClubConnect website demo form';
export const HOMEPAGE_DEMO_FORM_SOURCE = 'Gryph ClubConnect website homepage demo form';
export const STUDENT_FORM_SOURCE = 'Gryph ClubConnect website student access form';

export const DEMO_WORKFLOW_OPTIONS = [
  'Club setup',
  'Public club profile',
  'Events and RSVPs',
  'Event planning tasks',
  'Announcements and chat',
  'Meetings and notes',
  'Documents and resources',
  'Hiring and applications',
  'Members and org structure',
  'Roles and permissions',
  'Analytics and activity tracking',
  'Student discovery flow',
] as const;

export const DEMO_INTEREST_OPTIONS = [
  'Request a demo',
  'Onboard my club',
  'Ask a question',
] as const;

export const STUDENT_INTEREST_OPTIONS = [
  'Finding clubs',
  'Discovering events',
  'Applying for roles',
  'Testing the platform',
  'Following club updates',
] as const;
