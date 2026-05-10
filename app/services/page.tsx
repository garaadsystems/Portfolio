import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services — Garaad Systems",
  description:
    "E-government solutions, custom software development, systems integration, and technical consulting for public institutions across Ethiopia and the Horn of Africa.",
};

const services = [
  {
    number: "01",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#0A1628" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 10h.01M9 10h6M6 13h4" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "E-Government Solutions",
    tagline: "Efficient, accessible, and transparent public services.",
    description:
      "We design and implement digital government platforms that transform how public institutions serve citizens. From licensing portals to registration systems, our e-government solutions eliminate paper-based bottlenecks and bring institutional workflows into the digital era.",
    capabilities: [
      "Digital licensing and registration portals",
      "Workflow automation for approvals and decisions",
      "Public-facing service delivery platforms",
      "Real-time reporting and audit trail systems",
      "Integration with existing government databases",
      "Role-based access control for staff and administrators",
    ],
    accent: "#0A1628",
  },
  {
    number: "02",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#0A1628" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#0A1628" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Custom Software Development",
    tagline: "Tailored systems built for institutional realities.",
    description:
      "We build web applications, dashboards, portals, and internal management systems custom-engineered to your organization's specific workflows, user base, and operational environment — not adapted from generic templates.",
    capabilities: [
      "Web portals and institutional management systems",
      "Internal dashboards and operations tools",
      "Data collection and reporting applications",
      "Mobile-responsive multi-device platforms",
      "Multi-tenant systems with granular permissions",
      "Scalable architectures designed for long-term growth",
    ],
    accent: "#8CC220",
  },
  {
    number: "03",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M18 8h1a4 4 0 010 8h-1" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" stroke="#0A1628" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 1v3M10 1v3M14 1v3" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Systems Integration",
    tagline: "Connecting legacy systems with modern architectures.",
    description:
      "Many institutions operate fragmented or outdated systems that don't communicate with each other. We bridge the gaps — building integration layers that connect legacy infrastructure with modern platforms to improve data flow and operational efficiency.",
    capabilities: [
      "Legacy system modernization and API bridges",
      "Database migration and data consolidation",
      "Cross-system real-time data synchronization",
      "Third-party service and API connectors",
      "Middleware development for heterogeneous environments",
      "Incremental migration strategies with zero downtime",
    ],
    accent: "#0A1628",
  },
  {
    number: "04",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M2 20h20M6 20V10M12 20V4M18 20v-6" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 4l3 3M12 4l-3 3" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Technical Consulting",
    tagline: "Clear direction for complex digital transformation.",
    description:
      "We provide expert guidance to help institutional leaders plan, prioritize, and execute digital transformation initiatives with confidence. Our advisory services bridge technology, policy, and operational reality — translating ambition into achievable, funded roadmaps.",
    capabilities: [
      "Digital transformation roadmap development",
      "Technology architecture design and review",
      "Tech stack selection and vendor evaluation",
      "Workflow analysis and operational optimization",
      "Security and compliance framework auditing",
      "Capacity building and team technical upskilling",
    ],
    accent: "#8CC220",
  },
];

const capabilities = [
  {
    title: "API-Driven Architecture",
    description: "Modular, interconnected systems built around well-defined APIs for future-proof scalability.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#8CC220" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 2v6h6M10 12l-2 2 2 2M14 12l2 2-2 2" stroke="#8CC220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Secure Data Handling",
    description: "Government-compliant encryption, role-based access, and audit logging at every layer.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#8CC220" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#8CC220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Workflow Automation",
    description: "Intelligent approval routing, notifications, and decision flows that eliminate manual steps.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M12 5l7 7-7 7" stroke="#8CC220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Dashboard Development",
    description: "Real-time operational insights and management reporting for decision-makers.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="#8CC220" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="#8CC220" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="#8CC220" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="#8CC220" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Cloud-Ready Design",
    description: "Container-friendly, scalable infrastructure deployable on public or private cloud.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" stroke="#8CC220" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#F7F8FA] pt-36 pb-20 px-6 border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0A1628]/5 border border-[#0A1628]/10 rounded-full px-3 py-1.5 mb-6">
              <span className="text-[10px] font-bold text-[#0A1628]/50 uppercase tracking-widest">
                What We Do
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.04] tracking-tight mb-6 max-w-4xl">
              Full-Spectrum Digital
              <br />
              <span className="text-[#0A1628]">Transformation Services</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
              From strategy through to deployment, we deliver integrated solutions that drive real
              institutional change — engineered for the specific demands of government and
              mission-critical operations.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto space-y-5">
            {services.map((service, i) => (
              <div
                key={service.number}
                className={`rounded-2xl p-10 border ${
                  i % 2 === 0
                    ? "bg-[#F7F8FA] border-gray-100"
                    : "bg-[#0A1628] border-[#0A1628]"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          i % 2 === 0 ? "bg-[#0A1628]/8" : "bg-white/10"
                        }`}
                      >
                        {i % 2 === 0 ? (
                          service.icon
                        ) : (
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            {service.number === "02" && (
                              <>
                                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#8CC220" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#8CC220" strokeWidth="1.5" strokeLinejoin="round" />
                              </>
                            )}
                            {service.number === "04" && (
                              <>
                                <path d="M2 20h20M6 20V10M12 20V4M18 20v-6" stroke="#8CC220" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M12 4l3 3M12 4l-3 3" stroke="#8CC220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </>
                            )}
                          </svg>
                        )}
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest ${
                          i % 2 === 0 ? "text-[#0A1628]/40" : "text-white/35"
                        }`}
                      >
                        Service {service.number}
                      </span>
                    </div>
                    <h2
                      className={`text-3xl font-black leading-tight tracking-tight mb-3 ${
                        i % 2 === 0 ? "text-gray-900" : "text-white"
                      }`}
                    >
                      {service.title}
                    </h2>
                    <p
                      className={`text-sm font-semibold mb-5 ${
                        i % 2 === 0 ? "text-[#0A1628]" : "text-[#8CC220]"
                      }`}
                    >
                      {service.tagline}
                    </p>
                    <p
                      className={`text-sm leading-relaxed ${
                        i % 2 === 0 ? "text-gray-500" : "text-white/50"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <p
                      className={`text-[10px] font-bold uppercase tracking-widest mb-5 ${
                        i % 2 === 0 ? "text-[#0A1628]/40" : "text-white/35"
                      }`}
                    >
                      What&apos;s Included
                    </p>
                    <ul className="space-y-3">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-3">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            className="mt-0.5 shrink-0"
                          >
                            <path
                              d="M2.5 7l3 3 6-6"
                              stroke={i % 2 === 0 ? "#8CC220" : "#8CC220"}
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span
                            className={`text-sm ${
                              i % 2 === 0 ? "text-gray-600" : "text-white/60"
                            }`}
                          >
                            {cap}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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
                Core Technical Capabilities
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0A1628] tracking-tight">
                The Stack Behind Every Delivery
              </h2>
              <p className="text-[#0A1628]/60 text-base mt-5 max-w-xl mx-auto leading-relaxed">
                Across every engagement, these five capabilities define how we approach architecture,
                security, and long-term operational value.
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {capabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  className="bg-[#0A1628]/[0.07] border border-[#0A1628]/15 rounded-2xl p-6 hover:bg-[#0A1628]/[0.12] hover:border-[#0A1628]/25 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0A1628]/10 flex items-center justify-center mb-4">
                    {cap.icon}
                  </div>
                  <h3 className="text-sm font-bold text-[#0A1628] mb-2">{cap.title}</h3>
                  <p className="text-xs text-[#0A1628]/60 leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Approach teaser */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-xs font-bold text-[#0A1628] uppercase tracking-widest mb-3 block">
                How We Work
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight mb-6">
                Structured Delivery. Zero Surprises.
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Every engagement follows a disciplined five-phase process: Discovery, Strategy &
                Design, Engineering, Deployment, and ongoing Support. Each phase is fully documented,
                with clear handoffs and stakeholder review points throughout.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                This structured approach is what allows us to consistently deliver complex government
                systems on schedule, in full compliance with technical and contractual requirements.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { step: "01", title: "Discovery", desc: "Stakeholder interviews, process mapping, and requirements definition." },
                { step: "02", title: "Strategy & Design", desc: "Architecture planning, UX design, and delivery roadmap creation." },
                { step: "03", title: "Engineering & Build", desc: "Iterative development with regular stakeholder reviews and testing." },
                { step: "04", title: "Deploy & Train", desc: "System deployment, integration testing, and team onboarding." },
                { step: "05", title: "Support & Evolve", desc: "Ongoing maintenance, monitoring, and feature iteration." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#0A1628]/20 hover:bg-[#F7F8FA] transition-colors">
                  <span className="text-xs font-bold text-[#8CC220] bg-[#0A1628] rounded-lg px-2.5 py-1 shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-0.5">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-[#0A1628] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#8CC220 1px, transparent 1px), linear-gradient(to right, #8CC220 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold text-white/35 uppercase tracking-widest mb-5 block">
              Get Started
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">
              Let&apos;s Discuss Your Project
            </h2>
            <p className="text-white/50 mb-10 max-w-md mx-auto leading-relaxed">
              Whether you have a fully-formed brief or a problem you&apos;re still defining, we&apos;re
              ready to help you find the right path forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#8CC220] text-[#0A1628] text-sm px-8 py-4 rounded-xl font-bold hover:bg-[#78AB14] transition-colors"
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
                className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white text-sm px-8 py-4 rounded-xl font-medium hover:bg-white/15 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
