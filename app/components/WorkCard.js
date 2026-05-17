"use client";

import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiChevronDown, FiChevronUp, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

const btnClass =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/15 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:border-white/55 hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80";

const seeMoreClass =
  "inline-flex items-center gap-1.5 bg-[#191d2b] px-3 text-sm font-semibold text-white transition hover:text-white/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80";

function ProjectLinks({ githubUrl, siteUrl }) {
  return (
    <>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={btnClass}
      >
        <AiFillGithub className="shrink-0 text-xl" aria-hidden />
        GitHub
      </a>
      {siteUrl ? (
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
        >
          <FiExternalLink className="shrink-0 text-lg" aria-hidden />
          Website
        </a>
      ) : (
        <span
          className={`${btnClass} cursor-not-allowed border-white/20 bg-white/5 text-white/45 hover:border-white/20 hover:bg-white/5`}
          title="Live site URL not set"
        >
          <FiExternalLink className="shrink-0 text-lg" aria-hidden />
          Website
        </span>
      )}
    </>
  );
}

function SeeMoreToggle({ expanded, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={expanded}
      className={seeMoreClass}
    >
      {expanded ? (
        <FiChevronUp className="shrink-0 text-lg" aria-hidden />
      ) : (
        <FiChevronDown className="shrink-0 text-lg" aria-hidden />
      )}
      {expanded ? "See less" : "See more"}
    </button>
  );
}

const WorkCard = (props) => {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const isControlled = typeof props.onExpandedChange === "function";
  const expanded = isControlled ? Boolean(props.expanded) : internalExpanded;
  const langArr = props.lang;
  const githubUrl = props.link;
  const siteUrl = typeof props.website === "string" ? props.website.trim() : "";

  const toggleExpanded = () => {
    const next = !expanded;
    if (isControlled) props.onExpandedChange(next);
    else setInternalExpanded(next);
  };

  return (
    <div className="w-full min-w-0">
      <div className="group block w-full">
        <div className="mb-3 flex w-full items-center justify-center px-4 py-2">
          <h1 className="text-center text-2xl font-bold leading-tight text-white">
            {props.title}
          </h1>
        </div>
        <div className="relative aspect-[3/2] w-full cursor-default overflow-hidden bg-black/40 shadow-xl">
          <Image
            src={props.img}
            alt={props.title ? `${props.title} preview` : "Project preview"}
            fill
            sizes="(max-width: 768px) 90vw, 50vw"
            unoptimized
            className="object-contain object-center opacity-100 transition-opacity duration-300 ease-out"
          />

          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/70 px-4 sm:hidden">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ProjectLinks githubUrl={githubUrl} siteUrl={siteUrl} />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 z-10 hidden items-center justify-center bg-black/80 px-4 opacity-0 transition-opacity duration-300 ease-out group-hover:pointer-events-auto group-hover:opacity-100 sm:flex">
            <div className="flex max-h-[min(90%,22rem)] w-full flex-col items-center gap-5 overflow-y-auto py-2 sm:w-3/4">
              <p className="max-w-prose text-justify text-base font-bold leading-10 text-white lg:text-xl">
                {props.info}
              </p>
              <div className="pointer-events-auto mt-10">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <ProjectLinks githubUrl={githubUrl} siteUrl={siteUrl} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {expanded ? (
          <div className="mt-6 pt-2 sm:hidden">
            <p className="text-justify text-base font-bold leading-8 text-white">
              {props.info}
            </p>
          </div>
        ) : null}
      </div>
      {!expanded && (
        <div className="z-50 mt-1 flex w-full flex-wrap justify-start">
          {langArr.map((item, index) => (
            <div
              key={index}
              className="mb-1 mr-1 rounded-md border border-solid border-white/40 bg-white px-2 text-sm font-bold text-[#191d2b] lg:text-lg"
            >
              {item}
            </div>
          ))}
        </div>
      )}
      <div className="relative mt-6 sm:hidden">
        <div className="border-t border-white/40" aria-hidden="true" />
        <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 justify-center">
          <SeeMoreToggle expanded={expanded} onToggle={toggleExpanded} />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
