import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata = {
  title: "Terms of Use | Averon Technologies LLC",
  description:
    "Terms of Use for Averon Technologies LLC. Governing the use of our corporate website and staffing information portals.",
};

export default function TermsPage() {
  const lastUpdated = "October 2026";

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        description="Terms and conditions governing the access and use of the Averon Technologies LLC website."
        breadcrumbs={[{ label: "Terms of Use" }]}
      />

      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-sm sm:text-base text-[#65717D] space-y-8 leading-relaxed">
            <div className="bg-[#F6F7F8] p-4 rounded-lg border border-[#E1E6EA] text-xs text-[#172331]">
              <strong>Effective Date:</strong> {lastUpdated} |{" "}
              <strong>Entity:</strong> {COMPANY_INFO.name}
            </div>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0B1B2B] tracking-tight">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the website of Averon Technologies LLC (&ldquo;Averon,&rdquo;
                &ldquo;we,&rdquo; or &ldquo;us&rdquo;) located at {COMPANY_INFO.domain}, you acknowledge
                that you have read, understood, and agreed to be bound by these Terms of Use. If you do
                not agree with these terms, please refrain from using our website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0B1B2B] tracking-tight">
                2. Nature of Website & No Employment Guarantee
              </h2>
              <p>
                The information provided on this website is for general informational purposes relating
                to our IT staffing, recruitment, and technology consulting capabilities. The inclusion of
                technical skill sets, roles, or service descriptions does not constitute a legal offer
                or a guarantee of candidate availability or placement.
              </p>
              <p>
                For candidates, submission of a resume or inquiry does not guarantee employment, an
                interview, or placement with any client. Formal staffing engagements, contractor
                placements, and direct-hire agreements are governed exclusively by separate written
                contracts executed between authorized representatives.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0B1B2B] tracking-tight">
                3. Intellectual Property Rights
              </h2>
              <p>
                All original content, design layouts, graphics, trademarks, logos, and materials on this
                website are the property of Averon Technologies LLC or its licensors and are protected by
                applicable copyright and intellectual property laws. You may not reproduce, modify, or
                distribute any content from this website without prior written permission from Averon.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0B1B2B] tracking-tight">
                4. Permitted Use & Conduct
              </h2>
              <p>You agree to use this website only for lawful purposes. You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>Submit misleading, false, or unauthorized contact information or resume materials.</li>
                <li>Attempt to compromise the security, integrity, or functionality of the website.</li>
                <li>Use automated scripts or scrapers to extract data without explicit consent.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0B1B2B] tracking-tight">
                5. Disclaimer of Warranties & Limitation of Liability
              </h2>
              <p>
                This website and its contents are provided on an &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; basis without warranties of any kind, whether express or implied. To the
                maximum extent permitted by law, Averon Technologies LLC disclaims all liability for any
                indirect, incidental, or consequential damages resulting from your use of or inability to
                use this website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0B1B2B] tracking-tight">
                6. Contact Information
              </h2>
              <p>
                Questions regarding these Terms of Use should be directed to our corporate contact desk:
              </p>
              <div className="bg-[#EDF2F5] p-5 rounded-lg border border-[#E1E6EA] text-xs sm:text-sm text-[#0B1B2B]">
                <p className="font-semibold">{COMPANY_INFO.name}</p>
                <p>Website: {COMPANY_INFO.domain}</p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-[#356C96] hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </p>
              </div>
            </section>

            <div className="pt-6 border-t border-[#E1E6EA] flex justify-between items-center text-xs">
              <Link href="/privacy-policy" className="text-[#356C96] hover:underline">
                View Privacy Policy →
              </Link>
              <Link href="/contact" className="text-[#356C96] hover:underline">
                Contact Our Team →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
