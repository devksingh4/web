import React from "react";
import { ExperienceEntry } from "../types";

interface ExperienceCardProps {
  experience: ExperienceEntry;
  id: string;
}
export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  id,
}) => {
  return (
    <div
      key={id}
      className="rounded border border-gray-700 p-6 hover:border-blue-500 transition-colors duration-300"
    >
      <a target="_blank" rel="noopener noreferrer">
        <h3 className="text-xl font-bold text-blue-500 mb-2">
          <a href={experience.link} target="_blank">
            {experience.company}
          </a>
        </h3>
        {experience.positions.map((x, idx) => (
          <React.Fragment key={`${id}-position-${idx}`}>
            <div className="mb-1">
              <h4 className="text-gray-200 font-semibold text-lg">{x.title}</h4>
              <p className="text-gray-400 text-sm">
                {x.location ? `${x.location} |` : null} {x.dates}
              </p>
            </div>
            <ul className="text-gray-200">
              {x.bullets.map((bullet, index) => (
                <li
                  key={`${id}-bullet-${index}`}
                  className="list-disc ml-6 mb-1 leading-relaxed"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </a>
    </div>
  );
};
