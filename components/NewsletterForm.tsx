"use client";

import { useFormState, useFormStatus } from "react-dom";
import { subscribeNewsletter, type NewsletterState } from "@/app/actions/newsletter";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-[#8CC220] text-[#0A1628] text-sm px-6 py-3.5 rounded-xl font-bold hover:bg-[#78AB14] transition-colors shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? "Subscribing…" : "Subscribe"}
    </button>
  );
}

export default function NewsletterForm() {
  const [state, action] = useFormState<NewsletterState, FormData>(subscribeNewsletter, {});

  if (state.success) {
    return (
      <div className="flex items-center gap-3 max-w-sm mx-auto bg-white/8 border border-white/15 rounded-xl px-5 py-4">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
          <path
            d="M3 9l4 4 8-8"
            stroke="#8CC220"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-sm text-white/70">You&apos;re subscribed. We&apos;ll be in touch.</p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
      <input
        type="email"
        name="email"
        placeholder="your@email.com"
        required
        className="flex-1 bg-white/8 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#8CC220]/50 transition-colors"
      />
      <SubmitButton />
      {state.error && (
        <p className="text-xs text-red-400 mt-1 sm:absolute sm:translate-y-14">{state.error}</p>
      )}
    </form>
  );
}
