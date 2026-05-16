import React from "react";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { railActionClass, railLabelClass } from "./railConstants";

export default function LeftRailActions() {
  return (
    <div className="flex flex-col items-center justify-center text-2xl lg:text-3xl">
      <ul className="flex flex-col items-center">
        <li className="flex justify-center items-center">
          <Link
            href="/CV_Ricardo Reis.pdf"
            className={`${railActionClass} mb-12`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV"
          >
            <BsFileEarmarkPdf size={28} className="shrink-0" />
            <span className={railLabelClass}>Download CV</span>
          </Link>
        </li>
        <li className="flex justify-center items-center">
          <Link
            href="https://www.linkedin.com/in/ricardo-mdr"
            className={`${railActionClass} mb-12`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin size={28} className="shrink-0" />
            <span className={railLabelClass}>LinkedIn</span>
          </Link>
        </li>
        <li className="flex justify-center items-center">
          <Link
            href="https://github.com/ricardomreis22"
            className={railActionClass}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <AiFillGithub size={28} className="shrink-0" />
            <span className={railLabelClass}>GitHub</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
