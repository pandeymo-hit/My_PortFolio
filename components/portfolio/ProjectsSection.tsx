"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/portfolio";
import { Reveal } from "./Reveal";

function getHostname(url: string) {
  return new URL(url).hostname.replace("www.", "");
}

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const showPreviousProject = () => {
    setActiveIndex((current) => (current === 0 ? projects.length - 1 : current - 1));
  };

  const showNextProject = () => {
    setActiveIndex((current) => (current === projects.length - 1 ? 0 : current + 1));
  };

  return (
    <section
      id="work"
      data-cursor-theme="light"
      className="relative bg-[#fbfaf5] py-16 md:py-18"
    >
      <div className="absolute left-0 top-16 hidden h-44 w-44 rounded-full border border-[#f2c94c]/70 md:block" />
      <div className="container-shell relative flex flex-col gap-10 md:grid-cols-[0.52fr_1.48fr] md:items-start">
        <Reveal>
          <p className="section-kicker mb-5">Projects</p>
          <h2 className=" text-[clamp(2rem,3.4vw,3.1rem)] font-black leading-[1.05] tracking-normal">
            Live project gallery.
          </h2>
          <p className="mt-5 max-w-xs text-base leading-7 text-[#4d4942]">
            Pick a project below and preview the real website inside the large
            browser frame.
          </p>
          {/* Start a Project button removed per request */}
        </Reveal>

        <div className="min-w-0">
          {/* <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
            <div className="flex min-h-12 items-center justify-between gap-4 border-b border-black/10 bg-[#f0efed] px-4">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <p className="truncate text-xs font-black uppercase tracking-[0.04em] text-[#6f6a60]">
                {getHostname(activeProject.href)}
              </p>
              <a
                href={activeProject.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${activeProject.title}`}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#151515] text-white transition-transform hover:-translate-y-0.5"
              >
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="relative h-[28rem] bg-[#111] md:h-[34rem]">
              <a
                href={activeProject.href}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 block cursor-pointer"
                aria-label={`Open ${activeProject.title}`}
              />
              <Image
                key={activeProject.href}
                src={activeProject.preview ?? activeProject.image}
                alt={activeProject.alt}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover bg-white"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />
            </div>

            <div className="grid gap-6 bg-[#f0efed] p-5 lg:grid-cols-[1fr_auto] lg:items-start">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.04em] text-[#d2a400]">
                  {activeProject.category}
                </p>
                <h3 className="mt-2 text-2xl font-black leading-tight text-[#151515]">
                  {activeProject.title}
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#4d4942]">
                  {activeProject.description}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPreviousProject}
                  aria-label="Show previous project"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#151515] transition-transform hover:-translate-y-0.5"
                >
                  <ArrowLeft size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNextProject}
                  aria-label="Show next project"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f2c94c] text-[#151515] shadow-[0_12px_24px_rgba(242,201,76,0.32)] transition-transform hover:-translate-y-0.5"
                >
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-black/10 bg-white px-5 py-4">
              {activeProject.stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-full border border-black/10 bg-[#fbfaf5] px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.04em] text-[#151515]"
                >
                  {stat}
                </span>
              ))}
              {activeProject.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full bg-[#151515] px-3 py-2 text-[0.68rem] font-bold text-white"
                >
                  {service}
                </span>
              ))}
            </div>
          </div> */}

          <div
            className="mt-5 flex snap-x gap-4 overflow-x-auto pb-3"
            aria-label="Project gallery carousel"
          >
            {projects.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setActiveIndex(index)}
                  aria-current={isActive ? "true" : undefined}
                  className={`group min-w-[15rem] snap-start overflow-hidden rounded-lg border bg-white text-left shadow-[0_14px_34px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 ${
                    isActive
                      ? "border-[#f2c94c] ring-4 ring-[#f2c94c]/25"
                      : "border-black/10"
                  }`}
                >
                  <div className="relative aspect-[1.65] bg-[#e8e4d9]">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="240px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[0.66rem] font-black uppercase tracking-[0.04em] text-[#d2a400]">
                      {getHostname(project.href)}
                    </p>
                    <h4 className="mt-2 text-base font-black leading-tight text-[#151515]">
                      {project.title}
                    </h4>
                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#6f6a60]">
                      {project.category}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-6 flex justify-center gap-3" aria-hidden="true">
            {projects.map((project, index) => (
              <span
                key={project.title}
                className={`h-3 w-3 rounded-full ${
                  index === activeIndex ? "bg-[#f2c94c]" : "bg-black/18"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
