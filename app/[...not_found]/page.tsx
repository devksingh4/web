"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { PortfolioSection } from "@/components/portfolio-section"
import { BackgroundSection } from "@/components/background-section"
import { BlogSection } from "@/components/blog-section"
import { portfolio } from "@/lib/portfolio-data"
import { GRADIENT } from "@/constants"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`min-h-screen bg-gradient-to-br ${GRADIENT}`}>
      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={""}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Card className="w-full max-w-2xl bg-black/80 border-white/10 text-white">
              <CardContent className="p-8 space-y-6">
                <h1 className="font-semibold text-xl">Page Not Found</h1>
                <p>Perhaps you would like to <a href="/" className="text-blue-500 dark:text-blue-400 hover:underline">go home</a>?</p>
              </CardContent>
            </Card>
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