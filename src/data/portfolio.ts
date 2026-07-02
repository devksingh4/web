// Single source of truth for every section on the homepage. Section
// components read from here; copy and ordering live in one place.

/** A run of text in the hero headline. `muted` segments render in the muted tone. */
export interface HeadlineSegment {
  text: string;
  muted?: boolean;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Project {
  year: string;
  title: string;
  kind: string;
  desc: string;
  stack: string[];
  href: string;
}

/** One stint at a company. A company can list several (e.g. return internships). */
export interface ExperienceRole {
  title: string;
  where: string;
  dates: string;
  bullets: string[];
  /** Search-only synonyms for ⌘K, e.g. "FDE" to surface a Forward Deployed Engineer role. */
  keywords?: string;
}

export interface ExperienceEntry {
  company: string;
  link: string;
  roles: ExperienceRole[];
}

/** One program at a school. A school can list several (e.g. a BS then an MS). */
export interface EducationProgram {
  degree: string;
  dates: string;
  note: string;
}

export interface EducationEntry {
  school: string;
  link: string;
  where: string;
  programs: EducationProgram[];
}

export interface Portfolio {
  name: string;
  role: string;
  location: string;
  /** Brand accent color (any CSS color). Injected as the `--accent` CSS variable by Layout.astro. */
  accent: string;
  greeting: string;
  heroHeadline: HeadlineSegment[][];
  blurb: string;
  longBio: string;
  meta: string[];
  skills: SkillGroup[];
  links: {
    github: string;
    githubUrl: string;
    linkedin: string;
    email: string;
    resume: string;
    cv: string;
  };
  projects: Project[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
}

const location = 'New York, NY';

export const portfolio: Portfolio = {
  name: 'Dev Singh',
  role: 'Software Engineer',
  location,
  accent: '#fa3a29',
  greeting: "Hi, I'm Dev.",

  // Three lines; the lone muted run mirrors the design source.
  heroHeadline: [
    [{ text: "Hi, I'm Dev. I work on" }],
    [{ text: 'distributed systems', muted: true }],
    [{ text: 'and platform engineering.' }],
  ],

  blurb:
    "Recent graduate of the University of Illinois with a combined Bachelor's and Master's in Computer Science. I work on distributed systems and platform engineering.",

  longBio:
    "I recently graduated from the combined Bachelor's/Master's in Computer Science program at UIUC, with a minor in Business. Most recently I interned on Capital One's luxury travel technology team in New York, building a serverless data pipeline for generative travel itineraries. Before that I worked across fraud platforms, MLOps at Caterpillar, and security tooling.",

  meta: [
    location,
    'Incoming Forward Deployed Engineer (Commercial) @ Palantir',
  ],

  skills: [
    {
      label: 'Cloud & serverless',
      items: [
        'AWS',
        'Lambda',
        'Fargate',
        'S3',
        'DynamoDB',
        'Neptune',
        'EC2',
        'RDS',
      ],
    },
    {
      label: 'Distributed & event-driven',
      items: ['Kafka', 'Kubernetes', 'Redis', 'Docker'],
    },
    {
      label: 'Languages & runtime',
      items: ['Python', 'TypeScript', 'Java', 'C++', 'Node.js', 'React'],
    },
    {
      label: 'Data & delivery',
      items: ['PostgreSQL', 'Terraform', 'Jenkins', 'CI/CD', 'GitHub'],
    },
  ],

  links: {
    github: 'devksingh4',
    githubUrl: 'https://github.com/devksingh4',
    linkedin: 'dev-singh4',
    email: 'dev@devksingh.com',
    resume: '/Dev_Singh_resume.pdf',
    cv: '/Dev_Singh_cv.pdf',
  },

  projects: [
    {
      year: '2026',
      title: 'PrairieLearn QTI Converter',
      kind: 'Open source',
      desc: "Parser that converts Canvas/QTI exports into PrairieLearn's native format, automating assessment migration that used to be fully manual. Shipped upstream into PrairieLearn, the open-source platform used across many universities.",
      stack: ['Python', 'XML', 'PrairieLearn'],
      href: 'https://www.prairielearn.com/about/blog/qti-content-importing',
    },
    {
      year: '2026',
      title: 'Question Preferences for PrairieLearn',
      kind: 'Open source',
      desc: 'A merged feature adding parameter passing to PrairieLearn questions, so one question can be safely reused across assessments with different configs — designed, reviewed, and shipped into a large production open-source codebase.',
      stack: ['TypeScript', 'PostgreSQL', 'Node'],
      href: 'https://github.com/PrairieLearn/PrairieLearn',
    },
    {
      year: '2025',
      title: 'Systems Programming Autograder',
      kind: 'Course infrastructure',
      desc: "Distributed, fault-tolerant autograder using a Jenkins-based runner for UIUC's Systems Programming course — faster and more reliable, with richer feedback for the hundreds of students who depend on it each semester.",
      stack: ['Jenkins', 'Docker', 'TypeScript', 'PostgreSQL'],
      href: 'https://github.com/cs341-illinois/broadway-on-demand',
    },
    {
      year: '2024-2026',
      title: 'ACM @ UIUC Core',
      kind: 'Open source · Club infra',
      desc: "Built the platform behind ACM @ UIUC's operations — auth, membership, and events. Engineered for high availability with a multi-region, serverless AWS architecture and automated failover that keeps it reliable for thousands of members.",
      stack: ['TypeScript', 'AWS Lambda', 'DynamoDB', 'Redis'],
      href: 'https://github.com/acm-uiuc/core',
    },
  ],

  experience: [
    {
      company: 'Palantir',
      link: 'https://www.palantir.com',
      roles: [
        {
          title: 'Incoming Forward Deployed Engineer',
          where: 'New York, NY',
          dates: '2026',
          bullets: ['Working with commerical clients.'],
          keywords: 'FDE',
        },
      ],
    },
    {
      company: 'Capital One',
      link: 'https://capitalone.com',
      roles: [
        {
          title: 'Software Engineer Intern',
          where: 'New York, NY',
          dates: 'Jun — Aug 2025',
          bullets: [
            'Integrated a travel itinerary generation solution using hotel and flight data sources.',
            'Built a serverless pipeline sharing travel context with a GenAI provider while protecting customer privacy.',
          ],
          keywords: 'SWE',
        },
        {
          title: 'Software Engineer Intern',
          where: 'McLean, VA',
          dates: 'Jun — Aug 2024',
          bullets: [
            'Unified automated and manual fraud decisioning into one platform with shared-attribute linking.',
            'Cut average handling time 16%, saved $5M in operational costs, improved investigation throughput.',
          ],
          keywords: 'SWE',
        },
      ],
    },
    {
      company: 'Caterpillar',
      link: 'https://cat.com/en_US.html',
      roles: [
        {
          title: 'Software Engineer / MLOps Intern',
          where: 'Chicago, IL',
          dates: 'May — Dec 2023',
          bullets: [
            'Eightfold throughput gain via event-driven architecture, async I/O, multi-threading, and Redis caching.',
            'Cut anomaly detection pipeline runtime by 86%; pruned obsolete prediction models from S3.',
          ],
          keywords: 'SWE MLOps',
        },
      ],
    },
    {
      company: 'UIUC · Siebel School',
      link: 'https://siebelschool.illinois.edu',
      roles: [
        {
          title: 'Research Assistant + Systems Infra Lead',
          where: 'Urbana, IL',
          dates: 'Aug 2024 — May 2026',
          bullets: [
            'Shipped open-source Canvas/QTI → PrairieLearn converter; designed and merged question preferences.',
            'Rebuilt distributed autograder on Jenkins, ran monitoring stack, served on-call for production incidents.',
          ],
          keywords: 'RA',
        },
      ],
    },
    {
      company: 'Zakti Security Labs',
      link: 'https://zaktilabs.com',
      roles: [
        {
          title: 'Software Engineer Intern',
          where: 'Naperville, IL',
          dates: 'May 2019 — Apr 2023',
          bullets: [
            'Built full-stack tooling that cut non-compliant access to regulated systems by 15%.',
            'Shipped an end-to-end encrypted file transfer portal and led NIST/OCTAVE security audits.',
          ],
          keywords: 'SWE',
        },
      ],
    },
  ],

  education: [
    {
      school: 'University of Illinois Urbana-Champaign',
      link: 'https://siebelschool.illinois.edu',
      where: 'Urbana, IL',
      programs: [
        {
          degree: 'Master of Computer Science',
          dates: '2025 — 2026',
          note: '',
        },
        {
          degree:
            'Bachelor of Science in Computer Science, <i>Highest Honors</i>',
          dates: '2022 — 2025',
          note: 'Minor in Business. Infrastructure Chair, ACM @ UIUC. Former Treasurer, ACM @ UIUC.',
        },
      ],
    },
    {
      school: 'Illinois Mathematics and Science Academy',
      link: 'https://imsa.edu',
      where: 'Aurora, IL',
      programs: [
        {
          degree: 'High School Diploma',
          dates: '2019 — 2022',
          note: 'STEM-focused public residential academy in Aurora, IL.',
        },
      ],
    },
  ],
};
