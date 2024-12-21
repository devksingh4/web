import { Portfolio } from "./types"
import me from './assets/me.jpg'

export const portfolio: Portfolio = {
    name: "Dev Singh",
    picture: me,
    greeting: "Hi, I'm Dev!",
    links: {
        github: 'devksingh4',
        linkedin: 'dev-singh4',
        email: 'dev@devksingh.com',
        resume: '/Dev_Singh_resume.pdf'
    },
    blurb: "I'm a senior at the University of Illinois pursuing a combined Bachelor's and Master's degree in Computer Science. I enjoy building scalable distributed systems and love solving complex engineering challenges.",
    experience: [
        {
            company: "CS 341 @ UIUC",
            position: "Infrastructure Lead",
            location: "Urbana, IL",
            dates: "August 2024 - Present",
            bullets: [
                "Designed and implemented a new distributed autograder system for the introductory systems programming course at UIUC.",
                "Maintained interoperability with existing systems while deploying new ones to improve student and course staff experiences.",
                "Led recitation sections alongside course faculty to facilitate a deeper understanding of core concepts."
            ],
            link: "https://cs341.cs.illinois.edu"
        },
        {
            company: "Capital One",
            position: "Software Engineer Intern",
            location: "McLean, VA",
            dates: "June 2024 - August 2024",
            bullets: [
                "Built full-stack fraud detection solutions using TypeScript, AWS Fargate, and Kafka that reduced fraud investigation time, fraud losses, and operational costs.",
                "Reduced fraud investigation time and operational costs while enhancing financial integrity."
            ],
            link: "https://capitalone.com"
        },
        {
            company: "Caterpillar",
            position: "Software Engineer/MLOps Intern",
            location: "Chicago, IL",
            dates: "May 2023 - December 2023",
            bullets: [
                "Optimized anomaly detection systems and increased system performance by building a distributed machine learning and rules-based architecture.",
                "Enabled the organization to boost after-market service sales through increased system throughput and reliability."
            ],
            link: "https://cat.com/en_US.html"
        },
        {
            company: "Zakti Security Labs",
            position: "Software Engineer Intern",
            location: "Naperville, IL",
            dates: "May 2019 - April 2023",
            bullets: [
                "Built security monitoring tools for high-risk healthcare and finance organizations.",
                "Reduced unauthorized accesses and built disaster recovery procedures.",
                "Conducted security audits using the NIST and OCTAVE frameworks."
            ],
            link: "https://zaktilabs.com"
        }
    ],
    education: [
        {
            institution: "University of Illinois Urbana-Champaign",
            link: "https://cs.illinois.edu",
            degrees: [
                {
                    dates: "Aug 2025 to May 2026",
                    degree: "Master's in Computer Science"
                },
                {
                    dates: "Aug 2022 to May 2025",
                    degree: "Bachelor's in Computer Science"
                }
            ],
            bullets: [
                "Minor in Business.",
                "Leading the ACM @ UIUC Infrastructure Committee, where we develop solutions to manage club operations and technology infrastructure.",
                "Served as the Treasurer from 2023-2024."
            ]
        },
        {
            institution: "Illinois Mathematics and Science Academy",
            link: "https://imsa.edu",
            degrees: [
                {
                    dates: "Aug 2019 to May 2022",
                    degree: "High School Diploma"
                }
            ],
            bullets: ["The Illinois Mathematics and Science Academy is a rigorous STEM-focused public boarding high school in Aurora, Illinois."]
        }
    ]
}