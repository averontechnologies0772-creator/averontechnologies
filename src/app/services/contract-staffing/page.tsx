import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, UserCheck, Shield, HelpCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Contract Staffing & Contract-to-Hire | Averon Technologies LLC",
  description:
    "Flexible contract staffing and contract-to-hire solutions by Averon Technologies LLC. Evaluate talent on active deliverables with minimal workforce friction.",
};

export default function ContractStaffingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Flexible Staffing Models"
        title="Contract Staffing & Contract-to-Hire"
        description="Adapt engineering capacity to project demands with targeted contract engagements and structured evaluation-to-permanent models."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Contract Staffing & Contract-to-Hire" },
        ]}
      />

      {/* Contract Staffing Section */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#356C96] uppercase tracking-wider">
                <Clock className="h-4 w-4" />
                <span>Model 01: Contract Staffing</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
                Responsive Technical Capacity for Critical Project Milestones.
              </h2>

              <p className="text-base text-[#65717D] leading-relaxed">
                Contract staffing allows businesses to rapidly integrate specialized technical
                professionals for targeted timelines, product rollouts, or infrastructure
                migrations without extending long-term headcount overhead. Averon Technologies
                identifies contract-ready specialists with proven track records in delivering
                production results.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#356C96] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#172331]">
                      Milestone & Project Delivery
                    </h3>
                    <p className="text-xs sm:text-sm text-[#65717D]">
                      Bring in specialized domain knowledge to meet critical release dates and enterprise deliverables.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#356C96] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#172331]">
                      Budgetary Flexibility
                    </h3>
                    <p className="text-xs sm:text-sm text-[#65717D]">
                      Align talent costs directly with project phases and capital expenditure timelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#356C96] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#172331]">
                      Continuous Administrative Support
                    </h3>
                    <p className="text-xs sm:text-sm text-[#65717D]">
                      Averon manages contractor administrative coordination, ensuring smooth, uninterrupted workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F6F7F8] rounded-xl p-7 border border-[#E1E6EA] space-y-4">
              <h3 className="text-base font-semibold text-[#0B1B2B] pb-2 border-b border-[#E1E6EA]">
                Contract Staffing Highlights
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-[#65717D]">
                <div>
                  <span className="font-semibold text-[#172331] block">Typical Durations:</span>
                  <span>3, 6, 12+ months or project milestone completion</span>
                </div>
                <div>
                  <span className="font-semibold text-[#172331] block">Common Disciplines:</span>
                  <span>Cloud architecture, security remediation, database tuning, full-stack sprints</span>
                </div>
                <div>
                  <span className="font-semibold text-[#172331] block">Onboarding Support:</span>
                  <span>Standardized compliance and background coordination</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contract-to-Hire Section */}
      <section className="bg-[#EDF2F5]/60 py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#356C96] uppercase tracking-wider">
                <UserCheck className="h-4 w-4" />
                <span>Model 02: Contract-to-Hire</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1B2B] tracking-tight">
                Evaluate Technical Execution Before Permanent Commitment.
              </h2>

              <p className="text-base text-[#65717D] leading-relaxed">
                Contract-to-hire arrangements offer a structured pathway where organizations evaluate a
                professional&apos;s real-world code quality, problem-solving, and cross-functional team
                collaboration during an agreed evaluation period before considering full-time
                permanent conversion, subject to the mutual arrangements of both parties.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#356C96] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#172331]">
                      Real-World Performance Evaluation
                    </h3>
                    <p className="text-xs sm:text-sm text-[#65717D]">
                      Assess hands-on technical skills directly on active production repositories and architecture.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#356C96] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#172331]">
                      Cultural and Communication Fit
                    </h3>
                    <p className="text-xs sm:text-sm text-[#65717D]">
                      Ensure the candidate communicates effectively with product owners, designers, and engineering leads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#356C96] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#172331]">
                      Transparent Transition Terms
                    </h3>
                    <p className="text-xs sm:text-sm text-[#65717D]">
                      Clear evaluation milestones agreed upfront with no ambiguous conversion hurdles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-xl p-7 border border-[#E1E6EA] shadow-xs space-y-5">
              <h3 className="text-base font-semibold text-[#0B1B2B] pb-2 border-b border-[#E1E6EA]">
                The Contract-to-Hire Workflow
              </h3>
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-lg bg-[#F6F7F8] border border-[#E1E6EA]">
                  <div className="font-semibold text-[#172331]">1. Define Evaluation Window</div>
                  <div className="text-[#65717D] mt-0.5">
                    Typically 3 to 6 months of active contract engagement.
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F6F7F8] border border-[#E1E6EA]">
                  <div className="font-semibold text-[#172331]">2. Milestone Feedback Check-ins</div>
                  <div className="text-[#65717D] mt-0.5">
                    Regular communication between client manager, contractor, and Averon.
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F6F7F8] border border-[#E1E6EA]">
                  <div className="font-semibold text-[#172331]">3. Permanent Conversion</div>
                  <div className="text-[#65717D] mt-0.5">
                    Seamless transition into full-time direct employment upon mutual consent.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss Contract or Contract-to-Hire Options"
        description="Connect with Averon Technologies to outline your project timeline and preferred engagement structure."
      />
    </>
  );
}
