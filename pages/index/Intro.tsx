import NiceLink from "../../components/NiceLink";
import { portfolio } from "../../data.js";

export const IntroComponent = () => {
  return (
    <>
      <p className="text-slate-200 mb-6 text-left text-lg print:text-black">
        {portfolio.blurb}
      </p>

      <p className="text-slate-100 mb-6 text-left text-lg print:text-black">
        I&apos;m currently the infrastructure lead for{" "}
        <NiceLink href="https://cs341.cs.illinois.edu">CS 341 @ UIUC</NiceLink>,
        where I build and maintain a distributed autograder system for systems
        programming. I&apos;m also a course assistant for{" "}
        <NiceLink href="https://cs357.cs.illinois.edu">CS 357 @ UIUC</NiceLink>{" "}
        where I help students learn numerical methods.
      </p>
      <p className="text-gray-100 mb-6 text-left text-lg print:text-black">
        This summer, I'll be working at{" "}
        <NiceLink href="https://capitalone.com">Capital One</NiceLink> on the
        Premium Products and Experiences team.
      </p>
      <p className="text-gray-100 mb-6 text-left text-lg print:text-black">
        I previously worked on the Card Tech team at Capital One, where I helped
        develop tools to streamline fraud detection and reduce fraud losses.
        Before that, I&apos;ve also worked at{" "}
        <NiceLink href="https://cat.com/en_US.html">Caterpillar</NiceLink> on
        the Analytics Execution team, and at{" "}
        <NiceLink href="https://zaktilabs.com">Zakti Security Labs</NiceLink>{" "}
        developing cybersecurity solutions.
      </p>
      <p className="text-gray-100 mb-6 text-left text-lg print:text-black">
        I&apos;m also involved in UIUC&apos;s{" "}
        <NiceLink href="https://acm.illinois.edu">
          Association for Computing Machinery
        </NiceLink>{" "}
        chapter, where I am currently the infrastructure committee chair, and
        formerly the Treasurer.
      </p>
      <p className="text-gray-100 mb-6 text-left text-lg print:text-black">
        Feel free to reach out if you want to chat!
      </p>
    </>
  );
};
