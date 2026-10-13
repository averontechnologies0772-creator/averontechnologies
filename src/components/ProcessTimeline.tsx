import React from "react";
import { WORK_PROCESS_STEPS } from "@/lib/constants";
import { FileSearch, Users, MessageSquareCheck, ShieldCheck } from "lucide-react";

const STEP_ICONS = [FileSearch, Users, MessageSquareCheck, ShieldCheck];

export default function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Desktop Horizontal Line */}
      <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-[#E1E6EA] z-0" />

      {/* Grid: Responsive 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {WORK_PROCESS_STEPS.map((item, idx) => {
          const Icon = STEP_ICONS[idx] || FileSearch;
          return (
            <div
              key={item.step}
              className="group bg-white rounded-xl p-6 border border-[#E1E6EA] shadow-xs hover:border-[#356C96] hover:shadow-md transition-all duration-200 flex flex-col"
            >
              {/* Step indicator with Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="h-14 w-14 rounded-xl bg-[#EDF2F5] text-[#0B1B2B] flex items-center justify-center font-bold text-lg border border-[#E1E6EA] group-hover:bg-[#0B1B2B] group-hover:text-white transition-colors">
                  {item.step}
                </div>
                <div className="p-2 rounded-lg bg-[#F6F7F8] text-[#54758F] group-hover:text-[#356C96] transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-[#172331] group-hover:text-[#0B1B2B] mb-2.5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed flex-grow">
                {item.description}
              </p>

              {/* Subtle bottom tag */}
              <div className="mt-5 pt-3 border-t border-[#EDF2F5] text-[11px] font-mono text-[#54758F] uppercase">
                Stage {item.step} of 04
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
