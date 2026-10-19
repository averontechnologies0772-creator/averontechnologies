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
  const yearRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (yearRef.current) {
      yearRef.current.textContent = String(new Date().getFullYear());
    }
  }, []);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    desiredRole: "",
    skillsExperience: "",
    website: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: AbortSignal.timeout(40_000),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        setSubmitError(typeof result.error === "string" ? result.error : "Your details could not be sent. Please try again.");
        return;
      }
      setIsSubmitted(true);
    } catch {
      setSubmitError("We could not confirm your submission. Please check your connection and try again, or email our team directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError("");
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      desiredRole: "",
      skillsExperience: "",
      website: "",
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

        {/* Brand label below the logo */}
        <div
          ref={pillRef}
          className="mb-5 sm:mb-6 inline-flex items-center rounded-full border border-[#7DB9EE]/25 bg-[#173754]/40 px-4 py-1.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.14em] text-[#BDDDF6] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
        >
          <span>Averon Technologies LLC</span>
        </div>

        {/* Headline */}
        <h1
          ref={titleRef}
          className="text-[38px] sm:text-5xl lg:text-[52px] font-medium tracking-[-0.045em] text-[#F2F6FC] leading-[1.12] mb-4 sm:mb-5 text-balance"
        >
          We&apos;re Launching Soon
        </h1>

        {/* Supporting copy */}
        <p
          ref={textRef}
          className="text-sm sm:text-[15px] lg:text-base text-[#94A3B8] max-w-xl leading-relaxed sm:leading-relaxed mx-auto px-4"
        >
          We are preparing a platform to help technology professionals find their next job.
          Share your details and connect with our team about career opportunities.
        </p>

        {/* Button: Exact Capsule Pill with Mail icon and Right Arrow */}
        <div
          ref={actionRef}
          className="mt-6 sm:mt-7 flex flex-col items-center gap-5"
        >
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="hiring-glass-button group"
            aria-haspopup="dialog"
            aria-expanded={isModalOpen}
          >
            {/* Specular glass reflection sheen */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
            
            <svg aria-hidden="true" className="h-[18px] w-[18px] flex-shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M2 5h20v14H2z" fill="#F1F5F9" />
              <path d="m2 5 10 8L22 5" fill="#BFD9F1" stroke="#FFFFFF" strokeWidth="1.2" strokeLinejoin="round" />
              <path d="m2 19 7-7m13 7-7-7" stroke="#7CAAD0" strokeWidth="1.2" />
            </svg>
            <span className="text-white">Find Your Next Job</span>
            <ArrowRight className="h-4 w-4 text-white transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0" />
          </button>

          {/* Socials Divider & Icons (LinkedIn, Instagram, WhatsApp) */}
          <div className="flex w-[190px] flex-col items-center gap-2">
            <div className="flex w-full items-center gap-4">
              <div className="h-px flex-1 bg-[#72869f]/25" />
              <span className="text-[9px] font-semibold tracking-[0.35em] text-[#8494AC] uppercase">
                SOCIALS
              </span>
              <div className="h-px flex-1 bg-[#72869f]/25" />
            </div>

            <div className="flex items-center justify-center gap-3 sm:translate-y-5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/averontechnologies/posts/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="launch-social-link text-[#159BE3]"
              >
                <svg aria-hidden="true" className="h-[22px] w-[22px] fill-current" viewBox="0 0 24 24">
                  <path d="M5.372 24H.398V7.982h4.974V24zM2.882 5.797A2.884 2.884 0 1 1 2.91.03a2.884 2.884 0 0 1-.028 5.767zM24 24h-4.965v-7.797c0-1.858-.038-4.249-2.589-4.249-2.589 0-2.986 2.025-2.986 4.115V24H8.49V7.982h4.771v2.185h.07c.664-1.259 2.287-2.589 4.708-2.589C23.074 7.578 24 10.894 24 15.2V24z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/averontechnologiesllc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="launch-social-link"
              >
                <svg aria-hidden="true" className="h-[22px] w-[22px]" fill="url(#launch-instagram-gradient)" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="launch-instagram-gradient" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFD05F" />
                      <stop offset="0.35" stopColor="#FF526C" />
                      <stop offset="0.7" stopColor="#D945B9" />
                      <stop offset="1" stopColor="#775CF4" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919316228510"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="launch-social-link text-[#25D366]"
              >
                <svg aria-hidden="true" className="h-[24px] w-[24px] fill-current" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.58 5.93L.08 24l6.35-1.67a11.85 11.85 0 0 0 5.61 1.43h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.15-3.49-8.42ZM12.04 21.76a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.68-.24-.38a9.85 9.85 0 0 1-1.51-5.25c0-5.43 4.43-9.86 9.9-9.86a9.8 9.8 0 0 1 7 2.9 9.8 9.8 0 0 1 2.89 7.01c0 5.43-4.43 9.85-9.9 9.85Zm5.42-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.19.05-.36-.02-.51-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.62.71.22 1.36.19 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer copyright note */}
      <div
        ref={footerRef}
        className="relative z-10 text-[11px] sm:text-xs text-[#64748B] tracking-wide"
      >
        © <span ref={yearRef}>2026</span> Averon Technologies LLC. All rights reserved.
      </div>

      {/* ── Interactive Glassmorphic Popup Modal Form (Matching Reference) ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="hiring-glass-backdrop fixed inset-0"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Blue glass panel matching the hiring button and page lighting */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="candidate-dialog-title"
            className="hiring-glass-modal relative z-10 w-full max-w-lg max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 text-left select-text"
            style={{ WebkitBackdropFilter: "blur(22px) saturate(135%)", backdropFilter: "blur(22px) saturate(135%)" }}
          >
            {/* Top Bar matching reference: Brand Emblem + Name on Left, Circular Glass 'x' on Right */}
            <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/[0.1]">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white border border-[#38BDF8]/60 shadow-[0_0_12px_rgba(56,189,248,0.4)]">
                  <Image
                    src="/images/logo.png"
                    alt="Averon"
                    fill
                    className="object-cover scale-105"
                  />
                </div>
                <div>
                  <h3 id="candidate-dialog-title" className="text-lg font-bold text-white tracking-tight">
                    Averon Technologies
                  </h3>
                  <span className="text-[10px] text-[#7DD3FC] tracking-wider uppercase font-semibold">
                    Candidate Support
                  </span>
                </div>
              </div>

              {/* Circular frosted glass close button like reference */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/[0.1] hover:bg-white/[0.2] active:bg-white/[0.06] border border-white/[0.18] flex items-center justify-center text-white/80 hover:text-white transition-all duration-200 cursor-pointer shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2)]"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {!isSubmitted ? (
              <>
                {/* Intro Pod like the reference "Afsuham Sense" pod */}
                <div className="mb-5 p-4 rounded-[20px] bg-white/[0.05] border border-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.1] border border-white/[0.15] flex items-center justify-center text-[#7DD3FC] flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white tracking-tight">
                        Tell Us About Yourself
                      </h4>
                      <p className="text-xs text-[#94A3B8] mt-0.5 leading-snug">
                        Share your skills and the role you are looking for. Our team will get in touch about career opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form with Frosted Glass Inputs */}
                <form onSubmit={handleSubmit} aria-busy={isSubmitting}>
                  <fieldset disabled={isSubmitting} className="space-y-3.5">
                  <div hidden aria-hidden="true">
                    <label htmlFor="candidate-website">Website</label>
                    <input id="candidate-website" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="candidate-name" className="block text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-1">
                      Your Name <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      id="candidate-name"
                      autoComplete="name"
                      maxLength={100}
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Sarah Jenkins"
                      className="hiring-glass-field"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="candidate-email" className="block text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-1">
                        Email <span className="text-[#38BDF8]">*</span>
                      </label>
                      <input
                        id="candidate-email"
                        autoComplete="email"
                        maxLength={254}
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="sarah@gmail.com"
                        className="hiring-glass-field"
                      />
                    </div>

                    <div>
                      <label htmlFor="candidate-phone" className="block text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-1">
                        Phone (optional)
                      </label>
                      <input
                        id="candidate-phone"
                        autoComplete="tel"
                        maxLength={30}
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="Your phone number"
                        className="hiring-glass-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="candidate-role" className="block text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-1">
                      Preferred Role <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      id="candidate-role"
                      type="text"
                      required
                      maxLength={150}
                      value={formData.desiredRole}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          desiredRole: e.target.value,
                        })
                      }
                      placeholder="e.g. Frontend Developer, Data Analyst"
                      className="hiring-glass-field"
                    />
                  </div>

                  <div>
                    <label htmlFor="candidate-skills" className="block text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-1">
                      Skills &amp; Experience (optional)
                    </label>
                    <textarea
                      id="candidate-skills"
                      maxLength={5000}
                      rows={3}
                      value={formData.skillsExperience}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          skillsExperience: e.target.value,
                        })
                      }
                      placeholder="e.g. React, JavaScript, 2 years of experience. Freshers are welcome too."
                      className="hiring-glass-field resize-none"
                    />
                  </div>

                  {submitError && (
                    <p role="alert" className="rounded-xl border border-rose-300/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
                      {submitError}
                    </p>
                  )}

                  {/* Submit Button with matching Capsule Glassmorphism */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="hiring-glass-button hiring-glass-submit group disabled:opacity-50"
                    >
                      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin text-[#7DD3FC]" />
                          <span>Submitting Details...</span>
                        </>
                      ) : (
                        <>
                          <Mail className="h-4 w-4 text-white fill-white/20 flex-shrink-0" />
                          <span>Submit My Details</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-white flex-shrink-0" />
                        </>
                      )}
                    </button>
                  </div>
                  </fieldset>
                </form>

                {/* Bottom Channels row matching reference style */}
                <div className="mt-5 pt-4 border-t border-white/[0.1] flex items-center justify-between text-xs text-[#94A3B8]">
                  <span>Direct desk:</span>
                  <a
                    href="mailto:info@averontechnologiesllc.com"
                    className="text-[#7DD3FC] hover:text-white transition-colors underline-offset-2 hover:underline"
                  >
                    info@averontechnologiesllc.com
                  </a>
                </div>
              </>
            ) : (
              /* Success Confirmation */
              <div className="py-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/40 mb-2 shadow-[0_0_24px_rgba(56,189,248,0.3)]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Details Sent
                </h3>
                <p className="text-sm text-[#94A3B8] max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your details have been sent to our candidate support team. We will follow up at{" "}
                  <span className="text-[#38BDF8]">{formData.email}</span>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-7 py-2.5 rounded-xl bg-white/[0.1] hover:bg-white/[0.2] border border-white/[0.2] text-white text-sm font-semibold transition-all cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]"
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
