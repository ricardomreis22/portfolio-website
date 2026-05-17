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

function useIsLgUp() {
  const [isLgUp, setIsLgUp] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 1024px)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsLgUp(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isLgUp;
}

const toggleBtnClass =
  "w-[90%] max-w-full rounded-xl border px-4 py-2.5 text-lg font-semibold transition sm:text-xl";

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
        className={`flex h-[38rem] w-full max-w-full flex-col rounded-2xl border border-white/15 bg-[#12151f]/ py-4 text-base shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] sm:p-5 ${boxClassName}`}
      >
        <div className="flex flex-col w-full gap-8 pt-4 sm:gap-10 sm:pt-5">
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
  );
}

export default function ExperienceSection() {
  const isLgUp = useIsLgUp();
  const [workOn, setWorkOn] = useState(true);
  const [studyOn, setStudyOn] = useState(false);
  const [workVisible, setWorkVisible] = useState(1);
  const [studyVisible, setStudyVisible] = useState(1);

  const toggleWork = useCallback(() => {
    if (isLgUp) {
      setWorkOn((on) => {
        if (!on) setWorkVisible(1);
        return !on;
      });
      return;
    }
    setWorkOn(true);
    setStudyOn(false);
    setWorkVisible(1);
  }, [isLgUp]);

  const toggleStudy = useCallback(() => {
    if (isLgUp) {
      setStudyOn((on) => {
        if (!on) setStudyVisible(1);
        return !on;
      });
      return;
    }
    setStudyOn(true);
    setWorkOn(false);
    setStudyVisible(1);
  }, [isLgUp]);

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
      <div className="flex w-full flex-col items-center justify-center text-lg sm:text-xl">
        <div>
          <PageTitle id="experience" variant="section" title="Experience" />
        </div>

        <div className="mt-12 flex w-full max-w-6xl flex-col sm:mt-16">
          <div className="mb-3 grid w-full grid-cols-2 gap-2 lg:hidden">
            <button
              type="button"
              aria-pressed={workOn}
              aria-controls="work-panel"
              onClick={toggleWork}
              className={`${toggleBtnClass} w-full ${
                workOn
                  ? "border-emerald-400/50 bg-emerald-500/15 text-emerald-100"
                  : "border-white/15 bg-white/5 text-white/60 hover:border-white/30 hover:text-white/85"
              }`}
            >
              Work
            </button>
            <button
              type="button"
              aria-pressed={studyOn}
              aria-controls="study-panel"
              onClick={toggleStudy}
              className={`${toggleBtnClass} w-full ${
                studyOn
                  ? "border-sky-400/50 bg-sky-500/15 text-sky-100"
                  : "border-white/15 bg-white/5 text-white/60 hover:border-white/30 hover:text-white/85"
              }`}
            >
              Study
            </button>
          </div>

          <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-2">
            <div className="hidden min-h-0 min-w-0 flex-col items-center gap-3 lg:flex">
              <button
                type="button"
                id="work"
                aria-pressed={workOn}
                aria-controls="work-panel"
                onClick={toggleWork}
                className={`${toggleBtnClass} ${
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
            <div className="hidden min-h-0 min-w-0 flex-col items-center gap-3 lg:flex">
              <button
                type="button"
                id="study"
                aria-pressed={studyOn}
                aria-controls="study-panel"
                onClick={toggleStudy}
                className={`${toggleBtnClass} ${
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

            <div className="lg:hidden mt-10">
              {workOn ? (
                <div
                  className={`flex w-full items-start justify-center ${TIMELINE_CARD_SLOT_MIN_H}`}
                >
                  <TimelinePanel
                    entries={WORK_ENTRIES}
                    visibleCount={workVisible}
                    boxClassName="ring-1 ring-emerald-400/15"
                    fullWidth={false}
                  />
                </div>
              ) : null}
              {studyOn ? (
                <div
                  className={`flex w-full items-start justify-center ${TIMELINE_CARD_SLOT_MIN_H}`}
                >
                  <TimelinePanel
                    entries={STUDY_ENTRIES}
                    visibleCount={studyVisible}
                    boxClassName="ring-1 ring-sky-400/15"
                    fullWidth={false}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
