import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Users2,
  Briefcase,
  Layers,
  ChevronRight,
  ShieldCheck,
  Building,
  Target,
  Clock,
  Sparkles,
  MapPin,
  Check,
} from "lucide-react";
import HeroGeometricVisual from "@/components/HeroGeometricVisual";
import InteractiveTalentConsole from "@/components/InteractiveTalentConsole";
import InteractiveTabbedSolutions from "@/components/InteractiveTabbedSolutions";
import ProcessTimeline from "@/components/ProcessTimeline";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { CORE_SERVICES, TECH_DOMAINS, COMPANY_INFO } from "@/lib/constants";

export const metadata = {
  title: "Averon Technologies | IT Staffing & Technology Talent Solutions",
  description:
    "Averon Technologies helps organizations across the United States connect with qualified technology professionals aligned with technical requirements and business objectives.",
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: COMPANY_INFO.url,
    email: COMPANY_INFO.email,
    description: COMPANY_INFO.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    knowsAbout: [
      "IT Staffing",
      "Technical Recruitment",
      "Software Development",
      "Cloud Computing",
      "Cybersecurity",
      "Data Engineering",
      "IT Infrastructure",
      "Enterprise Technologies",
    ],
  };

  return (
    <>
      {/* Schema.org Organization JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ========================================================= */}
      {/* SECTION 1: HERO (ELEVATED ROBERT HALF / SIRIUS STYLE) */}
      {/* ========================================================= */}
      <section className="relative bg-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E1E6EA] overflow-hidden">
        {/* Subtle Ambient Architecture Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="home-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#EDF2F5" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#home-hero-grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Top Hero Editorial Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF2F5] border border-[#E1E6EA] text-xs font-semibold text-[#132A40] tracking-wider uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#356C96]"></span>
                IT Staffing & Technology Talent Solutions
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-[#0B1B2B] leading-[1.1]">
                The Right Technology Talent.{" "}
                <span className="text-[#356C96] block mt-1 sm:mt-2">
                  When Your Business Needs It.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#65717D] leading-relaxed max-w-2xl">
                Averon Technologies helps organizations across the United States connect with
                qualified technology professionals aligned with their technical requirements,
                project priorities, and business objectives.
              </p>

              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#0B1B2B] hover:bg-[#132A40] rounded-xl transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 focus:ring-2 focus:ring-[#356C96]"
                >
                  <span>Discuss Your Hiring Needs</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-[#172331] bg-[#F6F7F8] hover:bg-[#EDF2F5] border border-[#E1E6EA] rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>

              <div className="pt-3 border-t border-[#EDF2F5] flex flex-wrap items-center gap-3 text-xs text-[#54758F] font-medium tracking-wide">
                <span>Technology Talent.</span>
                <span>•</span>
                <span>Reliable Partnerships.</span>
                <span>•</span>
                <span>Business-Focused Solutions.</span>
              </div>
            </div>

            {/* Right Column: Bespoke Architectural Composition */}
            <div className="lg:col-span-5">
              <HeroGeometricVisual />
            </div>
          </div>

          {/* Interactive Dual-Intent Talent Console (Robert Half Power Feature) */}
          <div className="pt-2">
            <InteractiveTalentConsole />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* EXECUTIVE OPERATIONAL SCALE & FOOTPRINT BAR */}
      {/* ========================================================= */}
      <section className="bg-[#0B1B2B] text-white py-10 border-b border-[#132A40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-[#132A40]">
            <div className="sm:px-6 pt-4 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">6</div>
              <div className="text-xs uppercase tracking-wider text-[#8AB5D6] font-semibold mt-1">
                Core Tech Domains
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Software, Cloud, Security, Data, Infra, ERP
              </div>
            </div>

            <div className="sm:px-6 pt-4 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">50</div>
              <div className="text-xs uppercase tracking-wider text-[#8AB5D6] font-semibold mt-1">
                States Nationwide
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                United States technical staffing delivery
              </div>
            </div>

            <div className="sm:px-6 pt-4 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">3</div>
              <div className="text-xs uppercase tracking-wider text-[#8AB5D6] font-semibold mt-1">
                Engagement Models
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Contract, Contract-to-Hire, & Permanent
              </div>
            </div>

            <div className="sm:px-6 pt-4 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">100%</div>
              <div className="text-xs uppercase tracking-wider text-[#8AB5D6] font-semibold mt-1">
                Requirement Aligned
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Direct client recruitment coordination
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: TRUST AND BUSINESS POSITIONING */}
      {/* ========================================================= */}
      <section className="bg-[#F6F7F8] py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#54758F] uppercase tracking-wider">
              <span>National Delivery</span>
              <span>•</span>
              <span>Disciplined Execution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
              Technology Hiring, Focused on Your Business.
            </h2>
            <p className="text-sm sm:text-base text-[#65717D] leading-relaxed">
              At Averon Technologies, our primary focus is understanding your organization&apos;s
              technical environment, identifying professionals whose expertise matches your stated
              requirements, and supporting teams with flexible, dependable staffing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel rounded-2xl p-8 border border-[#E1E6EA] shadow-xs card-hover-effect space-y-4">
              <div className="h-12 w-12 rounded-xl bg-[#EDF2F5] text-[#132A40] flex items-center justify-center font-bold text-sm shadow-2xs">
                01
              </div>
              <h3 className="text-lg font-semibold text-[#172331]">
                Understanding Technical Context
              </h3>
              <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                We spend time analyzing project architecture, team structures, and mandatory skills
                so submissions reflect genuine alignment rather than broad keyword matches.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 border border-[#E1E6EA] shadow-xs card-hover-effect space-y-4">
              <div className="h-12 w-12 rounded-xl bg-[#EDF2F5] text-[#132A40] flex items-center justify-center font-bold text-sm shadow-2xs">
                02
              </div>
              <h3 className="text-lg font-semibold text-[#172331]">
                Disciplined Candidate Qualification
              </h3>
              <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                Candidates undergo targeted evaluation covering practical experience, communication
                clarity, and availability across contract or permanent roles.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 border border-[#E1E6EA] shadow-xs card-hover-effect space-y-4">
              <div className="h-12 w-12 rounded-xl bg-[#EDF2F5] text-[#132A40] flex items-center justify-center font-bold text-sm shadow-2xs">
                03
              </div>
              <h3 className="text-lg font-semibold text-[#172331]">
                Responsive Engagement Support
              </h3>
              <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                We maintain ongoing communication throughout the recruitment and deployment process,
                supporting both client hiring managers and technical professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: CORE SERVICES (WITH INTERACTIVE TABBED SHOWCASE) */}
      {/* ========================================================= */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#356C96] uppercase tracking-wider">
                <span>Tailored Engagement Models</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
                Staffing Solutions Built Around Your Needs.
              </h2>
              <p className="text-sm sm:text-base text-[#65717D] leading-relaxed">
                Flexible technology talent solutions designed around your workforce requirements and
                hiring priorities.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-[#356C96] hover:text-[#0B1B2B] transition-colors"
            >
              <span>View All Services Detail</span>
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>

          {/* Interactive Showcase Navigator (Sirius Holding Style) */}
          <InteractiveTabbedSolutions />

          {/* 6 Core Service Cards Grid */}
          <div className="pt-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#54758F] mb-6">
              All 6 Staffing & Technical Support Capabilities:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {CORE_SERVICES.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: TECHNOLOGY EXPERTISE */}
      {/* ========================================================= */}
      <section className="bg-[#EDF2F5]/60 py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#356C96] uppercase tracking-wider">
              <span>Recruitment Focus Areas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
              Technical Expertise Across Critical Domains.
            </h2>
            <p className="text-sm sm:text-base text-[#65717D] leading-relaxed">
              We connect organizations with skilled technology practitioners across core enterprise
              disciplines essential to modern digital operations.
            </p>
          </div>

          {/* 6 Tech Domains Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_DOMAINS.map((domain) => (
              <div
                key={domain.id}
                className="glass-panel bg-white/95 rounded-2xl p-7 border border-[#E1E6EA] shadow-xs flex flex-col justify-between card-hover-effect"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#0B1B2B] mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed mb-4">
                    {domain.summary}
                  </p>

                  <div className="space-y-3 pt-3 border-t border-[#EDF2F5]">
                    <div>
                      <span className="text-[11px] font-semibold text-[#132A40] block mb-1.5 uppercase tracking-wide">
                        Common Role Profiles:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {domain.roles.slice(0, 3).map((role, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-[#F6F7F8] text-[#172331] px-2 py-0.5 rounded border border-[#E1E6EA] font-medium"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-semibold text-[#132A40] block mb-1.5 uppercase tracking-wide">
                        Core Technologies:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {domain.skills.slice(0, 4).map((skill, i) => (
                          <span
                            key={i}
                            className="text-[10px] text-[#356C96] font-mono bg-[#EDF2F5] px-1.5 py-0.5 rounded font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#EDF2F5]">
                  <Link
                    href="/expertise"
                    className="inline-flex items-center text-xs font-semibold text-[#356C96] hover:text-[#0B1B2B]"
                  >
                    <span>Explore Domain Details</span>
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/expertise"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-[#0B1B2B] hover:bg-[#132A40] rounded-xl transition-all shadow-xs hover:-translate-y-0.5"
            >
              <span>Explore Our Full Technology Scope</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: HOW WE WORK */}
      {/* ========================================================= */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#356C96] uppercase tracking-wider">
              <span>Delivery Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
              A Clearer Approach to Technology Hiring.
            </h2>
            <p className="text-sm sm:text-base text-[#65717D] leading-relaxed">
              We structure our recruitment workflow into four transparent stages designed to keep
              communication clear and candidate qualification precise.
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: FOR CLIENTS */}
      {/* ========================================================= */}
      <section className="bg-[#F6F7F8] py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E1E6EA] text-xs font-semibold text-[#132A40] tracking-wider uppercase">
                <Building className="h-3.5 w-3.5 text-[#356C96]" />
                Employer & Hiring Manager Solutions
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
                Build the Technical Team Your Business Needs.
              </h2>

              <p className="text-sm sm:text-base text-[#65717D] leading-relaxed">
                Averon Technologies supports organizations seeking technology professionals for
                project-based, contract, and permanent requirements across the United States.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-[#EDF2F5] text-[#356C96] flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#172331]">
                      Direct Client IT Staffing:
                    </span>
                    <span className="text-sm text-[#65717D] ml-1">
                      Direct engagement with your technical leadership to fulfill critical skill requirements.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-[#EDF2F5] text-[#356C96] flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#172331]">
                      Flexible Engagement Models:
                    </span>
                    <span className="text-sm text-[#65717D] ml-1">
                      Contract, contract-to-hire, and direct-hire options customized to project budgeting.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-[#EDF2F5] text-[#356C96] flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#172331]">
                      Specialized Technology Recruitment:
                    </span>
                    <span className="text-sm text-[#65717D] ml-1">
                      Targeted qualification covering modern cloud, development, data, and security stacks.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-[#EDF2F5] text-[#356C96] flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#172331]">
                      Responsive Communication:
                    </span>
                    <span className="text-sm text-[#65717D] ml-1">
                      Dedicated point of contact and prompt updates at every step of the hiring workflow.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-[#0B1B2B] hover:bg-[#132A40] rounded-xl transition-all shadow-xs hover:-translate-y-0.5"
                >
                  <span>Discuss Your Hiring Requirements</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="glass-panel bg-white/95 rounded-2xl p-8 sm:p-10 border border-[#E1E6EA] shadow-xs space-y-6">
                <h3 className="text-lg font-semibold text-[#0B1B2B] pb-3 border-b border-[#E1E6EA]">
                  Client Engagement Architecture
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-[#F6F7F8] border border-[#E1E6EA]">
                    <div className="font-semibold text-[#172331] mb-1">1. Scope Definition</div>
                    <div className="text-[#65717D]">
                      Detailed review of tech stacks, team size, duration, and delivery priorities.
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F6F7F8] border border-[#E1E6EA]">
                    <div className="font-semibold text-[#172331] mb-1">2. Candidate Shortlisting</div>
                    <div className="text-[#65717D]">
                      Presentation of fully vetted profiles with verified competencies and availability.
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F6F7F8] border border-[#E1E6EA]">
                    <div className="font-semibold text-[#172331] mb-1">3. Interview & Selection</div>
                    <div className="text-[#65717D]">
                      Seamless coordination of technical interviews, debriefs, and offer alignment.
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <Link
                    href="/clients"
                    className="text-xs font-semibold text-[#356C96] hover:text-[#0B1B2B] inline-flex items-center"
                  >
                    <span>Read Full Client Solutions Guide</span>
                    <ChevronRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: FOR CANDIDATES */}
      {/* ========================================================= */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-subtle bg-[#EDF2F5]/80 rounded-3xl p-8 sm:p-12 border border-[#E1E6EA] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#356C96] uppercase tracking-wider">
                <Users2 className="h-4 w-4" />
                <span>Technology Professionals</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
                Explore Opportunities Aligned With Your Expertise.
              </h2>

              <p className="text-sm sm:text-base text-[#65717D] leading-relaxed max-w-2xl">
                Averon works to connect technology professionals with opportunities aligned with
                their technical skills, industry experience, and career objectives across contract
                and permanent roles nationwide.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs bg-white text-[#172331] px-3 py-1.5 rounded-lg border border-[#E1E6EA] font-medium shadow-2xs">
                  Software Engineering
                </span>
                <span className="text-xs bg-white text-[#172331] px-3 py-1.5 rounded-lg border border-[#E1E6EA] font-medium shadow-2xs">
                  Cloud & DevOps
                </span>
                <span className="text-xs bg-white text-[#172331] px-3 py-1.5 rounded-lg border border-[#E1E6EA] font-medium shadow-2xs">
                  Cybersecurity
                </span>
                <span className="text-xs bg-white text-[#172331] px-3 py-1.5 rounded-lg border border-[#E1E6EA] font-medium shadow-2xs">
                  Data Engineering
                </span>
                <span className="text-xs bg-white text-[#172331] px-3 py-1.5 rounded-lg border border-[#E1E6EA] font-medium shadow-2xs">
                  Enterprise Technologies
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <Link
                href="/candidates"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-[#0B1B2B] hover:bg-[#132A40] rounded-xl transition-all shadow-xs hover:-translate-y-0.5"
              >
                <span>Connect With Our Team</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <span className="text-[11px] text-[#65717D] mt-2">
                Submit your credentials for upcoming client matches
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: ABOUT AVERON */}
      {/* ========================================================= */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#356C96] uppercase tracking-wider">
                <span>About Averon Technologies LLC</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
                Technology Staffing Built on Professional Relationships.
              </h2>

              <p className="text-sm sm:text-base text-[#65717D] leading-relaxed">
                At Averon Technologies, we understand that the right people make a lasting difference
                in business performance. We work with organizations across the United States to
                deliver dependable IT staffing solutions, connecting businesses with skilled
                technology professionals who bring the experience, expertise, and capabilities
                needed to move projects forward.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm">
                <div className="border-l-2 border-[#356C96] pl-3.5 py-1">
                  <div className="font-semibold text-[#172331]">Client Requirements First</div>
                  <div className="text-[#65717D] text-xs mt-0.5">
                    Aligning talent with specific project architectures and timelines.
                  </div>
                </div>
                <div className="border-l-2 border-[#356C96] pl-3.5 py-1">
                  <div className="font-semibold text-[#172331]">Multi-Domain Competency</div>
                  <div className="text-[#65717D] text-xs mt-0.5">
                    Spanning development, cloud, cybersecurity, data, and infrastructure.
                  </div>
                </div>
                <div className="border-l-2 border-[#356C96] pl-3.5 py-1">
                  <div className="font-semibold text-[#172331]">Recruitment Coordination</div>
                  <div className="text-[#65717D] text-xs mt-0.5">
                    Structured, transparent candidate submissions and interview logistical support.
                  </div>
                </div>
                <div className="border-l-2 border-[#356C96] pl-3.5 py-1">
                  <div className="font-semibold text-[#172331]">Long-Term Relationships</div>
                  <div className="text-[#65717D] text-xs mt-0.5">
                    Consistency, professionalism, and sustained communication across engagements.
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  href="/about"
                  className="inline-flex items-center text-sm font-semibold text-[#356C96] hover:text-[#0B1B2B] transition-colors"
                >
                  <span>Learn More About Averon</span>
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-dark rounded-3xl p-8 sm:p-10 border border-[#132A40] shadow-xl relative overflow-hidden text-white">
                <div className="relative z-10 space-y-4">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#8AB5D6]">
                    Corporate Commitment
                  </div>
                  <blockquote className="text-base text-slate-200 leading-relaxed italic">
                    &ldquo;Successful staffing requires more than filling an open position. It requires
                    an understanding of client expectations, technical requirements, project
                    priorities, and the professional goals of every candidate we represent.&rdquo;
                  </blockquote>
                  <div className="pt-4 border-t border-[#132A40] flex items-center justify-between text-xs text-slate-400">
                    <span>Averon Technologies LLC</span>
                    <span>National Staffing Desk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 9: FINAL CTA */}
      {/* ========================================================= */}
      <CTASection
        title="Let's Discuss Your Technology Hiring Needs."
        description="Tell us about your workforce requirements and the technical expertise your organization is seeking."
        buttonText="Contact Averon Technologies"
        buttonHref="/contact"
      />
    </>
  );
}
