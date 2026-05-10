import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects — Garaad Systems",
  description:
    "Portfolio of digital solutions delivered for public institutions and organizations across Ethiopia and the Horn of Africa.",
};

const featured = {
  category: "E-Government · Featured Case Study",
  name: "Construction Licence Registration System",
  client: "Somali Regional Government — Urban Development & Construction Bureau",
  description:
    "A comprehensive upgrade of the digital platform managing construction licence registration for the Somali Regional Government. The project modernized a legacy workflow, digitizing the full application, review, approval, and issuance pipeline for contractors and property developers across the region.",
  outcomes: [
    "Eliminated paper-based application and approval bottlenecks",
    "Digitized the full licence lifecycle from submission to issuance",
    "Delivered real-time reporting dashboards for bureau administrators",
    "Deployed in full compliance with all contractual and technical requirements",
    "Reduced average processing time for licence applications",
  ],
  tags: ["E-Government", "Portal", "Workflow Automation", "Somali Region", "Ethiopia"],
};

const projects = [
  {
    id: 1,
    category: "Youth Empowerment",
    name: "Masaf",
    description:
      "A digital platform empowering youth through employment programs and community resilience initiatives across the Somali Region.",
    detail:
      "Masaf connects young people with employment opportunities, training programs, and community-led initiatives — providing the regional government with real-time data on youth engagement and program impact.",
    tags: ["Web Platform", "Civic Tech", "Ethiopia"],
    logo: (
      <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
        <svg width="28" height="28" viewBox="0 0 52 52" fill="none">
          <circle cx="26" cy="26" r="22" stroke="#dc2626" strokeWidth="2" fill="none" />
          <circle cx="26" cy="26" r="14" stroke="#dc2626" strokeWidth="1.5" fill="none" />
          <path d="M14 26 Q20 16 26 26 Q32 36 38 26" stroke="#dc2626" strokeWidth="1.5" fill="none" />
          <circle cx="26" cy="20" r="3" fill="#dc2626" />
        </svg>
      </div>
    ),
  },
  {
    id: 2,
    category: "Travel & Tourism",
    name: "FlyEase",
    description:
      "A modern travel discovery platform connecting users to destinations and curated experiences across East Africa.",
    detail:
      "FlyEase provides a streamlined booking and discovery experience for travelers exploring East Africa, with curated itineraries, partner integrations, and a mobile-first interface built for emerging-market connectivity.",
    tags: ["Web App", "Marketplace", "Travel"],
    logo: (
      <div className="h-12 flex items-center gap-1 shrink-0">
        <span className="text-lg font-black text-red-600 tracking-tight">FLY</span>
        <svg width="14" height="10" viewBox="0 0 20 14" fill="none">
          <path d="M2 7h14M12 2l6 5-6 5" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-lg font-black text-red-600 tracking-tight">EASE</span>
      </div>
    ),
  },
  {
    id: 3,
    category: "Culture & Heritage",
    name: "Mahadho",
    description:
      "A dynamic digital platform preserving and showcasing Somali culture, literature, and heritage for global audiences.",
    detail:
      "Mahadho serves as a living digital archive of Somali cultural heritage — enabling scholars, communities, and diaspora to discover, contribute, and engage with literature, oral traditions, and historical records.",
    tags: ["Content Platform", "Culture", "Digital Archive"],
    logo: (
      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
        <svg width="30" height="30" viewBox="0 0 60 60" fill="none">
          <rect x="8" y="16" width="40" height="32" rx="2" stroke="#374151" strokeWidth="2" fill="none" />
          <path d="M8 24h40" stroke="#374151" strokeWidth="1.5" />
          <path d="M30 16V10" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 10h16" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },
  {
    id: 4,
    category: "E-Government",
    name: "Urban Development Bureau Portal",
    description:
      "A digital licence registration portal for the Somali Regional Government's Urban Development and Construction Bureau.",
    detail:
      "The primary public-facing interface for the Construction Licence Registration System — enabling contractors, developers, and property owners to submit applications, track status, and receive digital licence approvals.",
    tags: ["E-Government", "Public Portal", "Somali Region"],
    logo: (
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
        <svg width="28" height="28" viewBox="0 0 52 52" fill="none">
          <circle cx="26" cy="26" r="22" stroke="#374151" strokeWidth="1.5" fill="none" />
          <path
            d="M14 38 L20 26 L26 32 L32 22 L38 30"
            stroke="#3b82f6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="26" cy="18" r="4" fill="#3b82f6" opacity="0.7" />
        </svg>
      </div>
    ),
  },
];

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "8+", label: "Institutions Served" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "3", label: "Countries" },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#0A1628] pt-36 pb-24 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#8CC220 1px, transparent 1px), linear-gradient(to right, #8CC220 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div className="relative max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 mb-6">
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                Our Work
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.04] tracking-tight mb-6 max-w-3xl">
              Projects That
              <br />
              <span className="text-[#8CC220]">Make an Impact</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
              A portfolio of digital platforms, government systems, and institutional solutions
              delivered for organizations across Ethiopia and the Horn of Africa.
            </p>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="text-xs font-bold text-[#0A1628] uppercase tracking-widest">
                Featured Case Study
              </span>
            </div>
            <div className="bg-[#F7F8FA] rounded-2xl border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left: Info */}
                <div className="p-10 md:p-14">
                  <span className="text-[10px] font-bold text-[#8CC220] bg-[#0A1628] rounded-lg px-2.5 py-1 mb-6 inline-block uppercase tracking-widest">
                    E-Government
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-4">
                    {featured.name}
                  </h2>
                  <p className="text-xs font-semibold text-[#0A1628]/50 uppercase tracking-widest mb-6">
                    {featured.client}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-8">{featured.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-gray-500 bg-white border border-gray-200 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Right: Outcomes */}
                <div className="bg-[#0A1628] p-10 md:p-14">
                  <p className="text-[10px] font-bold text-white/35 uppercase tracking-widest mb-7">
                    Key Outcomes
                  </p>
                  <ul className="space-y-4">
                    {featured.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="mt-0.5 shrink-0"
                        >
                          <path
                            d="M2.5 7l3 3 6-6"
                            stroke="#8CC220"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-sm text-white/60 leading-snug">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Projects */}
        <section className="pb-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <span className="text-xs font-bold text-[#0A1628] uppercase tracking-widest">
                All Projects
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-100 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-5">
                    {project.logo}
                    <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{project.description}</p>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">{project.detail}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-6 bg-[#F7F8FA] border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white px-8 py-10 text-center hover:bg-[#F7F8FA] transition-colors"
                >
                  <div className="text-4xl font-black text-[#0A1628] mb-1.5">{stat.value}</div>
                  <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-[#8CC220] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#0A1628 1px, transparent 1px), linear-gradient(to right, #0A1628 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-[#0A1628] mb-5 tracking-tight">
              Ready to Build Something That Matters?
            </h2>
            <p className="text-[#0A1628]/60 mb-10 max-w-md mx-auto leading-relaxed">
              Tell us about your institution&apos;s challenge and we&apos;ll show you how we can solve it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0A1628] text-white text-sm px-8 py-4 rounded-xl font-semibold hover:bg-[#0d1f3a] transition-colors"
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
                href="/services"
                className="inline-flex items-center gap-2 bg-[#0A1628]/10 border border-[#0A1628]/20 text-[#0A1628] text-sm px-8 py-4 rounded-xl font-medium hover:bg-[#0A1628]/20 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
