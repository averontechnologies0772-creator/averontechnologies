import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Users2, Code2, Cloud, ShieldCheck, Database, Server, Building2, Send } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { COMPANY_INFO, TECH_DOMAINS } from "@/lib/constants";

export const metadata = {
  title: "For Candidates | Averon Technologies LLC",
  description:
    "Explore technology opportunities that align with your technical expertise. Connect with Averon Technologies LLC for contract, contract-to-hire, and permanent roles.",
};

export default function CandidatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technology Professionals"
        title="Find Opportunities That Align With Your Technical Expertise"
        description="Averon Technologies connects skilled technology professionals with organizations across the United States seeking contract, contract-to-hire, and permanent talent."
        breadcrumbs={[{ label: "For Candidates" }]}
      />

      {/* Overview & Candidate Perspective */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#356C96] uppercase tracking-wider">
                <Users2 className="h-4 w-4" />
                <span>Career Partnership</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
                Connecting Your Skills With Meaningful Projects.
              </h2>

              <p className="text-base text-[#65717D] leading-relaxed">
                Whether you are an independent contractor seeking your next targeted project engagement
                or a senior software engineer looking for a permanent team to grow with, Averon
                Technologies works to understand your technical strengths, preferred stacks, and
                professional goals.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#356C96] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#172331]">
                      Transparent Role Discussions
                    </h3>
                    <p className="text-xs sm:text-sm text-[#65717D]">
                      We provide clear project context, architectural requirements, and engagement expectations upfront.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#356C96] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#172331]">
                      Respect for Your Time & Focus
                    </h3>
                    <p className="text-xs sm:text-sm text-[#65717D]">
                      We only reach out with opportunities that genuinely match your indicated technical domain and career goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#356C96] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#172331]">
                      Engagement & Onboarding Support
                    </h3>
                    <p className="text-xs sm:text-sm text-[#65717D]">
                      Our recruitment coordinators assist with submission preparation, interview logistics, and onboarding administration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: How to submit credentials */}
            <div className="lg:col-span-5">
              <div className="glass-panel rounded-2xl p-8 border border-[#E1E6EA] shadow-xs space-y-6">
                <div className="border-b border-[#E1E6EA] pb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#356C96]">
                    Direct Candidate Inquiry
                  </span>
                  <h3 className="text-xl font-semibold text-[#0B1B2B] mt-1">
                    Connect With Our Recruiters
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                  We welcome inquiries from experienced technology professionals across the United States.
                  Send your resume and preferred engagement parameters directly to our recruitment desk.
                </p>

                <div className="space-y-2 text-xs text-[#172331] bg-[#F6F7F8] p-4 rounded-xl border border-[#E1E6EA]">
                  <div className="font-semibold text-[#132A40] pb-1 border-b border-[#E1E6EA]">
                    What to Include in Your Email:
                  </div>
                  <div>• Current Resume or CV (PDF format)</div>
                  <div>• Primary Technical Domain & Key Technologies</div>
                  <div>• Preferred Model: Contract, Contract-to-Hire, or Permanent</div>
                  <div>• Current Availability & Work Authorization</div>
                </div>

                <div className="pt-2">
                  <a
                    href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
                      "[Candidate Expression of Interest] - IT Professional Profile"
                    )}`}
                    className="w-full flex items-center justify-center px-5 py-3 rounded-md text-sm font-medium text-white bg-[#0B1B2B] hover:bg-[#132A40] transition-colors shadow-xs"
                  >
                    <Mail className="mr-2 h-4 w-4 text-[#54758F]" />
                    <span>Email Your Resume Directly</span>
                  </a>
                  <div className="text-center mt-3">
                    <span className="text-xs text-[#65717D]">or submit via our </span>
                    <Link href="/contact" className="text-xs font-semibold text-[#356C96] hover:underline">
                      General Inquiry Form
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Technical Domains */}
      <section className="bg-[#F6F7F8] py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <h2 className="text-3xl font-semibold text-[#0B1B2B] tracking-tight">
              Domains We Regularly Source For
            </h2>
            <p className="text-sm sm:text-base text-[#65717D]">
              Our client requirements span multiple core technology disciplines:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_DOMAINS.map((domain) => (
              <div
                key={domain.id}
                className="bg-white rounded-xl p-6 border border-[#E1E6EA] shadow-2xs space-y-3 card-hover-effect"
              >
                <h3 className="text-base font-semibold text-[#0B1B2B]">
                  {domain.title}
                </h3>
                <p className="text-xs text-[#65717D] leading-relaxed">
                  {domain.summary}
                </p>
                <div className="pt-2 flex flex-wrap gap-1">
                  {domain.skills.slice(0, 4).map((skill, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-[#EDF2F5] text-[#132A40] px-2 py-0.5 rounded font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Connect With Averon Technologies?"
        description="Reach out to our recruitment coordinators today with your resume and preferred engagement parameters."
        buttonText="Email Recruitment Desk"
        buttonHref={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
          "[Candidate Profile] - Technical Resume Submission"
        )}`}
      />
    </>
  );
}
