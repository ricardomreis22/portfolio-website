"use client";

import React, { useCallback, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import WorkCard from "./WorkCard";
import PageTitle from "./PageTitle";

const PROJECTS = [
  {
    id: "padel",
    title: "Padel Tournament",
    img: "/padelgif.gif",
    link: "https://github.com/ricardomreis22/padeltournaments.git",
    website: "https://padeltournaments.vercel.app/",
    lang: ["Html", "Python", "CSS", "Flask"],
    info: "This was my first project, that I made to finish CS50x course where I create a Padel Club website, that the users can login the website to find tournaments in the zone for their level and register themselfs in these tournaments.",
  },
  {
    id: "quizzical",
    title: "Quizzical",
    img: "/quizzicalgif.gif",
    link: "https://github.com/ricardomreis22/Quizzical.git",
    website: "https://quizzical-j396.vercel.app/",
    lang: ["Html", "Javascript", "CSS", "React", "Vite.js"],
    info: "The final project of the React Course where I made a quiz! In this project I would get the questions from an api and presented them in the quiz showing the correct answer and how many correct answers the user got. ",
  },
  {
    id: "restaurant",
    title: "Restaurant Manager App",
    img: "/championsgif.gif",
    link: "https://github.com/ricardomreis22/restaurant-manager.git",
    website: "https://restaurant-manager-eight.vercel.app/",
    lang: ["Html", "TypeScript", "CSS", "React", "Next.js", "Prisma"],
    info: "A Next.js app I built to help restaurant teams manage locations, tables, and payments. It uses authentication and a database to keep restaurant information organized and up to date.",
  },
];

const LAST = PROJECTS.length - 1;

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const [mobileExpandedId, setMobileExpandedId] = useState(null);

  const mobileProjects = mobileExpandedId
    ? PROJECTS.filter((p) => p.id === mobileExpandedId)
    : PROJECTS;

  const prev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const next = useCallback(() => {
    setIndex((i) => Math.min(LAST, i + 1));
  }, []);

  const project = PROJECTS[index];

  return (
    <div className="flex flex-col items-center w-full justify-center text-center">
      <div className=" flex w-full flex-col items-center justify-center">
        <div className="mx-0 flex w-full flex-col items-center justify-center text-center sm:mx-5">
          <PageTitle id="projects" variant="section" title="Projects" />
        </div>
      </div>

      <div className="mt-12 flex w-full flex-col items-center px-2 sm:mt-20 sm:w-[75%] sm:px-0">
        <div className="flex w-full flex-col gap-16 sm:hidden">
          {mobileProjects.map((p) => (
            <div key={p.id} className="w-full">
              <WorkCard
                img={p.img}
                link={p.link}
                website={p.website}
                title={p.title}
                lang={p.lang}
                info={p.info}
                expanded={mobileExpandedId === p.id}
                onExpandedChange={(open) =>
                  setMobileExpandedId(open ? p.id : null)
                }
              />
            </div>
          ))}
        </div>

        <div className="hidden w-full flex-col items-center sm:flex">
        <div key={project.id} className="timeline-step-fade w-full">
          <WorkCard
            img={project.img}
            link={project.link}
            website={project.website}
            title={project.title}
            lang={project.lang}
            info={project.info}
          />
        </div>

        <div className="mt-32 flex w-full items-center justify-between gap-4 px-2">
          <button
            type="button"
            onClick={prev}
            disabled={index === 0}
            className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white/90 transition enabled:hover:border-white/40 enabled:hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30 sm:text-base"
            aria-label="Previous project"
          >
            <BsChevronLeft className="text-xl" aria-hidden />
            <span className="hidden sm:inline">Previous</span>
          </button>
          <span className="text-sm text-white/50 tabular-nums">
            {index + 1} / {PROJECTS.length}
          </span>
          <button
            type="button"
            onClick={next}
            disabled={index === LAST}
            className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white/90 transition enabled:hover:border-white/40 enabled:hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30 sm:text-base"
            aria-label="Next project"
          >
            <span className="hidden sm:inline">Next</span>
            <BsChevronRight className="text-xl" aria-hidden />
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
