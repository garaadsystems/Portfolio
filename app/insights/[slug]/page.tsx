import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { articleBySlugQuery, articlesQuery } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export const revalidate = 60;

export async function generateStaticParams() {
  const articles = await client.fetch(articlesQuery);
  return articles.map((a: any) => ({ slug: a.slug.current }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await client.fetch(articleBySlugQuery, { slug: params.slug });
  if (!article) return {};
  return {
    title: `${article.title} — Garaad Systems`,
    description: article.excerpt,
  };
}

const categoryColors: Record<string, string> = {
  Perspective: "bg-[#8CC220]/10 text-[#5a9010]",
  "Case Study": "bg-blue-50 text-blue-600",
  Technical: "bg-[#0A1628]/8 text-[#0A1628]",
  Company: "bg-amber-50 text-amber-600",
  "Digital Transformation": "bg-purple-50 text-purple-600",
};

const portableTextComponents = {
  block: {
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#8CC220] pl-6 py-4 my-6 italic text-gray-600">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => <p className="mb-4 leading-relaxed">{children}</p>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>
    ),
  },
};

export default async function InsightPage({ params }: Props) {
  const article = await client.fetch(articleBySlugQuery, { slug: params.slug });
  if (!article) notFound();

  const allArticles = await client.fetch(articlesQuery);
  const related = allArticles.filter((a: any) => a.slug.current !== article.slug.current).slice(0, 3);

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
          <div className="relative max-w-3xl mx-auto">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[#0A1628]/50 hover:text-[#0A1628] text-sm mb-10 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M10 7H4M6 4L3 7l3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              All Insights
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span
                className={`text-[11px] font-bold px-3 py-1.5 rounded-full ${
                  categoryColors[article.category] ?? "bg-gray-100 text-gray-600"
                }`}
              >
                {article.category}
              </span>
              <span className="text-[#0A1628]/45 text-xs">{article.readTime}</span>
              <span className="text-[#0A1628]/45 text-xs">{article.date}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-[#0A1628] leading-[1.06] tracking-tight mb-5">
              {article.title}
            </h1>
            <p className="text-[#0A1628]/60 text-base leading-relaxed max-w-2xl">
              {article.excerpt}
            </p>
          </div>
        </section>

        {/* Article body */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <PortableText value={article.content} components={portableTextComponents} />
            </div>

            {/* Topics */}
            <div className="mt-14 pt-10 border-t border-gray-100 flex flex-wrap gap-2">
              {article.topics.map((topic: string) => (
                <span
                  key={topic}
                  className="text-[11px] font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="py-24 px-6 bg-[#F7F8FA] border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-10">
                <span className="text-[10px] font-bold text-[#0A1628]/40 uppercase tracking-widest">
                  More Insights
                </span>
                <Link
                  href="/insights"
                  className="text-sm font-semibold text-[#0A1628] hover:text-[#8CC220] transition-colors inline-flex items-center gap-1.5"
                >
                  View all
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
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((a: any) => (
                  <Link
                    key={a.slug.current}
                    href={`/insights/${a.slug.current}`}
                    className="group bg-white border border-gray-100 rounded-2xl p-7 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 block"
                  >
                    <div className="flex items-center gap-2.5 mb-4">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                          categoryColors[a.category] ?? "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {a.category}
                      </span>
                      <span className="text-[11px] text-gray-400">{a.readTime}</span>
                    </div>
                    <h3 className="text-sm font-black text-gray-900 leading-snug mb-2 group-hover:text-[#0A1628] transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                      {a.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 px-6 bg-[#0A1628]">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-black text-white mb-2">
                Want to talk about your project?
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                We work with public institutions and organizations across Ethiopia and the Horn of
                Africa.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#8CC220] text-[#0A1628] text-sm px-6 py-3 rounded-xl font-bold hover:bg-[#78AB14] transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white text-sm px-6 py-3 rounded-xl font-medium hover:bg-white/15 transition-colors"
              >
                Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
