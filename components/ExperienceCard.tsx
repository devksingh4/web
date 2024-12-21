import { ExperienceEntry } from "../types"

interface ExperienceCardProps {
    experience: ExperienceEntry
    id: string
}
export const ExperienceCard: React.FC<ExperienceCardProps> = ({experience, id}) => {
    return (
        <div key={id} className="rounded border border-gray-700 p-6 hover:border-blue-500 transition-colors duration-300">
        <a href={experience.link} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            {experience.position} - {experience.company}
          </h3>
          <p className="text-gray-400 mb-4">
            {experience.location} | {experience.dates}
          </p>
          <ul className="text-gray-300 space-y-2">
            {experience.bullets.map((bullet, index) => (
              <li key={index} className="list-disc ml-4">
                {bullet}
              </li>
            ))}
          </ul>
        </a>
      </div>
    )
}