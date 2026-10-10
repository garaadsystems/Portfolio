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
      "We design and implement digital government platforms that enhance public service delivery, transparency, and civic engagement. Our e-government ecosystem enables institutions to transition from manual and fragmented processes to integrated, user-centered digital services.",
  },
  {
    number: "02",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7l10 5 10-5-10-5z"
          stroke="#0A1628"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="#0A1628"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Custom Software Development",
    tagline: "Tailored systems built for institutional realities, not adapted from templates.",
    description:
      "We build web applications, portals, dashboards, and internal management systems engineered to your organization's specific workflows and operational environment — with secure data handling and role-based access control built in from the start.",
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
    tagline: "Connecting legacy infrastructure with modern architectures.",
    description:
      "Many institutions operate fragmented systems that don't communicate. We build integration layers that bridge legacy infrastructure with modern platforms — improving data flow, eliminating duplication, and enabling cross-system visibility without disrupting existing operations.",
  },
  {
    number: "04",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M2 20h20M6 20V10M12 20V4M18 20v-6"
          stroke="#0A1628"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 4l3 3M12 4l-3 3"
          stroke="#0A1628"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Technical Consulting",
    tagline: "Clear architecture direction for complex digital transformation.",
    description:
      "We provide expert guidance on architecture design, workflow optimization, tech stack selection, and digital transformation roadmaps. Our consulting bridges policy, technology, and operational reality — translating institutional ambition into funded, executable plans.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-[#F7F8FA]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold text-[#0A1628] uppercase tracking-widest mb-3 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1] mb-5">
            Full-Spectrum Digital
            <br />
            Transformation Services
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            From strategy through to deployment, we deliver integrated solutions that drive real
            institutional change across Ethiopia and the Horn of Africa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service.number}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#0A1628]/25 hover:shadow-xl hover:shadow-[#0A1628]/[0.06] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-7">
                <div className="w-11 h-11 rounded-xl bg-[#0A1628]/10 flex items-center justify-center shrink-0">
                  {service.icon}
                </div>
                <span className="text-[40px] font-black text-gray-100 leading-none group-hover:text-[#0A1628]/15 transition-colors select-none">
                  {service.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1.5">{service.title}</h3>
              <p className="text-sm font-semibold text-[#0A1628] mb-4">{service.tagline}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">
            Every engagement is delivered with full documentation, structured handoffs, and
            ongoing support.
          </p>
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A1628] hover:text-[#8CC220] transition-colors shrink-0 ml-8"
          >
            Explore all services
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
