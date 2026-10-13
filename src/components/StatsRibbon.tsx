"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 6,
    label: "Core tech domains",
    detail: "Software, Cloud, Security, Data, Infra, ERP",
  },
  {
    value: 50,
    label: "States nationwide",
    detail: "US-wide technical staffing delivery",
  },
  {
    value: 3,
    label: "Engagement models",
    detail: "Contract, Contract-to-Hire, Permanent",
  },
  {
    value: 100,
    suffix: "%",
    label: "Requirement aligned",
    detail: "Direct client recruitment coordination",
  },
];

export default function StatsRibbon() {
  const ribbonRef = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      numRefs.current.forEach((el, i) => {
        if (!el) return;
        const target = stats[i].value;
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            if (el) el.textContent = Math.round(obj.val).toString();
          },
          scrollTrigger: {
            trigger: ribbonRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: ribbonRef }
  );

  return (
    <section ref={ribbonRef} className="bg-midnight-light py-10 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                <span
                  ref={(el) => {
                    numRefs.current[i] = el;
                  }}
                >
                  0
                </span>
                {stat.suffix && (
                  <span className="text-steel">{stat.suffix}</span>
                )}
              </div>
              <div className="text-sm text-steel mt-1.5 font-medium">
                {stat.label}
              </div>
              <div className="text-xs text-slate-light/50 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
