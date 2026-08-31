import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { FooterWordmark } from "./FooterWordmark";

export function ContactSection() {
  return (
    <section
      id="contact"
      data-cursor-theme="light"
      className="relative overflow-hidden bg-[#fbfaf5] pb-0 pt-8 md:pt-12"
    >
      <div className="container-shell">
        <Reveal className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
          <div>
            <p className="section-kicker ink-hover mb-5">Contact</p>
            <h2 className="magnetic-text max-w-xs text-[clamp(2rem,3.4vw,3rem)] font-black leading-[1.05] tracking-normal">
              Have a project in mind?
            </h2>
            <p className="ink-hover mt-4 max-w-xs text-base leading-7 text-[#4d4942]">
              I&apos;m always open to discussing new opportunities and
              interesting projects.
            </p>
          </div>

          <form className="grid gap-5 lg:grid-cols-[1fr_1fr_1.6fr]">
            <label className="grid gap-2 text-sm font-black text-[#151515]">
              <span className="sr-only">Name</span>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                className="min-h-14 border border-black/18 bg-transparent px-5 text-sm font-medium outline-none transition-all hover:-translate-y-0.5 hover:border-black/35 focus:border-[#f2c94c]"
                placeholder="Your Name"
                />
              </label>
            <label className="grid gap-2 text-sm font-black text-[#151515]">
              <span className="sr-only">Email</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                className="min-h-14 border border-black/18 bg-transparent px-5 text-sm font-medium outline-none transition-all hover:-translate-y-0.5 hover:border-black/35 focus:border-[#f2c94c]"
                placeholder="Your Email"
                />
              </label>
            <label className="grid gap-2 text-sm font-black text-[#151515] lg:row-span-2">
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                rows={4}
                className="h-full min-h-28 resize-none border border-black/18 bg-transparent px-5 py-5 text-sm font-medium outline-none transition-all hover:-translate-y-0.5 hover:border-black/35 focus:border-[#f2c94c]"
                placeholder="Your Message"
              />
            </label>
            <button
              type="submit"
              className="inline-flex min-h-14 items-center justify-center gap-6 bg-[#f2c94c] px-7 text-xs font-black uppercase tracking-[0.04em] text-[#171717] shadow-[0_18px_38px_rgba(242,201,76,0.28)] transition-transform hover:-translate-y-1 hover:scale-[1.03]"
            >
              Send Message
              <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          </form>
        </Reveal>
      </div>
      <FooterWordmark />
    </section>
  );
}
