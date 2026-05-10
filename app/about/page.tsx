import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Garaad Systems",
  description:
    "Garaad Systems is a technology and digital consultancy based in Jijiga, Somali Region, Ethiopia, specializing in e-government platforms and mission-critical software for public institutions.",
};

const values = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="#8CC220"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" stroke="#8CC220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Reliability",
    description:
      "We build systems that institutions depend on daily. Every component is engineered for uptime, resilience, and long-term operational stability.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="#8CC220" strokeWidth="1.5" />
        <path d="M7 11V7a5 5 0 0110 0v4" stroke="#8CC220" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Security",
    description:
      "Government-grade data protection, role-based access control, and compliance-aligned systems that safeguard sensitive public data at every layer.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
    title: "Accountability",
    description:
      "Clear project scopes, structured reporting, and fully transparent execution. Clients always know exactly where their project stands.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#8CC220" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="#8CC220" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Long-term Thinking",
    description:
      "We design for evolution. Our systems are built to scale, adapt, and grow as your institution's needs change over time.",
  },
];

const capabilities = [
  {
    title: "API-Driven Architecture",
    description:
      "Modular systems built around well-defined APIs for scalability and seamless integration with existing government platforms.",
  },
  {
    title: "Secure Data Handling",
    description:
      "Government-compliant data management with encryption, access controls, and full audit logging at every layer.",
  },
  {
    title: "Workflow Automation",
    description:
      "Streamlined approval flows, automated notifications, and intelligent decision routing to eliminate manual bottlenecks.",
  },
  {
    title: "Dashboard Development",
    description:
      "Real-time operational insights and management reporting tools that surface the data decision-makers need.",
  },
  {
    title: "Cloud-Ready Design",
    description:
      "Container-friendly, scalable infrastructure deployable on public or private cloud with no vendor lock-in.",
  },
];

const reasons = [
  {
    title: "Government-Grade Expertise",
    description:
      "We specialize in the specific security, compliance, and reliability requirements of public-sector systems — not general web development applied to government contexts.",
  },
  {
    title: "Founder-Led Architectural Oversight",
    description:
      "Every project benefits from direct architectural involvement at the leadership level, ensuring system integrity from initial design through final deployment.",
  },
  {
    title: "Structured, Accountable Execution",
    description:
      "Our delivery process is transparent, documented, and predictable. Stakeholders always have a clear view of progress, decisions, and next steps.",
  },
  {
    title: "High Standards in Documentation",
    description:
      "We deliver comprehensive technical documentation alongside every system — ensuring your team can operate, maintain, and extend what we build.",
  },
  {
    title: "Proven Institutional Delivery",
    description:
      "We have delivered complex institutional systems in full compliance with contractual and technical requirements — on time and to specification.",
  },
];

export default function AboutPage() {
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
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8CC220] block" />
              <span className="text-xs text-white/60 font-medium tracking-wide">
                Jijiga, Somali Region, Ethiopia
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.04] tracking-tight mb-7 max-w-4xl">
              Modernizing Institutions,
              <br />
              <span className="text-[#8CC220]">Powering Public Services</span>
            </h1>
            <p className="text-white/55 text-lg max-w-2xl leading-relaxed">
              We are a technology and digital consultancy born in Jijiga, Ethiopia — built to deliver
              the government-grade software systems that the Horn of Africa&apos;s institutions need to
              serve their communities effectively.
            </p>
          </div>
        </section>

        {/* Mission + Vision */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-[#F7F8FA] rounded-2xl p-10 border border-gray-100">
              <div className="inline-flex items-center gap-2 bg-[#0A1628]/5 border border-[#0A1628]/10 rounded-full px-3 py-1.5 mb-6">
                <span className="text-[10px] font-bold text-[#0A1628]/50 uppercase tracking-widest">
                  Our Mission
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-5">
                Modernizing government service delivery through reliable digital platforms
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                We exist to close the technology gap between what institutions need and what they have.
                Our mission is to design, build, and deploy digital platforms that make government
                services faster, more transparent, and more accessible for the communities they serve.
              </p>
            </div>
            <div className="bg-[#0A1628] rounded-2xl p-10">
              <div className="inline-flex items-center gap-2 bg-[#8CC220]/10 border border-[#8CC220]/20 rounded-full px-3 py-1.5 mb-6">
                <span className="text-[10px] font-bold text-[#8CC220]/80 uppercase tracking-widest">
                  Our Vision
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-5">
                To be the leading digital transformation partner for public institutions in East Africa
              </h2>
              <p className="text-white/45 text-sm leading-relaxed">
                We envision a Horn of Africa where every public institution operates with the same
                digital efficiency as the world&apos;s most capable governments — where licensing is
                instant, registration is seamless, and public service is a genuine public good.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 px-6 bg-[#F7F8FA]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-[#0A1628] uppercase tracking-widest mb-3 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight mb-6">
                Built for the Gap That Others Missed
              </h2>
              <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                <p>
                  Garaad Systems was founded with a clear-eyed view of a persistent problem: public
                  institutions across the Somali Region and the broader Horn of Africa were operating
                  with inadequate digital tools, slow manual workflows, and systems built for a
                  different era.
                </p>
                <p>
                  Based in Jijiga — the capital of Ethiopia&apos;s Somali Region — we positioned ourselves
                  where the need was greatest. This proximity to our clients shapes how we work: we
                  understand the operational realities, institutional constraints, and technical
                  environments that outside firms routinely underestimate.
                </p>
                <p>
                  Our first major government engagement — the upgrade of the Construction Licence
                  Registration System for the Somali Regional Government — validated our model. We
                  delivered a modernized, compliant digital platform on time and to specification,
                  building the track record we continue to strengthen with every project.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: "Founded", value: "Jijiga, Somali Region, Ethiopia" },
                { label: "Focus", value: "E-Government & Institutional Software" },
                { label: "Model", value: "Lean, expert-driven with hybrid team structure" },
                { label: "Clients", value: "Public institutions, regional government, organizations" },
                { label: "Reach", value: "Ethiopia & Horn of Africa" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-5 bg-white rounded-xl p-5 border border-gray-100"
                >
                  <div className="text-[10px] font-bold text-[#0A1628]/35 uppercase tracking-widest w-20 shrink-0 pt-0.5">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-gray-800">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operating Model */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-[#0A1628] uppercase tracking-widest mb-3 block">
                How We&apos;re Built
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
                The Hybrid Operating Model
              </h2>
              <p className="text-gray-500 text-base mt-5 max-w-xl mx-auto leading-relaxed">
                A lean, expert-driven structure that combines in-house specialists with project-based
                developers — delivering flexibility without sacrificing architectural integrity.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "In-House Specialists",
                  description:
                    "Our core team of senior engineers and architects handles critical design decisions, security architecture, and quality control for every engagement.",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" stroke="#0A1628" strokeWidth="1.5" />
                      <path
                        d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                        stroke="#0A1628"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Project-Based Scale",
                  description:
                    "We bring in vetted specialist developers for large-scale engagements, scaling capacity precisely to project requirements without adding unnecessary overhead.",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                        stroke="#0A1628"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Founder-Led Oversight",
                  description:
                    "Every system that leaves our hands has been reviewed at the architectural level. No junior handoffs on mission-critical deliveries. Ever.",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                        stroke="#0A1628"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#F7F8FA] rounded-2xl p-8 border border-gray-100 group hover:border-[#0A1628]/20 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0A1628]/8 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-6 bg-[#0A1628]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-white/35 uppercase tracking-widest mb-3 block">
                What We Stand For
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Our Core Values
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-5">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#8CC220]/10 border border-[#8CC220]/20 flex items-center justify-center mb-5">
                    {v.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2.5">{v.title}</h3>
                  <p className="text-xs text-white/45 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Capabilities */}
        <section className="py-24 px-6 bg-[#8CC220] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#0A1628 1px, transparent 1px), linear-gradient(to right, #0A1628 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-[#0A1628]/55 uppercase tracking-widest mb-3 block">
                Technical Capabilities
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0A1628] tracking-tight">
                Built for the Demands of Government
              </h2>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {capabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  className="bg-[#0A1628]/[0.07] border border-[#0A1628]/15 rounded-2xl p-6 hover:bg-[#0A1628]/[0.12] hover:border-[#0A1628]/25 transition-all duration-200"
                >
                  <span className="text-xs font-bold text-[#8CC220] bg-[#0A1628] rounded-lg px-2.5 py-1 mb-4 inline-block">
                    0{i + 1}
                  </span>
                  <h3 className="text-sm font-bold text-[#0A1628] mb-2.5">{cap.title}</h3>
                  <p className="text-xs text-[#0A1628]/60 leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 px-6 bg-[#F7F8FA]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-bold text-[#0A1628] uppercase tracking-widest mb-3 block">
                Why Clients Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight">
                The Difference That Matters in Mission-Critical Work
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <div
                  key={reason.title}
                  className="bg-white rounded-2xl p-8 border border-gray-100 flex gap-5 hover:border-[#0A1628]/20 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300"
                >
                  <span className="text-xs font-bold text-[#0A1628]/25 mt-0.5 w-6 shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
                  </div>
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
              Ready to Work Together?
            </h2>
            <p className="text-[#0A1628]/60 mb-10 max-w-md mx-auto leading-relaxed">
              Tell us about your institution&apos;s needs and we&apos;ll chart a clear path forward.
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
                href="/services"
                className="inline-flex items-center gap-2 bg-[#0A1628]/10 border border-[#0A1628]/20 text-[#0A1628] text-sm px-8 py-4 rounded-xl font-medium hover:bg-[#0A1628]/20 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
