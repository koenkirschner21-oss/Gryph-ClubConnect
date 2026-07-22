import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://gryphclubconnect.com';
const DEFAULT_IMAGE =
  `${SITE_URL}/screenshots/clubconnect-homepage-hero.png`;

type PageMetadata = {
  title: string;
  description: string;
  image?: string;
  index?: boolean;
};

const metadata: Record<string, PageMetadata> = {
  '/': {
    title:
      'Gryph ClubConnect | University of Guelph Club Platform',
    description:
      'Discover University of Guelph clubs, events, and opportunities while giving club teams one connected workspace for members, tasks, meetings, hiring, permissions, and more.',
  },

  '/for-clubs': {
    title:
      'Club Management for U of G Clubs | Gryph ClubConnect',
    description:
      'Run your University of Guelph club from one workspace for members, roles, events, tasks, meetings, hiring, documents, permissions, and analytics.',
  },

  '/for-students': {
    title:
      'Find U of G Clubs, Events and Opportunities | Gryph ClubConnect',
    description:
      'Explore University of Guelph clubs, discover events and open positions, apply, RSVP, and keep your involvement organized across every club.',
  },

  '/features': {
    title:
      'Student Club Management Platform Features | Gryph ClubConnect',
    description:
      'Explore Gryph ClubConnect features for club discovery, member management, events, RSVPs, tasks, meetings, hiring, permissions, documents, and analytics.',
  },

  '/demo': {
    title:
      'Request a Gryph ClubConnect Demo',
    description:
      'Request a walkthrough of Gryph ClubConnect and see how the platform can support your club’s current workflows and early-access onboarding.',
  },

  '/about': {
    title:
      'About Gryph ClubConnect | Student-Built at U of G',
    description:
      'Learn why Gryph ClubConnect is being built as an independent, student-built platform for University of Guelph club operations and discovery.',
  },

  '/privacy': {
    title:
      'Privacy Policy | Gryph ClubConnect',
    description:
      'Read the Gryph ClubConnect privacy policy.',
  },

  '/terms': {
    title:
      'Terms of Use | Gryph ClubConnect',
    description:
      'Read the Gryph ClubConnect terms of use.',
  },

  '/how-it-works': {
    title:
      'How Gryph ClubConnect Works',
    description:
      'Learn how Gryph ClubConnect connects student discovery and club operations.',
    index: false,
  },

  '/pricing': {
    title:
      'Gryph ClubConnect Pricing',
    description:
      'Gryph ClubConnect pricing information.',
    index: false,
  },

  '/blog': {
    title:
      'Gryph ClubConnect Blog',
    description:
      'Updates and resources from Gryph ClubConnect.',
    index: false,
  },

  '/careers': {
    title:
      'Careers | Gryph ClubConnect',
    description:
      'Career opportunities with Gryph ClubConnect.',
    index: false,
  },
};

function setMeta(
  selector: string,
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  let element =
    document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

function setCanonical(url: string) {
  let canonical =
    document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }

  canonical.href = url;
}

function setStructuredData() {
  const id = 'gcc-structured-data';

  let script =
    document.getElementById(id) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',

    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Gryph ClubConnect',
        url: SITE_URL,
        logo: `${SITE_URL}/logo-transparent.png`,
        email: 'gryphclubconnect@gmail.com',

        sameAs: [
          'https://instagram.com/gryphclubconnect',
          'https://www.linkedin.com/company/gryph-clubconnect/',
          'https://www.youtube.com/@GryphClubConnect',
          'https://www.tiktok.com/@gryphclubconnect',
        ],
      },

      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Gryph ClubConnect',
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
        inLanguage: 'en-CA',
      },

      {
        '@type': 'SoftwareApplication',
        name: 'Gryph ClubConnect',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: SITE_URL,
        description:
          'A student-built platform for University of Guelph club discovery and club management.',
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
    ],
  });
}

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const page = metadata[location.pathname] ?? {
      title:
        'Page Not Found | Gryph ClubConnect',
      description:
        'The requested page could not be found.',
      index: false,
    };

    const canonicalUrl =
      location.pathname === '/'
        ? `${SITE_URL}/`
        : `${SITE_URL}${location.pathname}`;

    const image = page.image ?? DEFAULT_IMAGE;

    const robots =
      page.index === false
        ? 'noindex,nofollow'
        : 'index,follow,max-image-preview:large';

    document.title = page.title;
    document.documentElement.lang = 'en';

    setMeta(
      'meta[name="description"]',
      'name',
      'description',
      page.description,
    );

    setMeta(
      'meta[name="robots"]',
      'name',
      'robots',
      robots,
    );

    setMeta(
      'meta[property="og:site_name"]',
      'property',
      'og:site_name',
      'Gryph ClubConnect',
    );

    setMeta(
      'meta[property="og:title"]',
      'property',
      'og:title',
      page.title,
    );

    setMeta(
      'meta[property="og:description"]',
      'property',
      'og:description',
      page.description,
    );

    setMeta(
      'meta[property="og:type"]',
      'property',
      'og:type',
      'website',
    );

    setMeta(
      'meta[property="og:url"]',
      'property',
      'og:url',
      canonicalUrl,
    );

    setMeta(
      'meta[property="og:image"]',
      'property',
      'og:image',
      image,
    );

    setMeta(
      'meta[property="og:image:alt"]',
      'property',
      'og:image:alt',
      'Gryph ClubConnect platform preview',
    );

    setMeta(
      'meta[name="twitter:card"]',
      'name',
      'twitter:card',
      'summary_large_image',
    );

    setMeta(
      'meta[name="twitter:title"]',
      'name',
      'twitter:title',
      page.title,
    );

    setMeta(
      'meta[name="twitter:description"]',
      'name',
      'twitter:description',
      page.description,
    );

    setMeta(
      'meta[name="twitter:image"]',
      'name',
      'twitter:image',
      image,
    );

    setCanonical(canonicalUrl);
    setStructuredData();
  }, [location.pathname]);

  return null;
}
