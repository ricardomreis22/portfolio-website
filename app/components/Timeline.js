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
      <p className="flex items-start text-lg font-bold leading-snug sm:text-xl">
        <span>{course}</span>
      </p>
      <p className="text-sm text-white/60 sm:text-base">{date}</p>
      <p className="mt-3 text-base leading-relaxed text-white/90 sm:text-lg">
        {description}
      </p>
    </div>
  );
};

export default Timeline;
