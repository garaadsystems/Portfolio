import Link from "next/link";

const projects = [
  {
    id: 1,
    category: "Youth Empowerment",
    name: "Masaf",
    description:
      "A digital platform empowering youth through employment programs and community resilience initiatives across the Somali Region.",
    tags: ["Web Platform", "Civic Tech", "Ethiopia"],
    logo: (
      <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
        <svg width="32" height="32" viewBox="0 0 52 52" fill="none">
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
    tags: ["Mobile App", "Marketplace", "Travel"],
    logo: (
      <div className="h-14 flex items-center gap-1 shrink-0">
        <span className="text-xl font-black text-red-600 tracking-tight">FLY</span>
        <svg width="16" height="12" viewBox="0 0 20 14" fill="none">
          <path
            d="M2 7h14M12 2l6 5-6 5"
            stroke="#dc2626"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-xl font-black text-red-600 tracking-tight">EASE</span>
      </div>
    ),
  },
  {
    id: 3,
    category: "Culture & Heritage",
    name: "Mahadho",
    description:
      "A dynamic digital platform preserving and showcasing Somali culture, literature, and heritage for global audiences.",
    tags: ["Content Platform", "Culture", "Digital Archive"],
    logo: (
      <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
        <svg width="34" height="34" viewBox="0 0 60 60" fill="none">
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
    name: "Urban Development Bureau",
    description:
      "A digital license registration portal for the Somali Regional Government's Urban Development and Construction Bureau.",
    tags: ["E-Government", "Portal", "Somali Region"],
    logo: (
      <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
        <svg width="32" height="32" viewBox="0 0 52 52" fill="none">
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

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold text-[#0A1628] uppercase tracking-widest mb-3 block">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Projects That
              <br />
              Make an Impact
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 text-sm px-6 py-2.5 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-colors self-start md:self-auto shrink-0"
          >
            View All Projects
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

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-100 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                {project.logo}
                <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full">
                  {project.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{project.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{project.description}</p>

              <div className="flex items-center justify-between">
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
                <Link
                  href="/projects"
                  className="text-sm text-[#0A1628] font-semibold hover:text-[#78AB14] inline-flex items-center gap-1.5 shrink-0 ml-4"
                >
                  View
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
