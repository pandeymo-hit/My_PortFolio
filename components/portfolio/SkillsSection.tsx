"use client";

import { motion, useReducedMotion } from "framer-motion";
import { techStack } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function SkillsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section data-cursor-theme="light" className="relative bg-white py-18 md:py-20">
      <div className="container-shell grid gap-10 md:grid-cols-[0.52fr_1.48fr] md:items-start">
        <Reveal>
          <p className="ink-hover mb-5 inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.04em] text-[#f2b900] transition-all duration-300 hover:-translate-y-0.5 hover:[text-shadow:0_12px_34px_rgba(242,201,76,0.22)] after:h-px after:w-10 after:bg-[#f2b900]/60">
            Skills
          </p>
          <h2 className="magnetic-text inline-block max-w-sm origin-left text-[clamp(2rem,3.4vw,3.1rem)] font-black leading-[1.05] tracking-normal transition-all duration-300 hover:-translate-y-1 hover:text-[#f2c94c] hover:[text-shadow:0_18px_46px_rgba(242,201,76,0.26)]">
            Tech stack I work with.
          </h2>
          <p className="ink-hover mt-5 max-w-xs text-base leading-7 text-[#4d4942] transition-all duration-300 hover:-translate-y-0.5 hover:text-[#f2c94c] hover:[text-shadow:0_12px_34px_rgba(242,201,76,0.22)]">
            Categorized tools, frameworks, platforms and core concepts I use
            to build clean, scalable digital products.
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {techStack.map((category, categoryIndex) => (
            <motion.article
              key={category.title}
              className="relative overflow-hidden rounded-xl border border-black/8 bg-white p-5 shadow-[0_18px_46px_rgba(0,0,0,0.07)]"
              initial={reduceMotion ? false : { opacity: 0, y: 26 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: categoryIndex * 0.08 }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#f2c94c]/14 blur-2xl" />
              <div className="relative flex min-h-full flex-col">
                <h3 className="ink-hover text-lg font-black leading-tight text-[#151515] transition-all duration-300 hover:-translate-y-0.5 hover:text-[#f2c94c]">
                  {category.title}
                </h3>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {category.items.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        className="stack-pop group relative flex min-h-24 flex-col items-center justify-center gap-2 rounded-lg bg-[#f7f7f5] px-3 py-4 text-center transition-all duration-300 hover:bg-[linear-gradient(135deg,#ffffff_0%,#fff8df_100%)] hover:shadow-[0_26px_60px_rgba(18,18,18,0.15)]"
                        variants={
                          reduceMotion
                            ? undefined
                            : {
                                hidden: { opacity: 0, scale: 0.94 },
                                show: { opacity: 1, scale: 1, y: 0 },
                                hover: { y: -10, scale: 1.04 },
                              }
                        }
                        initial={reduceMotion ? false : "hidden"}
                        whileInView={reduceMotion ? undefined : "show"}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          duration: 0.42,
                          delay: categoryIndex * 0.08 + skillIndex * 0.035,
                        }}
                        whileHover={reduceMotion ? undefined : "hover"}
                      >
                        <motion.span
                          variants={
                            reduceMotion
                              ? undefined
                              : { hover: { y: -4, scale: 1.14, rotate: -3 } }
                          }
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="inline-flex"
                        >
                          <Icon
                            aria-hidden="true"
                            className={`stack-icon h-9 w-9 shrink-0 ${skill.tone}`}
                          />
                        </motion.span>
                        <span className="text-sm font-black leading-tight text-[#151515]">
                          {skill.name}
                        </span>
                        <span className="absolute bottom-3 h-0.5 w-4 rounded-full bg-[#f2c94c]" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
