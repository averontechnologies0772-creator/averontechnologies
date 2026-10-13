"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Briefcase, Clock, Award } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Handle outside click for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? "bg-midnight/95 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "bg-midnight/90 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo inverted={true} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            <Link
              href="/about"
              className={`px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                pathname === "/about"
                  ? "text-white bg-white/15 font-semibold"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              About Us
            </Link>

            {/* Services with Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                className={`inline-flex items-center px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-md group cursor-pointer ${
                  isServicesActive
                    ? "text-white bg-white/15 font-semibold"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`ml-1.5 h-4 w-4 text-steel transition-transform duration-300 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Glassmorphic Dropdown Menu */}
              {servicesDropdownOpen && (
                <div
                  className="absolute left-0 mt-1 w-84 rounded-xl bg-midnight-light/98 backdrop-blur-xl border border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.5)] py-2 z-50 animate-in fade-in-50 zoom-in-95 duration-200"
                  role="menu"
                >
                  <div className="px-3.5 py-2 border-b border-white/10">
                    <Link
                      href="/services"
                      className="text-xs font-semibold uppercase tracking-wider text-steel hover:text-white flex items-center justify-between transition-colors"
                      role="menuitem"
                    >
                      <span>All Services Overview</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>

                  <Link
                    href="/services/it-staffing"
                    className="flex items-start px-3.5 py-2.5 text-sm hover:bg-white/10 transition-all duration-150 group rounded-lg mx-1"
                    role="menuitem"
                  >
                    <div className="p-2 rounded-lg bg-white/10 text-steel group-hover:bg-steel group-hover:text-white transition-colors mr-3 mt-0.5">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium text-white group-hover:text-steel transition-colors">
                        Direct Client IT Staffing
                      </div>
                      <p className="text-xs text-slate-light mt-0.5 leading-snug">
                        Dedicated matching for internal requirements.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/services/contract-staffing"
                    className="flex items-start px-3.5 py-2.5 text-sm hover:bg-white/10 transition-all duration-150 group rounded-lg mx-1"
                    role="menuitem"
                  >
                    <div className="p-2 rounded-lg bg-white/10 text-steel group-hover:bg-steel group-hover:text-white transition-colors mr-3 mt-0.5">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium text-white group-hover:text-steel transition-colors">
                        Contract & Contract-to-Hire
                      </div>
                      <p className="text-xs text-slate-light mt-0.5 leading-snug">
                        Project-based and evaluation-to-permanent models.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/services/permanent-placement"
                    className="flex items-start px-3.5 py-2.5 text-sm hover:bg-white/10 transition-all duration-150 group rounded-lg mx-1"
                    role="menuitem"
                  >
                    <div className="p-2 rounded-lg bg-white/10 text-steel group-hover:bg-steel group-hover:text-white transition-colors mr-3 mt-0.5">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium text-white group-hover:text-steel transition-colors">
                        Permanent Placement
                      </div>
                      <p className="text-xs text-slate-light mt-0.5 leading-snug">
                        Full-lifecycle technical recruitment for permanent roles.
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/expertise"
              className={`px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                pathname === "/expertise"
                  ? "text-white bg-white/15 font-semibold"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Technology Expertise
            </Link>

            <Link
              href="/clients"
              className={`px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                pathname === "/clients"
                  ? "text-white bg-white/15 font-semibold"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              For Clients
            </Link>

            <Link
              href="/candidates"
              className={`px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                pathname === "/candidates"
                  ? "text-white bg-white/15 font-semibold"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              For Candidates
            </Link>
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-steel hover:bg-steel-dim rounded-md transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-steel focus:ring-offset-2 focus:ring-offset-midnight"
            >
              <span>Discuss Your Hiring Needs</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-steel"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-midnight-light/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 fade-in duration-200">
          <Link
            href="/about"
            className={`block px-3 py-2.5 rounded-md text-base font-medium ${
              pathname === "/about"
                ? "text-white bg-white/15 font-semibold"
                : "text-white/80 hover:bg-white/10"
            }`}
          >
            About Us
          </Link>

          <div className="space-y-1">
            <Link
              href="/services"
              className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                pathname === "/services"
                  ? "text-white bg-white/15 font-semibold"
                  : "text-white/80 hover:bg-white/10"
              }`}
            >
              Services Overview
            </Link>
            <div className="pl-4 space-y-1 border-l-2 border-white/15 ml-3">
              <Link
                href="/services/it-staffing"
                className={`block px-3 py-1.5 rounded-md text-sm ${
                  pathname === "/services/it-staffing"
                    ? "text-white font-semibold"
                    : "text-slate-light hover:text-white"
                }`}
              >
                Direct Client IT Staffing
              </Link>
              <Link
                href="/services/contract-staffing"
                className={`block px-3 py-1.5 rounded-md text-sm ${
                  pathname === "/services/contract-staffing"
                    ? "text-white font-semibold"
                    : "text-slate-light hover:text-white"
                }`}
              >
                Contract & Contract-to-Hire
              </Link>
              <Link
                href="/services/permanent-placement"
                className={`block px-3 py-1.5 rounded-md text-sm ${
                  pathname === "/services/permanent-placement"
                    ? "text-white font-semibold"
                    : "text-slate-light hover:text-white"
                }`}
              >
                Permanent Placement
              </Link>
            </div>
          </div>

          <Link
            href="/expertise"
            className={`block px-3 py-2.5 rounded-md text-base font-medium ${
              pathname === "/expertise"
                ? "text-white bg-white/15 font-semibold"
                : "text-white/80 hover:bg-white/10"
            }`}
          >
            Technology Expertise
          </Link>

          <Link
            href="/clients"
            className={`block px-3 py-2.5 rounded-md text-base font-medium ${
              pathname === "/clients"
                ? "text-white bg-white/15 font-semibold"
                : "text-white/80 hover:bg-white/10"
            }`}
          >
            For Clients
          </Link>

          <Link
            href="/candidates"
            className={`block px-3 py-2.5 rounded-md text-base font-medium ${
              pathname === "/candidates"
                ? "text-white bg-white/15 font-semibold"
                : "text-white/80 hover:bg-white/10"
            }`}
          >
            For Candidates
          </Link>

          <div className="pt-4 border-t border-white/10">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center px-4 py-3 rounded-md text-base font-medium text-white bg-steel hover:bg-steel-dim transition-colors shadow-sm"
            >
              <span>Discuss Your Hiring Needs</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
