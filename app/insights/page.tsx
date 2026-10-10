import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsletterForm from "@/components/NewsletterForm";
import { client } from "@/sanity/lib/client";
import { articlesQuery } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights — Garaad Systems",
  description:
    "Perspectives, technical guides, and case studies from Garaad Systems on e-government, digital transformation, and institutional modernization in Ethiopia and the Horn of Africa.",
};

export const revalidate = 60;

const categoryColors: Record<string, string> = {
  Perspective: "bg-[#8CC220]/10 text-[#5a9010]",
  "Case Study": "bg-blue-50 text-blue-600",
  Technical: "bg-[#0A1628]/8 text-[#0A1628]",
  Company: "bg-amber-50 text-amber-600",
  "Digital Transformation": "bg-purple-50 text-purple-600",
};

export default async function InsightsPage() {
  const articles = await client.fetch(articlesQuery);
  const featuredArticle = articles.find((a: any) => a.featured);
  const restArticles = articles.filter((a: any) => !a.featured);

  if (!featuredArticle) {
    return (
      <>
        <Navbar />
        <main>Loading articles...</main>
        <Footer />
      </>
    );
  }

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
            <Link
              href={`/insights/${featuredArticle.slug.current}`}
              className="group block bg-[#0A1628] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-3">
                <div className="md:col-span-2 p-12 md:p-14">
                  <div className="flex items-center gap-3 mb-7">
                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                        categoryColors[featuredArticle.category] ?? "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {featuredArticle.category}
                    </span>
                    <span className="text-xs text-white/30">{featuredArticle.readTime}</span>
                    <span className="text-xs text-white/30">{featuredArticle.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-5 group-hover:text-[#8CC220] transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-8">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-[#8CC220] text-sm font-semibold group-hover:gap-3 transition-all">
                    Read article
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7h10M8 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="hidden md:flex flex-col justify-end p-14">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-3">
                      Topics
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {featuredArticle.topics.map((topic: string) => (
                        <span
                          key={topic}
                          className="text-[11px] font-medium text-white/40 border border-white/15 px-2.5 py-1 rounded-lg"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
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
              {restArticles.map((article: any) => (
                <Link
                  key={article.slug.current}
                  href={`/insights/${article.slug.current}`}
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
                  <h3 className="text-base font-black text-gray-900 leading-snug mb-3 group-hover:text-[#0A1628] transition-colors flex-1">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-5">{article.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {article.topics.slice(0, 2).map((topic: string) => (
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
                </Link>
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
              We publish articles on e-government, digital transformation, and technical
              architecture. No noise — just substantive thinking from our team.
            </p>
            <div className="mb-14">
              <NewsletterForm />
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
