import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Users, Target, CheckCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Permanent Placement | Averon Technologies LLC",
  description:
    "Permanent Placement and direct-hire technical recruitment by Averon Technologies LLC. Build long-term engineering and IT leadership capacity across the United States.",
};

export default function PermanentPlacementPage() {
  return (
    <>
      <PageHeader
        eyebrow="Direct Hire Solutions"
        title="Permanent Placement & Direct-Hire Recruitment"
        description="Identify and secure accomplished technology professionals seeking long-term organizational impact and career alignment with your company."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Permanent Placement" },
        ]}
      />

      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#356C96] uppercase tracking-wider">
                <Award className="h-4 w-4" />
                <span>Long-Term Team Building</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
                Foundational Technical Talent for Sustainable Growth.
              </h2>

              <p className="text-base text-[#65717D] leading-relaxed">
                Permanent hires shape your organization&apos;s architectural foundation, technical
                culture, and institutional knowledge. Averon Technologies conducts targeted
                searches for full-time engineering contributors, technical team leads, and
                infrastructure architects who align with your long-term business vision.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-xl bg-[#F6F7F8] border border-[#E1E6EA] space-y-2">
                  <h3 className="text-sm font-semibold text-[#172331] flex items-center gap-2">
                    <Target className="h-4 w-4 text-[#356C96]" />
                    <span>In-Depth Role Profiling</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                    We delve into your engineering practices, code quality standards, leadership
                    expectations, and team dynamics to build an accurate candidate profile.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#F6F7F8] border border-[#E1E6EA] space-y-2">
                  <h3 className="text-sm font-semibold text-[#172331] flex items-center gap-2">
                    <Users className="h-4 w-4 text-[#356C96]" />
                    <span>Active & Passive Talent Sourcing</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                    Our technical recruiters reach both active job seekers and passive industry
                    practitioners whose track record demonstrates sustained technical contributions.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#F6F7F8] border border-[#E1E6EA] space-y-2">
                  <h3 className="text-sm font-semibold text-[#172331] flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-[#356C96]" />
                    <span>Offer Alignment & Onboarding Coordination</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                    We manage candidate expectations around compensation, benefits, and start dates,
                    facilitating smooth offer negotiations and successful start dates.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white bg-[#0B1B2B] hover:bg-[#132A40] rounded-md transition-colors"
                >
                  <span>Discuss Permanent Roles</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-[#172331] bg-[#F6F7F8] hover:bg-[#EDF2F5] border border-[#E1E6EA] rounded-md transition-colors"
                >
                  <span>All Staffing Services</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#EDF2F5] rounded-xl p-7 border border-[#E1E6EA] space-y-5">
              <h3 className="text-base font-semibold text-[#0B1B2B] pb-2 border-b border-[#E1E6EA]">
                Permanent Roles We Support
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#65717D]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#356C96] mt-0.5 flex-shrink-0" />
                  <span>Principal, Staff, and Senior Software Engineers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#356C96] mt-0.5 flex-shrink-0" />
                  <span>Cloud Solutions Architects & Site Reliability Leads</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#356C96] mt-0.5 flex-shrink-0" />
                  <span>Information Security Officers & Security Engineers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#356C96] mt-0.5 flex-shrink-0" />
                  <span>Lead Data Engineers & Enterprise Database Architects</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#356C96] mt-0.5 flex-shrink-0" />
                  <span>Enterprise Platform Leaders (ERP, CRM, ITSM)</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-[#E1E6EA] text-xs text-[#54758F]">
                Our recruitment process is calibrated for high mutual retention and transparent communication.
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Start Your Permanent Hiring Search"
        description="Connect with Averon Technologies to discuss your critical full-time technical requisitions."
      />
    </>
  );
}
