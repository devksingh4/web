export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  tags: string[]
  published: boolean
}

const blogPostsData: BlogPost[] = []

export function getAllBlogPosts(): BlogPost[] {
  return blogPostsData
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPostsData.find((post) => post.slug === slug && post.published)
}

export function getBlogPostSlugs(): string[] {
  return blogPostsData.filter((post) => post.published).map((post) => post.slug)
}
