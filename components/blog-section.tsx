import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/blog"

interface BlogSectionProps {
  blogPosts: BlogPost[]
}

export function BlogSection({ blogPosts }: BlogSectionProps) {

  return (
    <Card className="w-full max-w-4xl bg-black/80 border-white/10 text-white">
      <CardContent className="p-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="text-white/70">Thoughts on technology, engineering, and building systems.</p>
        </div>

        <div className="space-y-6">
          {blogPosts.length === 0 && <div className="text-center">
            <div className="flex justify-center items-center space-x-4 text-white/50 text-md">
              <span>No posts found. Please check back later!</span>
            </div>
          </div>}
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-purple-600/20 text-purple-200 border-purple-400/20 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold hover:text-white/80 transition-colors">{post.title}</h3>
                  <p className="text-white/70 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
