import { Portfolio } from "./types";
import me from "./assets/me.jpg";

export const portfolio: Portfolio = {
  name: "Dev Singh",
  picture: me,
  greeting: "Hi, I'm Dev!",
  links: {
    github: "devksingh4",
    linkedin: "dev-singh4",
    email: "dev@devksingh.com",
    resume: "/Dev_Singh_resume.pdf",
  },
  blurb:
    "I'm a graduate student at the University of Illinois pursuing a combined Bachelor's and Master's of Computer Science degree. My interests lie in building large-scale distributed systems, and I love solving complex engineering challenges.",
  experience: [
    {
      company: "Capital One",
      positions: [
        {
          title: "Software Engineer Intern",
          location: "New York, NY",
          dates: "June 2025 - August 2025",
          bullets: ["Working on the Premium Products and Experiences team."],
        },
        {
          title: "Software Engineer Intern",
          location: "McLean, VA",
          dates: "June 2024 - August 2024",
          bullets: [
            "Built full-stack fraud detection solutions using TypeScript, AWS Fargate, and Kafka that reduced fraud investigation time, fraud losses, and operational costs.",
            "Reduced fraud investigation time and operational costs while enhancing financial integrity.",
          ],
        },
      ],
      link: "https://capitalone.com",
    },
    {
      company: "University of Illinois",
      positions: [
        {
          title: "CS 341 Infrastructure Lead",
          location: "Urbana, IL",
          dates: "August 2024 - Present",
          bullets: [
            "Designed and implemented a new distributed autograder system for the introductory systems programming course at UIUC.",
            "Maintained interoperability with existing systems while deploying new ones to improve student and course staff experiences.",
            "Led recitation sections alongside course faculty to facilitate a deeper understanding of core concepts.",
          ],
        },
      ],
      link: "https://cs341.cs.illinois.edu",
    },
    {
      company: "Caterpillar",
      positions: [
        {
          title: "Software Engineer/MLOps Intern",
          location: "Chicago, IL",
          dates: "May 2023 - December 2023",
          bullets: [
            "Optimized anomaly detection systems and increased system performance by building a distributed machine learning and rules-based architecture.",
            "Enabled the organization to boost after-market service sales through increased system throughput and reliability.",
          ],
        },
      ],
      link: "https://cat.com/en_US.html",
    },
    {
      company: "Zakti Security Labs",
      positions: [
        {
          title: "Software Engineer Intern",
          location: "Naperville, IL",
          dates: "May 2019 - April 2023",
          bullets: [
            "Built security monitoring tools for high-risk healthcare and finance organizations.",
            "Reduced unauthorized accesses and built disaster recovery procedures.",
            "Conducted security audits using the NIST and OCTAVE frameworks.",
          ],
        },
      ],
      link: "https://zaktilabs.com",
    },
  ],
  education: [
    {
      company: "University of Illinois Urbana-Champaign",
      link: "https://siebelschool.illinois.edu",
      positions: [
        {
          dates: "August 2025 - May 2026",
          title: "Master's in Computer Science",
          bullets: [],
        },
        {
          dates: "August 2022 - May 2025",
          title: "Bachelor's in Computer Science",
          bullets: [
            "Minor in Business.",
            "Chair of the ACM @ UIUC Infrastructure Committee, where we develop solutions to manage club operations and technology infrastructure.",
            "Served as the Treasurer of ACM @ UIUC from 2023-2024.",
          ],
        },
      ],
    },
    {
      company: "Illinois Mathematics and Science Academy",
      link: "https://imsa.edu",
      positions: [
        {
          dates: "August 2019 - May 2022",
          title: "High School Diploma",
          bullets: [
            "The Illinois Mathematics and Science Academy is a rigorous STEM-focused public boarding high school in Aurora, Illinois.",
          ],
        },
      ],
    },
  ],
};
