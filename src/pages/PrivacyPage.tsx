import AnimatedSection from '../components/ui/AnimatedSection';

const sectionClass =
  'rounded-[14px] border border-white/[0.08] bg-[#111111] p-5 sm:p-6';

const headingClass =
  'mb-3 font-sans text-xl font-bold text-[#F5F5F5]';

const linkClass =
  'font-medium text-[#E51937] underline underline-offset-4 transition-colors hover:text-[#FF6B7D]';

export default function PrivacyPage() {
  return (
    <div className="page-transition">
      <section className="relative overflow-hidden bg-[#0B0B0B] pb-20 pt-28 sm:pt-32">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#E51937] opacity-[0.04] blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 text-center sm:mb-12">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E51937] sm:text-xs">
              Privacy and data
            </p>

            <h1
              className="mb-4 font-sans font-extrabold leading-tight text-[#F5F5F5]"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              }}
            >
              Privacy Policy
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#9CA3AF]">
              This policy explains how Gryph ClubConnect collects, uses,
              stores, and shares information when you visit our website,
              submit a form, or use the platform.
            </p>

            <p className="mt-4 font-sans text-sm text-[#777777]">
              Last updated: July 22, 2026
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="space-y-5 text-base leading-relaxed text-[#9CA3AF]">
              <section className={sectionClass}>
                <h2 className={headingClass}>1. Who We Are</h2>

                <p>
                  Gryph ClubConnect is an independent, student-built platform
                  designed to support student club discovery and club
                  management.
                </p>

                <p className="mt-3">
                  Gryph ClubConnect is not officially affiliated with, endorsed
                  by, or operated by the University of Guelph.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>2. Scope of This Policy</h2>

                <p>
                  This policy applies to the Gryph ClubConnect marketing
                  website, early-access forms, and the Gryph ClubConnect web
                  application where this policy is linked.
                </p>

                <p className="mt-3">
                  Third-party websites and services linked from Gryph
                  ClubConnect have their own privacy practices. We encourage
                  you to review their policies before providing information.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  3. Information We May Collect
                </h2>

                <h3 className="mb-2 font-semibold text-[#F5F5F5]">
                  Information you provide
                </h3>

                <p>
                  When you submit a demo, onboarding, student-access, or contact
                  form, we may collect information such as:
                </p>

                <ul className="mt-3 space-y-2 pl-5">
                  <li className="list-disc">your name;</li>
                  <li className="list-disc">
                    your University or other email address;
                  </li>
                  <li className="list-disc">
                    your club name and role;
                  </li>
                  <li className="list-disc">
                    the workflows or platform features you are interested in;
                  </li>
                  <li className="list-disc">
                    messages and other information you choose to provide.
                  </li>
                </ul>

                <h3 className="mb-2 mt-5 font-semibold text-[#F5F5F5]">
                  Platform and account information
                </h3>

                <p>
                  When you create or use a Gryph ClubConnect account, the
                  platform may collect information needed to provide its
                  features, including profile information, club memberships,
                  roles, permissions, events, RSVPs, applications, tasks,
                  meetings, documents, announcements, messages, and activity
                  associated with your account.
                </p>

                <h3 className="mb-2 mt-5 font-semibold text-[#F5F5F5]">
                  Website analytics
                </h3>

                <p>
                  If you accept analytics cookies, Google Analytics may collect
                  technical and usage information such as visited pages,
                  approximate location, device and browser information, traffic
                  source, interactions, and session activity.
                </p>

                <p className="mt-3">
                  We do not intentionally send form names, email addresses,
                  club names, or form messages to Google Analytics.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  4. How We Use Information
                </h2>

                <p>We may use information to:</p>

                <ul className="mt-3 space-y-2 pl-5">
                  <li className="list-disc">
                    respond to demo, onboarding, access, and support requests;
                  </li>
                  <li className="list-disc">
                    create, operate, and support platform accounts;
                  </li>
                  <li className="list-disc">
                    provide club discovery and management features;
                  </li>
                  <li className="list-disc">
                    communicate about early access, onboarding, platform
                    changes, and service-related matters;
                  </li>
                  <li className="list-disc">
                    protect the platform, investigate misuse, and maintain
                    security;
                  </li>
                  <li className="list-disc">
                    understand website performance and improve the user
                    experience when analytics consent has been provided;
                  </li>
                  <li className="list-disc">
                    meet legal, regulatory, or administrative requirements.
                  </li>
                </ul>

                <p className="mt-4">
                  We do not sell personal information.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  5. Cookies and Local Storage
                </h2>

                <p>
                  The website uses local storage to remember your analytics
                  consent preference and may use similar browser technologies
                  required for website or application functionality.
                </p>

                <p className="mt-3">
                  Google Analytics remains disabled until you select
                  <strong className="font-semibold text-[#F5F5F5]">
                    {' '}
                    Accept analytics
                  </strong>
                  . If you decline, the Google Analytics tag does not load.
                </p>

                <p className="mt-3">
                  You can review or change your choice using the{' '}
                  <strong className="font-semibold text-[#F5F5F5]">
                    Cookie settings
                  </strong>{' '}
                  control displayed on the website.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  6. Service Providers and Sharing
                </h2>

                <p>
                  We may use service providers to operate the website and
                  platform. These providers may process information on our
                  behalf for the services they provide.
                </p>

                <ul className="mt-3 space-y-3 pl-5">
                  <li className="list-disc">
                    <strong className="font-semibold text-[#F5F5F5]">
                      Formspree
                    </strong>{' '}
                    processes website form submissions.
                  </li>

                  <li className="list-disc">
                    <strong className="font-semibold text-[#F5F5F5]">
                      Google Analytics
                    </strong>{' '}
                    processes optional website analytics after consent.
                  </li>

                  <li className="list-disc">
                    <strong className="font-semibold text-[#F5F5F5]">
                      Vercel
                    </strong>{' '}
                    provides website hosting and delivery infrastructure.
                  </li>

                  <li className="list-disc">
                    Other infrastructure, database, email, authentication, or
                    storage providers may be used to operate the application.
                  </li>
                </ul>

                <p className="mt-4">
                  We may also disclose information when reasonably necessary
                  to comply with applicable law, respond to lawful requests,
                  protect users, investigate misuse, or protect the rights and
                  security of Gryph ClubConnect.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  7. International Processing
                </h2>

                <p>
                  Some service providers may process or store information
                  outside Canada. When information is processed in another
                  jurisdiction, it may be subject to the laws and lawful-access
                  requirements of that jurisdiction.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>8. Data Retention</h2>

                <p>
                  We retain personal information only for as long as reasonably
                  necessary to provide the platform, respond to requests,
                  maintain appropriate records, protect the service, and meet
                  legal obligations.
                </p>

                <p className="mt-3">
                  Retention periods may vary depending on the type of
                  information, the purpose for which it was collected, account
                  activity, and applicable requirements.
                </p>

                <p className="mt-3">
                  Information may be deleted, anonymized, or securely removed
                  when it is no longer reasonably required.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>9. Security</h2>

                <p>
                  We use reasonable administrative, technical, and
                  organizational measures intended to protect information
                  against unauthorized access, loss, misuse, alteration, and
                  disclosure.
                </p>

                <p className="mt-3">
                  No internet transmission or storage system can be guaranteed
                  to be completely secure. Users should protect their account
                  credentials and contact us if they believe their account or
                  information has been compromised.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  10. Your Choices and Privacy Requests
                </h2>

                <p>
                  Depending on the circumstances and applicable law, you may
                  request:
                </p>

                <ul className="mt-3 space-y-2 pl-5">
                  <li className="list-disc">
                    access to personal information we hold about you;
                  </li>
                  <li className="list-disc">
                    correction of inaccurate or incomplete information;
                  </li>
                  <li className="list-disc">
                    deletion of information that is no longer required;
                  </li>
                  <li className="list-disc">
                    withdrawal of consent for optional processing;
                  </li>
                  <li className="list-disc">
                    information about how your data has been used or shared.
                  </li>
                </ul>

                <p className="mt-4">
                  To submit a privacy request, email{' '}
                  <a
                    href="mailto:gryphclubconnect@gmail.com"
                    className={linkClass}
                  >
                    gryphclubconnect@gmail.com
                  </a>
                  . We may need to verify your identity before completing a
                  request.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>11. Student and Club Content</h2>

                <p>
                  Club leaders and users are responsible for ensuring that
                  information they upload, publish, or share through the
                  platform is appropriate and that they have the necessary
                  authority or consent to provide it.
                </p>

                <p className="mt-3">
                  Users should avoid uploading sensitive personal information
                  unless it is necessary for an approved platform purpose.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>12. Minors</h2>

                <p>
                  Gryph ClubConnect is designed primarily for post-secondary
                  students and club leaders. The platform is not intentionally
                  directed to children under 13, and we do not knowingly seek
                  personal information from children under 13.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>
                  13. Changes to This Policy
                </h2>

                <p>
                  We may update this policy as the platform, service providers,
                  or legal requirements change.
                </p>

                <p className="mt-3">
                  The updated date will appear at the top of this page. When
                  appropriate, we may provide additional notice of material
                  changes through the website, platform, or email.
                </p>
              </section>

              <section className={sectionClass}>
                <h2 className={headingClass}>14. Contact Us</h2>

                <p>
                  Questions, requests, or concerns about this policy or our
                  privacy practices can be directed to:
                </p>

                <p className="mt-3">
                  <strong className="font-semibold text-[#F5F5F5]">
                    Gryph ClubConnect Privacy Contact
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
                This policy is intended to clearly describe Gryph
                ClubConnect&apos;s current privacy practices. It is not a
                substitute for legal advice, and the policy should be reviewed
                as the platform and its data-processing practices evolve.
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
