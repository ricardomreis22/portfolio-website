import React from "react";

const baseClass =
  "twelve flex justify-center items-center text-xl font-semibold drop-shadow-xl xl:text-4xl";

/** `section`: in-view anchor — title lands under fixed header; no hero top gap */
export default function PageTitle({
  title,
  id,
  variant = "hero",
  className = "",
}) {
  const isSection = variant === "section";
  return (
    <div
      id={id}
      className={
        isSection
          ? `${baseClass} mt-0 w-full scroll-mt-20 pt-0 text-center ${className}`.trim()
          : `${baseClass} mt-10 ${className}`.trim()
      }
    >
      {title}
    </div>
  );
}
