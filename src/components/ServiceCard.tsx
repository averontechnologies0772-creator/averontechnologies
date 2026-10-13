import React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, Clock, UserCheck, Award, Layers, Headphones } from "lucide-react";
import { ServiceDetail } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Briefcase,
  Clock,
  UserCheck,
  Award,
  Layers,
  Headphones,
};

interface ServiceCardProps {
  service: ServiceDetail;
  compact?: boolean;
}

export default function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const IconComponent = ICON_MAP[service.iconName] || Briefcase;

  return (
    <div className="group bg-white rounded-xl p-6 sm:p-7 border border-[#E1E6EA] hover:border-[#356C96] hover:shadow-[0_8px_24px_rgba(11,27,43,0.06)] transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Icon & ID */}
        <div className="flex items-center justify-between mb-5">
          <div className="h-12 w-12 rounded-lg bg-[#EDF2F5] text-[#0B1B2B] flex items-center justify-center group-hover:bg-[#0B1B2B] group-hover:text-white transition-colors duration-200">
            <IconComponent className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#54758F] bg-[#F6F7F8] px-2 py-0.5 rounded border border-[#E1E6EA]">
            Averon Solution
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#172331] group-hover:text-[#0B1B2B] mb-2.5 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#65717D] leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {!compact && service.useCases && service.useCases.length > 0 && (
          <div className="pt-3 border-t border-[#EDF2F5] mb-5 space-y-1.5">
            {service.useCases.slice(0, 2).map((useCase, idx) => (
              <div key={idx} className="flex items-start text-xs text-[#54758F] gap-2">
                <span className="text-[#356C96] font-bold">•</span>
                <span className="line-clamp-1">{useCase}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action link */}
      <div className="pt-4 border-t border-[#EDF2F5]">
        <Link
          href={service.href}
          className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#356C96] group-hover:text-[#0B1B2B] transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
