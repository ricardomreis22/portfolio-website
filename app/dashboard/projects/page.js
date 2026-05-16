"use client";

import { useEffect } from "react";

export default function ProjectsRedirect() {
  useEffect(() => {
    window.location.replace("/#projects");
  }, []);

  return <p className="p-8 text-center text-white">Taking you to Projects…</p>;
}
