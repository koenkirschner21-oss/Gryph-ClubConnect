/**
 * Marketing CTA routing for the early-access funnel.
 *
 * Homepage demo CTAs → #homepage-demo-form
 * Other pages demo/onboard → /demo#demo-form
 * Homepage student CTAs → #homepage-student-access
 * Other pages student access → /for-students#student-access
 * Log In → APP_LOGIN_URL
 */

export const APP_LOGIN_URL = 'https://app.gryphclubconnect.com/login';

/**
 * Future public signup — do not promote as a primary website CTA until the app is public-ready.
 * https://app.gryphclubconnect.com/signup
 */
export const APP_SIGNUP_URL = 'https://app.gryphclubconnect.com/signup';

export const DEMO_PATH = '/demo';
export const FOR_STUDENTS_PATH = '/for-students';
export const FOR_CLUBS_PATH = '/for-clubs';
export const FEATURES_PATH = '/features';

export const HOMEPAGE_DEMO_FORM_ID = 'homepage-demo-form';
export const DEMO_FORM_ID = 'demo-form';
export const HOMEPAGE_STUDENT_ACCESS_ID = 'homepage-student-access';
export const STUDENT_ACCESS_ID = 'student-access';

/** @deprecated Prefer DEMO_FORM_ID */
export const REQUEST_DEMO_ID = DEMO_FORM_ID;
/** Onboard CTAs share the demo form targets. */
export const ONBOARD_CLUB_ID = 'onboard-your-club';

/** @deprecated Prefer goToDemoForm */
export const JOIN_TESTING_ID = DEMO_FORM_ID;
/** @deprecated Prefer goToDemoForm */
export const REQUEST_WALKTHROUGH_ID = DEMO_FORM_ID;

export type ClubInterestOption = 'Request a demo' | 'Onboard my club' | 'Ask a question';

export const CLUB_INTEREST_EVENT = 'gcc:set-club-interest';
const CLUB_INTEREST_STORAGE_KEY = 'gcc:club-form-interest';

/** Preselect demo form interest before scrolling to the form. */
export function setClubFormInterest(interest: ClubInterestOption) {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(CLUB_INTEREST_STORAGE_KEY, interest);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(CLUB_INTEREST_EVENT, { detail: interest }));
}

/** Read and clear a pending demo-form interest (for cross-page CTA navigation). */
export function consumeClubFormInterest(): ClubInterestOption | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = sessionStorage.getItem(CLUB_INTEREST_STORAGE_KEY);
    sessionStorage.removeItem(CLUB_INTEREST_STORAGE_KEY);
    if (value === 'Request a demo' || value === 'Onboard my club' || value === 'Ask a question') {
      return value;
    }
  } catch {
    /* ignore */
  }
  return null;
}

type NavigateFn = (to: string | { pathname: string; hash?: string }) => void;

type GoOptions = {
  navigate?: NavigateFn;
  pathname?: string;
};

function scrollToId(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/** Scroll to a section by id. Student access routes to For Students. */
export function goToSection(sectionId: string, options?: GoOptions) {
  if (
    sectionId === DEMO_FORM_ID ||
    sectionId === REQUEST_DEMO_ID ||
    sectionId === ONBOARD_CLUB_ID ||
    sectionId === HOMEPAGE_DEMO_FORM_ID
  ) {
    goToDemoForm(options);
    return;
  }

  if (sectionId === STUDENT_ACCESS_ID || sectionId === HOMEPAGE_STUDENT_ACCESS_ID) {
    goToStudentAccess(options);
    return;
  }

  const scroll = () => scrollToId(sectionId);
  const onHome = !options?.pathname || options.pathname === '/';
  if (onHome) {
    scroll();
    return;
  }

  if (options?.navigate) {
    options.navigate('/');
    setTimeout(scroll, 120);
    return;
  }

  window.location.hash = '#/';
  setTimeout(scroll, 120);
}

/**
 * Homepage → scroll to #homepage-demo-form
 * Demo page → scroll to #demo-form
 * Other pages → /demo#demo-form
 */
export function goToDemoForm(
  options?: GoOptions & { interest?: ClubInterestOption }
) {
  if (options?.interest) {
    setClubFormInterest(options.interest);
  }

  const pathname = options?.pathname ?? '/';
  const onHome = pathname === '/';
  const onDemo = pathname === DEMO_PATH;

  if (onHome) {
    scrollToId(HOMEPAGE_DEMO_FORM_ID);
    return;
  }

  if (onDemo) {
    scrollToId(DEMO_FORM_ID);
    return;
  }

  if (options?.navigate) {
    options.navigate({ pathname: DEMO_PATH, hash: DEMO_FORM_ID });
    setTimeout(() => scrollToId(DEMO_FORM_ID), 350);
    return;
  }

  window.location.hash = `#${DEMO_PATH}`;
  setTimeout(() => scrollToId(DEMO_FORM_ID), 350);
}

/**
 * Homepage → scroll to #homepage-student-access
 * For Students → scroll to #student-access
 * Other pages → /for-students#student-access
 */
export function goToStudentAccess(options?: GoOptions) {
  const pathname = options?.pathname ?? '/';
  const onHome = pathname === '/';
  const onForStudents = pathname === FOR_STUDENTS_PATH;

  if (onHome) {
    scrollToId(HOMEPAGE_STUDENT_ACCESS_ID);
    return;
  }

  if (onForStudents) {
    scrollToId(STUDENT_ACCESS_ID);
    return;
  }

  if (options?.navigate) {
    options.navigate({ pathname: FOR_STUDENTS_PATH, hash: STUDENT_ACCESS_ID });
    setTimeout(() => scrollToId(STUDENT_ACCESS_ID), 350);
    return;
  }

  window.location.hash = `#${FOR_STUDENTS_PATH}`;
  setTimeout(() => scrollToId(STUDENT_ACCESS_ID), 350);
}
