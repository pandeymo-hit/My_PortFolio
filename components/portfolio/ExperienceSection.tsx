"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experience, resumeHref } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function ExperienceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      data-cursor-theme="dark"
      className="relative overflow-hidden bg-[#151515] py-14 text-white md:py-14"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(242,201,76,0.34),transparent_24rem),radial-gradient(circle_at_100%_100%,rgba(242,201,76,0.38),transparent_25rem)]"
      />
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[-1px] z-10 h-28 w-full text-white"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0 86c152 42 315 52 488 29 184-24 315-25 476 8 158 32 323 33 476-15v42H0Z"
        />
      </svg>
      <div className="container-shell relative z-20 grid gap-10 pb-8 md:grid-cols-[0.72fr_1.58fr] md:items-center">
        <Reveal>
          <p className="section-kicker ink-hover mb-5">Experience</p>
          <h2 className="magnetic-text max-w-sm text-[clamp(2rem,3vw,2.65rem)] font-black leading-[1.05] tracking-normal">
            My professional journey so far.
          </h2>
          <p className="ink-hover mt-5 max-w-xs text-sm leading-7 text-white/70">
            A summary of places I&apos;ve worked and the value I&apos;ve helped
            deliver.
          </p>
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-4 border border-white/35 px-5 text-xs font-black uppercase tracking-[0.04em] text-white transition-all hover:-translate-y-1 hover:border-[#f2c94c] hover:text-[#f2c94c]"
          >
            View Resume
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>

        <div className="relative">
          <div className="absolute left-2 top-1 h-[calc(100%-1rem)] w-px border-l border-dashed border-white/20 md:left-0 md:top-2 md:h-px md:w-full md:border-l-0 md:border-t" />
          <div className="grid gap-9 md:grid-cols-2 md:gap-8">
            {experience.map((item, index) => (
              <motion.article
                key={item.period}
                className="relative pl-10 md:pl-0 md:pt-9"
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
              >
                <motion.span
                  className="absolute left-0 top-1 h-4 w-4 rounded-full bg-[#f2c94c] shadow-[0_0_0_8px_rgba(242,201,76,0.11)] md:top-0"
                  initial={reduceMotion ? false : { scale: 0.3 }}
                  whileInView={reduceMotion ? undefined : { scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.12 + 0.1 }}
                />
                <p className="ink-hover text-sm font-medium text-white">
                  {item.period}
                </p>
                <h3 className="ink-hover mt-3 text-lg font-black leading-tight">{item.role}</h3>
                <p className="ink-hover mt-2 text-sm font-semibold text-white/72">{item.company}</p>
                <p className="mt-3 max-w-[15rem] text-sm leading-6 text-white/70">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
