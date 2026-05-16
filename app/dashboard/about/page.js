"use client";

import { useEffect } from "react";

export default function AboutRedirect() {
  useEffect(() => {
    window.location.replace("/#about");
  }, []);

  return (
    <p className="p-8 text-center text-white">Taking you to About…</p>
  );
}
