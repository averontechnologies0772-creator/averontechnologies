"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Briefcase, Clock, UserCheck, Award, ChevronRight } from "lucide-react";
import { CORE_SERVICES } from "@/lib/constants";

export default function InteractiveTabbedSolutions() {
  const [selectedServiceId, setSelectedServiceId] = useState(CORE_SERVICES[0].id);

  const activeService =
    CORE_SERVICES.find((s) => s.id === selectedServiceId) || CORE_SERVICES[0];

  return (
    <div className="space-y-8">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-[#E1E6EA]">
        {CORE_SERVICES.slice(0, 4).map((s) => {
          const isActive = s.id === selectedServiceId;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelectedServiceId(s.id)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
                isActive
                  ? "bg-[#0B1B2B] text-white shadow-sm"
                  : "bg-white text-[#172331] hover:bg-[#EDF2F5] border border-[#E1E6EA]"
              }`}
            >
              <span>{s.title}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Detail Showcase Card */}
      <div className="glass-panel bg-white/95 rounded-2xl border border-[#E1E6EA] p-8 sm:p-10 shadow-[0_12px_36px_rgba(11,27,43,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF2F5] border border-[#E1E6EA] text-xs font-mono uppercase tracking-wider text-[#356C96]">
            <span>Staffing Architecture</span>
            <span>•</span>
            <span>{activeService.title}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold text-[#0B1B2B] tracking-tight">
            {activeService.title}
          </h3>

          <p className="text-sm sm:text-base text-[#65717D] leading-relaxed">
            {activeService.fullDescription}
          </p>

          <div className="space-y-2.5 pt-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#132A40] block">
              Core Deliverables & Workflow:
            </span>
            {activeService.responsibilities.map((resp, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172331]">
                <CheckCircle2 className="h-4 w-4 text-[#356C96] mt-0.5 flex-shrink-0" />
                <span>{resp}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <Link
              href={activeService.href}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#0B1B2B] hover:bg-[#132A40] transition-all shadow-xs hover:-translate-y-0.5"
            >
              <span>Explore Detailed {activeService.title}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="text-xs sm:text-sm font-semibold text-[#356C96] hover:text-[#0B1B2B] inline-flex items-center"
            >
              <span>Discuss Requirements</span>
              <ChevronRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Metric & Use-Case Card */}
        <div className="lg:col-span-5 bg-[#F6F7F8] rounded-xl p-6 sm:p-7 border border-[#E1E6EA] space-y-5">
          <div className="border-b border-[#E1E6EA] pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#54758F]">
              Strategic Use Cases
            </span>
            <div className="text-sm font-semibold text-[#172331] mt-0.5">
              When to Select This Model
            </div>
          </div>

          <ul className="space-y-3">
            {activeService.useCases.map((uc, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-[#65717D] leading-relaxed">
                <span className="h-1.5 w-1.5 rounded-full bg-[#356C96] mt-1.5 flex-shrink-0" />
                <span>{uc}</span>
              </li>
            ))}
          </ul>

          <div className="p-4 rounded-lg bg-white border border-[#E1E6EA] text-xs text-[#132A40] space-y-1">
            <div className="font-semibold">Engagement Transparency</div>
            <div className="text-[#65717D]">
              Clear expectations established upfront on rates, duration, and conversion terms.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
