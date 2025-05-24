import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Building2,
  FileText,
  GraduationCap,
} from "lucide-react";
import { portfolio } from "../../data.js";
import { IconLinkButton, LinkButton } from "../../components/LinkButton";
import { ExperienceCard } from "../../components/ExperienceCard";
import { ScrollHint } from "../../components/ScrollHint";
import { throttle } from "lodash-es";
import { IntroComponent } from "./Intro";
import NiceLink from "../../components/NiceLink";

// This modifies how fast you scroll past the hero (desktop only)
const SCROLL_MULTIPLIER = 2.5;

const LinkButtons: React.FC = () => {
  return (
    <div className="flex gap-2 mt-1 flex-wrap place-content-center">
      <LinkButton
        href={`https://github.com/${portfolio.links.github}`}
        icon={Github}
        text="GitHub"
      />
      <LinkButton
        href={`https://linkedin.com/in/${portfolio.links.linkedin}`}
        icon={Linkedin}
        text="LinkedIn"
      />
      <LinkButton
        href={`mailto:${portfolio.links.email}`}
        icon={Mail}
        text="Email"
      />
      <LinkButton href={portfolio.links.resume} icon={FileText} text="Resume" />
    </div>
  );
};

const IconOnlyLinkButtons: React.FC = () => {
  return (
    <div className="flex gap-2 mt-1 flex-wrap place-content-center">
      <IconLinkButton
        href={`https://github.com/${portfolio.links.github}`}
        icon={<Github size={24} />}
        text="GitHub"
      />
      <IconLinkButton
        href={`https://linkedin.com/in/${portfolio.links.linkedin}`}
        icon={<Linkedin size={24} />}
        text="LinkedIn"
      />
      <IconLinkButton
        href={`mailto:${portfolio.links.email}`}
        icon={<Mail size={24} />}
        text="Email"
      />
      <IconLinkButton
        href={portfolio.links.resume}
        icon={<FileText size={24} />}
        text="Resume"
      />
    </div>
  );
};

const Portfolio: React.FC = () => {
  const nameRef = useRef<HTMLDivElement>(null);
  const [isHeader, setIsHeader] = useState(false);
  const isHeaderRef = useRef<boolean>(isHeader);
  const rafRef = useRef<number | null>(null);
  const wheelDeltaRef = useRef<number>(0);
  const isTouchDevice = useRef<boolean>(false);

  useEffect(() => {
    isTouchDevice.current =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const newIsHeader = !entry.isIntersecting;
        if (isHeaderRef.current !== newIsHeader) {
          setIsHeader(newIsHeader);
          isHeaderRef.current = newIsHeader;
        }
      });
    };

    const throttledObserverCallback = isTouchDevice.current
      ? throttle(observerCallback, 1000)
      : observerCallback;

    const observer = new IntersectionObserver(
      throttledObserverCallback,
      observerOptions,
    );

    if (nameRef.current) {
      observer.observe(nameRef.current);
    }

    return () => {
      if (nameRef.current) {
        observer.unobserve(nameRef.current);
      }
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice.current) {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      if (isHeaderRef.current) return;
      event.preventDefault();
      wheelDeltaRef.current += event.deltaY;
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          window.scrollBy({
            top: wheelDeltaRef.current * SCROLL_MULTIPLIER,
            left: 0,
            behavior: "auto",
          });
          wheelDeltaRef.current = 0;
          rafRef.current = null;
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-slate-900 text-white">
      <div className="fixed inset-0 bg-slate-900 -z-10"></div>
      {/* Sticky Header */}
      <header
        className={`
          sticky top-0 z-50 border-b border-slate-700
          bg-slate-800
          overflow-hidden
          transition-all duration-300
          ${isHeader ? "max-h-64 py-2 opacity-100" : "max-h-0 py-0 opacity-0"}
        `}
      >
        <div className="flex items-center justify-center">
          <h2 className="text-4xl font-bold text-center">{portfolio.name}</h2>
        </div>
        <IconOnlyLinkButtons />
      </header>
      <section className="relative w-full min-h-screen flex flex-col items-center justify-between bg-slate-900">
        <div className="flex-grow flex flex-col items-center justify-center py-16 print:py-0">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center shrink-0 pt-2">
                <img
                  src={portfolio.picture}
                  alt={`Picture of ${portfolio.name}`}
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full"
                />
                <h3 className="mt-4 font-semibold text-xl print:text-black">{portfolio.name}</h3>
                <NiceLink href={`mailto:${portfolio.links.email}`}>
                  {portfolio.links.email}
                </NiceLink>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 print:text-black">
                  {portfolio.greeting}
                </h1>

                {/* Sentinel Element */}
                <div ref={nameRef} className="sentinel h-1"></div>
                <IntroComponent />
                <LinkButtons />
              </div>
            </div>
          </div>
        </div>
        <ScrollHint visible={!isHeader} />
      </section>

      {/* Content Section */}
      <main className="max-w-6xl mx-auto mt-auto px-6">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 mt-auto">
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl font-bold print:text-black">Experience</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {portfolio.experience.map((experience, index) => (
                <ExperienceCard
                  experience={experience}
                  id={`experience-${index}`}
                  key={`experience-${index}-p`}
                />
              ))}
            </div>
          </section>
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl font-bold print:text-black">Education</h2>
            </div>
            <div className="space-y-4">
              {portfolio.education.map((x, index) => (
                <ExperienceCard
                  experience={x}
                  id={`education-${index}`}
                  key={`education-${index}-p`}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
