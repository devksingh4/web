"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { PortfolioSection } from "@/components/portfolio-section"
import { BackgroundSection } from "@/components/background-section"
import { BlogSection } from "@/components/blog-section"
import { portfolio } from "@/lib/portfolio-data"
import { GRADIENT } from "@/constants"
import type { BlogPost } from "@/lib/blog"

interface PortfolioClientProps {
  initialTab: string
  blogPosts: BlogPost[]
}

export default function PortfolioClient({ initialTab, blogPosts }: PortfolioClientProps) {
  const homePageState = "portfolio";
  const [activeTab, setActiveTabState] = useState(initialTab || homePageState)
  const currentYear = new Date().getFullYear();
  const setActiveTab = (st: string) => {
    if (st === homePageState) {
      window.history.pushState(null, '', "/")
    } else {
      window.history.pushState(null, '', `/${st}`)
    }
    setActiveTabState(st);
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${GRADIENT}`}>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} hasBlogPosts={blogPosts.length > 0} />

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // Unique key to trigger animation on change
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }} // Animation duration
          >
            {activeTab === "portfolio" && <PortfolioSection />}
            {activeTab === "background" && <BackgroundSection />}
            {activeTab === "blog" && <BlogSection blogPosts={blogPosts} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="text-center pb-6 mt-2">
        <div className="flex justify-center items-center space-x-4 text-white/50 text-sm">
          <span>&copy; {currentYear} {portfolio.name}</span>
        </div>
      </div>
    </div>
  )
}
