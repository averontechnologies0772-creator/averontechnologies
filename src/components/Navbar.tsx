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
          ? "bg-white/85 border-b border-[#E1E6EA]/90 shadow-[0_4px_20px_rgba(11,27,43,0.05)]"
          : "bg-white/90 border-b border-[#E1E6EA]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            <Link
              href="/about"
              className={`px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                pathname === "/about"
                  ? "text-[#0B1B2B] bg-[#EDF2F5] font-semibold shadow-2xs"
                  : "text-[#172331] hover:text-[#0B1B2B] hover:bg-[#F6F7F8]/80"
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
                    ? "text-[#0B1B2B] bg-[#EDF2F5] font-semibold shadow-2xs"
                    : "text-[#172331] hover:text-[#0B1B2B] hover:bg-[#F6F7F8]/80"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`ml-1.5 h-4 w-4 text-[#54758F] transition-transform duration-300 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Glassmorphic Dropdown Menu */}
              {servicesDropdownOpen && (
                <div
                  className="absolute left-0 mt-1 w-84 rounded-xl bg-white/95 backdrop-blur-xl border border-[#E1E6EA] shadow-[0_12px_36px_rgba(11,27,43,0.1)] py-2 z-50 animate-in fade-in-50 zoom-in-95 duration-200"
                  role="menu"
                >
                  <div className="px-3.5 py-2 border-b border-[#EDF2F5]">
                    <Link
                      href="/services"
                      className="text-xs font-semibold uppercase tracking-wider text-[#356C96] hover:text-[#0B1B2B] flex items-center justify-between"
                      role="menuitem"
                    >
                      <span>All Services Overview</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>

                  <Link
                    href="/services/it-staffing"
                    className="flex items-start px-3.5 py-2.5 text-sm hover:bg-[#F6F7F8] transition-all duration-150 group rounded-lg mx-1"
                    role="menuitem"
                  >
                    <div className="p-2 rounded-lg bg-[#EDF2F5] text-[#132A40] group-hover:bg-[#132A40] group-hover:text-white transition-colors mr-3 mt-0.5 shadow-2xs">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium text-[#172331] group-hover:text-[#0B1B2B]">
                        Direct Client IT Staffing
                      </div>
                      <p className="text-xs text-[#65717D] mt-0.5 leading-snug">
                        Dedicated matching for internal requirements.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/services/contract-staffing"
                    className="flex items-start px-3.5 py-2.5 text-sm hover:bg-[#F6F7F8] transition-all duration-150 group rounded-lg mx-1"
                    role="menuitem"
                  >
                    <div className="p-2 rounded-lg bg-[#EDF2F5] text-[#132A40] group-hover:bg-[#132A40] group-hover:text-white transition-colors mr-3 mt-0.5 shadow-2xs">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium text-[#172331] group-hover:text-[#0B1B2B]">
                        Contract & Contract-to-Hire
                      </div>
                      <p className="text-xs text-[#65717D] mt-0.5 leading-snug">
                        Project-based and evaluation-to-permanent models.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/services/permanent-placement"
                    className="flex items-start px-3.5 py-2.5 text-sm hover:bg-[#F6F7F8] transition-all duration-150 group rounded-lg mx-1"
                    role="menuitem"
                  >
                    <div className="p-2 rounded-lg bg-[#EDF2F5] text-[#132A40] group-hover:bg-[#132A40] group-hover:text-white transition-colors mr-3 mt-0.5 shadow-2xs">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium text-[#172331] group-hover:text-[#0B1B2B]">
                        Permanent Placement
                      </div>
                      <p className="text-xs text-[#65717D] mt-0.5 leading-snug">
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
                  ? "text-[#0B1B2B] bg-[#EDF2F5] font-semibold shadow-2xs"
                  : "text-[#172331] hover:text-[#0B1B2B] hover:bg-[#F6F7F8]/80"
              }`}
            >
              Technology Expertise
            </Link>

            <Link
              href="/clients"
              className={`px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                pathname === "/clients"
                  ? "text-[#0B1B2B] bg-[#EDF2F5] font-semibold shadow-2xs"
                  : "text-[#172331] hover:text-[#0B1B2B] hover:bg-[#F6F7F8]/80"
              }`}
            >
              For Clients
            </Link>

            <Link
              href="/candidates"
              className={`px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                pathname === "/candidates"
                  ? "text-[#0B1B2B] bg-[#EDF2F5] font-semibold shadow-2xs"
                  : "text-[#172331] hover:text-[#0B1B2B] hover:bg-[#F6F7F8]/80"
              }`}
            >
              For Candidates
            </Link>
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#0B1B2B] hover:bg-[#132A40] rounded-md transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-[#356C96] focus:ring-offset-2"
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
              className="inline-flex items-center justify-center p-2 rounded-md text-[#172331] hover:text-[#0B1B2B] hover:bg-[#F6F7F8] focus:outline-none focus:ring-2 focus:ring-[#356C96]"
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
        <div className="lg:hidden border-t border-[#E1E6EA] bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 fade-in duration-200">
          <Link
            href="/about"
            className={`block px-3 py-2.5 rounded-md text-base font-medium ${
              pathname === "/about"
                ? "text-[#0B1B2B] bg-[#EDF2F5] font-semibold"
                : "text-[#172331] hover:bg-[#F6F7F8]"
            }`}
          >
            About Us
          </Link>

          <div className="space-y-1">
            <Link
              href="/services"
              className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                pathname === "/services"
                  ? "text-[#0B1B2B] bg-[#EDF2F5] font-semibold"
                  : "text-[#172331] hover:bg-[#F6F7F8]"
              }`}
            >
              Services Overview
            </Link>
            <div className="pl-4 space-y-1 border-l-2 border-[#EDF2F5] ml-3">
              <Link
                href="/services/it-staffing"
                className={`block px-3 py-1.5 rounded-md text-sm ${
                  pathname === "/services/it-staffing"
                    ? "text-[#0B1B2B] font-semibold"
                    : "text-[#65717D] hover:text-[#0B1B2B]"
                }`}
              >
                Direct Client IT Staffing
              </Link>
              <Link
                href="/services/contract-staffing"
                className={`block px-3 py-1.5 rounded-md text-sm ${
                  pathname === "/services/contract-staffing"
                    ? "text-[#0B1B2B] font-semibold"
                    : "text-[#65717D] hover:text-[#0B1B2B]"
                }`}
              >
                Contract & Contract-to-Hire
              </Link>
              <Link
                href="/services/permanent-placement"
                className={`block px-3 py-1.5 rounded-md text-sm ${
                  pathname === "/services/permanent-placement"
                    ? "text-[#0B1B2B] font-semibold"
                    : "text-[#65717D] hover:text-[#0B1B2B]"
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
                ? "text-[#0B1B2B] bg-[#EDF2F5] font-semibold"
                : "text-[#172331] hover:bg-[#F6F7F8]"
            }`}
          >
            Technology Expertise
          </Link>

          <Link
            href="/clients"
            className={`block px-3 py-2.5 rounded-md text-base font-medium ${
              pathname === "/clients"
                ? "text-[#0B1B2B] bg-[#EDF2F5] font-semibold"
                : "text-[#172331] hover:bg-[#F6F7F8]"
            }`}
          >
            For Clients
          </Link>

          <Link
            href="/candidates"
            className={`block px-3 py-2.5 rounded-md text-base font-medium ${
              pathname === "/candidates"
                ? "text-[#0B1B2B] bg-[#EDF2F5] font-semibold"
                : "text-[#172331] hover:bg-[#F6F7F8]"
            }`}
          >
            For Candidates
          </Link>

          <div className="pt-4 border-t border-[#E1E6EA]">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center px-4 py-3 rounded-md text-base font-medium text-white bg-[#0B1B2B] hover:bg-[#132A40] transition-colors shadow-sm"
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
