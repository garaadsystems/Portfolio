import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { projectBySlugQuery, projectsQuery } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await client.fetch(projectsQuery);
  return projects.map((p: any) => ({ slug: p.slug.current }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await client.fetch(projectBySlugQuery, { slug: params.slug });
  if (!project) return {};
  return {
    title: `${project.name} — Garaad Systems`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = await client.fetch(projectBySlugQuery, { slug: params.slug });
  if (!project) notFound();

  const allProjects = await client.fetch(projectsQuery);
  const related = allProjects.filter((p: any) => p.slug.current !== project.slug.current).slice(0, 2);

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
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-10 transition-colors"
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
              All Projects
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold text-[#8CC220] bg-[#8CC220]/10 border border-[#8CC220]/20 rounded-full px-3 py-1.5 uppercase tracking-widest">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-[10px] font-bold text-white/40 border border-white/10 rounded-full px-3 py-1.5 uppercase tracking-widest">
                  Featured Case Study
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.06] tracking-tight mb-5 max-w-3xl">
              {project.name}
            </h1>
            <p className="text-white/40 text-sm font-medium uppercase tracking-widest">
              {project.client}
            </p>
          </div>
        </section>

        {/* Overview + Outcomes */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-14">
            {/* Left: description + approach */}
            <div className="md:col-span-2 space-y-10">
              <div>
                <span className="text-[10px] font-bold text-[#0A1628]/40 uppercase tracking-widest block mb-4">
                  Overview
                </span>
                <p className="text-gray-600 text-base leading-relaxed">{project.detail}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#0A1628]/40 uppercase tracking-widest block mb-4">
                  Our Approach
                </span>
                <p className="text-gray-600 text-sm leading-relaxed">{project.approach}</p>
              </div>
            </div>

            {/* Right: tags + deliverables */}
            <div className="space-y-8">
              <div>
                <span className="text-[10px] font-bold text-[#0A1628]/40 uppercase tracking-widest block mb-4">
                  Tags
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#0A1628]/40 uppercase tracking-widest block mb-4">
                  Deliverables
                </span>
                <ul className="space-y-2.5">
                  {project.deliverables.map((d: string) => (
                    <li key={d} className="flex items-start gap-2.5">
                      <svg
                        width="13"
                        height="13"
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
                      <span className="text-xs text-gray-500 leading-snug">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Outcomes */}
        <section className="py-24 px-6 bg-[#0A1628] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#8CC220 1px, transparent 1px), linear-gradient(to right, #8CC220 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[10px] font-bold text-white/35 uppercase tracking-widest block mb-3">
                Results
              </span>
              <h2 className="text-4xl font-black text-white tracking-tight">Key Outcomes</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {project.outcomes.map((outcome: string, i: number) => (
                <div
                  key={outcome}
                  className="flex items-start gap-4 bg-white/5 border border-white/8 rounded-xl p-6 hover:bg-white/8 transition-colors"
                >
                  <span className="text-xs font-bold text-[#8CC220] bg-[#8CC220]/10 border border-[#8CC220]/20 rounded-lg px-2 py-1 shrink-0">
                    0{i + 1}
                  </span>
                  <p className="text-sm text-white/60 leading-relaxed pt-0.5">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {related.length > 0 && (
          <section className="py-24 px-6 bg-[#F7F8FA]">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-10">
                <span className="text-[10px] font-bold text-[#0A1628]/40 uppercase tracking-widest">
                  More Projects
                </span>
                <Link
                  href="/projects"
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
              <div className="grid md:grid-cols-2 gap-5">
                {related.map((p: any) => (
                  <Link
                    key={p.slug.current}
                    href={`/projects/${p.slug.current}`}
                    className="group bg-white border border-gray-100 rounded-2xl p-7 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 block"
                  >
                    <div className="flex items-start justify-between mb-4">
                      {p.logo ? (
                        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                          <Image
                            src={urlFor(p.logo).width(48).height(48).url()}
                            alt={p.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0" />
                      )}
                      <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full">
                        {p.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#0A1628]">
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

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
              Ready to Build Something Similar?
            </h2>
            <p className="text-[#0A1628]/60 mb-10 max-w-md mx-auto leading-relaxed">
              Tell us about your institution&apos;s challenge and we&apos;ll show you how we can
              help.
            </p>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
