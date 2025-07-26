import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, ExternalLink } from "lucide-react"
import { portfolio } from "@/lib/portfolio-data"

export function BackgroundSection() {
  return (
    <Card className="w-full max-w-4xl bg-black/80 border-white/10 text-white">
      <CardContent className="p-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold"> Background</h1>
        </div>

        {/* Experience Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-white/20 pb-2">Experience</h2>
          {portfolio.experience.map((exp, expIndex) => (
            <div key={expIndex} className="bg-white/5 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <Link href={exp.link} className="text-white/60 hover:text-white/80 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
              {exp.positions.map((pos, posIndex) => (
                <div key={posIndex} className="border-l-2 border-white/20 pl-4 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h4 className="font-medium text-lg">{pos.title}</h4>
                    <div className="flex items-center space-x-2 text-sm text-white/70">
                      <MapPin className="w-3 h-3" />
                      <span>{pos.location}</span>
                      <span>•</span>
                      <span>{pos.dates}</span>
                    </div>
                  </div>
                  <ul className="space-y-1 text-white/80">
                    {pos.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-sm leading-relaxed">
                        • {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-white/20 pb-2">Education</h2>
          {portfolio.education.map((edu, eduIndex) => (
            <div key={eduIndex} className="bg-white/5 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{edu.company}</h3>
                <Link href={edu.link} className="text-white/60 hover:text-white/80 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
              {edu.positions.map((pos, posIndex) => (
                <div key={posIndex} className="border-l-2 border-white/20 pl-4 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h4 className="font-medium text-lg">{pos.title}</h4>
                    <div className="flex items-center space-x-2 text-sm text-white/70">
                      <Calendar className="w-3 h-3" />
                      <span>{pos.dates}</span>
                    </div>
                  </div>
                  {pos.bullets.length > 0 && (
                    <ul className="space-y-1 text-white/80">
                      {pos.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="text-sm leading-relaxed">
                          • {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
