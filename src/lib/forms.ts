/**
 * Formspree endpoints for early-access intake.
 */
/** Shared demo/onboarding Formspree endpoint (homepage + Demo page). */
export const DEMO_FORM_ENDPOINT = 'https://formspree.io/f/xvzeooek';
/** @deprecated Prefer DEMO_FORM_ENDPOINT */
export const DEMO_FORMSPREE_ENDPOINT = DEMO_FORM_ENDPOINT;

export const STUDENT_ACCESS_FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_STUDENT_FORM_ID';

export const DEMO_FORM_SOURCE_DEMO_PAGE = 'Demo page';
export const DEMO_FORM_SOURCE_HOMEPAGE = 'Homepage';
/** @deprecated Prefer DEMO_FORM_SOURCE_DEMO_PAGE */
export const DEMO_FORM_SOURCE = DEMO_FORM_SOURCE_DEMO_PAGE;
/** @deprecated Prefer DEMO_FORM_SOURCE_HOMEPAGE */
export const HOMEPAGE_DEMO_FORM_SOURCE = DEMO_FORM_SOURCE_HOMEPAGE;

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
