"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { submitProjectBrief } from "@/app/actions/submit-project";
import { LocaleProvider, useLocaleFromCookie, useT } from "../lib/LocaleContext";

const INTEGRATIONS = [
  "Google Ads", "Meta Ads", "GA4", "Stripe", "Shopify",
  "HubSpot", "Salesforce", "Notion", "Airtable", "Zapier",
  "Excel", "Custom API", "Other",
];

const STEPS = [
  "Contact",
  "Project",
  "Platforms",
  "Assets",
  "Review",
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  industry: string;
  projectDescription: string;
  problem: string;
  successDefinition: string;
  selectedIntegrations: string[];
  assetsFolder: string;
  additionalNotes: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  industry: "",
  projectDescription: "",
  problem: "",
  successDefinition: "",
  selectedIntegrations: [],
  assetsFolder: "",
  additionalNotes: "",
};

export default function ProjectBriefPage() {
  const locale = useLocaleFromCookie();
  return (
    <LocaleProvider locale={locale}>
      <ProjectBriefContent />
    </LocaleProvider>
  );
}

function ProjectBriefContent() {
  const t = useT().t;
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const updateField = useCallback(<K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const toggleIntegration = (name: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedIntegrations: prev.selectedIntegrations.includes(name)
        ? prev.selectedIntegrations.filter((i) => i !== name)
        : [...prev.selectedIntegrations, name],
    }));
  };

  const validateStep = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (step === 0) {
      if (!formData.fullName.trim()) newErrors.fullName = "Required";
      if (!formData.email.trim()) newErrors.email = "Required";
    } else if (step === 1) {
      if (!formData.projectDescription.trim()) newErrors.projectDescription = "Required";
      if (!formData.problem.trim()) newErrors.problem = "Required";
      if (!formData.successDefinition.trim()) newErrors.successDefinition = "Required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError("");
    const params = new URLSearchParams(window.location.search);
    try {
      const result = await submitProjectBrief({
        customerId: params.get("customer_id") || "",
        polarOrderId: params.get("order_id") || "",
        product: params.get("product") || "Unknown",
        amountPaid: params.get("amount") || "Unknown",
        ...formData,
      });

      if (result.success) {
        router.push("/project-brief/confirmation");
      } else {
        setSubmitError(result.error || "Something went wrong. Please try again.");
        setSubmitting(false);
      }
    } catch {
      setSubmitError("Failed to submit. Please check your connection and try again.");
      setSubmitting(false);
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full rounded-xl border text-sm font-medium text-[#11100E] placeholder:text-[#a89472] transition-all focus:outline-none focus:ring-1 px-4 py-3 ${
      errors[field]
        ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200"
        : "border-black/10 bg-[#F8F6EF] focus:border-[#004225]/40 focus:ring-[#004225]/20"
    }`;

  return (
    <div className="min-h-screen bg-[#F8F6EF] px-4 py-12 text-[#11100E] sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        {/* Progress */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            {STEPS.map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold transition-colors ${
                    i <= step ? "bg-[#004225] text-white" : "bg-black/10 text-[#74695B]"
                  }`}
                >
                  {i < step ? <Check className="h-3.5 w-3.5" /> : i + 1}
                </div>
                <span className={`hidden text-[11px] font-bold uppercase tracking-[0.08em] sm:inline ${
                  i <= step ? "text-[#004225]" : "text-[#74695B]"
                }`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-black/10">
            <motion.div
              animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
              className="h-full rounded-full bg-[#004225]"
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-mid sm:p-8"
          >
            {/* Step 0: Contact */}
            {step === 0 && (
              <div className="space-y-5">
                <h2 className="text-xl font-bold tracking-tight">Contact Information</h2>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#74695B]">Full Name</label>
                  <input type="text" className={inputClass("fullName")} placeholder="John Smith" value={formData.fullName} onChange={(e) => updateField("fullName", e.target.value)} />
                  {errors.fullName && <p className="mt-1 text-xs font-medium text-red-500">{errors.fullName}</p>}
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#74695B]">Email</label>
                    <input type="email" className={inputClass("email")} placeholder="john@company.com" value={formData.email} onChange={(e) => updateField("email", e.target.value)} />
                    {errors.email && <p className="mt-1 text-xs font-medium text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#74695B]">Phone / WhatsApp</label>
                    <input type="tel" className={inputClass("phone")} placeholder="+1 555 000 0000" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#74695B]">Company Name</label>
                  <input type="text" className={inputClass("company")} placeholder="Acme Inc." value={formData.company} onChange={(e) => updateField("company", e.target.value)} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#74695B]">Company Website</label>
                    <input type="text" className={inputClass("website")} placeholder="https://acme.com" value={formData.website} onChange={(e) => updateField("website", e.target.value)} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#74695B]">Industry</label>
                    <input type="text" className={inputClass("industry")} placeholder="E-commerce, SaaS, etc." value={formData.industry} onChange={(e) => updateField("industry", e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {/* Step 1: Project */}
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="text-xl font-bold tracking-tight">What you need built</h2>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#74695B]">Describe what you want us to build</label>
                  <textarea className={inputClass("projectDescription")} rows={3} placeholder="A dashboard that combines our ad spend, revenue, and customer data into one view..." value={formData.projectDescription} onChange={(e) => updateField("projectDescription", e.target.value)} />
                  {errors.projectDescription && <p className="mt-1 text-xs font-medium text-red-500">{errors.projectDescription}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#74695B]">What problem are you trying to solve?</label>
                  <textarea className={inputClass("problem")} rows={3} placeholder="We currently spend 10+ hours per week pulling reports manually from different tools..." value={formData.problem} onChange={(e) => updateField("problem", e.target.value)} />
                  {errors.problem && <p className="mt-1 text-xs font-medium text-red-500">{errors.problem}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#74695B]">What does success look like?</label>
                  <textarea className={inputClass("successDefinition")} rows={3} placeholder="One dashboard that auto-updates every morning. My team saves 8 hours/week. I make decisions from real data." value={formData.successDefinition} onChange={(e) => updateField("successDefinition", e.target.value)} />
                  {errors.successDefinition && <p className="mt-1 text-xs font-medium text-red-500">{errors.successDefinition}</p>}
                </div>
              </div>
            )}

            {/* Step 2: Platforms */}
            {step === 2 && (
              <div className="space-y-5">
                <h2 className="text-xl font-bold tracking-tight">Which platforms do you use?</h2>
                <p className="text-sm text-[#74695B]">Select all the tools and platforms you need integrated.</p>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {INTEGRATIONS.map((name) => {
                    const selected = formData.selectedIntegrations.includes(name);
                    return (
                      <button
                        key={name}
                        type="button"
                        onClick={() => toggleIntegration(name)}
                        className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-bold transition-all ${
                          selected
                            ? "border-[#004225]/40 bg-[#004225]/5 text-[#004225]"
                            : "border-black/10 bg-white text-[#74695B] hover:border-black/20"
                        }`}
                      >
                        {selected && <Check className="h-3.5 w-3.5" />}
                        {name}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Assets */}
            {step === 3 && (
              <div className="space-y-5">
                <h2 className="text-xl font-bold tracking-tight">Google Drive Folder</h2>
                <p className="text-sm text-[#74695B]">Share a link to a cloud folder containing your logos, brand guidelines, documents, screenshots, or anything relevant to the build.</p>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#74695B]">Folder Link</label>
                  <input type="url" className={inputClass("assetsFolder")} placeholder="https://drive.google.com/..." value={formData.assetsFolder} onChange={(e) => updateField("assetsFolder", e.target.value)} />
                  <p className="mt-1.5 text-[11px] text-[#74695B]">Google Drive, Dropbox, OneDrive, Notion — any cloud folder works.</p>
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <div className="space-y-5">
                <h2 className="text-xl font-bold tracking-tight">Additional Notes</h2>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#74695B]">Anything else you&apos;d like us to know?</label>
                  <textarea className={inputClass("additionalNotes")} rows={4} placeholder="Any specific requirements, deadlines, or context..." value={formData.additionalNotes} onChange={(e) => updateField("additionalNotes", e.target.value)} />
                </div>

                <div className="rounded-xl border border-black/[0.06] bg-[#F8F6EF] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Summary</p>
                  <div className="mt-2 space-y-1.5 text-sm">
                    <p><span className="font-bold text-[#11100E]">Name:</span> <span className="text-[#74695B]">{formData.fullName || "—"}</span></p>
                    <p><span className="font-bold text-[#11100E]">Email:</span> <span className="text-[#74695B]">{formData.email || "—"}</span></p>
                    <p><span className="font-bold text-[#11100E]">Company:</span> <span className="text-[#74695B]">{formData.company || "—"}</span></p>
                    <p><span className="font-bold text-[#11100E]">Platforms:</span> <span className="text-[#74695B]">{formData.selectedIntegrations.length ? formData.selectedIntegrations.join(", ") : "None"}</span></p>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#004225] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#11100E] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t.form.sending}
                    </>
                  ) : (
                    t.form.submit
                  )}
                </button>
                {submitError && (
                  <p className="mt-3 text-center text-xs font-medium text-red-500">{submitError}</p>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-between">
              {step > 0 ? (
                <button onClick={prevStep} className="flex items-center gap-1.5 text-sm font-bold text-[#74695B] transition-colors hover:text-[#11100E]">
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
              ) : (
                <div />
              )}
              {step < STEPS.length - 1 && (
                <button onClick={nextStep} className="flex items-center gap-1.5 rounded-xl bg-[#11100E] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#004225]">
                  Next <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
