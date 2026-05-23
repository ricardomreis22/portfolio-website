"use client";

import React, { useCallback, useState } from "react";
import PageTitle from "./PageTitle";
import Timeline from "./Timeline";

const TIMELINE_CARD_SLOT_MIN_H = "min-h-[32rem] h-full sm:min-h-[46rem]";

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

const toggleBtnClass =
  "w-full max-w-full rounded-xl border px-4 py-2.5 text-lg font-semibold transition sm:text-xl";

function TimelinePanel({ entries, boxClassName = "" }) {
  const ordered = [...entries].reverse();

  return (
    <div
      className={`flex h-auto py-10 w-full max-w-full flex-col gap-20 rounded-2xl border border-white/15 bg-[#12151f]/85 
        text-base shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] sm:gap-10 sm:py-5 sm:pr-5 sm:pl-0 sm:pt-5 ${boxClassName}`}
    >
      {ordered.map((item) => (
        <Timeline
          key={item.id}
          className="timeline-step-fade w-full px-10"
          date={item.date}
          course={item.course}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("work");

  const isWork = activeTab === "work";
  const entries = isWork ? WORK_ENTRIES : STUDY_ENTRIES;
  const boxClassName = isWork
    ? "ring-1 ring-emerald-400/15"
    : "ring-1 ring-sky-400/15";

  const selectWork = useCallback(() => setActiveTab("work"), []);
  const selectStudy = useCallback(() => setActiveTab("study"), []);

  return (
    <div className="flex w-full flex-col items-center justify-center text-center text-lg sm:text-xl">
      <PageTitle variant="section" title="Experience" />

      <div className="mt-16 flex w-full max-w-6xl flex-col px-2 sm:mt-16">
        <div className="grid w-full grid-cols-2 gap-2 sm:gap-3 ">
          <button
            type="button"
            id="work"
            aria-pressed={isWork}
            aria-controls="experience-panel"
            onClick={selectWork}
            className={`${toggleBtnClass} backdrop-blur-sm ${
              isWork
                ? "border-emerald-400/50 bg-emerald-500/15 text-emerald-100"
                : "border-white/15 bg-white/5 text-white/60 hover:border-white/30 hover:text-white/85"
            }`}
          >
            Work
          </button>
          <button
            type="button"
            id="study"
            aria-pressed={!isWork}
            aria-controls="experience-panel"
            onClick={selectStudy}
            className={`${toggleBtnClass} ${
              !isWork
                ? "border-sky-400/50 bg-sky-500/15 text-sky-100"
                : "border-white/15 bg-white/5 text-white/60 hover:border-white/30 hover:text-white/85"
            }`}
          >
            Study
          </button>
        </div>

        <div
          id="experience-panel"
          className={`mt-6 flex w-full flex-col items-center sm:mt-8 ${TIMELINE_CARD_SLOT_MIN_H} backdrop-blur-sm`}
        >
          <h2
            className={`mb-4 w-full text-center text-2xl font-bold sm:text-3xl ${
              isWork ? "text-emerald-400" : "text-sky-400"
            }`}
          >
            {isWork ? "Work" : "Study"}
          </h2>
          <TimelinePanel entries={entries} boxClassName={boxClassName} />
        </div>
      </div>
    </div>
  );
}
