import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building, ShieldCheck, Users, Briefcase, FileSearch, MessageSquare } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "For Clients | Averon Technologies LLC",
  description:
    "Technology hiring with your business priorities in mind. Learn how Averon Technologies LLC supports employers and hiring managers across the United States.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Employer Solutions"
        title="Technology Hiring With Your Business Priorities in Mind"
        description="A structured, transparent staffing partnership connecting technical hiring managers with qualified professionals aligned with project scope and delivery standards."
        breadcrumbs={[{ label: "For Clients" }]}
      />

      {/* Engagement Workflow Overview */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#356C96] uppercase tracking-wider">
              <span>Client Delivery Model</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
              A Disciplined Process for Technical Recruitment.
            </h2>
            <p className="text-base text-[#65717D] leading-relaxed">
              We understand that bringing on the right technical talent involves far more than matching
              keywords on a resume. Our client engagement process is designed to ensure rigorous
              technical qualification, clear communication, and full alignment with your team&apos;s
              standards.
            </p>
          </div>

          {/* 6 Structured Client Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-panel rounded-2xl p-7 border border-[#E1E6EA] shadow-xs card-hover-effect space-y-3">
              <div className="h-10 w-10 rounded-xl bg-[#EDF2F5] text-[#132A40] flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-[#0B1B2B]">
                Understanding Workforce Requirements
              </h3>
              <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                We review your overall project timeline, budget parameters, team reporting structure,
                and technical delivery milestones before initiating recruitment.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-7 border border-[#E1E6EA] shadow-xs card-hover-effect space-y-3">
              <div className="h-10 w-10 rounded-xl bg-[#EDF2F5] text-[#132A40] flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-[#0B1B2B]">
                Defining Technical Skills & Experience
              </h3>
              <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                We clarify non-negotiable architectural proficiencies, frameworks, tool versions, and
                hands-on experience levels to avoid mismatched submissions.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-7 border border-[#E1E6EA] shadow-xs card-hover-effect space-y-3">
              <div className="h-10 w-10 rounded-xl bg-[#EDF2F5] text-[#132A40] flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-[#0B1B2B]">
                Candidate Identification & Screening
              </h3>
              <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                Our recruiters screen candidates for technical competence, communication clarity,
                and verified availability before submitting their profiles for review.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-7 border border-[#E1E6EA] shadow-xs card-hover-effect space-y-3">
              <div className="h-10 w-10 rounded-xl bg-[#EDF2F5] text-[#132A40] flex items-center justify-center font-bold text-sm mb-4">
                04
              </div>
              <h3 className="text-lg font-semibold text-[#0B1B2B]">
                Recruitment Coordination
              </h3>
              <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                We manage interview scheduling, collect structured interviewer feedback, and
                maintain timely, transparent communication with all participants.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-7 border border-[#E1E6EA] shadow-xs card-hover-effect space-y-3">
              <div className="h-10 w-10 rounded-xl bg-[#EDF2F5] text-[#132A40] flex items-center justify-center font-bold text-sm mb-4">
                05
              </div>
              <h3 className="text-lg font-semibold text-[#0B1B2B]">
                Contract & Permanent Hiring Models
              </h3>
              <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                Whether you need contract capacity for a discrete sprint, contract-to-hire evaluation,
                or a permanent hire, we structure engagements to suit your budget.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-7 border border-[#E1E6EA] shadow-xs card-hover-effect space-y-3">
              <div className="h-10 w-10 rounded-xl bg-[#EDF2F5] text-[#132A40] flex items-center justify-center font-bold text-sm mb-4">
                06
              </div>
              <h3 className="text-lg font-semibold text-[#0B1B2B]">
                Engagement & Retention Support
              </h3>
              <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                We stay engaged post-onboarding through periodic check-ins, resolving any administrative
                questions to ensure a smooth, productive working relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models Comparison for Employers */}
      <section className="bg-[#F6F7F8] py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <h2 className="text-3xl font-semibold text-[#0B1B2B] tracking-tight">
              Flexible Staffing Options for Your Organization
            </h2>
            <p className="text-sm sm:text-base text-[#65717D]">
              Choose the engagement structure that aligns with your headcount roadmap and project deadlines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[#E1E6EA] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#356C96] font-semibold">
                  Model A
                </span>
                <h3 className="text-xl font-semibold text-[#0B1B2B] mt-1 mb-3">
                  Contract Staffing
                </h3>
                <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed mb-6">
                  For targeted project deliverables, systems upgrades, and peak development cycles requiring
                  immediate technical expertise.
                </p>
                <ul className="space-y-2 text-xs text-[#172331] pt-4 border-t border-[#EDF2F5]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#356C96]" />
                    <span>Project-based duration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#356C96]" />
                    <span>Operational budget alignment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#356C96]" />
                    <span>Rapid onboarding support</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#EDF2F5]">
                <Link
                  href="/services/contract-staffing"
                  className="text-xs font-semibold text-[#356C96] hover:text-[#0B1B2B] inline-flex items-center"
                >
                  <span>Explore Contract Staffing</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#356C96] shadow-sm flex flex-col justify-between relative">
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-semibold text-white bg-[#356C96] px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Popular
                </span>
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#356C96] font-semibold">
                  Model B
                </span>
                <h3 className="text-xl font-semibold text-[#0B1B2B] mt-1 mb-3">
                  Contract-to-Hire
                </h3>
                <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed mb-6">
                  Evaluate real-world code quality, technical execution, and cultural fit during an agreed
                  contract period before permanent hiring.
                </p>
                <ul className="space-y-2 text-xs text-[#172331] pt-4 border-t border-[#EDF2F5]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#356C96]" />
                    <span>Live evaluation on production</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#356C96]" />
                    <span>Mitigates hiring risk</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#356C96]" />
                    <span>Clear conversion framework</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#EDF2F5]">
                <Link
                  href="/services/contract-staffing"
                  className="text-xs font-semibold text-[#356C96] hover:text-[#0B1B2B] inline-flex items-center"
                >
                  <span>Explore Contract-to-Hire</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#E1E6EA] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#356C96] font-semibold">
                  Model C
                </span>
                <h3 className="text-xl font-semibold text-[#0B1B2B] mt-1 mb-3">
                  Permanent Placement
                </h3>
                <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed mb-6">
                  For core staff positions, team leadership, and technical architects driving long-term
                  initiatives and institutional continuity.
                </p>
                <ul className="space-y-2 text-xs text-[#172331] pt-4 border-t border-[#EDF2F5]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#356C96]" />
                    <span>Direct-hire recruitment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#356C96]" />
                    <span>Long-term team retention</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#356C96]" />
                    <span>Comprehensive vetting</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#EDF2F5]">
                <Link
                  href="/services/permanent-placement"
                  className="text-xs font-semibold text-[#356C96] hover:text-[#0B1B2B] inline-flex items-center"
                >
                  <span>Explore Permanent Placement</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Conversation Section */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-semibold text-[#0B1B2B] tracking-tight">
            Discuss Your Workforce Requirements
          </h2>
          <p className="text-base text-[#65717D] leading-relaxed max-w-2xl mx-auto">
            Connect with our recruitment coordinators to discuss your current project priorities, open
            technical requisitions, and timeline expectations.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-white bg-[#0B1B2B] hover:bg-[#132A40] rounded-md transition-all shadow-xs hover:-translate-y-0.5"
            >
              <span>Start a Hiring Conversation</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Scale Your Technical Team?"
        description="Connect with Averon Technologies LLC to discuss your organization's open requirements across the United States."
      />
    </>
  );
}
