import React from "react";
import { TECH } from "./techData";
import TechRoamBounce from "./TechRoamBounce";

const pillClass =
  "flex shrink-0 items-center gap-2 rounded-full border border-white/35 bg-white/10 px-3 py-2 text-white shadow-sm sm:px-4";

function TechPills({ suffix = "" }) {
  return TECH.map(({ name, Icon }) => (
    <div key={suffix ? `${name}-${suffix}` : name} className={pillClass}>
      <Icon className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" aria-hidden />
      <span className="text-xs font-semibold sm:text-sm">{name}</span>
    </div>
  ));
}

export default function TechStack({ variant = "grid", mirror = false }) {
  const isStrip = variant === "strip";
  const isMarquee = variant === "marquee";
  const isRoam = variant === "roam";

  if (isRoam) {
    return <TechRoamBounce mirror={mirror} />;
  }

  if (isMarquee) {
    return (
      <div
        className="tech-marquee-group w-full overflow-hidden"
        role="region"
        aria-label="Technologies"
        aria-live="off"
      >
        <div className="tech-marquee-track flex w-max flex-nowrap items-center gap-3 py-2 sm:gap-4 md:gap-5">
          <TechPills suffix="a" />
          <TechPills suffix="b" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        isStrip
          ? "flex w-max flex-nowrap items-center gap-3 py-2 pl-4 pr-4 sm:gap-4 md:gap-5"
          : "mt-10 flex w-full flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5"
      }
    >
      <TechPills />
    </div>
  );
}
