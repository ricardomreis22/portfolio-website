"use client";

import React, { useState } from "react";
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

const toggleLabelClass =
  "appearance-none border-0 bg-transparent p-0 m-0 cursor-pointer text-2xl font-semibold transition sm:text-3xl focus:outline-none";

function ExperienceToggle({ isWork, onSelectWork, onSelectStudy }) {
  return (
    <div
      role="tablist"
      aria-label="Experience type"
      className="flex w-full items-center justify-center gap-16 sm:gap-24"
    >
      <button
        type="button"
        role="tab"
        aria-selected={isWork}
        id="work"
        aria-controls="experience-panel"
        onClick={onSelectWork}
        className={`${toggleLabelClass} ${
          isWork
            ? "text-emerald-400"
            : "text-white/40 hover:text-white/60"
        }`}
      >
        Work
      </button>

      <button
        type="button"
        role="tab"
        aria-selected={!isWork}
        id="study"
        aria-controls="experience-panel"
        onClick={onSelectStudy}
        className={`${toggleLabelClass} ${
          !isWork
            ? "text-sky-400"
            : "text-white/40 hover:text-white/60"
        }`}
      >
        Study
      </button>
    </div>
  );
}

function TimelinePanel({ entries, boxClassName = "", isWork }) {
  const ordered = [...entries].reverse();

  return (
    <div
      className={`flex h-auto py-10 w-full max-w-full flex-col gap-10 rounded-2xl 
        text-sm sm:text-base sm:gap-10 sm:py-5 sm:pr-5 sm:pl-0 sm:pt-5 ${boxClassName}`}
    >
      {ordered.map((item) => (
        <Timeline
          key={item.id}
          className="timeline-step-fade w-full px-4 sm:px-6"
          date={item.date}
          course={item.course}
          description={item.description}
          isWork={isWork}
        />
      ))}
    </div>
  );
}

export default function ExperienceSection() {
  const [isWork, setIsWork] = useState(true);

  const entries = isWork ? WORK_ENTRIES : STUDY_ENTRIES;
  const boxClassName = isWork
    ? "border-2 border-emerald-400"
    : "border-2 border-sky-400";

  return (
    <div className="flex w-full flex-col items-center justify-center text-center text-sm sm:text-xl">
      <PageTitle variant="section" title="Experience" />

      <div className="mt-16 flex w-full flex-col sm:mt-16">
        <div className="w-full sm:mb-5">
          <ExperienceToggle
            isWork={isWork}
            onSelectWork={() => setIsWork(true)}
            onSelectStudy={() => setIsWork(false)}
          />
        </div>

        <div
          id="experience-panel"
          className={`mt-6 flex w-full flex-col items-center sm:mt-8 ${TIMELINE_CARD_SLOT_MIN_H} backdrop-blur-sm`}
        >
          <TimelinePanel
            entries={entries}
            boxClassName={boxClassName}
            isWork={isWork}
          />
        </div>
      </div>
    </div>
  );
}
