import React from "react";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFileEarmarkPdf } from "react-icons/bs";

const pillClass =
  "group z-50 flex flex-row items-center justify-center gap-0 overflow-hidden rounded-full border border-white/35 bg-white/10 px-3 py-3 text-white transition-all duration-300 hover:bg-white/20 group-hover:gap-2 group-hover:px-4";

const labelClass =
  "max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold opacity-0 transition-all duration-300 ease-out group-hover:max-w-[11rem] group-hover:opacity-100";

const SocialMedia = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Link
        href="https://www.linkedin.com/in/ricardo-mdr"
        className={pillClass}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <AiFillLinkedin size={28} className="shrink-0" />
        <span className={labelClass}>LinkedIn</span>
      </Link>
      <Link
        href="https://github.com/ricardomreis22"
        className={pillClass}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <AiFillGithub size={28} className="shrink-0" />
        <span className={labelClass}>GitHub</span>
      </Link>
      <Link
        href="/CV_Ricardo Reis.pdf"
        className={pillClass}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download CV"
      >
        <BsFileEarmarkPdf size={28} className="shrink-0" />
        <span className={labelClass}>Download CV</span>
      </Link>
    </div>
  );
};

export default SocialMedia;
