import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  showEmailDirect?: boolean;
}

export default function CTASection({
  title = "Let's Discuss Your Technology Hiring Needs.",
  description = "Tell us about your workforce requirements and the technical expertise your organization is seeking.",
  buttonText = "Contact Averon Technologies",
  buttonHref = "/contact",
  showEmailDirect = true,
}: CTASectionProps) {
  return (
    <section className="relative bg-[#0B1B2B] text-white overflow-hidden py-20 lg:py-24 border-t border-[#132A40]">
      {/* Restrained Architectural / Geometric Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="100" x2="1200" y2="500" stroke="#54758F" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="0" y1="500" x2="1200" y2="100" stroke="#356C96" strokeWidth="1" />
          <circle cx="950" cy="200" r="180" stroke="#54758F" strokeWidth="1" fill="none" opacity="0.3" />
          <polygon points="150,50 350,150 200,350" stroke="#356C96" strokeWidth="1" fill="none" opacity="0.2" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132A40] border border-[#356C96]/30 text-xs font-medium text-slate-300 uppercase tracking-widest mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#356C96]"></span>
          Averon Technologies LLC
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          {title}
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-white bg-[#356C96] hover:bg-[#2c5b80] rounded-md transition-all duration-150 shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B1B2B]"
          >
            <span>{buttonText}</span>
            <ArrowRight className="ml-2.5 h-4 w-4" />
          </Link>

          {showEmailDirect && (
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-slate-200 bg-[#132A40] hover:bg-[#1b3a58] border border-[#54758F]/40 rounded-md transition-all duration-150"
            >
              <Mail className="mr-2 h-4 w-4 text-[#54758F]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          )}
        </div>

        {/* Supporting Trust Bullet Points */}
        <div className="mt-12 pt-8 border-t border-[#132A40]/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#356C96]" />
            <span>Targeted Candidate Qualifications</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#356C96]" />
            <span>Direct Client Coordination</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#356C96]" />
            <span>Nationwide US Talent Reach</span>
          </div>
        </div>
      </div>
    </section>
  );
}
