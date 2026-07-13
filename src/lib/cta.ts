/**
 * Marketing CTA routing for the early-access funnel.
 *
 * Demo / onboard → /demo#request-demo
 * Student access → /for-students#student-access
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

export const ONBOARD_CLUB_ID = 'onboard-your-club';
export const REQUEST_DEMO_ID = 'request-demo';
export const STUDENT_ACCESS_ID = 'student-access';

/** @deprecated Prefer REQUEST_DEMO_ID — onboard now scrolls to the demo form. */
export const JOIN_TESTING_ID = REQUEST_DEMO_ID;
/** @deprecated Prefer REQUEST_DEMO_ID */
export const REQUEST_WALKTHROUGH_ID = REQUEST_DEMO_ID;

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

const FORM_TARGETS: Record<string, { path: string; scrollId: string }> = {
  [REQUEST_DEMO_ID]: { path: DEMO_PATH, scrollId: REQUEST_DEMO_ID },
  [ONBOARD_CLUB_ID]: { path: DEMO_PATH, scrollId: REQUEST_DEMO_ID },
  [STUDENT_ACCESS_ID]: { path: FOR_STUDENTS_PATH, scrollId: STUDENT_ACCESS_ID },
};

function scrollToId(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/** Scroll to a section by id. Form CTAs route to Demo / For Students pages. */
export function goToSection(sectionId: string, options?: GoOptions) {
  const formTarget = FORM_TARGETS[sectionId];

  if (formTarget) {
    const { path, scrollId } = formTarget;
    const onTargetPage = options?.pathname === path;

    if (onTargetPage) {
      scrollToId(scrollId);
      return;
    }

    if (options?.navigate) {
      options.navigate({ pathname: path, hash: scrollId });
      setTimeout(() => scrollToId(scrollId), 350);
      return;
    }

    window.location.hash = `#${path}`;
    setTimeout(() => scrollToId(scrollId), 350);
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

export function goToDemoForm(
  options?: GoOptions & { interest?: ClubInterestOption }
) {
  if (options?.interest) {
    setClubFormInterest(options.interest);
  }
  goToSection(REQUEST_DEMO_ID, options);
}

export function goToStudentAccess(options?: GoOptions) {
  goToSection(STUDENT_ACCESS_ID, options);
}
