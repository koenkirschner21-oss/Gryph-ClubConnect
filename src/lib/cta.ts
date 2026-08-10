import { trackEvent } from './analytics';

/**
 * Marketing CTA routing for the early-access funnel.
 *
 * Homepage demo CTAs → #homepage-demo-form
 * Other pages demo/onboard → /demo#demo-form
 * Student access CTAs → /for-students#student-access
 *   (homepage included — there is no homepage student form section)
 * Log In → AccessCodeModal / APP_LOGIN_URL (handled in Navbar)
 */

export const APP_LOGIN_URL =
  'https://app.gryphclubconnect.com/login';

/**
 * Future public signup — do not promote as a primary website CTA
 * until the app is public-ready.
 */
export const APP_SIGNUP_URL =
  'https://app.gryphclubconnect.com/signup';

export const DEMO_PATH = '/demo';
export const FOR_STUDENTS_PATH = '/for-students';
export const FOR_CLUBS_PATH = '/for-clubs';
export const FEATURES_PATH = '/features';

export const HOMEPAGE_DEMO_FORM_ID =
  'homepage-demo-form';

export const DEMO_FORM_ID =
  'demo-form';

export const HOMEPAGE_STUDENT_ACCESS_ID =
  'homepage-student-access';

export const STUDENT_ACCESS_ID =
  'student-access';

/** Sticky header clearance used for in-page anchors. */
export const STICKY_NAV_OFFSET_PX = 88;

/** @deprecated Prefer DEMO_FORM_ID */
export const REQUEST_DEMO_ID =
  DEMO_FORM_ID;

/** Onboard CTAs share the demo form targets. */
export const ONBOARD_CLUB_ID =
  'onboard-your-club';

/** @deprecated Prefer goToDemoForm */
export const JOIN_TESTING_ID =
  DEMO_FORM_ID;

/** @deprecated Prefer goToDemoForm */
export const REQUEST_WALKTHROUGH_ID =
  DEMO_FORM_ID;

export type ClubInterestOption =
  | 'Request a demo'
  | 'Onboard my club'
  | 'Ask a question';

export const CLUB_INTEREST_EVENT =
  'gcc:set-club-interest';

const CLUB_INTEREST_STORAGE_KEY =
  'gcc:club-form-interest';

/**
 * Preselect demo form interest before scrolling to the form.
 */
export function setClubFormInterest(
  interest: ClubInterestOption,
) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    sessionStorage.setItem(
      CLUB_INTEREST_STORAGE_KEY,
      interest,
    );
  } catch {
    // Ignore unavailable browser storage.
  }

  window.dispatchEvent(
    new CustomEvent(CLUB_INTEREST_EVENT, {
      detail: interest,
    }),
  );
}

/**
 * Read and clear a pending demo-form interest.
 */
export function consumeClubFormInterest():
  | ClubInterestOption
  | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const value = sessionStorage.getItem(
      CLUB_INTEREST_STORAGE_KEY,
    );

    sessionStorage.removeItem(
      CLUB_INTEREST_STORAGE_KEY,
    );

    if (
      value === 'Request a demo' ||
      value === 'Onboard my club' ||
      value === 'Ask a question'
    ) {
      return value;
    }
  } catch {
    // Ignore unavailable browser storage.
  }

  return null;
}

type NavigateFn = (
  to:
    | string
    | {
        pathname: string;
        hash?: string;
      },
) => void;

type GoOptions = {
  navigate?: NavigateFn;
  pathname?: string;
};

/** Scroll to an element id, clearing sticky nav overlap. */
export function scrollToId(sectionId: string) {
  const element =
    document.getElementById(sectionId);

  if (!element) {
    return;
  }

  const top =
    element.getBoundingClientRect().top +
    window.scrollY -
    STICKY_NAV_OFFSET_PX;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth',
  });
}

/** Reset scroll to the top of the document (route transitions). */
export function scrollToTop(behavior: ScrollBehavior = 'auto') {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;

  if (behavior === 'auto') {
    html.style.scrollBehavior = 'auto';
  }

  window.scrollTo({ top: 0, left: 0, behavior });
  html.scrollTop = 0;
  document.body.scrollTop = 0;

  if (behavior === 'auto') {
    html.style.scrollBehavior = previous;
  }
}

/**
 * Track a click to the external app login page.
 */
export function trackLoginClick(
  pathname: string,
) {
  trackEvent('login_click', {
    source_path: pathname,
    destination: APP_LOGIN_URL,
  });
}

/**
 * Track clicks to social media or other external destinations.
 */
export function trackOutboundClick(
  label: string,
  destination: string,
  pathname: string,
) {
  trackEvent('outbound_click', {
    link_label: label,
    destination,
    source_path: pathname,
  });
}

/**
 * Scroll to a section by id.
 */
export function goToSection(
  sectionId: string,
  options?: GoOptions,
) {
  if (
    sectionId === DEMO_FORM_ID ||
    sectionId === REQUEST_DEMO_ID ||
    sectionId === ONBOARD_CLUB_ID ||
    sectionId === HOMEPAGE_DEMO_FORM_ID
  ) {
    goToDemoForm(options);
    return;
  }

  if (
    sectionId === STUDENT_ACCESS_ID ||
    sectionId === HOMEPAGE_STUDENT_ACCESS_ID
  ) {
    goToStudentAccess(options);
    return;
  }

  const scroll = () =>
    scrollToId(sectionId);

  const onHome =
    !options?.pathname ||
    options.pathname === '/';

  if (onHome) {
    scroll();
    return;
  }

  if (options?.navigate) {
    options.navigate('/');

    setTimeout(scroll, 120);
    return;
  }

  window.location.assign('/');
}

/**
 * Homepage → scroll to #homepage-demo-form
 * Demo page → scroll to #demo-form
 * Other pages → /demo#demo-form
 */
export function goToDemoForm(
  options?: GoOptions & {
    interest?: ClubInterestOption;
  },
) {
  const interest =
    options?.interest ?? 'Request a demo';

  const pathname =
    options?.pathname ?? '/';

  trackEvent('club_cta_click', {
    interest,
    source_path: pathname,
    destination: DEMO_PATH,
  });

  if (options?.interest) {
    setClubFormInterest(
      options.interest,
    );
  }

  const onHome =
    pathname === '/';

  const onDemo =
    pathname === DEMO_PATH;

  if (onHome) {
    scrollToId(
      HOMEPAGE_DEMO_FORM_ID,
    );
    return;
  }

  if (onDemo) {
    scrollToId(DEMO_FORM_ID);
    return;
  }

  if (options?.navigate) {
    options.navigate({
      pathname: DEMO_PATH,
      hash: DEMO_FORM_ID,
    });

    setTimeout(
      () => scrollToId(DEMO_FORM_ID),
      350,
    );

    return;
  }

  window.location.assign(
    `${DEMO_PATH}#${DEMO_FORM_ID}`,
  );
}

/**
 * All pages (including homepage) → /for-students#student-access
 * Already on For Students → scroll to #student-access
 */
export function goToStudentAccess(
  options?: GoOptions,
) {
  const pathname =
    options?.pathname ?? '/';

  trackEvent('student_access_click', {
    source_path: pathname,
    destination: FOR_STUDENTS_PATH,
  });

  const onForStudents =
    pathname === FOR_STUDENTS_PATH;

  if (onForStudents) {
    scrollToId(
      STUDENT_ACCESS_ID,
    );
    return;
  }

  if (options?.navigate) {
    options.navigate({
      pathname: FOR_STUDENTS_PATH,
      hash: STUDENT_ACCESS_ID,
    });

    setTimeout(
      () => scrollToId(STUDENT_ACCESS_ID),
      350,
    );

    return;
  }

  window.location.assign(
    `${FOR_STUDENTS_PATH}#${STUDENT_ACCESS_ID}`,
  );
}
