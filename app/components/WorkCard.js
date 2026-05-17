import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

const btnClass =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/15 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:border-white/55 hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80";

const WorkCard = (props) => {
  const langArr = props.lang;
  const githubUrl = props.link;
  const siteUrl = typeof props.website === "string" ? props.website.trim() : "";

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
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/80 px-4 opacity-0 transition-opacity duration-300 ease-out group-hover:pointer-events-auto group-hover:opacity-100">
            <div className="flex max-h-[min(90%,22rem)] w-full max-w-lg flex-col items-center gap-5 overflow-y-auto py-2">
              <p className="max-w-prose text-center text-base text-white">
                {props.info}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnClass}
                >
                  <AiFillGithub className="text-xl shrink-0" aria-hidden />
                  GitHub
                </a>
                {siteUrl ? (
                  <a
                    href={siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnClass}
                  >
                    <FiExternalLink className="text-lg shrink-0" aria-hidden />
                    Website
                  </a>
                ) : (
                  <span
                    className={`${btnClass} cursor-not-allowed border-white/20 bg-white/5 text-white/45 hover:border-white/20 hover:bg-white/5`}
                    title="Live site URL not set"
                  >
                    <FiExternalLink className="text-lg shrink-0" aria-hidden />
                    Website
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1 flex w-full flex-wrap justify-start z-50 ">
        {langArr.map((item, index) => {
          return (
            <div
              key={index}
              className="mb-1 mr-1 border border-solid border-white/40 bg-white px-2 rounded-md text-lg font-bold text-[#191d2b]"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkCard;
