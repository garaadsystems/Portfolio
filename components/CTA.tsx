import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#8CC220] relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#0A1628 1px, transparent 1px), linear-gradient(to right, #0A1628 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold text-[#0A1628]/60 uppercase tracking-widest mb-5 block">
          Get Started
        </span>
        <h2 className="text-4xl md:text-[60px] font-black text-[#0A1628] leading-[1.06] tracking-tight mb-5">
          Ready to Modernize
          <br />
          Your Institution?
        </h2>
        <p className="text-[#0A1628]/65 text-base max-w-md mx-auto mb-12 leading-relaxed">
          Let&apos;s discuss your digital transformation goals and chart a clear path forward
          together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0A1628] text-white text-sm px-8 py-4 rounded-xl font-semibold hover:bg-[#0d1f3a] transition-colors"
          >
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="tel:+251931648275"
            className="inline-flex items-center gap-2 bg-[#0A1628]/10 border border-[#0A1628]/20 text-[#0A1628] text-sm px-8 py-4 rounded-xl font-medium hover:bg-[#0A1628]/20 transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 2.5h2.5L7 5.5 5.5 7A10.5 10.5 0 009 10.5L10.5 9l3 1.5V13c0 .5-.5 1-1 1C5 14 2 11 2 5c0-.5.5-1 1-1z"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
            Call Us
          </Link>
        </div>

        <div className="mt-14 pt-10 border-t border-[#0A1628]/15 flex flex-col sm:flex-row items-center justify-center gap-5 text-xs text-[#0A1628]/45">
          <span>info@garaadsystems.com</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-[#0A1628]/30" />
          <span>+251 93 164 8275</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-[#0A1628]/30" />
          <span>Bay/Haven Mall, Jigjiga, Ethiopia</span>
        </div>
      </div>
    </section>
  );
}
