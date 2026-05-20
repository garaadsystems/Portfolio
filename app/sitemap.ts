import { client } from "@/sanity/lib/client";
import { articlesForSitemapQuery, projectsForSitemapQuery } from "@/sanity/lib/queries";
import type { MetadataRoute } from "next";

const base = "https://garaadsystems.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  const projects = await client.fetch(projectsForSitemapQuery);
  const projectRoutes: MetadataRoute.Sitemap = projects.map((p: any) => ({
    url: `${base}/projects/${p.slug.current}`,
    lastModified: p._updatedAt ? new Date(p._updatedAt) : now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articles = await client.fetch(articlesForSitemapQuery);
  const insightRoutes: MetadataRoute.Sitemap = articles.map((a: any) => ({
    url: `${base}/insights/${a.slug.current}`,
    lastModified: a._updatedAt ? new Date(a._updatedAt) : now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...insightRoutes];
}
