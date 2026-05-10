"use client";

import { useState } from "react";

const serviceOptions = [
  "E-Government Solutions",
  "Custom Software Development",
  "Systems Integration",
  "Technical Consulting",
  "Not sure yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project Inquiry from ${form.name}${form.organization ? ` — ${form.organization}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.organization}\nService Interest: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@garaadsystems.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#F7F8FA] rounded-2xl border border-gray-100 p-12 text-center">
        <div className="w-14 h-14 rounded-full bg-[#8CC220]/15 border border-[#8CC220]/25 flex items-center justify-center mx-auto mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 12l2 2 4-4"
              stroke="#8CC220"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="9" stroke="#8CC220" strokeWidth="1.5" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-gray-900 mb-2">Your email client is opening</h3>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
          Your message has been prepared. Complete sending it from your email client and we&apos;ll
          get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="w-full bg-[#F7F8FA] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0A1628] focus:ring-2 focus:ring-[#0A1628]/10 transition-colors"
          />
        </div>
        <div>
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@organization.com"
            className="w-full bg-[#F7F8FA] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0A1628] focus:ring-2 focus:ring-[#0A1628]/10 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-2">
          Organization
        </label>
        <input
          type="text"
          name="organization"
          value={form.organization}
          onChange={handleChange}
          placeholder="Your institution or organization"
          className="w-full bg-[#F7F8FA] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0A1628] focus:ring-2 focus:ring-[#0A1628]/10 transition-colors"
        />
      </div>

      <div>
        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-2">
          Service Interest
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full bg-[#F7F8FA] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#0A1628] focus:ring-2 focus:ring-[#0A1628]/10 transition-colors appearance-none"
        >
          <option value="">Select a service area</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-2">
          Project Brief
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Describe your project, challenge, or goals. The more context you provide, the better we can prepare for our first conversation."
          className="w-full bg-[#F7F8FA] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0A1628] focus:ring-2 focus:ring-[#0A1628]/10 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-[#0A1628] text-white text-sm px-8 py-4 rounded-xl font-semibold hover:bg-[#0d1f3a] transition-colors"
      >
        Send Your Message
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}
