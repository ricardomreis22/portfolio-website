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
      <p className="flex items-start text-base font-bold leading-snug xs:text-xl">
        <span>{course}</span>
      </p>
      <p className="mt-1 text-sm text-white/60 xs:text-base">{date}</p>
      <p className="mt-3 text-sm leading-relaxed text-white/90 xs:text-lg">
        {description}
      </p>
    </div>
  );
};

export default Timeline;
