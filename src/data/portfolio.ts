export const portfolio = {
  name: 'Dev Singh',
  greeting: "Hi, I'm Dev!",
  links: {
    github: 'devksingh4',
    linkedin: 'dev-singh4',
    email: 'dev@devksingh.com',
    resume: '/Dev_Singh_resume.pdf',
  },
  blurb:
    "I'm a graduate student at the University of Illinois pursuing a combined Bachelor's and Master's of Computer Science degree. My interests lie in building large-scale distributed systems, and I love solving complex engineering challenges.",
  experience: [
    {
      company: 'Capital One',
      link: 'https://capitalone.com',
      positions: [
        {
          title: 'Software Engineer Intern',
          location: 'New York, NY',
          dates: 'June 2025 - August 2025',
          bullets: [
            'Integrated a travel itinerary generation solution using data from various travel sources, including hotel and flights.',
            'Delivered an individualized user experience by creating a serverless data pipeline to share necessary travel context with a GenAI provider while protecting customer privacy and confidential inventory details.',
          ],
          current: false,
          incoming: false,
        },
        {
          title: 'Software Engineer Intern',
          location: 'McLean, VA',
          dates: 'June 2024 - August 2024',
          bullets: [
            'Unified automated and manual fraud decisioning into one platform with shared-attribute linking, reducing the average handling time by 16%, saving $5M in operational costs, and increasing investigation throughput.',
            'Improved application resiliency and production support via end-to-end testing, central error handling, and logging.',
          ],
          current: false,
          incoming: false,
        },
      ],
    },
    {
      company: 'Caterpillar',
      link: 'https://cat.com/en_US.html',
      positions: [
        {
          title: 'Software Engineer/MLOps Intern',
          location: 'Chicago, IL',
          dates: 'May 2023 - December 2023',
          bullets: [
            'Achieved an eightfold increase in supported throughput by leveraging an event-driven architecture, asynchronous I/O, multi-threaded operations, and Redis caching to enhance performance and scalability.',
            'Cut anomaly detection pipeline runtime by 86%, boosting service sales and improving operational efficiency.',
            'Reduced model storage costs 12% by building a tool to identify and prune obsolete prediction models from S3.',
          ],
          current: false,
          incoming: false,
        },
      ],
    },
    {
      company: 'University of Illinois Urbana-Champaign',
      link: 'https://siebelschool.illinois.edu',
      positions: [
        {
          title: 'Research Assistant',
          location: 'Urbana, IL',
          dates: 'August 2025 - May 2026',
          bullets: [
            'Shipped open-source conversion tooling to PrairieLearn that parses Canvas/QTI exports into its native question format, enabling instructors to migrate existing assessments across platforms without manual recreation.',
            'Designed and merged a question preferences feature into PrairieLearn, enabling instructors to pass parameters to questions from their assessment, allowing a single question to be reused across contexts with varied configurations.',
          ],
          current: false,
          incoming: false,
        },
        {
          title: 'Systems Programming Infra Lead',
          location: 'Urbana, IL',
          dates: 'August 2024 - January 2026',
          bullets: [
            'Rebuilt distributed autograder with a Jenkins-based backend, improving maintainability and enabling rigorous test cases, while increasing infrastructure reliability and providing additional feedback to students.',
            'Built infrastructure monitoring stack and served as "on-call" contact for production incidents.',
          ],
          current: false,
          incoming: false,
        },
      ],
    },
    {
      company: 'Zakti Security Labs',
      link: 'https://zaktilabs.com',
      positions: [
        {
          title: 'Software Engineer Intern',
          location: 'Naperville, IL',
          dates: 'May 2019 - April 2023',
          bullets: [
            'Reduced non-compliant and unauthorized accesses to regulated systems by 15% through development of full-stack tools that enable businesses to identify and mitigate data security issues in real time.',
            'Built an end-to-end encrypted file transfer portal for regulated businesses with stringent privacy requirements.',
            'Developed disaster response plans that enable business continuity and recovery for high-risk organizations.',
            'Performed security audits for clients using the NIST and OCTAVE cybersecurity frameworks to deter cyberattacks and ensure compliance with HIPAA and SOC2 standards.',
          ],
          current: false,
          incoming: false,
        },
      ],
    },
  ],
  education: [
    {
      company: 'University of Illinois Urbana-Champaign',
      link: 'https://siebelschool.illinois.edu',
      positions: [
        {
          title: 'Bachelor/Master of Computer Science',
          location: 'Urbana, IL',
          dates: 'August 2022 - May 2026',
          bullets: [
            'Combined undergraduate/graduate program.',
            'Undergraduate minor in Business.',
            'Chair of the ACM @ UIUC Infrastructure Committee, where we develop solutions to manage club operations and technology infrastructure.',
            'Served as the Treasurer of ACM @ UIUC from 2023-2024.',
          ],
          current: true,
          incoming: false,
        },
      ],
    },
    {
      company: 'Illinois Mathematics and Science Academy',
      link: 'https://imsa.edu',
      positions: [
        {
          title: 'High School Diploma',
          location: 'Aurora, IL',
          dates: 'August 2019 - May 2022',
          bullets: [
            'The Illinois Mathematics and Science Academy is a rigorous STEM-focused public boarding high school in Aurora, Illinois.',
          ],
          current: false,
          incoming: false,
        },
      ],
    },
  ],
};
