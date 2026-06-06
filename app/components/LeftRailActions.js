import React from "react";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { railActionClass, railLabelClass } from "./railConstants";

const ACTIONS = [
  {
    href: "/CV_Ricardo Reis.pdf",
    label: "Download CV",
    Icon: BsFileEarmarkPdf,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/ricardo-mdr",
    label: "LinkedIn",
    Icon: AiFillLinkedin,
    external: true,
  },
  {
    href: "https://github.com/ricardomreis22",
    label: "GitHub",
    Icon: AiFillGithub,
    external: true,
  },
];

const panelActionClass =
  "group relative flex items-center justify-center rounded-full border border-white/25 bg-[#191d2b] p-2.5 text-white transition hover:border-white/40 hover:bg-white/10";

const panelLabelClass =
  "pointer-events-none absolute bottom-full left-1/2 z-[60] mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/20 bg-[#0d0f16]/95 px-2 py-1 text-xs font-semibold opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100";

export default function LeftRailActions({ variant = "rail" }) {
  const isPanel = variant === "panel";

  if (isPanel) {
    return (
      <div className="flex w-full items-center justify-center gap-3">
        {ACTIONS.map(({ href, label, Icon, external }) => (
          <Link
            key={label}
            href={href}
            className={panelActionClass}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            aria-label={label}
          >
            <Icon size={22} className="shrink-0" aria-hidden />
            <span className={panelLabelClass}>{label}</span>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center text-2xl lg:text-3xl">
      <ul className="flex flex-col items-center">
        {ACTIONS.map(({ href, label, Icon, external }, index) => (
          <li key={label} className="flex items-center justify-center">
            <Link
              href={href}
              className={`${railActionClass} ${index < ACTIONS.length - 1 ? "mb-12" : ""}`}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={label}
            >
              <Icon size={28} className="shrink-0" />
              <span className={railLabelClass}>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
