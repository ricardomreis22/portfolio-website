"use client";

import React from "react";
import { AiFillHome, AiFillFolder } from "react-icons/ai";
import { BsFillBriefcaseFill, BsFillPersonFill } from "react-icons/bs";
import { railActionClass, railLabelClass } from "./railConstants";

const NavControls = ({ onNavigate }) => {
  const handleClick = () => {
    onNavigate?.();
  };

  return (
    <div className="flex flex-col items-center justify-center text-2xl lg:text-3xl">
      <ul className="flex flex-col items-center">
        <li className="flex items-center justify-center">
          <a
            href="#home"
            onClick={handleClick}
            className={`${railActionClass} mb-12`}
            aria-label="Home"
          >
            <AiFillHome size={28} className="shrink-0" />
            <span className={railLabelClass}>Home</span>
          </a>
        </li>
        <li className="flex items-center justify-center">
          <a
            href="#experience"
            onClick={handleClick}
            className={`${railActionClass} mb-12`}
            aria-label="Experience"
          >
            <BsFillBriefcaseFill size={28} className="shrink-0" />
            <span className={railLabelClass}>Experience</span>
          </a>
        </li>
        <li className="flex items-center justify-center">
          <a
            href="#projects"
            onClick={handleClick}
            className={`${railActionClass} mb-12`}
            aria-label="Projects"
          >
            <AiFillFolder size={28} className="shrink-0" />
            <span className={railLabelClass}>Projects</span>
          </a>
        </li>
        <li className="flex items-center justify-center">
          <a
            href="#about"
            onClick={handleClick}
            className={railActionClass}
            aria-label="About"
          >
            <BsFillPersonFill size={28} className="shrink-0" />
            <span className={railLabelClass}>About</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavControls;
