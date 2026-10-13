"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  inverted?: boolean;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  className = "",
  inverted = false,
  showTagline = false,
  size = "md",
}: LogoProps) {
  const heightClass = size === "lg" ? "h-12" : size === "sm" ? "h-8" : "h-11";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#356C96] rounded-md transition-all ${className}`}
      aria-label="Averon Technologies LLC - Home"
    >
      {/* Exact Averon Technologies Logo Artwork provided */}
      <div className={`relative ${heightClass} flex-shrink-0 flex items-center`}>
        <div className="relative h-11 w-11 rounded-full overflow-hidden shadow-xs border border-[#E1E6EA] bg-white group-hover:scale-105 transition-transform duration-200">
          <Image
            src="/images/averon-logo.png"
            alt="Averon Technologies Logo"
            width={88}
            height={88}
            priority
            unoptimized
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Accompanying Wordmark & LLC tag */}
      <div className="flex flex-col leading-tight select-none">
        <div className="flex items-baseline gap-2">
          <span
            className={`font-semibold tracking-wider text-lg font-sans transition-colors ${
              inverted
                ? "text-white group-hover:text-white"
                : "text-[#0B1B2B] group-hover:text-[#132A40]"
            }`}
          >
            AVERON
          </span>
          <span
            className={`font-medium tracking-widest text-[11px] uppercase ${
              inverted ? "text-[#8AB5D6]" : "text-[#356C96]"
            }`}
          >
            TECHNOLOGIES
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className={`text-[9.5px] uppercase tracking-widest font-semibold ${
              inverted ? "text-slate-400" : "text-[#65717D]"
            }`}
          >
            LLC
          </span>
          <span className="text-[9px] text-[#54758F]">•</span>
          <span
            className={`text-[9px] tracking-wide font-normal ${
              inverted ? "text-slate-400" : "text-[#65717D]"
            }`}
          >
            IT Staffing & Talent Solutions
          </span>
        </div>
      </div>
    </Link>
  );
}
