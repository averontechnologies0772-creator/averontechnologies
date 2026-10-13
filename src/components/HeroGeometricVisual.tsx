import React from "react";
import Image from "next/image";
import { Check, ArrowRight, ShieldCheck, Cloud, Code2, Database } from "lucide-react";

export default function HeroGeometricVisual() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto select-none" aria-hidden="true">
      {/* Background Architectural Canvas */}
      <div className="relative bg-[#F6F7F8] rounded-2xl border border-[#E1E6EA] p-6 sm:p-8 shadow-[0_12px_40px_rgba(11,27,43,0.06)] overflow-hidden">
        {/* Subtle Architectural Grid Lines */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#E1E6EA" strokeWidth="0.75" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        {/* Central Composition with Authentic Averon Logo Emblem */}
        <div className="relative z-10 flex flex-col gap-5">
          {/* Header Bar: Editorial Context */}
          <div className="flex items-center justify-between pb-3.5 border-b border-[#E1E6EA]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#356C96]"></span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#132A40]">
                Averon Staffing Architecture
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#54758F] uppercase bg-white px-2 py-0.5 rounded border border-[#E1E6EA]">
              US Enterprise Focus
            </span>
          </div>

          {/* Diagram: Requirements -> Alignment -> Placement */}
          <div className="space-y-3.5">
            {/* Step 1: Client Requirement */}
            <div className="bg-white rounded-xl p-3.5 border border-[#E1E6EA] shadow-2xs flex items-center justify-between transition-transform duration-200 hover:translate-x-1">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-[#EDF2F5] text-[#132A40] flex items-center justify-center font-bold text-xs border border-[#E1E6EA]">
                  01
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#172331]">
                    Client Technical Scope
                  </div>
                  <div className="text-[11px] text-[#65717D]">
                    Project parameters & stack requirements defined
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-medium text-[#356C96] bg-[#EDF2F5] px-2 py-1 rounded">
                Target Criteria
              </span>
            </div>

            {/* Step 2: Averon Qualification Bridge with Actual Averon Logo Emblem */}
            <div className="relative bg-[#0B1B2B] text-white rounded-2xl p-5 border border-[#132A40] shadow-md overflow-hidden">
              {/* Emblem Badge Featured prominently on the right */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-30 pointer-events-none rounded-full overflow-hidden">
                <Image
                  src="/images/averon-logo.png"
                  alt="Averon Technologies Emblem"
                  width={128}
                  height={128}
                  unoptimized
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="h-7 w-7 rounded-full overflow-hidden border border-white/20 bg-white">
                      <Image
                        src="/images/averon-logo.png"
                        alt="Averon"
                        width={28}
                        height={28}
                        unoptimized
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8AB5D6]">
                      Averon Qualification
                    </span>
                  </div>
                  <span className="flex items-center text-[10px] text-slate-300 font-mono gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    ACTIVE VETTING
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-medium text-white mb-3">
                  Technical Alignment & Talent Matching
                </div>

                {/* Domain Badges */}
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="flex items-center gap-1.5 bg-[#132A40] px-2.5 py-1.5 rounded-lg text-slate-200 border border-[#356C96]/30">
                    <Code2 className="h-3 w-3 text-[#54758F]" />
                    <span>Software Eng</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#132A40] px-2.5 py-1.5 rounded-lg text-slate-200 border border-[#356C96]/30">
                    <Cloud className="h-3 w-3 text-[#54758F]" />
                    <span>Cloud / DevOps</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#132A40] px-2.5 py-1.5 rounded-lg text-slate-200 border border-[#356C96]/30">
                    <ShieldCheck className="h-3 w-3 text-[#54758F]" />
                    <span>Cybersecurity</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#132A40] px-2.5 py-1.5 rounded-lg text-slate-200 border border-[#356C96]/30">
                    <Database className="h-3 w-3 text-[#54758F]" />
                    <span>Data & Analytics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Deployment Result */}
            <div className="bg-white rounded-xl p-3.5 border border-[#E1E6EA] shadow-2xs flex items-center justify-between transition-transform duration-200 hover:translate-x-1">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-[#356C96] text-white flex items-center justify-center font-bold text-xs">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#172331]">
                    Qualified Technical Placement
                  </div>
                  <div className="text-[11px] text-[#65717D]">
                    Contract, Contract-to-Hire, or Permanent
                  </div>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-[#54758F]" />
            </div>
          </div>

          {/* Bottom Metatag / Status */}
          <div className="pt-3 border-t border-[#E1E6EA] flex items-center justify-between text-[11px] text-[#65717D]">
            <span>Model: Direct Client Staffing</span>
            <span className="font-semibold text-[#132A40]">Averon Technologies LLC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
