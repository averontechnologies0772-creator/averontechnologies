import React from "react";
import { Mail, Globe, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata = {
  title: "Contact Us | Averon Technologies LLC",
  description:
    "Contact Averon Technologies LLC. Discuss your technology hiring requirements, open technical roles, or contract staffing needs directly with our US recruitment team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's Discuss Your Hiring Requirements"
        description="Share a few details about your organization and the technology talent you are seeking. Our recruitment team responds promptly to all business inquiries."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <section className="bg-[#F6F7F8] py-16 sm:py-24 border-b border-[#E1E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Value Props */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#356C96]">
                  Averon Recruitment Desk
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B1B2B] tracking-tight">
                  Direct, Transparent Communication
                </h2>
                <p className="text-sm sm:text-base text-[#65717D] leading-relaxed">
                  We maintain a responsive, direct communication channel for hiring managers, technical
                  executives, and candidates across the United States.
                </p>
              </div>

              {/* Verified Contact Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-[#E1E6EA] shadow-xs space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#132A40] pb-2 border-b border-[#E1E6EA]">
                  Verified Corporate Details
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#EDF2F5] text-[#356C96] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[#65717D] block text-xs">Primary Email</span>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="font-medium text-[#0B1B2B] hover:text-[#356C96] transition-colors underline-offset-2 hover:underline"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#EDF2F5] text-[#356C96] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Globe className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[#65717D] block text-xs">Official Website</span>
                      <span className="font-medium text-[#0B1B2B]">{COMPANY_INFO.domain}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#EDF2F5] text-[#356C96] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[#65717D] block text-xs">Primary Market</span>
                      <span className="font-medium text-[#0B1B2B]">
                        United States (Nationwide Staffing Delivery)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recruitment Standards */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E1E6EA] shadow-xs space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#132A40]">
                  What Happens Next?
                </h3>
                <ul className="space-y-2.5 text-xs text-[#65717D]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#356C96] mt-0.5 flex-shrink-0" />
                    <span>Your inquiry is directly reviewed by an Averon technical recruitment lead.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#356C96] mt-0.5 flex-shrink-0" />
                    <span>We schedule a concise intake discussion to confirm technical scope and timing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#356C96] mt-0.5 flex-shrink-0" />
                    <span>All client and candidate information is handled with strict professional discretion.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Functional Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
