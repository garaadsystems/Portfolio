"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContact, type ContactFormState } from "@/app/actions/contact";

const serviceOptions = [
  "E-Government Solutions",
  "Custom Software Development",
  "Systems Integration",
  "Technical Consulting",
  "Not sure yet",
];

const initialState: ContactFormState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex items-center justify-center gap-2 bg-[#0A1628] text-white text-sm px-8 py-4 rounded-xl font-semibold hover:bg-[#0d1f3a] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
    >
      {pending ? (
        <>
          <svg
            className="animate-spin"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          Sending...
        </>
      ) : (
        <>
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
        </>
      )}
    </button>
  );
}

function SuccessMessage() {
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
      <h3 className="text-xl font-black text-gray-900 mb-2">Message sent</h3>
      <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
        We&apos;ve received your inquiry and will get back to you within one business day.
      </p>
    </div>
  );
}

export default function ContactForm() {
  const [state, action] = useFormState(submitContact, initialState);

  if (state.success) return <SuccessMessage />;

  return (
    <form action={action} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-2">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="w-full bg-[#F7F8FA] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0A1628] focus:ring-2 focus:ring-[#0A1628]/10 transition-colors"
          />
        </div>
        <div>
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-2">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
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
          Project Brief <span className="text-red-400">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Describe your project, challenge, or goals. The more context you provide, the better we can prepare for our first conversation."
          className="w-full bg-[#F7F8FA] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0A1628] focus:ring-2 focus:ring-[#0A1628]/10 transition-colors resize-none"
        />
      </div>

      {state.error && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3.5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="mt-0.5 shrink-0"
          >
            <circle cx="8" cy="8" r="7" stroke="#ef4444" strokeWidth="1.5" />
            <path d="M8 5v3M8 10.5v.5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p className="text-sm text-red-700">{state.error}</p>
        </div>
      )}

      <SubmitButton />
    </form>
  );
}
