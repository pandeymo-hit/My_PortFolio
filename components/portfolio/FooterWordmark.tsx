"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { CSSProperties, PointerEvent } from "react";

export function FooterWordmark() {
  const reduceMotion = useReducedMotion();
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    setCursorPosition({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    });
  };

  const revealStyle = {
    "--reveal-x": `${cursorPosition.x}%`,
    "--reveal-y": `${cursorPosition.y}%`,
  } as CSSProperties;

  return (
    <motion.div
      aria-hidden="true"
      className="footer-wordmark mask-word relative -mb-10 mt-12 cursor-none overflow-hidden text-center text-[clamp(5rem,23vw,21rem)] font-black leading-[0.72] tracking-normal"
      initial={reduceMotion ? false : { opacity: 0, y: 80 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={handlePointerMove}
    >
      <span className="relative z-10 block text-[#151515]/8">MOHIT</span>
      <span
        className="footer-wordmark__image pointer-events-none absolute w-[1500px] h-[300px] inset-0 z-20 bg-[url('/images/footer-mohit-wordmark.png')] bg-contain bg-center bg-no-repeat opacity-100"
        style={revealStyle}
      />
    </motion.div>
  );
}
