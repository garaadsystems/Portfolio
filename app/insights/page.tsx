import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Insights — Garaad Systems",
  description:
    "Perspectives, technical guides, and case studies from Garaad Systems on e-government, digital transformation, and institutional modernization in Ethiopia and the Horn of Africa.",
};

const featured = {
  category: "Perspective",
  readTime: "7 min read",
  date: "April 2025",
  title: "The Case for E-Government in the Horn of Africa",
  excerpt:
    "Across Ethiopia, Djibouti, and Somalia, governments are increasingly recognizing that paper-based service delivery is no longer sustainable. But building digital government is harder than buying software. We explore what it actually takes to modernize public institutions — and why most attempts fall short.",
  topics: ["Digital Government", "East Africa", "Public Policy"],
};

const articles = [
  {
    category: "Case Study",
    readTime: "8 min read",
    date: "March 2025",
    title: "How We Upgraded the Construction Licence Registration System",
    excerpt:
      "A detailed look at the end-to-end process of modernizing the Somali Regional Government's construction licence workflow — from discovery and architecture design through to deployment and staff training.",
    topics: ["E-Government", "Case Study", "Ethiopia"],
  },
  {
    category: "Technical",
    readTime: "5 min read",
    date: "February 2025",
    title: "Designing Secure Portals for Public Institutions",
    excerpt:
      "Government systems handle data that is both sensitive and difficult to secure. We break down the security principles that guide our architecture decisions — from access control to audit logging.",
    topics: ["Security", "Architecture", "Government"],
  },
  {
    category: "Technical",
    readTime: "6 min read",
    date: "January 2025",
    title: "API-First Architecture: Why Government Systems Need It",
    excerpt:
      "Legacy government systems are siloed, brittle, and expensive to maintain. API-first design changes that. Here's how we apply this principle to every platform we build — and why it matters for long-term institutional value.",
    topics: ["API Design", "Architecture", "Government Systems"],
  },
  {
    category: "Company",
    readTime: "4 min read",
    date: "December 2024",
    title: "Hybrid Teams: The Garaad Model for Scalable Delivery",
    excerpt:
      "Most consulting firms either over-staff and overprice, or under-resource and under-deliver. We built a hybrid model that gives clients access to senior expertise at every stage without the overhead. This is how it works.",
    topics: ["Team Structure", "Delivery Model", "Consulting"],
  },
  {
    category: "Digital Transformation",
    readTime: "6 min read",
    date: "November 2024",
    title: "From Paper to Portal: Automating Government Workflows",
    excerpt:
      "Workflow automation is not about replacing people — it is about removing the friction that slows them down. We look at how digital workflow tools change the day-to-day reality of government workers and the citizens they serve.",
    topics: ["Workflow Automation", "Government", "Process Design"],
  },
];

const categoryColors: Record<string, string> = {
  Perspective: "bg-[#8CC220]/10 text-[#5a9010]",
  "Case Study": "bg-blue-50 text-blue-600",
  Technical: "bg-[#0A1628]/8 text-[#0A1628]",
  Company: "bg-amber-50 text-amber-600",
  "Digital Transformation": "bg-purple-50 text-purple-600",
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#8CC220] pt-36 pb-20 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#0A1628 1px, transparent 1px), linear-gradient(to right, #0A1628 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div className="relative max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0A1628]/8 border border-[#0A1628]/15 rounded-full px-3 py-1.5 mb-6">
              <span className="text-[10px] font-bold text-[#0A1628]/50 uppercase tracking-widest">
                Insights
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0A1628] leading-[1.04] tracking-tight mb-6 max-w-3xl">
              Perspectives on
              <br />
              Digital Institutions
            </h1>
            <p className="text-[#0A1628]/60 text-lg max-w-xl leading-relaxed">
              Articles, case studies, and technical guides from our work building digital platforms
              for public institutions across Ethiopia and the Horn of Africa.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <p className="text-[10px] font-bold text-[#0A1628]/40 uppercase tracking-widest mb-6">
              Featured Article
            </p>
            <div className="bg-[#0A1628] rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="md:col-span-2 p-12 md:p-14">
                  <div className="flex items-center gap-3 mb-7">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${categoryColors[featured.category] ?? "bg-gray-100 text-gray-600"}`}>
                      {featured.category}
                    </span>
                    <span className="text-xs text-white/30">{featured.readTime}</span>
                    <span className="text-xs text-white/30">{featured.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-5">
                    {featured.title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-8">{featured.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {featured.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-[11px] font-medium text-white/40 border border-white/15 px-2.5 py-1 rounded-lg"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden md:flex flex-col justify-end p-14">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-3">
                      About This Piece
                    </p>
                    <p className="text-xs text-white/40 leading-relaxed">
                      Drawing on our direct experience delivering government digital systems in the
                      Somali Region, this piece examines the structural barriers to e-government
                      adoption and what it takes to overcome them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="pb-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <p className="text-[10px] font-bold text-[#0A1628]/40 uppercase tracking-widest">
                All Articles
              </p>
              <p className="text-xs text-gray-400">{articles.length} articles</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="group border border-gray-100 rounded-2xl p-7 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-2.5 mb-5">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                        categoryColors[article.category] ?? "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {article.category}
                    </span>
                    <span className="text-[11px] text-gray-400">{article.readTime}</span>
                  </div>
                  <h3 className="text-base font-black text-gray-900 leading-snug mb-3 group-hover:text-[#0A1628] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-5 flex-1">{article.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {article.topics.slice(0, 2).map((topic) => (
                        <span
                          key={topic}
                          className="text-[10px] font-medium text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <span className="text-[11px] text-gray-400 shrink-0">{article.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
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
            <span className="text-xs font-bold text-white/30 uppercase tracking-widest mb-5 block">
              Stay Informed
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">
              Insights Straight to Your Inbox
            </h2>
            <p className="text-white/45 mb-10 max-w-md mx-auto leading-relaxed">
              We publish articles on e-government, digital transformation, and technical architecture.
              No noise — just substantive thinking from our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto mb-14">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/8 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#8CC220]/50 transition-colors"
              />
              <button className="bg-[#8CC220] text-[#0A1628] text-sm px-6 py-3.5 rounded-xl font-bold hover:bg-[#78AB14] transition-colors shrink-0">
                Subscribe
              </button>
            </div>
            <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
              >
                Start a project instead
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
              <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
              >
                Learn about us
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
        </section>
      </main>
      <Footer />
    </>
  );
}
