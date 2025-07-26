"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { PortfolioSection } from "@/components/portfolio-section"
import { BackgroundSection } from "@/components/background-section"
import { BlogSection } from "@/components/blog-section"
import { portfolio } from "@/lib/portfolio-data"
import { GRADIENT } from "@/constants"
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Dev Singh',
  description: portfolio.blurb,
};


export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("portfolio")
  const currentYear = new Date().getFullYear();

  return (
    <div className={`min-h-screen bg-gradient-to-br ${GRADIENT}`}>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        {activeTab === "portfolio" && <PortfolioSection />}
        {activeTab === "background" && <BackgroundSection />}
        {activeTab === "blog" && <BlogSection />}
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
