import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Users, Layers, Target, Clock, Briefcase } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { TECH_DOMAINS, COMPANY_INFO } from "@/lib/constants";

export const metadata = {
  title: "About Us | Averon Technologies LLC",
  description:
    "Learn about Averon Technologies LLC. We connect organizations across the United States with qualified technology professionals who move business forward.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company Overview"
        title="About Averon Technologies"
        description="Connecting Organizations With Technology Professionals Who Move Business Forward."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* ========================================================= */}
      {/* SECTION: COMPANY OVERVIEW */}
      {/* ========================================================= */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#356C96] uppercase tracking-wider">
                <span>Who We Are</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
                Dependable IT Staffing Solutions Across the United States.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#65717D] leading-relaxed">
                <p>
                  At Averon Technologies, we understand that the right people make a lasting
                  difference in business performance. We work with organizations across the United
                  States to deliver dependable IT staffing solutions, connecting businesses with
                  skilled technology professionals who bring the experience, expertise, and
                  capabilities needed to move projects forward.
                </p>
                <p>
                  Our approach is centered on understanding each client&apos;s workforce requirements
                  and providing qualified professionals who align with their technical expectations
                  and business objectives. From software development and cloud computing to
                  cybersecurity, data engineering, IT infrastructure, and enterprise technologies,
                  we support organizations in securing the right expertise for both immediate
                  requirements and long-term workforce needs.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#132A40]">
                <div className="flex items-center gap-2 bg-[#F6F7F8] px-3.5 py-2 rounded-md border border-[#E1E6EA]">
                  <CheckCircle2 className="h-4 w-4 text-[#356C96]" />
                  <span>National US Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F6F7F8] px-3.5 py-2 rounded-md border border-[#E1E6EA]">
                  <CheckCircle2 className="h-4 w-4 text-[#356C96]" />
                  <span>Direct Client Engagement</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F6F7F8] px-3.5 py-2 rounded-md border border-[#E1E6EA]">
                  <CheckCircle2 className="h-4 w-4 text-[#356C96]" />
                  <span>Multi-Domain Expertise</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#EDF2F5] rounded-2xl p-8 border border-[#E1E6EA] shadow-xs space-y-6">
                <div className="border-b border-[#E1E6EA] pb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#54758F]">
                    Identity Reference
                  </span>
                  <h3 className="text-xl font-semibold text-[#0B1B2B] mt-1">
                    Averon Technologies LLC
                  </h3>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-[#172331]">
                  <div>
                    <span className="text-[#65717D] block text-xs">Primary Industry</span>
                    <span className="font-semibold">IT Services and IT Consulting</span>
                  </div>
                  <div>
                    <span className="text-[#65717D] block text-xs">Staffing Solutions</span>
                    <span className="font-semibold">
                      Contract, Contract-to-Hire, & Permanent Placement
                    </span>
                  </div>
                  <div>
                    <span className="text-[#65717D] block text-xs">Primary Geography</span>
                    <span className="font-semibold">United States (Nationwide Delivery)</span>
                  </div>
                  <div>
                    <span className="text-[#65717D] block text-xs">Business Contact</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="font-semibold text-[#356C96] hover:underline"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E1E6EA]">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center px-4 py-2.5 rounded-md text-xs font-medium text-white bg-[#0B1B2B] hover:bg-[#132A40] transition-colors"
                  >
                    <span>Connect With Our Team</span>
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION: OUR APPROACH */}
      {/* ========================================================= */}
      <section className="bg-[#F6F7F8] py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#356C96] uppercase tracking-wider">
              <span>Our Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
              Our Relationship-Driven Staffing Approach.
            </h2>
            <p className="text-sm sm:text-base text-[#65717D] leading-relaxed">
              Successful staffing requires more than filling an open position. It requires a clear
              understanding of client expectations, technical requirements, project priorities, and
              the professional goals of every candidate we represent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-[#E1E6EA] shadow-xs space-y-3">
              <div className="h-12 w-12 rounded-lg bg-[#EDF2F5] text-[#132A40] flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-[#356C96]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0B1B2B]">
                Precise Technical Alignment
              </h3>
              <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                We work closely with technical stakeholders to accurately scope roles, ensuring candidate
                submissions match architecture, toolsets, and project delivery cadence.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#E1E6EA] shadow-xs space-y-3">
              <div className="h-12 w-12 rounded-lg bg-[#EDF2F5] text-[#132A40] flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-[#356C96]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0B1B2B]">
                Transparency & Consistency
              </h3>
              <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                We provide honest candidate assessments, clear qualification overviews, and prompt
                communication throughout the entire recruitment coordination process.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#E1E6EA] shadow-xs space-y-3">
              <div className="h-12 w-12 rounded-lg bg-[#EDF2F5] text-[#132A40] flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#356C96]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0B1B2B]">
                Long-Term Partnerships
              </h3>
              <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                Rather than treating staffing as one-off transactions, we cultivate durable business
                relationships that support your changing technical needs over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION: WHAT WE DO */}
      {/* ========================================================= */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#356C96] uppercase tracking-wider">
              <span>Core Service Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
              What We Do at Averon Technologies.
            </h2>
            <p className="text-sm sm:text-base text-[#65717D] leading-relaxed">
              Our core capabilities cover the full spectrum of technical workforce support:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-[#E1E6EA] bg-[#F6F7F8] flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-white border border-[#E1E6EA] text-[#0B1B2B] flex-shrink-0">
                <Briefcase className="h-5 w-5 text-[#356C96]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#172331] mb-1">
                  Direct Client IT Staffing Solutions
                </h3>
                <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                  Tailored talent matching directly supporting client technical initiatives, internal
                  engineering teams, and enterprise systems projects.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[#E1E6EA] bg-[#F6F7F8] flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-white border border-[#E1E6EA] text-[#0B1B2B] flex-shrink-0">
                <Clock className="h-5 w-5 text-[#356C96]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#172331] mb-1">
                  Contract, Contract-to-Hire & Permanent Placements
                </h3>
                <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                  Flexible staffing engagements tailored to short-term project milestones, trial-based
                  evaluation periods, or permanent organization building.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[#E1E6EA] bg-[#F6F7F8] flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-white border border-[#E1E6EA] text-[#0B1B2B] flex-shrink-0">
                <Layers className="h-5 w-5 text-[#356C96]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#172331] mb-1">
                  Specialized Technical Recruitment Across Domains
                </h3>
                <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                  Recruitment across software engineering, cloud architecture, cybersecurity,
                  data pipelines, and enterprise enterprise applications.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[#E1E6EA] bg-[#F6F7F8] flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-white border border-[#E1E6EA] text-[#0B1B2B] flex-shrink-0">
                <Users className="h-5 w-5 text-[#356C96]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#172331] mb-1">
                  Dedicated Support for Clients & IT Consultants
                </h3>
                <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
                  Continuous engagement support, clear onboarding coordination, and regular check-ins
                  to maintain positive, productive working relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION: TECHNOLOGY DOMAINS */}
      {/* ========================================================= */}
      <section className="bg-[#EDF2F5]/60 py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#356C96] uppercase tracking-wider">
              <span>Technical Reach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
              Technology Domains We Support.
            </h2>
            <p className="text-sm sm:text-base text-[#65717D] leading-relaxed">
              We recruit professionals across six core domains that drive today&apos;s corporate IT
              infrastructure and software platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TECH_DOMAINS.map((domain) => (
              <div
                key={domain.id}
                className="bg-white rounded-lg p-4 border border-[#E1E6EA] text-center shadow-2xs hover:border-[#356C96] transition-colors"
              >
                <div className="text-xs font-semibold text-[#0B1B2B] mb-1">{domain.title}</div>
                <div className="text-[10px] text-[#65717D] leading-tight line-clamp-2">
                  {domain.summary}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/expertise"
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#356C96] hover:text-[#0B1B2B]"
            >
              <span>Explore Detailed Technology Expertise</span>
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION: OUR COMMITMENT */}
      {/* ========================================================= */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#356C96] uppercase tracking-wider">
            <span>Corporate Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
            Our Commitment to Consistency & Professionalism.
          </h2>

          <p className="text-base text-[#65717D] leading-relaxed">
            What distinguishes Averon Technologies is our commitment to consistency,
            professionalism, and long-term business relationships. Through a focused and
            relationship-driven approach, we strive to make the staffing process efficient,
            transparent, and dependable for every organization and technical professional we serve.
          </p>

          <div className="pt-4 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white bg-[#0B1B2B] hover:bg-[#132A40] rounded-md transition-colors shadow-xs"
            >
              <span>Discuss Your Hiring Needs</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Partner With Averon Technologies?"
        description="Connect with our recruitment team to discuss your open technology requirements or project staffing needs."
      />
    </>
  );
}
