import Link from "next/link";

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "8+", label: "Institutions Served" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "5+", label: "Years of Experience" },
];

const clients = [
  "Somali Reg. Gov.",
  "Masaf",
  "FlyEase",
  "Mahadho",
  "Grand Space",
  "Sabi",
  "SRC",
];

export default function Hero() {
  return (
    <section className="relative bg-[#8CC220] min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#0A1628 1px, transparent 1px), linear-gradient(to right, #0A1628 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-24 w-full">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 bg-[#0A1628]/10 border border-[#0A1628]/15 rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A1628] animate-pulse block" />
            <span className="text-xs text-white/80 font-medium tracking-wide">
              Technology &amp; Digital Consultancy — Jijiga, Ethiopia
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-[82px] font-black text-white text-center leading-[1.04] tracking-tight mb-7">
          Building Digital
          <br />
          Infrastructure
          <br />
          <span className="text-[#0A1628]">for Africa&apos;s Future</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-white/80 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          We design, build, and deploy e-government platforms and mission-critical
          software for public institutions that demand reliability, security, and
          long-term operational value.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0A1628] text-white text-sm px-8 py-3.5 rounded-xl font-semibold hover:bg-[#0d1f3a] transition-colors"
          >
            Start a Project
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
            href="/projects"
            className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-sm px-8 py-3.5 rounded-xl font-medium hover:bg-white/25 transition-colors"
          >
            View Our Work
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#0A1628]/15 rounded-2xl overflow-hidden border border-[#0A1628]/15">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#8CC220] hover:bg-[#0A1628]/[0.05] transition-colors px-6 py-8 text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-white mb-1.5">{stat.value}</div>
              <div className="text-xs text-white/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trusted by */}
        <div className="mt-20 text-center">
          <p className="text-[10px] text-white/60 uppercase tracking-[0.25em] font-semibold mb-7">
            Trusted by institutions &amp; organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {clients.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold text-white/60 hover:text-white/80 transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
