"use client";

import React, { useCallback, useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import Timeline from "./Timeline";

const REVEAL_MS = 2000;

/** Matches TimelinePanel card height so the slot stays put when a panel is off */
const TIMELINE_CARD_SLOT_MIN_H = "min-h-[32rem] h-full sm:min-h-[46rem]";

/** Oldest first in array; each new row is added on top and pushes the rest down. */
const WORK_ENTRIES = [
  {
    id: "work-sports",
    date: "2019 to 2022",
    course: "Sports Teacher and Coach",
    description:
      "My first jobs in Education where more about leadership and planning",
  },
  {
    id: "work-teacher",
    date: "2022 to 2023",
    course: "Elementary Web Developer Teacher",
    description:
      "While studying I had the opportunity to work as Teacher in Web Dev",
  },
  {
    id: "work-intern",
    date: "2024",
    course: "Internship Web Developer",
    description:
      "Internship in a company called PortF where I worked as FullStack Web Developer",
  },
];

const STUDY_ENTRIES = [
  {
    id: "study-cs50",
    date: "2019 to 2020",
    course: "CS50: Introduction to Computer Science",
    description:
      "My first course in Web Dev where i learn the basics of C++, Python, HTML and CSS!",
  },
  {
    id: "study-codeacademy",
    date: "2020 to 2022",
    course: "CodeAcademy - Full-Stack Engineer",
    description: "Learn more about HTML, CSS, JavaScript and React",
  },
  {
    id: "study-scrimba",
    date: "2022 to 2023",
    course: "Scrimba - Learn React Course",
    description:
      "Lastly I focused more in React while I keep learning other frameworks like Next.js and Tailwind CSS",
  },
];

function TimelinePanel({
  entries,
  visibleCount,
  boxClassName = "",
  fullWidth = false,
}) {
  const shown = entries.slice(0, visibleCount);
  const ordered = [...shown].reverse();

  return (
    <div
      className={`flex w-full h-full flex-col items-center self-center ${
        fullWidth ? "max-w-none" : "max-w-2xl"
      }`}
    >
      <div
        className={`flex w-[90%] max-w-full flex-col rounded-2xl border border-white/15 bg-[#12151f]/85 p-3 text-sm shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5) h-[38rem] ${boxClassName}`}
      >
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto pr-0.5">
          <div className="flex flex-col gap-8 sm:gap-10">
            {ordered.map((item, i) => (
              <div key={item.id} className="timeline-step-fade w-full">
                <Timeline
                  date={item.date}
                  course={item.course}
                  description={item.description}
                  rank={shown.length - i}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const [workOn, setWorkOn] = useState(true);
  const [studyOn, setStudyOn] = useState(false);
  const [workVisible, setWorkVisible] = useState(1);
  const [studyVisible, setStudyVisible] = useState(1);

  const toggleWork = useCallback(() => {
    setWorkOn((on) => {
      if (!on) setWorkVisible(1);
      return !on;
    });
  }, []);

  const toggleStudy = useCallback(() => {
    setStudyOn((on) => {
      if (!on) setStudyVisible(1);
      return !on;
    });
  }, []);

  useEffect(() => {
    if (!workOn) return undefined;
    const id = window.setInterval(() => {
      setWorkVisible((v) => Math.min(WORK_ENTRIES.length, v + 1));
    }, REVEAL_MS);
    return () => window.clearInterval(id);
  }, [workOn]);

  useEffect(() => {
    if (!studyOn) return undefined;
    const id = window.setInterval(() => {
      setStudyVisible((v) => Math.min(STUDY_ENTRIES.length, v + 1));
    }, REVEAL_MS);
    return () => window.clearInterval(id);
  }, [studyOn]);

  const bothOn = workOn && studyOn;

  return (
    <div className="flex w-full justify-center text-center">
      <div className="flex w-full flex-col items-center justify-center texl-lg">
        <div>
          <PageTitle id="experience" variant="section" title="Experience" />
        </div>

        <div className="mt-12 flex w-full max-w-6xl flex-col px-2 sm:mt-16">
          <div className="grid w-full grid-cols-2 gap-1 sm:gap-2">
            <div className="flex min-h-0 min-w-0 flex-col items-center gap-3">
              <button
                type="button"
                id="work"
                aria-pressed={workOn}
                aria-controls="work-panel"
                onClick={toggleWork}
                className={`w-[90%] max-w-full rounded-xl border px-4 py-2.5 text-base font-semibold transition sm:text-lg ${
                  workOn
                    ? "border-emerald-400/50 bg-emerald-500/15 text-emerald-100"
                    : "border-white/15 bg-white/5 text-white/60 hover:border-white/30 hover:text-white/85"
                }`}
              >
                Work
              </button>
              <div
                id="work-panel"
                className={`flex w-full min-w-0 flex-1 items-start justify-center ${TIMELINE_CARD_SLOT_MIN_H}`}
              >
                {workOn ? (
                  <TimelinePanel
                    entries={WORK_ENTRIES}
                    visibleCount={workVisible}
                    boxClassName="ring-1 ring-emerald-400/15"
                    fullWidth={bothOn}
                  />
                ) : null}
              </div>
            </div>
            <div className="flex min-h-0 min-w-0 flex-col items-center gap-3">
              <button
                type="button"
                id="study"
                aria-pressed={studyOn}
                aria-controls="study-panel"
                onClick={toggleStudy}
                className={`w-[90%] max-w-full rounded-xl border px-4 py-2.5 text-base font-semibold transition sm:text-lg ${
                  studyOn
                    ? "border-sky-400/50 bg-sky-500/15 text-sky-100"
                    : "border-white/15 bg-white/5 text-white/60 hover:border-white/30 hover:text-white/85"
                }`}
              >
                Study
              </button>
              <div
                id="study-panel"
                className={`flex w-full min-w-0 flex-1 items-start justify-center ${TIMELINE_CARD_SLOT_MIN_H}`}
              >
                {studyOn ? (
                  <TimelinePanel
                    entries={STUDY_ENTRIES}
                    visibleCount={studyVisible}
                    boxClassName="ring-1 ring-sky-400/15"
                    fullWidth={bothOn}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
