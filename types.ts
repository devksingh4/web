export interface ExperienceEntryPosition {
  title: string;
  location?: string;
  dates: string;
  bullets: string[];
}

export interface ExperienceEntry {
  company: string;
  positions: ExperienceEntryPosition[];
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
  links: PortfolioIds;
  experience: ExperienceEntry[];
  education: ExperienceEntry[];
}
