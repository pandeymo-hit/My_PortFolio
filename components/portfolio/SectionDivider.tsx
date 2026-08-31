type SectionDividerProps = {
  fill: string;
  position: "top" | "bottom";
  flip?: boolean;
};

export function SectionDivider({ fill, position, flip = false }: SectionDividerProps) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute left-0 z-10 h-20 w-full md:h-28 ${
        position === "top" ? "-top-px" : "-bottom-px"
      } ${flip ? "rotate-180" : ""}`}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
    >
      <path
        fill={fill}
        d="M0 0h1440v82c-128 22-244 33-348 33-157 0-289-45-451-45-179 0-302 50-461 50-66 0-126-9-180-26V0Z"
      />
    </svg>
  );
}
