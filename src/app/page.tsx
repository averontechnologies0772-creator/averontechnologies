import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Users, Layers, Zap } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import StatsRibbon from "@/components/StatsRibbon";
import TechTicker from "@/components/TechTicker";
import ProcessTimeline from "@/components/ProcessTimeline";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { CORE_SERVICES, COMPANY_INFO } from "@/lib/constants";

export const metadata = {
  title: "Averon Technologies | IT Staffing & Technology Talent Solutions",
  description:
    "Averon Technologies connects organizations across the United States with vetted technology professionals in Software, Cloud, Cybersecurity, Data, and Infrastructure.",
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: COMPANY_INFO.url,
    email: COMPANY_INFO.email,
    description: COMPANY_INFO.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    knowsAbout: [
      "IT Staffing",
      "Technical Recruitment",
      "Software Development",
      "Cloud Infrastructure",
      "Cybersecurity Staffing",
      "Data Engineering",
      "DevOps",
      "Enterprise Systems",
    ],
  };

  const trustPillars = [
    {
      title: "Targeted Technical Precision",
      description:
        "We evaluate candidates against precise technical stacks, architectural maturity, and deliverability requirements before submission.",
      points: [
        "Rigorous technical vetting",
        "Stack-specific assessment",
        "Culture and project fit analysis",
      ],
    },
    {
      title: "Direct Account Coordination",
      description:
        "One dedicated staffing partner who understands your technical architecture, project sprints, and team velocity.",
      points: [
        "Single point of operational contact",
        "Transparent status reporting",
        "Rapid turnaround on shortlists",
      ],
    },
    {
      title: "Nationwide Talent Reach",
      description:
        "Active recruitment networks across all 50 US states for on-site, hybrid, and remote technical placements.",
      points: [
        "Multi-state compliance clearance",
        "Competitive rate structures",
        "Contract, C2H & Direct hire",
      ],
    },
  ];

  const industries = [
    {
      name: "Financial Services & FinTech",
      summary:
        "High-throughput transactional systems, payment APIs, risk modeling, and strict compliance security architectures.",
    },
    {
      name: "Healthcare & Life Sciences",
      summary:
        "HIPAA-compliant EHR platforms, biometric data pipelines, clinical research computing, and cloud migration.",
    },
    {
      name: "Enterprise SaaS & Cloud",
      summary:
        "Distributed multi-tenant microservices, Kubernetes orchestration, scalable data warehouses, and DevOps automation.",
    },
    {
      name: "Retail & Digital Commerce",
      summary:
        "Omnichannel platforms, headless CMS, inventory event streams, and real-time recommendation engines.",
    },
    {
      name: "Supply Chain & Logistics",
      summary:
        "IoT telemetry pipelines, warehouse management systems, dispatch optimization, and ERP integration.",
    },
    {
      name: "Telecommunications & Media",
      summary:
        "Network automation, low-latency streaming pipelines, 5G edge infrastructure, and customer analytics.",
    },
  ];

  return (
    <>
      {/* Schema.org Organization JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. Hero Section (GSAP Orchestrated Load Sequence) ── */}
      <HeroSection />

      {/* ── 2. Stats Ribbon (GSAP ScrollTrigger CountUp) ── */}
      <StatsRibbon />

      {/* ── 3. Strategic Value / Trust Pillars (Restrained 3-column, no generic numbered markers) ── */}
      <section className="bg-parchment py-20 lg:py-24 border-b border-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-midnight tracking-tight leading-tight">
              A disciplined, technical approach to staffing
            </h2>
            <p className="text-base sm:text-lg text-slate mt-4 leading-relaxed">
              We operate as a technical partner, not a generic resume clearinghouse. Every search is grounded in your project timeline, tech stack, and deliverable commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-mist shadow-xs border-l-4 border-l-steel flex flex-col justify-between transition-all duration-200 hover:shadow-md"
              >
                <div>
                  <h3 className="text-xl font-bold text-midnight mb-3 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>
                <div className="space-y-2.5 pt-5 border-t border-mist/80">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center text-xs text-slate-light font-medium gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-steel flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Core Staffing & Technology Services ── */}
      <section className="bg-white py-20 lg:py-28 border-b border-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-midnight tracking-tight leading-tight">
                Specialized staffing and technology solutions
              </h2>
              <p className="text-base sm:text-lg text-slate mt-4 leading-relaxed">
                Flexible engagement structures calibrated to your project duration, resource constraints, and organizational velocity.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-steel hover:text-midnight transition-colors group self-start md:self-end pb-1"
            >
              <span>View all practice areas</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CORE_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Technical Domains Ticker (Infinite marquee) ── */}
      <TechTicker />

      {/* ── 6. Engagement & Delivery Process ── */}
      <section className="bg-white py-20 lg:py-28 border-b border-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-midnight tracking-tight leading-tight">
              Our 4-stage recruitment workflow
            </h2>
            <p className="text-base sm:text-lg text-slate mt-4 leading-relaxed">
              Transparent, accountable, and designed to move from intake to technical placement in days, not months.
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* ── 7. Industry Verticals Served ── */}
      <section className="bg-parchment py-20 lg:py-28 border-b border-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-midnight tracking-tight leading-tight">
              Proven domain expertise across industries
            </h2>
            <p className="text-base sm:text-lg text-slate mt-4 leading-relaxed">
              We understand that staffing technical roles requires knowledge of sector-specific regulatory, architectural, and security demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-xl border border-mist hover:border-steel transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-midnight mb-2.5">
                  {ind.name}
                </h3>
                <p className="text-sm text-slate leading-relaxed">
                  {ind.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Closing Action (Centered Closing Punctuation) ── */}
      <CTASection
        title="Ready to build your next high-impact engineering team?"
        description="Share your upcoming sprint requirements, technology stack, and timeline. Our technical recruiters will coordinate an introductory scoping call."
        buttonText="Discuss your hiring needs"
        buttonHref="/contact"
      />
    </>
  );
}
