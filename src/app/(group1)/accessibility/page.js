import React from "react";
import Link from "next/link";

const AccessibilityStatement = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Accessibility Statement</h1>
      <p className="mb-4">Last Updated: June 19, 2026</p>

      <p className="mb-4">
        SM2 Fiduciary LLC (&ldquo;SM2 Trust,&rdquo; &ldquo;we,&rdquo; or
        &ldquo;us&rdquo;) is committed to ensuring digital accessibility for
        people with disabilities. We are continually improving the user
        experience for everyone and applying the relevant accessibility
        standards.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Conformance Status</h2>
      <p className="mb-4">
        The{" "}
        <Link href="https://www.w3.org/WAI/standards-guidelines/wcag/">
          Web Content Accessibility Guidelines (WCAG)
        </Link>{" "}
        define requirements for designers and developers to improve
        accessibility for people with disabilities. It defines three levels of
        conformance: Level A, Level AA, and Level AAA.
      </p>
      <p className="mb-4">
        SM2 Trust is partially conformant with WCAG 2.1 Level AA. Partially
        conformant means that some parts of the content do not fully conform to
        the accessibility standard. We are actively working to address known
        issues and improve conformance across our website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Feedback</h2>
      <p className="mb-4">
        We welcome your feedback on the accessibility of the SM2 Trust website.
        Please let us know if you encounter accessibility barriers:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          Email:{" "}
          <Link href="mailto:info@sm2trust.com" className="underline">
            info@sm2trust.com
          </Link>
        </li>
        <li>Phone: (805) 548-8488</li>
        <li>
          Mail: SM2 Trust, 567 Camino Mercado, Suite C, Arroyo Grande, CA 93420
        </li>
      </ul>
      <p className="mb-4">
        We try to respond to accessibility feedback within 5 business days.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Compatibility with Browsers and Assistive Technology
      </h2>
      <p className="mb-4">
        SM2 Trust is designed to be compatible with the following assistive
        technologies:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Recent versions of major browsers, including Chrome, Firefox, Safari, and Edge</li>
        <li>Screen readers such as NVDA, JAWS, and VoiceOver</li>
        <li>Keyboard-only navigation</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Technical Specifications</h2>
      <p className="mb-4">
        Accessibility of SM2 Trust relies on the following technologies to work
        with the particular combination of web browser and any assistive
        technologies or plugins installed on your computer:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>HTML</li>
        <li>WAI-ARIA</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <p className="mb-4">
        These technologies are relied upon for conformance with the
        accessibility standards used.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Assessment Approach</h2>
      <p className="mb-4">
        SM2 Trust assessed the accessibility of this website by the following
        approaches:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Self-evaluation using automated accessibility testing tools</li>
        <li>Manual review of site content and functionality</li>
        <li>Ongoing remediation of identified accessibility issues</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Known Limitations</h2>
      <p className="mb-4">
        Despite our best efforts to ensure accessibility, there may be some
        limitations. Below is a description of known limitations and potential
        solutions. Please contact us if you observe an issue not listed below.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          Some third-party content or embedded materials may not fully meet
          accessibility standards. We are working to improve or replace these
          where possible.
        </li>
        <li>
          Some older pages or archived content may not yet reflect our current
          accessibility standards. We are reviewing and updating these pages
          over time.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Formal Complaints</h2>
      <p className="mb-4">
        If you are not satisfied with our response to your accessibility
        feedback, you may contact us using the information above. We take
        accessibility concerns seriously and will work with you to address them
        promptly.
      </p>
    </div>
  );
};

export default AccessibilityStatement;
