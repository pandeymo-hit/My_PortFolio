"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentProps, PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<
  {
    className?: string;
    delay?: number;
    "data-cursor-theme"?: string;
  } & Pick<ComponentProps<typeof motion.div>, "id">
>;

export function Reveal({
  children,
  className,
  delay = 0,
  id,
  "data-cursor-theme": cursorTheme,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      data-cursor-theme={cursorTheme}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 34 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
