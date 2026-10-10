"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { projectsQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const fetchedProjects = await client.fetch(projectsQuery);
      setProjects(fetchedProjects);
      setIsLoading(false);
    };
    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <section id="projects" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p>Loading projects...</p>
        </div>
      </section>
    );
  }

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
          {projects.map((project: any) => (
            <Link
              key={project.slug.current}
              href={`/projects/${project.slug.current}`}
              className="group border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-100 transition-all duration-300 block"
            >
              <div className="flex items-start justify-between mb-6">
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

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0A1628] transition-colors">{project.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{project.description}</p>

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
                <span
                  className="text-sm text-[#0A1628] font-semibold group-hover:text-[#78AB14] inline-flex items-center gap-1.5 shrink-0 ml-4 transition-colors"
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
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
