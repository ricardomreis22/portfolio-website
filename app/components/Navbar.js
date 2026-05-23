"use client";

import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import NavControls from "./NavControls";

/**
 * Outer shell uses pointer-events-none so empty areas don't steal clicks from
 * page content. Interactive bits use pointer-events-auto (required for this to work).
 */
const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <header className="pointer-events-none fixed left-0 top-0 z-[1000] flex w-full justify-end p-3">
      {active ? (
        <div className="pointer-events-auto fixed inset-0 z-[1001] flex flex-col items-center justify-center bg-black/90 p-4 text-3xl font-semibold lg:hidden">
          <NavControls onNavigate={() => setActive(false)} />
        </div>
      ) : null}
      <button
        type="button"
        className="pointer-events-auto relative z-[1002] rounded-full border border-white/35 bg-[#191d2b] p-3 shadow-md lg:hidden"
        onClick={() => setActive((open) => !open)}
        aria-expanded={active}
        aria-label={active ? "Close menu" : "Open menu"}
      >
        {active ? (
          <FaTimes className="pointer-events-none" aria-hidden />
        ) : (
          <FaBars className="pointer-events-none" aria-hidden />
        )}
      </button>
    </header>
  );
};

export default Navbar;
