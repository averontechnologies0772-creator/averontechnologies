import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy | Averon Technologies LLC",
  description:
    "Privacy Policy for Averon Technologies LLC. Learn how we handle and protect information submitted through our website and recruitment services.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <>
      <PageHeader
        eyebrow="Legal & Privacy"
        title="Privacy Policy"
        description="How Averon Technologies LLC collects, utilizes, and safeguards information provided by visitors, clients, and prospective candidates."
        breadcrumbs={[{ label: "Privacy Policy" }]}
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
                1. Introduction
              </h2>
              <p>
                Averon Technologies LLC (&ldquo;Averon,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) is committed to respecting the privacy of individuals who interact
                with our website ({COMPANY_INFO.domain}) and utilize our technology staffing, recruitment,
                and consulting services. This Privacy Policy describes how we collect, use, and protect
                information gathered through our online presence.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0B1B2B] tracking-tight">
                2. Information We Collect
              </h2>
              <p>
                We collect information that you voluntarily choose to provide to us when submitting
                inquiries, requesting staffing support, or communicating regarding career opportunities:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong>Employer and Client Inquiries:</strong> Full name, professional work email,
                  company name, job title, phone number (if provided), and technical project
                  requirements.
                </li>
                <li>
                  <strong>Candidate Inquiries:</strong> Full name, email address, resume/CV contents,
                  technical skills, employment history, work authorization status, and role preferences.
                </li>
                <li>
                  <strong>General Communications:</strong> Any information contained within email
                  messages sent to {COMPANY_INFO.email}.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0B1B2B] tracking-tight">
                3. How We Use Collected Information
              </h2>
              <p>Information provided to Averon Technologies is used strictly for legitimate business purposes:</p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>Evaluating staffing requests and identifying qualified technology professionals.</li>
                <li>Communicating with clients regarding technical candidate submissions and interview schedules.</li>
                <li>Reviewing candidate backgrounds for potential contract, contract-to-hire, or permanent opportunities.</li>
                <li>Fulfilling contractual obligations and maintaining professional business relationships.</li>
                <li>Responding to direct questions and feedback sent to our recruitment desk.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0B1B2B] tracking-tight">
                4. Information Sharing & Third Parties
              </h2>
              <p>
                Averon Technologies LLC does not sell, lease, or trade personal or client information to third
                parties for commercial marketing purposes. Candidate profile details and resumes are shared
                with prospective client employers solely in the course of agreed recruitment coordination
                and candidate representation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0B1B2B] tracking-tight">
                5. Data Security & Storage
              </h2>
              <p>
                We apply reasonable administrative and technical safeguards to protect information received
                against unauthorized access, alteration, or disclosure. However, no internet transmission
                or electronic storage mechanism can be guaranteed to be 100% secure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0B1B2B] tracking-tight">
                6. Contact for Privacy Matters
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to request corrections or
                removal of your contact information from our recruitment records, please contact us at:
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
              <Link href="/terms" className="text-[#356C96] hover:underline">
                View Terms of Use →
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
