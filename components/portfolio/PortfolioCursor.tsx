"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type CursorTheme = "light" | "dark" | "gold";

const interactiveSelector =
  "a, button, input, textarea, select, [role='button'], .stack-pop";

export function PortfolioCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const cursor = cursorRef.current;

    if (!cursor || !finePointer.matches) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId = 0;
    let visible = false;
    let active = false;
    let theme: CursorTheme = "light";

    const updateClasses = () => {
      cursor.classList.toggle("is-visible", visible);
      cursor.classList.toggle("is-active", active);
      cursor.dataset.theme = theme;
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.28;
      currentY += (targetY - currentY) * 0.28;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      rafId = window.requestAnimationFrame(render);
    };

    const startRender = () => {
      if (!rafId) rafId = window.requestAnimationFrame(render);
    };

    const stopRender = () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const themeRoot = target?.closest<HTMLElement>("[data-cursor-theme]");

      targetX = event.clientX;
      targetY = event.clientY;
      visible = true;
      active = Boolean(target?.closest(interactiveSelector));
      theme = (themeRoot?.dataset.cursorTheme ?? "light") as CursorTheme;

      updateClasses();
      startRender();
    };

    const handlePointerLeave = () => {
      visible = false;
      active = false;
      updateClasses();
      stopRender();
    };

    document.documentElement.classList.add("custom-cursor-ready");
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      stopRender();
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      document.documentElement.classList.remove("custom-cursor-ready");
    };
  }, []);

  return (
    <div ref={cursorRef} aria-hidden="true" className="portfolio-cursor">
      <div className="portfolio-cursor__icon">
        <Image
          src="/images/bug-cursor.png"
          alt=""
          width={44}
          height={44}
          draggable={false}
        />
      </div>
    </div>
  );
}
