import React from "react";

function formatOrdinal(n) {
  const abs = Math.abs(n);
  const lastTwo = abs % 100;
  const lastOne = abs % 10;
  if (lastTwo >= 11 && lastTwo <= 13) return `${n}th`;
  if (lastOne === 1) return `${n}st`;
  if (lastOne === 2) return `${n}nd`;
  if (lastOne === 3) return `${n}rd`;
  return `${n}th`;
}

const Timeline = ({ course, date, description, rank }) => {
  const label = rank != null ? formatOrdinal(rank) : null;

  return (
    <div className="flex w-full gap-3 text-start sm:gap-4">
      {label ? (
        <div
          className="w-9 shrink-0 self-start pt-1 text-right text-xs font-semibold tabular-nums text-white/45 sm:w-10 sm:text-sm"
          aria-hidden
        >
          {label}
        </div>
      ) : (
        <div className="w-9 shrink-0 sm:w-10" aria-hidden />
      )}
      <div className="min-w-0 flex-1">
        <p className="text-base font-bold leading-snug sm:text-lg">{course}</p>
        <p className="mt-1 text-xs text-white/60 sm:text-sm">{date}</p>
        <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Timeline;
