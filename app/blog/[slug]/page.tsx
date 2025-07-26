import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { getBlogPost, getBlogPostSlugs } from "@/lib/blog"
import { GRADIENT } from "@/constants"
import { type Metadata } from "next"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title: 'Blog | Dev Singh',
  description: "A collection of my thoughts.",
};


export async function generateStaticParams() {
  const slugs = getBlogPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${GRADIENT}`}>
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex items-start justify-center min-h-[calc(100vh-120px)] px-4 py-8">
        <Card className="w-full max-w-4xl bg-black/80 border-white/10 text-white">
          <CardContent className="p-8 space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="secondary"
                    className="bg-purple-600/20 text-purple-200 border-purple-400/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>
              <div className="flex items-center space-x-4 text-white/60">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-purple max-w-none">
              <div className="whitespace-pre-wrap leading-relaxed text-white/90">
                {post.content.split("\n").map((paragraph, index) => {
                  if (paragraph.startsWith("# ")) {
                    return (
                      <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-white">
                        {paragraph.slice(2)}
                      </h1>
                    )
                  }
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-semibold mt-6 mb-3 text-white">
                        {paragraph.slice(3)}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={index} className="text-xl font-medium mt-4 mb-2 text-white">
                        {paragraph.slice(4)}
                      </h3>
                    )
                  }
                  if (paragraph.startsWith("- ") || paragraph.startsWith("* ")) {
                    return (
                      <li key={index} className="ml-4 mb-1 text-white/80">
                        {paragraph.slice(2)}
                      </li>
                    )
                  }
                  if (paragraph.match(/^\d+\./)) {
                    return (
                      <li key={index} className="ml-4 mb-1 text-white/80 list-decimal">
                        {paragraph.replace(/^\d+\.\s*/, "")}
                      </li>
                    )
                  }
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <p key={index} className="font-semibold mb-3 text-white">
                        {paragraph.slice(2, -2)}
                      </p>
                    )
                  }
                  if (paragraph.trim() === "") {
                    return <br key={index} />
                  }
                  return (
                    <p key={index} className="mb-4 text-white/90 leading-relaxed">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/20 pt-6 mt-8">
              <div className="flex justify-between items-center">
                <Link href="/">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Portfolio
                  </Button>
                </Link>
                <div className="text-white/60 text-sm">Published on {post.date}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
