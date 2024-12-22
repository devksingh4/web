import { ReactElement } from "react";

export interface EducationEntry {
  institution: string;
  link: string;
  degrees: EducationDegreeEntry[];
  bullets?: string[];
}

export interface EducationDegreeEntry {
  degree: string;
  dates: string;
}

export interface ExperienceEntry {
  company: string;
  position: string;
  location: string;
  dates: string;
  bullets: string[];
  link?: string;
}

export interface PortfolioIds {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
}

export interface Portfolio {
  name: string;
  picture: string;
  greeting: string;
  blurb: string;
  additionalInfo: string | ReactElement;
  links: PortfolioIds;
  experience: ExperienceEntry[];
  education: EducationEntry[];
}
