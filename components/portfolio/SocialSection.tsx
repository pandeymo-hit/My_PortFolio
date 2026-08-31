"use client";

import { ArrowUpRight } from "lucide-react";
import { socials } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function SocialSection() {
  return (
    <section data-cursor-theme="light" className="relative bg-[#fbfaf5] px-4 py-10 md:py-12">
      <div className="container-shell">
        <Reveal
          className="relative overflow-hidden rounded-[42px] bg-[#171717] px-6 py-9 text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] md:rounded-full md:px-20 md:py-8"
          data-cursor-theme="dark"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_95%,rgba(242,201,76,0.38),transparent_18rem),radial-gradient(circle_at_95%_0%,rgba(242,201,76,0.18),transparent_17rem)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:min-w-[360px]">
              <p className="section-kicker ink-hover mb-4">Let&apos;s Connect</p>
              <h2 className="magnetic-text text-[clamp(1.9rem,3vw,2.6rem)] font-black leading-[1.05] tracking-normal">
                Find me on these platforms.
              </h2>
            </div>
            <div className="grid gap-0 overflow-hidden rounded-lg border border-white/14 sm:grid-cols-2 lg:flex lg:rounded-none lg:border-0">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex min-h-14 items-center justify-between gap-6 border-b border-white/12 bg-white/[0.02] px-5 text-sm font-semibold transition-all hover:-translate-y-1 hover:bg-[#f2c94c] hover:text-[#151515] sm:border-r lg:min-w-38 lg:border-b-0 lg:bg-transparent"
                  >
                    <span className="inline-flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-white text-[#151515]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      {social.label}
                    </span>
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
