import React, { useEffect, useRef, useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Building2,
  FileText,
  GraduationCap
} from 'lucide-react';
import { portfolio } from './data';
import { LinkButton } from './components/LinkButton';
import { ExperienceCard } from './components/ExperienceCard';
import { EducationCard } from './components/EducationCard';
import { ScrollHint } from './components/ScrollHint';

// This modifies how fast you scroll past the hero (desktop only)

const SCROLL_MULTIPLIER = 2.5;

const LinkButtons: React.FC = () => {
  return (
    <div className="flex gap-2 mt-1 flex-wrap place-content-center">
      <LinkButton href={`https://github.com/${portfolio.links.github}`} icon={Github} text="GitHub" />
      <LinkButton href={`https://linkedin.com/in/${portfolio.links.linkedin}`} icon={Linkedin} text="LinkedIn" />
      <LinkButton href={`mailto:${portfolio.links.email}`} icon={Mail} text="Email" />
      <LinkButton href={portfolio.links.resume} icon={FileText} text="Resume" />
    </div>
  )
}

const Portfolio: React.FC = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [isHeader, setIsHeader] = useState(false);
  const rafRef = useRef<number | null>(null);
  const wheelDeltaRef = useRef<number>(0);
  const isTouchDevice = useRef<boolean>(false);

  useEffect(() => {
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        setIsHeader(!entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (nameRef.current) {
      observer.observe(nameRef.current);
    }

    return () => {
      if (nameRef.current) {
        observer.unobserve(nameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice.current) {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      if (isHeader) return;
      event.preventDefault();
      wheelDeltaRef.current += event.deltaY;
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          window.scrollBy({
            top: wheelDeltaRef.current * SCROLL_MULTIPLIER,
            left: 0,
            behavior: 'auto'
          });
          wheelDeltaRef.current = 0;
          rafRef.current = null;
        });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isHeader, SCROLL_MULTIPLIER]);

  return (
    <div className="bg-slate-900 text-white">
      <div className="fixed inset-0 bg-slate-900 -z-10"></div>      
      {/* Sticky Header */}
      <header
        className={`
          sticky top-0 z-50 border-b border-slate-700
          bg-slate-800
          overflow-hidden
          transition-all duration-500
          ${isHeader ? 'max-h-64 py-2 opacity-100' : 'max-h-0 py-0 opacity-0'}
        `}
      >
        <div className="flex items-center justify-center">
          <img
            src={portfolio.picture}
            alt={`Picture of ${portfolio.name}`}
            className="rounded-full border-2 border-blue-400"
            style={{ width: '40px', height: '40px' }}
          />
          <h2 className="text-2xl font-bold ml-2">
            {portfolio.name}
          </h2>
        </div>
        <LinkButtons />
      </header>

      {/* Hero Section with Preview */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-between bg-slate-900">
        <div className="flex-grow flex flex-col items-center justify-center py-16">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center">
            <img
              src={portfolio.picture}
              alt={`Picture of ${portfolio.name}`}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-400 mb-6"
            />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {portfolio.greeting}
            </h1>

            <p className="text-gray-300 mb-6 text-justify max-w-2xl px-4 text-lg">
              {portfolio.blurb}
            </p>

            <p ref={nameRef}></p>

            <LinkButtons />
          </div>
        </div>
        <ScrollHint visible={!isHeader}/>
      </section>

      {/* Content Section */}
      <main className="max-w-6xl mx-auto mt-auto px-6">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 mt-auto">
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {portfolio.experience.map((experience, index) => <ExperienceCard experience={experience} key={`experience-${index}`}/>)}
            </div>
          </section>
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-4">
              {portfolio.education.map((x, index) => <EducationCard education={x} key={`education-${index}`}/>)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
