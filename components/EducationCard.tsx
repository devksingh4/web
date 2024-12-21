import { EducationEntry } from "../types"

interface EducationCardProps {
    education: EducationEntry
    id: string
}
export const EducationCard: React.FC<EducationCardProps> = ({education, id}) => {
    return (
        <div key={id} className="border border-gray-700 p-6 hover:border-blue-400 transition-colors duration-300">
            <a href={education.link} target="_blank" rel="noopener noreferrer">
            <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">{education.institution}</h3>
                <div className="space-y-4">
                {education.degrees.map((y, dIndex) => (
                    <h5 key={dIndex} className='text-gray-400'>{y.degree} ({y.dates})</h5>
                ))}
                </div>
            </div>
            {education.bullets && (
                <ul className="text-gray-300 space-y-2 mt-2">
                {education.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="list-disc ml-4">
                    {bullet}
                    </li>
                ))}
                </ul>
            )}
            </a>
        </div>
    )
}