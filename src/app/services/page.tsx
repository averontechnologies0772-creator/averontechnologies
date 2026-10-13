import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Briefcase, UserCheck, Award, Layers, Headphones } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { CORE_SERVICES } from "@/lib/constants";

export const metadata = {
  title: "Services | Averon Technologies LLC",
  description:
    "Explore Averon Technologies staffing services: Direct Client IT Staffing, Contract Staffing, Contract-to-Hire, Permanent Placement, and Specialized Recruitment.",
};

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Briefcase,
  Clock,
  UserCheck,
  Award,
  Layers,
  Headphones,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Staffing Solutions"
        title="Technology Staffing Solutions for Evolving Business Needs."
        description="Flexible, dependable technology talent solutions designed around your workforce requirements, project priorities, and hiring timelines."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Services Narrative / Introduction */}
      <section className="bg-white py-14 sm:py-20 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B1B2B] tracking-tight">
              Flexible Engagement Models Built on Clear Expectations.
            </h2>
            <p className="text-sm sm:text-base text-[#65717D] leading-relaxed">
              Every organization operates under unique technical frameworks, project milestones, and
              budgeting considerations. Averon Technologies provides structured staffing models that
              enable companies to scale their engineering capacity responsibly, whether for a
              critical short-term release or for foundational, long-term technical leadership.
            </p>
          </div>

          {/* Quick Anchor Links */}
          <div className="mt-8 pt-6 border-t border-[#EDF2F5] flex flex-wrap gap-2 text-xs">
            {CORE_SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="bg-[#F6F7F8] hover:bg-[#EDF2F5] text-[#132A40] px-3 py-1.5 rounded-md border border-[#E1E6EA] transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <div className="divide-y divide-[#E1E6EA]">
        {CORE_SERVICES.map((service, index) => {
          const Icon = SERVICE_ICONS[service.iconName] || Briefcase;
          const isEven = index % 2 === 1;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-16 sm:py-24 ${isEven ? "bg-[#F6F7F8]" : "bg-white"}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  {/* Left Column: Heading & Description */}
                  <div className="lg:col-span-6 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-[#EDF2F5] text-[#0B1B2B] flex items-center justify-center border border-[#E1E6EA]">
                        <Icon className="h-6 w-6 text-[#356C96]" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#54758F]">
                        Engagement Model 0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B1B2B] tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#65717D] leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#0B1B2B] hover:bg-[#132A40] rounded-md transition-colors"
                      >
                        <span>Discuss {service.title}</span>
                        <ArrowRight className="ml-2 h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Key Responsibilities & Use Cases */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#E1E6EA] shadow-xs">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-[#132A40] mb-4 pb-2 border-b border-[#EDF2F5]">
                        Typical Project Scenarios & Use Cases
                      </h3>
                      <ul className="space-y-2.5">
                        {service.useCases.map((uc, i) => (
                          <li key={i} className="flex items-start text-xs sm:text-sm text-[#65717D] gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-[#356C96] mt-0.5 flex-shrink-0" />
                            <span>{uc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#E1E6EA] shadow-xs">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-[#132A40] mb-4 pb-2 border-b border-[#EDF2F5]">
                        Recruitment & Support Responsibilities
                      </h3>
                      <ul className="space-y-2.5">
                        {service.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start text-xs sm:text-sm text-[#65717D] gap-2.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#54758F] mt-2 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTASection
        title="Ready to Discuss Your Staffing Requirements?"
        description="Tell us about the roles, technology stacks, or project timelines your team needs to address."
      />
    </>
  );
}
