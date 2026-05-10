import Link from "next/link";

const highlights = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="#8CC220"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" stroke="#8CC220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Government-grade security and compliance built into every system.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#8CC220" strokeWidth="1.5" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#8CC220" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Founder-led architectural oversight on every engagement.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M9 11l3 3L22 4" stroke="#8CC220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
          stroke="#8CC220"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "100% on-time delivery across all completed institutional projects.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
          stroke="#8CC220"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="3" stroke="#8CC220" strokeWidth="1.5" />
      </svg>
    ),
    label: "Based in Jijiga — built specifically for the Horn of Africa context.",
  },
];

export default function AboutTeaser() {
  return (
    <section className="py-24 px-6 bg-[#0A1628] relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#8CC220 1px, transparent 1px), linear-gradient(to right, #8CC220 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left: text */}
        <div>
          <span className="text-xs font-bold text-white/35 uppercase tracking-widest mb-4 block">
            About Garaad Systems
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.08] tracking-tight mb-6">
            Expert-Driven.
            <br />
            <span className="text-[#8CC220]">Founder-Led.</span>
            <br />
            Built for Institutions.
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            We are a lean technology consultancy based in Jijiga, Ethiopia — founded with a specific
            mandate: to deliver government-grade digital systems for public institutions that
            cannot afford to fail. Our hybrid team model combines in-house specialists with
            project-based engineers, giving every client access to senior expertise at every
            stage of delivery.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#8CC220] hover:text-white transition-colors"
          >
            Learn about our model
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Right: highlights */}
        <div className="space-y-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 bg-white/5 border border-white/8 rounded-xl px-5 py-4 hover:bg-white/8 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-[#8CC220]/10 border border-[#8CC220]/20 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <p className="text-sm text-white/60 leading-relaxed pt-1.5">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
