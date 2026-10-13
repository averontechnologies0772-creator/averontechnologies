"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Orchestrated page-load sequence — the ONE bold moment
      tl.from(glowRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 1.4,
        ease: "power2.out",
      })
        .from(
          logoRef.current,
          {
            scale: 0.82,
            opacity: 0,
            filter: "blur(10px)",
            duration: 1.2,
          },
          "-=1.0"
        )
        .from(
          headlineRef.current,
          {
            clipPath: "inset(0 100% 0 0)",
            opacity: 0,
            duration: 0.9,
          },
          "-=0.6"
        )
        .from(
          subRef.current,
          {
            opacity: 0,
            y: 14,
            duration: 0.6,
          },
          "-=0.35"
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 18,
            duration: 0.5,
          },
          "-=0.25"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-midnight min-h-[88vh] flex items-center overflow-hidden"
    >
      {/* Radial ambient glow behind logo */}
      <div
        ref={glowRef}
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,124,182,0.12) 0%, rgba(59,124,182,0.04) 50%, transparent 70%)",
        }}
      />

      {/* Fine grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hero-dot-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="0.8" fill="#3B7CB6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dot-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Left column — content */}
          <div className="lg:col-span-7 space-y-7">
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight text-white leading-[1.08]"
              style={{ clipPath: "inset(0 0 0 0)" }}
            >
              The right technology talent, when your business needs it.
            </h1>

            <p
              ref={subRef}
              className="text-lg text-slate-light leading-relaxed max-w-xl"
            >
              Averon Technologies connects organizations across the United
              States with qualified technology professionals aligned with their
              technical requirements and business objectives.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-4 text-[15px] font-semibold text-midnight bg-white rounded-lg hover:bg-parchment transition-colors duration-200"
              >
                Discuss your hiring needs
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-4 text-[15px] font-semibold text-white/90 border border-white/15 rounded-lg hover:bg-white/5 transition-colors duration-200"
              >
                Explore services
              </Link>
            </div>
          </div>

          {/* Right column — logo reveal */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative p-2 rounded-full bg-gradient-to-br from-steel/40 via-white/10 to-transparent backdrop-blur-xs shadow-[0_24px_80px_rgba(59,124,182,0.28)]">
              <div
                ref={logoRef}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden bg-black/40 border border-white/15"
              >
                <Image
                  src="/images/averon-brand-logo.png"
                  alt="Averon Technologies"
                  fill
                  className="object-cover scale-[1.03]"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
