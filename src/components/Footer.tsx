"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Globe, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { COMPANY_INFO } from "@/lib/constants";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#0B1B2B] text-white border-t border-[#132A40]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo inverted={true} showTagline={true} />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm pt-2">
              Averon Technologies LLC connects businesses across the United States with qualified
              technology professionals aligned with technical requirements and business objectives.
            </p>

            <div className="pt-2 space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#54758F] flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 text-[#54758F] flex-shrink-0" />
                <span className="text-slate-300">{COMPANY_INFO.domain}</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#54758F]">Company</p>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="hover:text-white transition-colors">
                  Technology Expertise
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-white transition-colors">
                  For Clients
                </Link>
              </li>
              <li>
                <Link href="/candidates" className="hover:text-white transition-colors">
                  For Candidates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#54758F]">
              Staffing Services
            </p>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services/it-staffing" className="hover:text-white transition-colors">
                  Direct Client IT Staffing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/contract-staffing"
                  className="hover:text-white transition-colors"
                >
                  Contract Staffing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/contract-staffing"
                  className="hover:text-white transition-colors"
                >
                  Contract-to-Hire
                </Link>
              </li>
              <li>
                <Link
                  href="/services/permanent-placement"
                  className="hover:text-white transition-colors"
                >
                  Permanent Placement
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal and Compliance */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#54758F]">
              Engagement & Trust
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Serving enterprises and mid-market organizations nationwide with tailored technology
              staffing models.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center text-xs font-medium text-white bg-[#132A40] hover:bg-[#356C96] px-3.5 py-2 rounded-md transition-colors shadow-2xs hover:-translate-y-0.5"
              >
                <span>Hiring Inquiries</span>
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-[#132A40] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link
              href="/terms"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
