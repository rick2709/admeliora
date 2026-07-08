"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { sectors } from "@/lib/sectors";
import { services } from "@/lib/services";

type FormState = {
  name: string;
  company: string;
  sector: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  sector: "",
  service: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.company.trim()) next.company = "Please enter your company or organisation.";
    if (!form.sector) next.sector = "Please select a sector.";
    if (!form.service) next.service = "Please select a service of interest.";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "Please provide a few details about your enquiry.";
    return next;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    // TODO: wire this up to a real endpoint — e.g. a Formspree form action,
    // or a Next.js Route Handler at /api/contact that sends via your email
    // provider (Resend, SendGrid, etc). This placeholder simulates a submit.
    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("success");
    setForm(initialState);
  };

  const inputClass =
    "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-steel/50 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20";

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-black/5"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 15 }}
        >
          <CheckCircle2 size={52} className="text-accent" />
        </motion.div>
        <h3 className="mt-5 font-heading text-xl font-bold text-navy">Enquiry sent</h3>
        <p className="mt-2 max-w-sm text-sm text-steel">
          Thank you — a member of our team will be in touch shortly. For urgent
          enquiries, call or WhatsApp us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-accent hover:text-mid-blue"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5 sm:p-9"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
            Full name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                id="name-error"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-1 text-xs text-red-600"
              >
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-navy">
            Company / Organisation
          </label>
          <input
            id="company"
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className={inputClass}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          <AnimatePresence>
            {errors.company && (
              <motion.p
                id="company-error"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-1 text-xs text-red-600"
              >
                {errors.company}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sector" className="mb-1.5 block text-sm font-semibold text-navy">
            Sector
          </label>
          <select
            id="sector"
            value={form.sector}
            onChange={(e) => setForm({ ...form, sector: e.target.value })}
            className={inputClass}
            aria-invalid={!!errors.sector}
          >
            <option value="">Select a sector</option>
            {sectors.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          <AnimatePresence>
            {errors.sector && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-1 text-xs text-red-600"
              >
                {errors.sector}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-navy">
            Service of interest
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={inputClass}
            aria-invalid={!!errors.service}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Industrial & Hardware Supplies">Industrial & Hardware Supplies</option>
          </select>
          <AnimatePresence>
            {errors.service && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-1 text-xs text-red-600"
              >
                {errors.service}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
          Tell us about your enquiry
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputClass}
          aria-invalid={!!errors.message}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-1 text-xs text-red-600"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-light disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
        {status === "submitting" ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}
