import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Cloud, ShieldCheck, Database, Server, Building2, CheckCircle2, ChevronRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { TECH_DOMAINS } from "@/lib/constants";

export const metadata = {
  title: "Technology Expertise | Averon Technologies LLC",
  description:
    "Explore the technical domains Averon Technologies recruits across: Software Development, Cloud & DevOps, Cybersecurity, Data Engineering, IT Infrastructure, and Enterprise Technologies.",
};

const DOMAIN_ICONS: Record<string, React.ElementType> = {
  Code2,
  Cloud,
  ShieldCheck,
  Database,
  Server,
  Building2,
};

export default function ExpertisePage() {
  return (
    <>
      <PageHeader
        eyebrow="Technical Domains"
        title="Technical Expertise Across Critical Domains"
        description="Averon Technologies connects organizations with skilled technology professionals across foundational software, cloud, security, and enterprise infrastructure domains."
        breadcrumbs={[{ label: "Technology Expertise" }]}
      />

      {/* Advisory Note */}
      <section className="bg-white py-12 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-subtle rounded-xl p-6 sm:p-7 border border-[#E1E6EA] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#356C96] font-semibold">
                Recruitment Scope Notice
              </span>
              <p className="text-sm text-[#65717D]">
                The technologies, frameworks, and roles listed below represent ongoing areas of technical
                recruitment focus for our staffing desk across the United States.
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center text-xs font-semibold text-white bg-[#0B1B2B] hover:bg-[#132A40] px-4 py-2.5 rounded-md transition-all shadow-xs hover:-translate-y-0.5"
              >
                <span>Hire in These Domains</span>
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Domains Detailed List with Refined Apple-Style Cards */}
      <section className="bg-[#F6F7F8] py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {TECH_DOMAINS.map((domain, index) => {
            const Icon = DOMAIN_ICONS[domain.iconName] || Code2;
            return (
              <div
                key={domain.id}
                id={domain.id}
                className="glass-panel bg-white/90 rounded-2xl p-8 sm:p-10 border border-[#E1E6EA] shadow-[0_4px_20px_rgba(11,27,43,0.03)] card-hover-effect"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Domain Intro */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-[#EDF2F5] text-[#0B1B2B] flex items-center justify-center border border-[#E1E6EA] shadow-2xs">
                        <Icon className="h-6 w-6 text-[#356C96]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#54758F]">
                          Domain 0{index + 1}
                        </span>
                        <h2 className="text-2xl font-semibold text-[#0B1B2B] tracking-tight">
                          {domain.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm text-[#65717D] leading-relaxed">
                      {domain.summary}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/contact?domain=${encodeURIComponent(domain.title)}`}
                        className="inline-flex items-center text-xs font-semibold text-[#356C96] hover:text-[#0B1B2B] transition-colors"
                      >
                        <span>Discuss {domain.title} Talent</span>
                        <ChevronRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Roles and Stacks */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#F6F7F8]/80 rounded-xl p-6 border border-[#E1E6EA]/80">
                    {/* Roles */}
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-[#132A40] mb-3 pb-1 border-b border-[#E1E6EA]">
                        Common Role Profiles
                      </h3>
                      <ul className="space-y-2">
                        {domain.roles.map((role, i) => (
                          <li key={i} className="flex items-start text-xs text-[#172331] gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#356C96] mt-0.5 flex-shrink-0" />
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-[#132A40] mb-3 pb-1 border-b border-[#E1E6EA]">
                        Representative Technologies
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {domain.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs font-mono text-[#172331] bg-white px-2.5 py-1 rounded-md border border-[#E1E6EA] shadow-2xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Duel CTA: Employers & Candidates */}
      <section className="bg-white py-16 sm:py-20 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel-subtle rounded-2xl p-8 border border-[#E1E6EA] space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#356C96]">
                For Employers & Hiring Managers
              </span>
              <h3 className="text-xl font-semibold text-[#0B1B2B]">
                Seeking Specialized Technical Talent?
              </h3>
              <p className="text-sm text-[#65717D] leading-relaxed">
                Connect directly with our recruitment desk to review your project tech stack and staffing
                timeframes.
              </p>
              <div className="pt-2">
                <Link
                  href="/clients"
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#0B1B2B] hover:text-[#356C96] transition-colors"
                >
                  <span>Learn About Client Staffing Solutions</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="glass-panel-subtle rounded-2xl p-8 border border-[#E1E6EA] space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#356C96]">
                For IT Professionals
              </span>
              <h3 className="text-xl font-semibold text-[#0B1B2B]">
                Are You a Technology Practitioner?
              </h3>
              <p className="text-sm text-[#65717D] leading-relaxed">
                Explore how Averon connects skilled professionals with matching contract and permanent
                roles nationwide.
              </p>
              <div className="pt-2">
                <Link
                  href="/candidates"
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#0B1B2B] hover:text-[#356C96] transition-colors"
                >
                  <span>Connect With Our Recruitment Team</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss Your Technical Requirements With Us"
        description="Tell us about the engineering stack or specialized domain expertise your organization requires."
      />
    </>
  );
}
