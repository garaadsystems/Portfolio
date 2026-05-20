import { groq } from 'next-sanity'

export const articlesQuery = groq`
  *[_type == "article"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    readTime,
    date,
    featured,
    topics,
  }
`

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    category,
    readTime,
    date,
    featured,
    topics,
    content,
  }
`

export const articlesForSitemapQuery = groq`
  *[_type == "article"] {
    slug,
    _updatedAt,
  }
`

export const projectsQuery = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    client,
    category,
    description,
    featured,
    outcomes,
    deliverables,
    tags,
    logo,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    client,
    category,
    description,
    detail,
    approach,
    featured,
    outcomes,
    deliverables,
    tags,
    logo,
    screenshot,
  }
`

export const projectsForSitemapQuery = groq`
  *[_type == "project"] {
    slug,
    _updatedAt,
  }
`
