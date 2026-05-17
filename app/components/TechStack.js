import React from "react";
import { TECH } from "./techData";
import TechRoamBounce from "./TechRoamBounce";

const pillSizes = {
  default: {
    pill: "gap-2 rounded-full border border-white/35 bg-white/10 px-3 py-2 shadow-sm sm:px-4",
    icon: "h-6 w-6 sm:h-7 sm:w-7",
    label: "text-xs sm:text-sm",
    gap: "gap-3 sm:gap-4 md:gap-5",
  },
  sm: {
    pill: "gap-1 rounded-full border border-white/35 bg-white/10 px-2 py-1 shadow-sm",
    icon: "h-3.5 w-3.5 sm:h-4 sm:w-4",
    label: "text-[10px] sm:text-xs",
    gap: "gap-1.5 sm:gap-2",
  },
};

function TechPills({ suffix = "", size = "default" }) {
  const s = pillSizes[size] ?? pillSizes.default;
  return TECH.map(({ name, Icon }) => (
    <div
      key={suffix ? `${name}-${suffix}` : name}
      className={`flex shrink-0 items-center text-white ${s.pill}`}
    >
      <Icon className={`shrink-0 ${s.icon}`} aria-hidden />
      <span className={`font-semibold ${s.label}`}>{name}</span>
    </div>
  ));
}

export default function TechStack({
  variant = "grid",
  mirror = false,
  size = "default",
}) {
  const isStrip = variant === "strip";
  const isMarquee = variant === "marquee";
  const isRoam = variant === "roam";

  if (isRoam) {
    return <TechRoamBounce mirror={mirror} />;
  }

  const gap = pillSizes[size]?.gap ?? pillSizes.default.gap;

  if (isMarquee) {
    return (
      <div
        className="tech-marquee-group w-full overflow-hidden"
        role="region"
        aria-label="Technologies"
        aria-live="off"
      >
        <div
          className={`tech-marquee-track flex w-max flex-nowrap items-center py-2 ${gap}`}
        >
          <TechPills suffix="a" size={size} />
          <TechPills suffix="b" size={size} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        isStrip
          ? `flex w-max flex-nowrap items-center py-2 pl-4 pr-4 ${gap}`
          : `mt-10 flex w-full flex-wrap items-center justify-center ${gap}`
      }
    >
      <TechPills size={size} />
    </div>
  );
}
