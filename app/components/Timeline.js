import React from "react";

const Timeline = ({ course, date, description, className = "" }) => {
  return (
    <div className={`w-full p-5 text-start ${className}`.trim()}>
      <p className="text-lg font-bold leading-snug sm:text-xl">{course}</p>
      <p className="text-sm text-white/60 sm:text-base">{date}</p>
      <p className="mt-3 text-base leading-relaxed text-white/90 sm:text-lg">
        {description}
      </p>
    </div>
  );
};

export default Timeline;
