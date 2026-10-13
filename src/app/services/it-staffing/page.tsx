import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Briefcase, Users, Target, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Direct Client IT Staffing | Averon Technologies LLC",
  description:
    "Direct Client IT Staffing solutions by Averon Technologies LLC. Connecting internal hiring managers with qualified technology talent across the United States.",
};

export default function ITStaffingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Staffing Model"
        title="Direct Client IT Staffing Solutions"
        description="Dedicated technical talent matching aligned directly with your internal engineering standards, architecture, and project milestones."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Direct Client IT Staffing" },
        ]}
      />

      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#356C96] uppercase tracking-wider">
                <span>Direct Client Engagement</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
                Staffing Centered on Technical Clarity and Direct Coordination.
              </h2>

              <p className="text-base text-[#65717D] leading-relaxed">
                Averon Technologies provides direct client IT staffing solutions designed to
                streamline how hiring managers and engineering directors secure specialized technical
                talent. We focus on establishing direct communication with your decision-makers to
                understand exact technical specifications rather than relying on superficial keyword
                filters.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-xl bg-[#F6F7F8] border border-[#E1E6EA] space-y-2">
                  <h3 className="text-sm font-semibold text-[#172331] flex items-center gap-2">
                    <Target className="h-4 w-4 text-[#356C96]" />
                    <span>Technical Requirement Scoping</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                    We evaluate your architecture, stack versions, team composition, and delivery
                    cadence to establish precise qualification criteria before sourcing candidates.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#F6F7F8] border border-[#E1E6EA] space-y-2">
                  <h3 className="text-sm font-semibold text-[#172331] flex items-center gap-2">
                    <Users className="h-4 w-4 text-[#356C96]" />
                    <span>Vetted Candidate Presentations</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                    Profiles submitted by Averon are screened for hands-on technical competencies,
                    communication aptitude, and availability across the required project duration.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#F6F7F8] border border-[#E1E6EA] space-y-2">
                  <h3 className="text-sm font-semibold text-[#172331] flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#356C96]" />
                    <span>Transparent Recruitment Coordination</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                    From interview scheduling and technical feedback collection to final onboarding
                    coordination, our recruitment desk maintains clear, dependable communication.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white bg-[#0B1B2B] hover:bg-[#132A40] rounded-md transition-colors"
                >
                  <span>Submit Staffing Requirements</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-[#172331] bg-[#F6F7F8] hover:bg-[#EDF2F5] border border-[#E1E6EA] rounded-md transition-colors"
                >
                  <span>View All Services</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#EDF2F5] rounded-xl p-7 border border-[#E1E6EA]">
                <h3 className="text-base font-semibold text-[#0B1B2B] mb-4 pb-2 border-b border-[#E1E6EA]">
                  Common Client Staffing Scenarios
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-[#65717D]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#356C96] mt-0.5 flex-shrink-0" />
                    <span>Scaling core product engineering capacity for new releases</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#356C96] mt-0.5 flex-shrink-0" />
                    <span>Adding specialized cloud migration and DevOps architects</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#356C96] mt-0.5 flex-shrink-0" />
                    <span>Strengthening corporate cybersecurity and compliance teams</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#356C96] mt-0.5 flex-shrink-0" />
                    <span>Constructing modern enterprise data and analytics pipelines</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#0B1B2B] text-white rounded-xl p-7 border border-[#132A40]">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#54758F] mb-2">
                  Direct Inquiries
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Have an open role or immediate staffing requirement? Reach out directly to our
                  national technical recruitment desk.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs font-semibold text-white bg-[#356C96] hover:bg-[#2c5b80] px-4 py-2 rounded-md transition-colors"
                >
                  <span>Contact Staffing Desk</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss Your Direct IT Staffing Needs"
        description="Share your open position details, required tech stack, and target start dates with our team."
      />
    </>
  );
}
