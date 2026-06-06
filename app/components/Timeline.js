import React from "react";

const Timeline = ({
  course,
  date,
  description,
  className = "",
  isWork = true,
}) => {
  return (
    <div className={`w-full text-start ${className}`.trim()}>
      <p className="flex items-start text-base font-bold leading-snug sm:text-xl ">
        <span>{course}</span>
      </p>
      <p className="text-xs text-white/60 sm:text-base mt-1">{date}</p>
      <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-lg">
        {description}
      </p>
    </div>
  );
};

export default Timeline;
