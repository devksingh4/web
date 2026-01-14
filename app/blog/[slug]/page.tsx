import { Comments } from "@/components/comments";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GRADIENT } from "@/constants";
import { getBlogPost, getBlogPostSlugs } from "@/lib/blog";
import { portfolio } from "@/lib/portfolio-data";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post || !post.published) {
    return {
      title: `Blog | ${portfolio.name}`,
      description: "Blog post not found.",
    };
  }
  // Generate description from content (first 160 characters or specified excerpt)
  const description =
    post.excerpt ||
    post.content.substring(0, 160).replace(/\n/g, " ").trim() + "...";
  return {
    title: `${post.title} | ${portfolio.name}`,
    description: description,
    authors: post.byline ? [{ name: post.byline }] : undefined,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: description,
      type: "article",
      publishedTime: post.date,
      authors: post.byline ? [post.byline] : undefined,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: description,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getBlogPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${GRADIENT}`}>
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <Link href="/">
          <Button
            variant="ghost"
            size="sm"
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
      </nav>
      {/* Main Content */}
      <div className="flex items-start justify-center min-h-[calc(100vh-120px)] px-4 py-8">
        <Card className="w-full max-w-[90vw] bg-black/80 border-white/10 text-white">
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
              <h1 className="text-6xl font-bold leading-tight break-all">
                {post.title}
              </h1>
              <h2 className="text-md italic leading-tight">{post.excerpt}</h2>
              <div className="flex items-center space-x-4 text-white/60">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{post.byline}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-purple max-w-none">
              <div className="whitespace-pre-wrap leading-relaxed text-white/90">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ node, ...props }) => (
                      <h1
                        className="text-4xl font-bold mt-8 mb-4 text-white/90"
                        {...props}
                      />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2
                        className="text-3xl font-semibold mt-6 mb-3 text-white/90"
                        {...props}
                      />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3
                        className="text-2xl font-medium mt-4 mb-2 text-white/90"
                        {...props}
                      />
                    ),
                    p: ({ node, ...props }) => (
                      <p
                        className=" text-white/90 leading-relaxed text-lg"
                        {...props}
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul
                        className="list-disc list-inside mb-4 space-y-1"
                        {...props}
                      />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol
                        className="list-decimal list-inside mb-4 space-y-1"
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="ml-4 text-white/80" {...props} />
                    ),
                    a: ({ node, href, ...props }) => {
                      const isExternal =
                        href?.startsWith("http") || href?.startsWith("//");

                      return (
                        <a
                          href={href}
                          className="text-purple-400 hover:text-purple-300 transition-colors"
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          {...props}
                        />
                      );
                    },
                    section: ({ node, ...props }) => {
                      // Check if this is the footnotes section
                      const isFootnotes = (props as any)["data-footnotes"] !== undefined;
                      return (
                        <section
                          className={
                            isFootnotes
                              ? "mt-8 pt-6 border-t border-white/20"
                              : ""
                          }
                          {...props}
                        />
                      );
                    },
                    table: ({ node, ...props }) => (
                      <div className="overflow-x-auto my-6">
                        <table
                          className="min-w-full border-collapse border border-white/20"
                          {...props}
                        />
                      </div>
                    ),
                    thead: ({ node, ...props }) => (
                      <thead className="bg-white/5" {...props} />
                    ),
                    tbody: ({ node, ...props }) => <tbody {...props} />,
                    tr: ({ node, ...props }) => (
                      <tr className="border-b border-white/20" {...props} />
                    ),
                    th: ({ node, ...props }) => (
                      <th
                        className="px-4 py-2 text-left font-semibold text-white/90 border border-white/20"
                        {...props}
                      />
                    ),
                    td: ({ node, ...props }) => (
                      <td
                        className="px-4 py-2 text-white/80 border border-white/20"
                        {...props}
                      />
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>

            <Comments />

            {/* Footer */}
            <div className="border-t border-white/20 pt-6 mt-8">
              <div className="flex justify-between items-center">
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Portfolio
                  </Button>
                </Link>
                <div className="text-white/60 text-sm">
                  Published on {post.date}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
