"use client";

import Image from "next/image";
import { ArrowUpRight, Code2, Eye, Layers, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { resumeHref } from "@/data/portfolio";

const heroImage = {
  src: "/images/mohit-hero-cutout.png",
  alt: "Mohit Pandey portrait cutout",
  width: 1024,
  height: 1536,
};

const outlineLetterClass =
  "text-transparent [-webkit-text-fill-color:transparent] [-webkit-text-stroke:clamp(1.5px,0.014em,2.4px)_#151515]";

function HeroImage() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-20 mx-auto h-[72%] max-h-[680px] w-[min(74vw,480px)] sm:h-[80%] sm:w-[min(58vw,530px)] lg:h-[85%] lg:w-[min(42vw,580px)]"
      animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute inset-x-10 bottom-0 h-14 rounded-full bg-black/12 blur-2xl" />
      <div className="relative h-full">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          width={heroImage.width}
          height={heroImage.height}
          priority
          sizes="(max-width: 768px) 74vw, 42vw"
          className="h-full w-full object-contain object-bottom"
        />
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      data-cursor-theme="gold"
      className="relative isolate min-h-[760px] overflow-hidden bg-[#f7f6f2] pt-24 text-[#101010] sm:min-h-[820px] md:pt-18"
    >
      <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(16,16,16,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(16,16,16,0.04)_1px,transparent_1px)] bg-[size:25%_100%,100%_33.333%]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-32 bg-[linear-gradient(180deg,transparent,#fbfaf5)]" />

      <div className="container-shell relative min-h-[680px] sm:min-h-[740px]">
        <div className="relative z-10 pt-12 sm:pt-18">
          <p className="inline-flex items-center gap-2 text-[0.72rem] font-black uppercase text-[#59554d]">
            <Sparkles className="h-4 w-4 text-[#f2c94c]" aria-hidden="true" />
            Hello, I&apos;m Mohit
          </p>
        </div>

        <h1 className="pointer-events-none absolute left-1/2 top-[130px] z-10 flex w-[130vw] -translate-x-1/2 select-none justify-center text-center text-[5.2rem] font-black leading-none text-black sm:top-[126px] sm:text-[8.5rem] md:text-[11rem] lg:top-[112px] lg:text-[14rem]">
          <span>D</span>
          <span >e</span>
          <span>v</span>
          <span >e</span>
          <span>l</span>
          {/* <span className={outlineLetterClass}>o</span> */}
          <span >o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
        </h1>

        <HeroImage />

        <div className="absolute bottom-30 left-0 z-30 max-w-[19rem] sm:bottom-26 md:bottom-24">
          <div className="border-l-4 border-[#f2c94c] pl-4">
            <h2 className="text-[1.05rem] font-black uppercase leading-tight sm:text-[1.22rem]">
              A digital designer and creative developer.
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 border border-black/10 bg-white/72 px-3 py-2 text-[0.72rem] font-bold uppercase text-[#151515] backdrop-blur">
                <Code2 className="h-4 w-4 text-[#f2c94c]" aria-hidden="true" />
                Web Development
              </span>
              <span className="inline-flex items-center gap-2 border border-black/10 bg-white/72 px-3 py-2 text-[0.72rem] font-bold uppercase text-[#151515] backdrop-blur">
                <Layers className="h-4 w-4 text-[#f2c94c]" aria-hidden="true" />
                UI/UX Design
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-0 z-30 grid w-[min(100%,22rem)] grid-cols-2 items-end gap-0 sm:bottom-10">
          <div className="border border-black/10 bg-white/80 px-5 py-5 backdrop-blur">
            <p className="text-3xl font-black leading-none">100%</p>
            <p className="mt-2 text-[0.68rem] font-bold uppercase leading-tight text-[#5f5a52]">
              Client Satisfaction Rate
            </p>
          </div>
          <div className="bg-black px-5 py-6 text-white shadow-[0_22px_44px_rgba(0,0,0,0.18)]">
            <p className="text-3xl font-black leading-none">
              24<span className="text-[#f2c94c]">+</span>
            </p>
            <p className="mt-2 text-[0.68rem] font-bold uppercase leading-tight text-white/70">
              Projects Launched
            </p>
          </div>
        </div>

        <div className="absolute right-0 top-10 z-30 hidden items-center gap-3 md:flex">
          <a
            href="#work"
            className="inline-flex h-11 items-center justify-center gap-2 bg-black px-5 text-[0.68rem] font-black uppercase text-white transition-transform hover:-translate-y-0.5"
          >
            Work
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 border border-black/10 bg-white/80 px-4 text-[0.68rem] font-black uppercase text-[#151515] transition-transform hover:-translate-y-0.5"
            aria-label="View Resume"
          >
            Resume
            <Eye size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
