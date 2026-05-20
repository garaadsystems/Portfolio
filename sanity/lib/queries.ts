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
