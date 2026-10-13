"use client";

import React, { useRef } from "react";
import { WORK_PROCESS_STEPS } from "@/lib/constants";
import { FileSearch, Users, MessageSquareCheck, ShieldCheck } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEP_ICONS = [FileSearch, Users, MessageSquareCheck, ShieldCheck];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!lineRef.current) return;

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative">
      {/* Desktop Horizontal Animated Connector Line */}
      <div className="hidden lg:block absolute top-8 left-16 right-16 h-[2px] bg-mist z-0">
        <div
          ref={lineRef}
          className="h-full bg-steel origin-left"
          style={{ width: "100%" }}
        />
      </div>

      {/* Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {WORK_PROCESS_STEPS.map((item, idx) => {
          const Icon = STEP_ICONS[idx] || FileSearch;
          return (
            <div
              key={item.step}
              className="bg-white rounded-xl p-7 border border-mist shadow-xs hover:border-steel transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Step indicator with Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 rounded-xl bg-midnight text-white flex items-center justify-center font-bold text-base shadow-sm">
                    {item.step}
                  </div>
                  <div className="p-2.5 rounded-lg bg-parchment text-steel border border-mist">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-midnight mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Stage indicator */}
              <div className="mt-6 pt-4 border-t border-mist/80 text-xs font-medium text-steel">
                Phase {item.step} of 04
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
