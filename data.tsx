import { Portfolio } from "./types";
import me from "./assets/me.jpg";
import NiceLink from "./components/NiceLink";

const IntroComponent = () => {
  return (
    <>
      <p className="text-gray-300 mb-6 text-left text-lg">{portfolio.blurb}</p>

      <p className="text-gray-300 mb-6 text-left text-lg">
        Currently, I&apos;m the infrastructure lead for{" "}
        <NiceLink href="https://cs341.cs.illinois.edu">CS 341 @ UIUC</NiceLink>,
        where I build and maintain a distributed autograder system for systems
        programming. I&apos;m also a course assistant for{" "}
        <NiceLink href="https://cs357.cs.illinois.edu">CS 357 @ UIUC</NiceLink>{" "}
        where I help students learn numerical methods.
      </p>
      <p className="text-gray-300 mb-6 text-left text-lg">
        Last summer, I worked at{" "}
        <NiceLink href="https://capitalone.com">Capital One</NiceLink> on the
        Card Tech team, where I helped develop tools to streamline fraud
        detection and reduce fraud losses. Before that, I&apos;ve also worked at{" "}
        <NiceLink href="https://cat.com/en_US.html">Caterpillar</NiceLink> on
        the Analytics Execution team, and at{" "}
        <NiceLink href="https://zaktilabs.com">Zakti Security Labs</NiceLink>{" "}
        developing cybersecurity solutions.
      </p>
      <p className="text-gray-300 mb-6 text-left text-lg">
        I&apos;m also involved in UIUC&apos;s{" "}
        <NiceLink href="https://acm.illinois.edu">
          Association for Computing Machinery
        </NiceLink>{" "}
        chapter, where I am currently the infrastructure committee chair, and
        formerly the Treasurer.
      </p>
      <p className="text-gray-300 mb-6 text-left text-lg">
        Feel free to reach out if you want to chat!
      </p>
    </>
  );
};

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
    "I'm a senior at the University of Illinois pursuing a combined Bachelor's and Master's degree in Computer Science. My interest lie in building large-scale distributed systems, and I love solving complex engineering challenges.",
  additionalInfo: <IntroComponent />,
  experience: [
    {
      company: "CS 341 @ UIUC",
      position: "Infrastructure Lead",
      location: "Urbana, IL",
      dates: "August 2024 - Present",
      bullets: [
        "Designed and implemented a new distributed autograder system for the introductory systems programming course at UIUC.",
        "Maintained interoperability with existing systems while deploying new ones to improve student and course staff experiences.",
        "Led recitation sections alongside course faculty to facilitate a deeper understanding of core concepts.",
      ],
      link: "https://cs341.cs.illinois.edu",
    },
    {
      company: "Capital One",
      position: "Software Engineer Intern",
      location: "McLean, VA",
      dates: "June 2024 - August 2024",
      bullets: [
        "Built full-stack fraud detection solutions using TypeScript, AWS Fargate, and Kafka that reduced fraud investigation time, fraud losses, and operational costs.",
        "Reduced fraud investigation time and operational costs while enhancing financial integrity.",
      ],
      link: "https://capitalone.com",
    },
    {
      company: "Caterpillar",
      position: "Software Engineer/MLOps Intern",
      location: "Chicago, IL",
      dates: "May 2023 - December 2023",
      bullets: [
        "Optimized anomaly detection systems and increased system performance by building a distributed machine learning and rules-based architecture.",
        "Enabled the organization to boost after-market service sales through increased system throughput and reliability.",
      ],
      link: "https://cat.com/en_US.html",
    },
    {
      company: "Zakti Security Labs",
      position: "Software Engineer Intern",
      location: "Naperville, IL",
      dates: "May 2019 - April 2023",
      bullets: [
        "Built security monitoring tools for high-risk healthcare and finance organizations.",
        "Reduced unauthorized accesses and built disaster recovery procedures.",
        "Conducted security audits using the NIST and OCTAVE frameworks.",
      ],
      link: "https://zaktilabs.com",
    },
  ],
  education: [
    {
      institution: "University of Illinois Urbana-Champaign",
      link: "https://cs.illinois.edu",
      degrees: [
        {
          dates: "Aug 2025 to May 2026",
          degree: "Master's in Computer Science",
        },
        {
          dates: "Aug 2022 to May 2025",
          degree: "Bachelor's in Computer Science",
        },
      ],
      bullets: [
        "Minor in Business.",
        "Leading the ACM @ UIUC Infrastructure Committee, where we develop solutions to manage club operations and technology infrastructure.",
        "Served as the Treasurer from 2023-2024.",
      ],
    },
    {
      institution: "Illinois Mathematics and Science Academy",
      link: "https://imsa.edu",
      degrees: [
        {
          dates: "Aug 2019 to May 2022",
          degree: "High School Diploma",
        },
      ],
      bullets: [
        "The Illinois Mathematics and Science Academy is a rigorous STEM-focused public boarding high school in Aurora, Illinois.",
      ],
    },
  ],
};
