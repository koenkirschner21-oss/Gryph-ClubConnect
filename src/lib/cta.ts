/** Scroll to a homepage section by id. Navigates to `/` first when needed. */
export function goToSection(
  sectionId: string,
  options?: { navigate?: (path: string) => void; pathname?: string }
) {
  const scroll = () => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

export const ONBOARD_CLUB_ID = 'onboard-your-club';
export const REQUEST_DEMO_ID = 'request-demo';
export const STUDENT_ACCESS_ID = 'student-access';

/** @deprecated Prefer ONBOARD_CLUB_ID — kept so non-homepage pages keep scrolling to the primary CTA. */
export const JOIN_TESTING_ID = ONBOARD_CLUB_ID;
/** @deprecated Prefer REQUEST_DEMO_ID — kept so non-homepage pages keep scrolling to the demo CTA. */
export const REQUEST_WALKTHROUGH_ID = REQUEST_DEMO_ID;

export const APP_LOGIN_URL = 'https://app.gryphclubconnect.com/login';
