import { getAllBlogPosts } from "@/lib/blog"
import PortfolioClient from "@/components/portfolio-client"

export default function Portfolio({ initialTab }: { initialTab: string }) {
  const blogPosts = getAllBlogPosts()

  return <PortfolioClient initialTab={initialTab} blogPosts={blogPosts} />
}