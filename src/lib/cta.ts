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

export const JOIN_TESTING_ID = 'join-testing';
export const REQUEST_WALKTHROUGH_ID = 'request-walkthrough';
