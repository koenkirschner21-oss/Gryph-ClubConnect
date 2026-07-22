import AnimatedSection from '../components/ui/AnimatedSection';

const sectionClass =
  'rounded-[14px] border border-white/[0.08] bg-[#111111] p-5 sm:p-6';

const headingClass =
  'mb-3 font-sans text-xl font-bold text-[#F5F5F5]';

const subheadingClass =
  'mb-2 mt-5 font-sans font-semibold text-[#F5F5F5]';

const linkClass =
  'font-medium text-[#E51937] underline underline-offset-4 transition-colors hover:text-[#FF6B7D]';

export default function TermsPage() {
  return (
    <div className="page-transition">
      <section className="relative overflow-hidden bg-[#0B0B0B] pb-20 pt-28 sm:pt-32">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#FFC429] opacity-[0.04] blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 text-center sm:mb-12">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFC429] sm:text-xs">
              Platform terms
            </p>

            <h1
              className="mb-4 font-sans font-extrabold leading-tight text-[#F5F5F5]"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              }}
            >
              Terms of Use
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#9CA3AF]">
              These terms explain the rules and responsibilities that apply
              when accessing the Gryph ClubConnect website, early-access
              services, and platform.
            </p>

            <p className="mt-4 font-sans text-sm text-[#777777]">
              Last updated: July 22, 2026
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="space-y-5 text-base leading-relaxed text-[#9CA3AF]">
              <section className={sectionClass}>
                <h2 className={headingClass}>1. Acceptance of These Terms</h2>

                <p>
                  By accessing or using the Gryph ClubConnect website,
                  submitting an early-access request, creating an account, or
                  using the platform, you agree to these Terms of Use and our{' '}
                  <a href="/privacy" className={linkClass}>
                    Privacy Policy
                  </a>
                  .
                </p>

                <p className="mt-3">
                  If you do not agree with these terms, do not access or use
                  Gryph ClubConnect.
                </p>

                <p className="mt-3">
                  If you use Gryph ClubConnect on behalf of a club or other
                  organization, you confirm that you have authority to act on
                  its behalf and agree to these terms for both yourself and
                  that organization.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>2. About Gryph ClubConnect</h2>

                <p>
                  Gryph ClubConnect is an independent, student-built platform
                  intended to support student club discovery, involvement, and
                  club management.
                </p>

                <p className="mt-3">
                  Gryph ClubConnect is not officially affiliated with,
                  endorsed by, sponsored by, or operated by the University of
                  Guelph.
                </p>

                <p className="mt-3">
                  References to the University of Guelph, U of G, campus
                  organizations, clubs, programs, facilities, or related names
                  are descriptive only and do not imply official approval or
                  affiliation.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>3. Eligibility</h2>

                <p>
                  Gryph ClubConnect is primarily designed for post-secondary
                  students, student club members, club leaders, and people
                  supporting student organizations.
                </p>

                <p className="mt-3">
                  You must be legally capable of agreeing to these terms. If
                  you are using the platform on behalf of a club, you must have
                  permission to create, claim, administer, or manage that
                  club&apos;s presence.
                </p>

                <p className="mt-3">
                  We may require a University of Guelph email address,
                  verification, invitation, approval, or other eligibility
                  information for certain features.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  4. Early Access and Testing
                </h2>

                <p>
                  Gryph ClubConnect may be provided in an early-access, beta,
                  pilot, preview, or testing stage.
                </p>

                <p className="mt-3">
                  During this period, features may be incomplete, changed,
                  delayed, unavailable, or removed. Information or workflows
                  may not always operate as expected, and users should keep
                  appropriate copies of important club information.
                </p>

                <p className="mt-3">
                  Participation in early access does not guarantee continued
                  access, future availability, a specific launch date, or that
                  every proposed feature will be released.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>5. Accounts and Security</h2>

                <p>
                  You are responsible for providing accurate account
                  information and keeping it reasonably current.
                </p>

                <p className="mt-3">
                  You are also responsible for:
                </p>

                <ul className="mt-3 space-y-2 pl-5">
                  <li className="list-disc">
                    maintaining the confidentiality of your login credentials;
                  </li>
                  <li className="list-disc">
                    activity performed through your account;
                  </li>
                  <li className="list-disc">
                    using a secure password and appropriate account-security
                    practices;
                  </li>
                  <li className="list-disc">
                    notifying us promptly if you believe your account has been
                    accessed or used without authorization.
                  </li>
                </ul>

                <p className="mt-4">
                  You may not share credentials in a way that bypasses user,
                  role, permission, or account limits.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  6. Club Ownership and Administration
                </h2>

                <p>
                  Club administrators, presidents, co-presidents, executives,
                  and other authorized users are responsible for managing their
                  club workspace and assigning appropriate roles and
                  permissions.
                </p>

                <p className="mt-3">
                  A person claiming or creating a club profile must have a
                  legitimate connection to that club and appropriate authority
                  to represent it.
                </p>

                <p className="mt-3">
                  Gryph ClubConnect may request information to verify a club
                  claim, leadership role, ownership transfer, or
                  administrative authority. We may pause, reject, reverse, or
                  investigate a claim when authority is unclear or disputed.
                </p>

                <p className="mt-3">
                  Club leaders are responsible for completing ownership
                  transfers and removing access from people who are no longer
                  authorized to manage the club.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>7. User and Club Content</h2>

                <p>
                  Users and clubs may submit, upload, create, store, or publish
                  content through Gryph ClubConnect. This may include club
                  descriptions, logos, banners, events, announcements, tasks,
                  meeting notes, documents, applications, messages, and other
                  materials.
                </p>

                <h3 className={subheadingClass}>Your ownership</h3>

                <p>
                  You retain ownership of content that you own. These terms do
                  not transfer ownership of your original content to Gryph
                  ClubConnect.
                </p>

                <h3 className={subheadingClass}>Permission to operate the platform</h3>

                <p>
                  By submitting content, you grant Gryph ClubConnect a
                  non-exclusive, worldwide, royalty-free licence to host,
                  store, reproduce, format, display, transmit, and otherwise
                  process that content only as reasonably necessary to
                  operate, secure, support, and improve the platform.
                </p>

                <p className="mt-3">
                  This permission continues while the content remains on the
                  platform and for a reasonable period afterward where needed
                  for backups, security, legal compliance, or dispute
                  resolution.
                </p>

                <h3 className={subheadingClass}>Your responsibility</h3>

                <p>
                  You confirm that you have the rights, authority, and any
                  required permissions or consent to submit the content.
                </p>

                <p className="mt-3">
                  Do not upload confidential, copyrighted, personal, or
                  sensitive information unless you are authorized to do so and
                  it is appropriate for the intended platform workflow.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>8. Acceptable Use</h2>

                <p>You must not use Gryph ClubConnect to:</p>

                <ul className="mt-3 space-y-2 pl-5">
                  <li className="list-disc">
                    violate a law, regulation, university rule, or another
                    person&apos;s rights;
                  </li>
                  <li className="list-disc">
                    harass, threaten, discriminate against, exploit, or harm
                    another person;
                  </li>
                  <li className="list-disc">
                    impersonate another person, club, university department,
                    or organization;
                  </li>
                  <li className="list-disc">
                    publish false, deceptive, fraudulent, or materially
                    misleading information;
                  </li>
                  <li className="list-disc">
                    send spam, unwanted promotions, or repetitive unsolicited
                    messages;
                  </li>
                  <li className="list-disc">
                    upload malware, harmful code, or content intended to
                    disrupt the platform;
                  </li>
                  <li className="list-disc">
                    probe, scan, bypass, or interfere with security,
                    authentication, permissions, rate limits, or access
                    controls;
                  </li>
                  <li className="list-disc">
                    scrape, copy, export, or collect user information without
                    authorization;
                  </li>
                  <li className="list-disc">
                    access another user&apos;s account, private content, or
                    restricted club workspace without permission;
                  </li>
                  <li className="list-disc">
                    use the platform for unlawful commercial activity or in a
                    way that places unreasonable load on the service.
                  </li>
                </ul>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  9. Events, Applications, Hiring, and Club Information
                </h2>

                <p>
                  Gryph ClubConnect provides tools that allow clubs to publish
                  events, collect RSVPs, post positions, receive applications,
                  review candidates, and manage other club workflows.
                </p>

                <p className="mt-3">
                  Clubs and their authorized representatives—not Gryph
                  ClubConnect—are responsible for:
                </p>

                <ul className="mt-3 space-y-2 pl-5">
                  <li className="list-disc">
                    the accuracy of club listings, events, positions,
                    eligibility rules, deadlines, and instructions;
                  </li>
                  <li className="list-disc">
                    reviewing and responding to applications or requests;
                  </li>
                  <li className="list-disc">
                    conducting fair and appropriate selection processes;
                  </li>
                  <li className="list-disc">
                    communicating schedule changes, cancellations, decisions,
                    and expectations;
                  </li>
                  <li className="list-disc">
                    complying with applicable university requirements,
                    policies, and laws.
                  </li>
                </ul>

                <p className="mt-4">
                  Gryph ClubConnect does not guarantee admission to a club,
                  attendance at an event, selection for a position, an
                  interview, an offer, or any particular decision by a club.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  10. Moderation and Enforcement
                </h2>

                <p>
                  We may investigate reports and take reasonable action to
                  protect users, clubs, the platform, or third parties.
                </p>

                <p className="mt-3">
                  Depending on the circumstances, action may include:
                </p>

                <ul className="mt-3 space-y-2 pl-5">
                  <li className="list-disc">
                    requesting information or corrections;
                  </li>
                  <li className="list-disc">
                    limiting the visibility of content;
                  </li>
                  <li className="list-disc">
                    removing content or reversing unauthorized changes;
                  </li>
                  <li className="list-disc">
                    restricting permissions or club-management access;
                  </li>
                  <li className="list-disc">
                    suspending or terminating accounts;
                  </li>
                  <li className="list-disc">
                    reporting conduct to appropriate authorities where
                    reasonably necessary.
                  </li>
                </ul>

                <p className="mt-4">
                  We are not obligated to monitor every activity or piece of
                  content and cannot guarantee that all inappropriate content
                  will be identified immediately.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  11. Intellectual Property
                </h2>

                <p>
                  Gryph ClubConnect and its original software, branding,
                  interface, designs, documentation, graphics, and related
                  materials are owned by Gryph ClubConnect or its licensors and
                  are protected by applicable intellectual-property laws.
                </p>

                <p className="mt-3">
                  These terms give you a limited, revocable, non-exclusive,
                  non-transferable right to use the platform for its intended
                  purposes. They do not give you ownership of the platform or
                  permission to copy, resell, sublicense, reverse engineer, or
                  commercially exploit it except where applicable law does not
                  permit such restrictions.
                </p>

                <p className="mt-3">
                  Club names, logos, and materials remain the property of their
                  respective owners.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>12. Feedback</h2>

                <p>
                  You may choose to provide suggestions, comments, testing
                  feedback, or ideas about Gryph ClubConnect.
                </p>

                <p className="mt-3">
                  You allow us to use this feedback without restriction or
                  compensation to improve, develop, and operate the platform.
                  This does not give us ownership of personal information or
                  club content submitted through ordinary platform workflows.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  13. Third-Party Services and Links
                </h2>

                <p>
                  Gryph ClubConnect may rely on or link to third-party services,
                  including hosting, analytics, form-processing,
                  authentication, storage, communication, and social-media
                  services.
                </p>

                <p className="mt-3">
                  Third-party services are governed by their own terms,
                  policies, and availability. Gryph ClubConnect is not
                  responsible for third-party websites, services, content, or
                  actions.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  14. Platform Availability and Changes
                </h2>

                <p>
                  We aim to provide a reliable platform, but we do not guarantee
                  that Gryph ClubConnect will always be available,
                  uninterrupted, secure, or error-free.
                </p>

                <p className="mt-3">
                  We may update, suspend, restrict, replace, or discontinue
                  features or parts of the platform. Maintenance, technical
                  issues, service-provider outages, security concerns, or
                  product changes may affect availability.
                </p>

                <p className="mt-3">
                  Where reasonably practical, we may provide notice of major
                  changes, but urgent security, legal, or operational changes
                  may occur without advance notice.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  15. Account Suspension and Termination
                </h2>

                <p>
                  You may stop using Gryph ClubConnect at any time. Account
                  deletion and data requests may be submitted as described in
                  the Privacy Policy.
                </p>

                <p className="mt-3">
                  We may suspend, restrict, or terminate access when we
                  reasonably believe:
                </p>

                <ul className="mt-3 space-y-2 pl-5">
                  <li className="list-disc">
                    these terms have been violated;
                  </li>
                  <li className="list-disc">
                    access is unauthorized, fraudulent, or harmful;
                  </li>
                  <li className="list-disc">
                    continued access creates legal, security, or operational
                    risk;
                  </li>
                  <li className="list-disc">
                    the service or relevant feature is being discontinued.
                  </li>
                </ul>

                <p className="mt-4">
                  When appropriate, we may provide an opportunity to explain or
                  correct an issue. Immediate action may be taken where needed
                  to protect users, information, or the platform.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  16. Disclaimers
                </h2>

                <p>
                  To the maximum extent permitted by applicable law, Gryph
                  ClubConnect is provided on an “as is” and “as available”
                  basis.
                </p>

                <p className="mt-3">
                  We do not guarantee that:
                </p>

                <ul className="mt-3 space-y-2 pl-5">
                  <li className="list-disc">
                    information published by users or clubs is complete,
                    accurate, current, or authorized;
                  </li>
                  <li className="list-disc">
                    the platform will meet every user or club requirement;
                  </li>
                  <li className="list-disc">
                    access will be uninterrupted or free from defects;
                  </li>
                  <li className="list-disc">
                    content, files, applications, messages, or other data will
                    never be lost;
                  </li>
                  <li className="list-disc">
                    participation through the platform will produce a
                    particular club, event, hiring, academic, or professional
                    outcome.
                  </li>
                </ul>

                <p className="mt-4">
                  Nothing in these terms excludes warranties, protections, or
                  rights that cannot legally be excluded.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  17. Limitation of Liability
                </h2>

                <p>
                  To the maximum extent permitted by applicable law, Gryph
                  ClubConnect and the individuals involved in developing or
                  operating it will not be liable for indirect, incidental,
                  special, consequential, exemplary, or punitive damages, or
                  for loss of data, opportunity, reputation, revenue, or
                  profits arising from or related to use of the platform.
                </p>

                <p className="mt-3">
                  Gryph ClubConnect is not responsible for decisions, conduct,
                  events, communications, content, or disputes involving
                  clubs, users, applicants, attendees, executives, or third
                  parties.
                </p>

                <p className="mt-3">
                  These limitations apply only to the extent permitted by law.
                  Nothing in these terms limits liability that cannot legally
                  be limited or excludes non-waivable consumer rights.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  18. Governing Law
                </h2>

                <p>
                  These terms are governed by the laws of the Province of
                  Ontario and the federal laws of Canada applicable in Ontario,
                  without regard to conflict-of-law principles.
                </p>

                <p className="mt-3">
                  Subject to any rights or procedures that cannot legally be
                  waived, disputes relating to these terms or Gryph
                  ClubConnect will be addressed in the courts located in
                  Ontario, Canada.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  19. Changes to These Terms
                </h2>

                <p>
                  We may update these terms as the platform, service providers,
                  business model, or legal requirements change.
                </p>

                <p className="mt-3">
                  The updated date will appear at the top of this page. When
                  appropriate, we may provide additional notice of material
                  changes through the website, platform, or email.
                </p>

                <p className="mt-3">
                  Continued use of Gryph ClubConnect after updated terms take
                  effect means you agree to the revised terms. If you do not
                  agree, you should stop using the platform.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>20. General Terms</h2>

                <p>
                  If any part of these terms is found to be invalid or
                  unenforceable, the remaining provisions will continue to
                  apply.
                </p>

                <p className="mt-3">
                  A delay or failure to enforce a provision does not waive the
                  right to enforce it later.
                </p>

                <p className="mt-3">
                  These terms and the Privacy Policy form the current agreement
                  between you and Gryph ClubConnect regarding use of the
                  platform, unless a separate written agreement applies.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>21. Contact</h2>

                <p>
                  Questions, reports, or concerns about these terms can be
                  directed to:
                </p>

                <p className="mt-3">
                  <strong className="font-semibold text-[#F5F5F5]">
                    Gryph ClubConnect
                  </strong>
                  <br />

                  <a
                    href="mailto:gryphclubconnect@gmail.com"
                    className={linkClass}
                  >
                    gryphclubconnect@gmail.com
                  </a>
                </p>
              </section>

              <div className="rounded-[14px] border border-[#FFC429]/20 bg-[rgba(255,196,41,0.05)] p-5 text-sm leading-relaxed text-[#9CA3AF]">
                These terms are a practical early-access draft based on the
                platform&apos;s current features and operating model. They
                should be reviewed and updated as Gryph ClubConnect introduces
                paid services, expands beyond early access, or materially
                changes how accounts and club data are managed.
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
