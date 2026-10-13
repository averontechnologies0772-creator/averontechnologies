"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Mail, X, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function LaunchingSoonPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const actionRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    engagementType: "Contract Staffing",
    requirements: "",
  });

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        logoRef.current,
        { scale: 0.82, opacity: 0, filter: "blur(10px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.1 }
      )
        .fromTo(
          pillRef.current,
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.6"
        )
        .fromTo(
          titleRef.current,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          textRef.current,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          actionRef.current,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          footerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      engagementType: "Contract Staffing",
      requirements: "",
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[#040B16] flex flex-col items-center justify-between px-6 py-8 sm:py-10 text-center select-none overflow-hidden"
    >
      {/* Exact volumetric background from reference design */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/launching-soon-bg.jpg"
          alt="Averon Background"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
        {/* Soft radial overlay behind center text for supreme legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(4,11,22,0.4) 0%, rgba(4,11,22,0.1) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Top spacer */}
      <div className="h-2 sm:h-4" />

      {/* Center content */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        {/* Averon 3D Logo Emblem with glowing cyan circular rim */}
        <div
          ref={logoRef}
          className="relative mb-6 sm:mb-7"
        >
          {/* Luminous cyan outer glow ring */}
          <div className="relative p-1.5 rounded-full bg-gradient-to-b from-[#38BDF8]/60 via-[#0284C7]/30 to-[#38BDF8]/60 shadow-[0_0_35px_rgba(56,189,248,0.45)]">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden bg-white border border-[#38BDF8]/80 shadow-inner">
              <Image
                src="/images/logo.png"
                alt="Averon Technologies"
                fill
                className="object-cover scale-[1.03]"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Status indicator pill */}
        <div
          ref={pillRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1E36]/70 border border-[#38BDF8]/35 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-[#7DD3FC] tracking-[0.16em] uppercase mb-5 sm:mb-6 shadow-[0_4px_16px_rgba(2,132,199,0.15)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] animate-pulse shadow-[0_0_8px_#38BDF8]" />
          <span>AVERON TECHNOLOGIES LLC</span>
        </div>

        {/* Headline */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.12] mb-4 sm:mb-5"
        >
          We&apos;re Launching Soon
        </h1>

        {/* Description matching the exact reference typography */}
        <p
          ref={textRef}
          className="text-sm sm:text-[15px] lg:text-base text-[#94A3B8] max-w-xl leading-relaxed sm:leading-relaxed mx-auto px-4"
        >
          We are preparing our premier technology talent and staffing platform.
          Connecting enterprises across the United States with exceptional engineering talent.
        </p>

        {/* Button with Minimal Apple / Xiaomi / Realme Glassmorphism UI */}
        <div
          ref={actionRef}
          className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] active:bg-white/[0.06] backdrop-blur-2xl border border-white/[0.22] hover:border-white/40 text-white text-[14px] sm:text-[15px] font-medium tracking-wide transition-all duration-300 ease-out shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.45),0_12px_36px_rgba(0,0,0,0.45),0_0_24px_rgba(56,189,248,0.18)] hover:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.65),0_16px_44px_rgba(0,0,0,0.55),0_0_36px_rgba(56,189,248,0.32)] hover:scale-[1.025] active:scale-[0.97] cursor-pointer overflow-hidden"
          >
            {/* Subtle glass reflection sheen */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
            
            <Mail className="h-4 w-4 text-[#7DD3FC] group-hover:text-white transition-colors duration-200" />
            <span className="text-white/95 group-hover:text-white">Contact For Hiring Inquiries</span>
          </button>
        </div>
      </div>

      {/* Footer copyright note */}
      <div
        ref={footerRef}
        className="relative z-10 text-[11px] sm:text-xs text-[#64748B] tracking-wide"
      >
        © {new Date().getFullYear()} Averon Technologies LLC. All rights reserved.
      </div>

      {/* ── Interactive Popup Modal Form ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-lg bg-[#0A1628]/95 border border-[#38BDF8]/30 rounded-2xl p-6 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.8)] text-left animate-in zoom-in-95 duration-200 backdrop-blur-xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="mb-6 pr-8">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#38BDF8] uppercase tracking-wider mb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
                    Direct Recruitment Desk
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Discuss Your Hiring Needs
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] mt-1.5 leading-relaxed">
                    Tell us about the technology professionals or engineering capacity your team requires.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#050D1A] border border-white/15 text-white placeholder-slate-500 text-sm focus:border-[#38BDF8] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                        Work Email <span className="text-[#38BDF8]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#050D1A] border border-white/15 text-white placeholder-slate-500 text-sm focus:border-[#38BDF8] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Acme Corp"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#050D1A] border border-white/15 text-white placeholder-slate-500 text-sm focus:border-[#38BDF8] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                      Engagement Model
                    </label>
                    <select
                      value={formData.engagementType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          engagementType: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2.5 rounded-lg bg-[#050D1A] border border-white/15 text-white text-sm focus:border-[#38BDF8] focus:outline-none transition-colors"
                    >
                      <option value="Contract Staffing">Contract Staffing (Project-Based)</option>
                      <option value="Contract-to-Hire">Contract-to-Hire</option>
                      <option value="Direct Hire / Permanent">Direct Hire / Permanent Placement</option>
                      <option value="Specialized Technical Advisory">Specialized Technical Advisory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                      Hiring Requirement / Tech Stack <span className="text-[#38BDF8]">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.requirements}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          requirements: e.target.value,
                        })
                      }
                      placeholder="e.g. 2 Senior React/Node Engineers with AWS experience, 6-month contract starting next month..."
                      className="w-full px-4 py-2.5 rounded-lg bg-[#050D1A] border border-white/15 text-white placeholder-slate-500 text-sm focus:border-[#38BDF8] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#1B68C2] to-[#2577D6] hover:from-[#175bb0] hover:to-[#1e66ba] text-white text-sm font-semibold transition-all duration-200 disabled:opacity-50 cursor-pointer shadow-md"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>

                    <a
                      href="mailto:info@averontechnologiesllc.com"
                      className="text-xs text-[#94A3B8] hover:text-white transition-colors"
                    >
                      Or email info@averontechnologiesllc.com
                    </a>
                  </div>
                </form>
              </>
            ) : (
              /* Success Confirmation */
              <div className="py-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30 mb-2">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Inquiry Received
                </h3>
                <p className="text-sm text-[#94A3B8] max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our technical recruitment desk has received your details and will coordinate with you at{" "}
                  <span className="text-[#38BDF8]">{formData.email}</span> within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
