"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, CheckCircle, AlertCircle, Send, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

interface FormValues {
  fullName: string;
  workEmail: string;
  companyName: string;
  role: string;
  inquiryType: string;
  staffingRequirement: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  companyName?: string;
  inquiryType?: string;
  staffingRequirement?: string;
  message?: string;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    fullName: "",
    workEmail: "",
    companyName: "",
    role: "",
    inquiryType: "Direct IT Staffing",
    staffingRequirement: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState<FormValues | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!values.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!values.workEmail.trim()) {
      newErrors.workEmail = "Please enter your work email.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(values.workEmail.trim())) {
        newErrors.workEmail = "Please enter a valid email address.";
      }
    }

    if (!values.companyName.trim()) {
      newErrors.companyName = "Please enter your company or organization name.";
    }

    if (!values.inquiryType.trim()) {
      newErrors.inquiryType = "Please select an inquiry type.";
    }

    if (!values.staffingRequirement.trim()) {
      newErrors.staffingRequirement = "Please specify your technology staffing requirement.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Prepare mailto link payload for reliable direct communication
    const subject = encodeURIComponent(
      `[Staffing Inquiry] ${values.inquiryType} - ${values.companyName}`
    );
    const bodyContent =
      `Staffing Inquiry Details for Averon Technologies LLC:\n\n` +
      `Full Name: ${values.fullName}\n` +
      `Work Email: ${values.workEmail}\n` +
      `Company Name: ${values.companyName}\n` +
      `Role / Title: ${values.role || "N/A"}\n` +
      `Inquiry Type: ${values.inquiryType}\n` +
      `Staffing Requirement: ${values.staffingRequirement}\n\n` +
      `Message / Details:\n${values.message || "None provided"}\n\n` +
      `Submitted via averontechnologiesllc.com contact portal.`;

    const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${encodeURIComponent(
      bodyContent
    )}`;

    // Trigger user mail client fallback directly
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSummary({ ...values });
    }, 400);
  };

  const handleReset = () => {
    setSubmittedSummary(null);
    setValues({
      fullName: "",
      workEmail: "",
      companyName: "",
      role: "",
      inquiryType: "Direct IT Staffing",
      staffingRequirement: "",
      message: "",
    });
  };

  if (submittedSummary) {
    return (
      <div className="bg-white rounded-xl border border-[#E1E6EA] p-8 shadow-sm">
        <div className="flex items-center gap-3 text-emerald-700 mb-4">
          <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center">
            <CheckCircle className="h-6 w-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#172331]">
              Inquiry Drafted & Dispatched
            </h3>
            <p className="text-xs text-[#65717D]">
              A direct message has been prepared for our team at {COMPANY_INFO.email}.
            </p>
          </div>
        </div>

        <div className="bg-[#F6F7F8] rounded-lg p-5 border border-[#E1E6EA] my-6 space-y-2.5 text-xs text-[#172331]">
          <div className="font-semibold text-xs text-[#132A40] uppercase tracking-wider pb-1 border-b border-[#E1E6EA]">
            Summary of Prepared Details
          </div>
          <div>
            <span className="text-[#65717D]">Name: </span>
            <span className="font-medium">{submittedSummary.fullName}</span>
          </div>
          <div>
            <span className="text-[#65717D]">Company: </span>
            <span className="font-medium">{submittedSummary.companyName}</span>
          </div>
          <div>
            <span className="text-[#65717D]">Work Email: </span>
            <span className="font-medium">{submittedSummary.workEmail}</span>
          </div>
          <div>
            <span className="text-[#65717D]">Inquiry Type: </span>
            <span className="font-medium">{submittedSummary.inquiryType}</span>
          </div>
          <div>
            <span className="text-[#65717D]">Requirement: </span>
            <span className="font-medium">{submittedSummary.staffingRequirement}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
              `[Follow-up] ${submittedSummary.inquiryType} - ${submittedSummary.companyName}`
            )}`}
            className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0B1B2B] text-white text-sm font-medium rounded-md hover:bg-[#132A40] transition-colors"
          >
            <Mail className="mr-2 h-4 w-4 text-[#54758F]" />
            <span>Open Email Client Again</span>
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center px-5 py-2.5 border border-[#E1E6EA] text-[#172331] text-sm font-medium rounded-md hover:bg-[#F6F7F8] transition-colors"
          >
            <span>Submit Another Inquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-xl border border-[#E1E6EA] p-6 sm:p-8 shadow-xs space-y-5"
    >
      <div className="border-b border-[#E1E6EA] pb-4">
        <h3 className="text-xl font-semibold text-[#0B1B2B]">
          Discuss Your Workforce Requirements
        </h3>
        <p className="text-xs sm:text-sm text-[#65717D] mt-1">
          Share your technical requirements. We connect your team with qualified technology professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-[#172331] mb-1">
            Full Name <span className="text-rose-600">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            placeholder="Jane Doe"
            className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
              errors.fullName ? "border-rose-500 bg-rose-50/20" : "border-[#E1E6EA] bg-white"
            } text-[#172331] placeholder-[#65717D]/60 focus:outline-none focus:ring-2 focus:ring-[#356C96] focus:border-transparent transition-all`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3 flex-shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <label htmlFor="workEmail" className="block text-xs font-semibold text-[#172331] mb-1">
            Work Email <span className="text-rose-600">*</span>
          </label>
          <input
            type="email"
            id="workEmail"
            name="workEmail"
            value={values.workEmail}
            onChange={handleChange}
            placeholder="jdoe@company.com"
            className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
              errors.workEmail ? "border-rose-500 bg-rose-50/20" : "border-[#E1E6EA] bg-white"
            } text-[#172331] placeholder-[#65717D]/60 focus:outline-none focus:ring-2 focus:ring-[#356C96] focus:border-transparent transition-all`}
          />
          {errors.workEmail && (
            <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3 flex-shrink-0" />
              <span>{errors.workEmail}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-xs font-semibold text-[#172331] mb-1">
            Company Name <span className="text-rose-600">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={values.companyName}
            onChange={handleChange}
            placeholder="Acme Corporation"
            className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
              errors.companyName ? "border-rose-500 bg-rose-50/20" : "border-[#E1E6EA] bg-white"
            } text-[#172331] placeholder-[#65717D]/60 focus:outline-none focus:ring-2 focus:ring-[#356C96] focus:border-transparent transition-all`}
          />
          {errors.companyName && (
            <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3 flex-shrink-0" />
              <span>{errors.companyName}</span>
            </p>
          )}
        </div>

        {/* Role / Title */}
        <div>
          <label htmlFor="role" className="block text-xs font-semibold text-[#172331] mb-1">
            Your Role / Title
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={values.role}
            onChange={handleChange}
            placeholder="Director of Engineering / Talent Lead"
            className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#E1E6EA] bg-white text-[#172331] placeholder-[#65717D]/60 focus:outline-none focus:ring-2 focus:ring-[#356C96] focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Inquiry Type */}
        <div>
          <label htmlFor="inquiryType" className="block text-xs font-semibold text-[#172331] mb-1">
            Inquiry Type <span className="text-rose-600">*</span>
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={values.inquiryType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#E1E6EA] bg-white text-[#172331] focus:outline-none focus:ring-2 focus:ring-[#356C96] focus:border-transparent transition-all"
          >
            <option value="Direct IT Staffing">Direct IT Staffing</option>
            <option value="Contract Staffing">Contract Staffing</option>
            <option value="Contract-to-Hire">Contract-to-Hire</option>
            <option value="Permanent Placement">Permanent Placement</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>

        {/* Staffing Requirement */}
        <div>
          <label
            htmlFor="staffingRequirement"
            className="block text-xs font-semibold text-[#172331] mb-1"
          >
            Primary Domain / Roles Needed <span className="text-rose-600">*</span>
          </label>
          <input
            type="text"
            id="staffingRequirement"
            name="staffingRequirement"
            value={values.staffingRequirement}
            onChange={handleChange}
            placeholder="e.g. Cloud Engineers, Full Stack, Data"
            className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
              errors.staffingRequirement
                ? "border-rose-500 bg-rose-50/20"
                : "border-[#E1E6EA] bg-white"
            } text-[#172331] placeholder-[#65717D]/60 focus:outline-none focus:ring-2 focus:ring-[#356C96] focus:border-transparent transition-all`}
          />
          {errors.staffingRequirement && (
            <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3 flex-shrink-0" />
              <span>{errors.staffingRequirement}</span>
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-[#172331] mb-1">
          Project Context or Additional Notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          placeholder="Briefly describe your timeline, stack requirements, or team objectives..."
          className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#E1E6EA] bg-white text-[#172331] placeholder-[#65717D]/60 focus:outline-none focus:ring-2 focus:ring-[#356C96] focus:border-transparent transition-all resize-y"
        ></textarea>
      </div>

      {/* Submit Button & Direct Mail Notice */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-md text-sm font-medium text-white bg-[#0B1B2B] hover:bg-[#132A40] focus:outline-none focus:ring-2 focus:ring-[#356C96] focus:ring-offset-2 transition-all shadow-xs disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span>Preparing Communication...</span>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              <span>Submit Staffing Inquiry</span>
            </>
          )}
        </button>

        <p className="mt-4 text-[11px] text-[#65717D] leading-relaxed">
          Submissions directly prepare a structured inquiry sent to our primary recruitment desk at{" "}
          <strong className="text-[#132A40]">{COMPANY_INFO.email}</strong>. By submitting, you agree
          to our{" "}
          <Link href="/privacy-policy" className="text-[#356C96] underline underline-offset-2">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-[#356C96] underline underline-offset-2">
            Terms of Use
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
