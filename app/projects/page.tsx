import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { projectsQuery } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects — Garaad Systems",
  description:
    "Portfolio of digital solutions delivered for public institutions and organizations across Ethiopia and the Horn of Africa.",
};

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "8+", label: "Institutions Served" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "5+", label: "Years of Experience" },
];

export default async function ProjectsPage() {
  const projects = await client.fetch(projectsQuery);
  const featured = projects.find((p: any) => p.featured);
  const rest = projects.filter((p: any) => !p.featured);

  if (!featured) {
    return (
      <>
        <Navbar />
        <main>Loading projects...</main>
        <Footer />
      </>
    );
  }

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
            <p className="text-[10px] font-bold text-[#0A1628]/40 uppercase tracking-widest mb-6">
              Featured Case Study
            </p>
            <Link
              href={`/projects/${featured.slug.current}`}
              className="group block bg-[#F7F8FA] rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-100 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2">
                <div className="p-10 md:p-14">
                  <span className="text-[10px] font-bold text-[#8CC220] bg-[#0A1628] rounded-lg px-2.5 py-1 mb-6 inline-block uppercase tracking-widest">
                    {featured.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-3 group-hover:text-[#0A1628]">
                    {featured.name}
                  </h2>
                  <p className="text-xs font-semibold text-[#0A1628]/50 uppercase tracking-widest mb-5">
                    {featured.client}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-8">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-gray-500 bg-white border border-gray-200 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-[#0A1628] p-10 md:p-14">
                  <p className="text-[10px] font-bold text-white/35 uppercase tracking-widest mb-7">
                    Key Outcomes
                  </p>
                  <ul className="space-y-4">
                    {featured.outcomes.slice(0, 5).map((outcome: string) => (
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
                  <div className="mt-8 inline-flex items-center gap-2 text-[#8CC220] text-sm font-semibold group-hover:gap-3 transition-all">
                    Read case study
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
              </div>
            </Link>
          </div>
        </section>

        {/* All Projects */}
        <section className="pb-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <span className="text-[10px] font-bold text-[#0A1628]/40 uppercase tracking-widest">
                All Projects
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {rest.map((project: any) => (
                <Link
                  key={project.slug.current}
                  href={`/projects/${project.slug.current}`}
                  className="group border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-100 transition-all duration-300 block"
                >
                  <div className="flex items-start justify-between mb-5">
                    {project.logo ? (
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                        <Image
                          src={urlFor(project.logo).width(48).height(48).url()}
                          alt={project.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0" />
                    )}
                    <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0A1628]">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag: string) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-[#0A1628] font-semibold group-hover:text-[#8CC220] inline-flex items-center gap-1.5 shrink-0 ml-4 transition-colors">
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
                    </span>
                  </div>
                </Link>
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
              Tell us about your institution&apos;s challenge and we&apos;ll show you how we can
              solve it.
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
