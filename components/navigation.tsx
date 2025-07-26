"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { portfolio } from "@/lib/portfolio-data"
import { getAllBlogPosts } from "@/lib/blog"

interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const blogPosts = getAllBlogPosts()
  return (
    <nav className="flex justify-between items-center p-6">
      <div className="flex space-x-1">
        <Button
          variant={activeTab === "portfolio" ? "secondary" : "ghost"}
          size="sm"
          className={
            activeTab === "portfolio"
              ? "bg-black/20 text-white border-white/20"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }
          onClick={() => setActiveTab("portfolio")}
        >
          Portfolio
        </Button>
        <Button
          variant={activeTab === "background" ? "secondary" : "ghost"}
          size="sm"
          className={
            activeTab === "background"
              ? "bg-black/20 text-white border-white/20"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }
          onClick={() => setActiveTab("background")}
        >
          Background
        </Button>
        {blogPosts.length > 0 && <Button
          variant={activeTab === "blog" ? "secondary" : "ghost"}
          size="sm"
          className={
            activeTab === "blog"
              ? "bg-black/20 text-white border-white/20"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }
          onClick={() => setActiveTab("blog")}
        >
          Blog
        </Button>}
      </div>
      <Link href={portfolio.links.resume}>
        <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
          <FileText className="w-4 h-4 mr-2" />
          Resume
        </Button>
      </Link>
    </nav>
  )
}
