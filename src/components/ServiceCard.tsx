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
    <div className="group bg-white rounded-xl p-7 border border-mist hover:border-steel transition-colors duration-200 flex flex-col justify-between">
      <div>
        {/* Icon */}
        <div className="h-12 w-12 rounded-xl bg-midnight text-white flex items-center justify-center mb-6 shadow-xs group-hover:bg-steel transition-colors duration-200">
          <IconComponent className="h-5 w-5" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-midnight mb-3 tracking-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {!compact && service.useCases && service.useCases.length > 0 && (
          <div className="pt-4 border-t border-mist/80 mb-6 space-y-2">
            {service.useCases.slice(0, 2).map((useCase, idx) => (
              <div key={idx} className="flex items-start text-xs text-slate-light gap-2">
                <span className="text-steel font-bold leading-none mt-1">•</span>
                <span className="line-clamp-1">{useCase}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action link */}
      <div className="pt-4 border-t border-mist/80">
        <Link
          href={service.href}
          className="inline-flex items-center text-sm font-semibold text-steel hover:text-midnight transition-colors"
        >
          <span>Learn more</span>
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
