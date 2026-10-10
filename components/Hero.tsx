import Link from "next/link";

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "8+", label: "Institutions Served" },
  { value: "5+", label: "Years of Experience" },
];

const clients = [
  "Somali Regional Government",
  "Masaf",
  "FlyEase",
  "Mahadho",
  "Grand Space",
  "Sabi",
  "SRC",
];

export default function Hero() {
  return (
    <section className="relative bg-brand min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-24 w-full">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-navy/10 border border-navy/15 rounded-full px-4 py-2">
            <span className="text-xs text-navy font-medium tracking-wide">
              Technology &amp; Digital Consultancy · Jigjiga, Ethiopia
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-[82px] font-black text-navy text-center leading-[1.04] tracking-tight mb-7">
          Building Digital
          <br />
          Infrastructure
          <br />
          for Africa&apos;s Future
        </h1>

        {/* Subtitle */}
        <p className="text-center text-navy/80 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          We design, build, and deploy e-government platforms and mission-critical
          software for public institutions that demand reliability, security, and
          long-term operational value.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy text-white text-sm px-8 py-3.5 rounded-xl font-semibold hover:bg-navy-light transition-colors"
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
            className="inline-flex items-center gap-2 bg-navy/10 border border-navy/20 text-navy text-sm px-8 py-3.5 rounded-xl font-medium hover:bg-navy/20 transition-colors"
          >
            View Our Work
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-navy/15 rounded-2xl overflow-hidden border border-navy/15">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-brand hover:bg-navy/[0.05] transition-colors px-6 py-8 text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-navy mb-1.5">{stat.value}</div>
              <div className="text-xs text-navy/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trusted by */}
        <div className="mt-20 text-center">
          <p className="text-[10px] text-navy/80 uppercase tracking-[0.25em] font-semibold mb-7">
            Trusted by institutions &amp; organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {clients.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold text-navy/80"
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
