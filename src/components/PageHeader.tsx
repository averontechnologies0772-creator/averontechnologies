import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="relative bg-[#0B1B2B] text-white pt-16 pb-16 lg:pt-20 lg:pb-20 border-b border-[#132A40] overflow-hidden">
      {/* Subtle background geometry */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 300"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="50" x2="1000" y2="250" stroke="#54758F" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="0" y1="250" x2="1000" y2="50" stroke="#356C96" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <ChevronRight className="h-3 w-3 text-[#54758F]" />
                  {item.href ? (
                    <Link href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-slate-200 font-medium" aria-current="page">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132A40] border border-[#356C96]/30 text-xs font-medium text-slate-300 uppercase tracking-widest mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#356C96]"></span>
            {eyebrow}
          </div>
        )}

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white max-w-3xl leading-tight">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
