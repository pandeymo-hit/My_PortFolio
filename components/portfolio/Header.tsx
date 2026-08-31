"use client";

import { Grip, Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, resumeHref } from "@/data/portfolio";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  return (
    <header data-cursor-theme="gold" className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <nav
        className="container-shell flex h-18 items-center justify-between"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="group inline-flex text-[2rem] font-black leading-none text-[#101010]"
          aria-label="Mohit home"
          onClick={() => setActive("#home")}
        >
          <span className="relative drop-shadow-sm">
            Mohit Pandey<span className="text-[#f2c94c]">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className="group relative py-2 text-[0.66rem] font-black uppercase text-[#141414] transition-colors hover:text-black"
            >
              {link.label}
              <span
                className={`absolute inset-x-0 -bottom-1 mx-auto h-1 rounded-full bg-[#f2c94c] transition-all ${
                  active === link.href ? "w-7 opacity-100" : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                }`}
              />
            </a>
          ))}
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            className="group relative py-2 text-[0.66rem] font-black uppercase text-[#141414] transition-colors hover:text-black"
          >
            Resume
            <span className="absolute inset-x-0 -bottom-1 mx-auto h-1 w-0 rounded-full bg-[#f2c94c] opacity-0 transition-all group-hover:w-5 group-hover:opacity-100" />
          </a>
          <Grip size={17} aria-hidden="true" className="text-[#151515]" />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#101010] shadow-sm backdrop-blur md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <div
        className={`container-shell grid overflow-hidden transition-[grid-template-rows] duration-300 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="mb-4 rounded-[28px] border border-white/10 bg-[#151515]/96 p-3 text-white shadow-2xl shadow-black/20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setOpen(false);
                }}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold text-white"
              >
                {link.label}
                <span
                  className={`h-2 w-2 rounded-full ${
                    active === link.href ? "bg-[#f2c94c]" : "bg-black/12"
                  }`}
                />
              </a>
            ))}
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold text-white"
            >
              Resume
              <span className="h-2 w-2 rounded-full bg-[#f2c94c]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
