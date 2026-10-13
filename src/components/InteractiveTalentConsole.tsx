"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, Users, Briefcase, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { TECH_DOMAINS } from "@/lib/constants";

export default function InteractiveTalentConsole() {
  const [activeTab, setActiveTab] = useState<"hire" | "career">("hire");
  const [selectedDomain, setSelectedDomain] = useState(TECH_DOMAINS[0].id);
  const [engagementType, setEngagementType] = useState("Contract Staffing");

  const currentDomain = TECH_DOMAINS.find((d) => d.id === selectedDomain) || TECH_DOMAINS[0];

  return (
    <div className="w-full bg-white/90 backdrop-blur-xl rounded-2xl border border-[#E1E6EA] shadow-[0_12px_40px_rgba(11,27,43,0.08)] p-5 sm:p-7 relative overflow-hidden card-hover-effect">
      {/* Top Ambient Subtle Hue Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B1B2B] via-[#356C96] to-[#54758F]" />

      {/* Dual Portal Switcher (Robert Half Inspiration) */}
      <div className="flex items-center justify-between pb-5 border-b border-[#E1E6EA] gap-4">
        <div className="inline-flex p-1 bg-[#F6F7F8] rounded-xl border border-[#E1E6EA] text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab("hire")}
            className={`px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
              activeTab === "hire"
                ? "bg-[#0B1B2B] text-white shadow-xs"
                : "text-[#65717D] hover:text-[#0B1B2B]"
            }`}
          >
            I Need to Hire IT Talent
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("career")}
            className={`px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
              activeTab === "career"
                ? "bg-[#0B1B2B] text-white shadow-xs"
                : "text-[#65717D] hover:text-[#0B1B2B]"
            }`}
          >
            I Am an IT Professional
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-[#54758F] bg-[#EDF2F5] px-2.5 py-1 rounded-md">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          US STAFFING DESK ACTIVE
        </div>
      </div>

      {activeTab === "hire" ? (
        /* HIRE TALENT CONSOLE */
        <div className="pt-5 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Domain Selector */}
            <div>
              <label className="block text-xs font-semibold text-[#172331] uppercase tracking-wider mb-1.5">
                Target Domain
              </label>
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E1E6EA] rounded-lg text-[#172331] font-medium focus:outline-none focus:ring-2 focus:ring-[#356C96] transition-all cursor-pointer"
              >
                {TECH_DOMAINS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Engagement Model */}
            <div>
              <label className="block text-xs font-semibold text-[#172331] uppercase tracking-wider mb-1.5">
                Staffing Model
              </label>
              <select
                value={engagementType}
                onChange={(e) => setEngagementType(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E1E6EA] rounded-lg text-[#172331] font-medium focus:outline-none focus:ring-2 focus:ring-[#356C96] transition-all cursor-pointer"
              >
                <option value="Direct Client IT Staffing">Direct Client IT Staffing</option>
                <option value="Contract Staffing">Contract Staffing</option>
                <option value="Contract-to-Hire">Contract-to-Hire</option>
                <option value="Permanent Placement">Permanent Placement</option>
              </select>
            </div>
          </div>

          {/* Dynamic Benchmarks Preview for selected domain */}
          <div className="p-4 rounded-xl bg-[#F6F7F8] border border-[#E1E6EA] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#132A40] uppercase tracking-wider">
                Common Role Profiles in {currentDomain.title}:
              </span>
              <span className="text-[11px] font-mono text-[#54758F]">
                Verified Technical Requirements
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {currentDomain.roles.slice(0, 4).map((role, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white text-[#172331] px-2.5 py-1 rounded-md border border-[#E1E6EA] shadow-2xs font-medium"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-1 text-[11px] text-[#65717D]">
              <span className="font-semibold text-[#132A40]">Technologies:</span>
              <div className="flex flex-wrap gap-1">
                {currentDomain.skills.slice(0, 5).map((skill, idx) => (
                  <span key={idx} className="font-mono text-[#356C96] bg-[#EDF2F5] px-1.5 py-0.5 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
            <div className="text-xs text-[#65717D] flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#356C96]" />
              <span>Dedicated requirement alignment prior to candidate submission</span>
            </div>

            <Link
              href={`/contact?domain=${encodeURIComponent(currentDomain.title)}&model=${encodeURIComponent(engagementType)}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#0B1B2B] hover:bg-[#132A40] transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              <span>Request Talent in This Domain</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : (
        /* CAREER PORTAL CONSOLE */
        <div className="pt-5 space-y-5">
          <div className="p-5 rounded-xl bg-[#F6F7F8] border border-[#E1E6EA] space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#356C96] uppercase tracking-wider">
              <Users className="h-4 w-4" />
              <span>Candidate Representation Across the United States</span>
            </div>
            <h4 className="text-base font-semibold text-[#0B1B2B]">
              Looking for Contract, Contract-to-Hire, or Permanent Roles?
            </h4>
            <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed">
              We connect qualified software engineers, cloud architects, cybersecurity specialists,
              and data professionals with corporate clients nationwide.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-[#E1E6EA] font-medium text-[#172331]">
                Software Engineering
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-[#E1E6EA] font-medium text-[#172331]">
                Cloud & DevOps
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-[#E1E6EA] font-medium text-[#172331]">
                Cybersecurity & IAM
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-[#E1E6EA] font-medium text-[#172331]">
                Data Engineering
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-[#E1E6EA] font-medium text-[#172331]">
                IT Infrastructure
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-[#E1E6EA] font-medium text-[#172331]">
                Enterprise Systems
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
            <span className="text-xs text-[#65717D]">
              Direct review by our technical recruitment team with full career discretion.
            </span>

            <Link
              href="/candidates"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#0B1B2B] hover:bg-[#132A40] transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              <span>Explore Candidate Opportunities</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
