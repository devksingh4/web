import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, FileText, Building, GraduationCap } from "lucide-react"
import { portfolio } from "@/lib/portfolio-data"

export function PortfolioSection() {
  // Find all education positions explicitly flagged as current
  const currentEducation = portfolio.education.flatMap(edu =>
    edu.positions
      .filter(pos => pos.current === true)
      .map(pos => ({ ...pos, company: edu.company }))
  );

  const currentExperienceWithIncoming = portfolio.experience.flatMap(exp =>
    exp.positions
      .filter(pos => pos.current || pos.incoming)
      .map(pos => ({ ...pos, company: exp.company, }))
  );


  // Find all experience positions explicitly flagged as current
  const currentExperience = portfolio.experience.flatMap(exp =>
    exp.positions
      .filter(pos => pos.current === true)
      .map(pos => ({ ...pos, company: exp.company, }))
  );

  return (
    <Card className="w-full max-w-3xl bg-black/80 border-white/10 text-white">
      <CardContent className="p-8 space-y-6">
        {/* Profile Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Image
              src={portfolio.picture || "/placeholder.svg"}
              alt={portfolio.name}
              width={160}
              height={160}
              className="rounded-full border-4 border-white/20"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{portfolio.greeting}</h1>
            <p className="text-white/70 leading-relaxed max-w-lg mx-auto">{portfolio.blurb}</p>
          </div>
        </div>

        {/* Current Status (renders items with "current: true") */}
        {(currentEducation.length > 0 || currentExperience.length > 0) && (
          <div className="bg-white/5 rounded-lg p-4 space-y-3">
            <h3 className="font-semibold text-xl">Current Activity</h3>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
              {currentExperienceWithIncoming.map((pos, index) => (
                <div key={`exp-${index}`} className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-200 border-blue-400/20 hover:bg-blue-600/90">
                    <Building className="w-3 h-3 mr-1" />
                    {pos.incoming && "Incoming"} {pos.title}
                  </Badge>
                  <span className="text-sm text-white/70">@ {pos.company} ({pos.location})</span>
                </div>
              ))}
              {currentEducation.map((pos, index) => (
                <div key={`edu-${index}`} className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-purple-600/20 text-purple-200 border-purple-400/20 hover:bg-purple-600/90">
                    <GraduationCap className="w-3 h-3 mr-1" />
                    {pos.title}
                  </Badge>
                  <span className="text-sm text-white/70">@ {pos.company}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-white/70">Also check out <Link href="/background" className="text-blue-500 dark:text-blue-400 hover:underline">my background</Link>!</p>
          </div>
        )}

        {/* Contact Links */}
        <div className="flex w-full flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link
            href={`https://github.com/${portfolio.links.github}`}
            target="_blank"
            className="w-full sm:w-auto flex justify-center items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm">GitHub</span>
          </Link>
          <Link
            href={`https://linkedin.com/in/${portfolio.links.linkedin}`}
            target="_blank"
            className="w-full sm:w-auto flex justify-center items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span className="text-sm">LinkedIn</span>
          </Link>
          <Link
            href={`mailto:${portfolio.links.email}`}
            target="_blank"
            className="w-full sm:w-auto flex justify-center items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">Email</span>
          </Link>
          <Link
            href={portfolio.links.resume}
            target="_blank"
            className="w-full sm:w-auto flex justify-center items-center space-x-2 px-4 py-2 bg-white hover:bg-white/90 rounded-lg transition-colors text-black"
          >
            <FileText className="w-4 h-4" />
            <span className="text-sm">Resume</span>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}