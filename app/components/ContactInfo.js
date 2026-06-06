import React from "react";

export default function ContactInfo({ className = "" }) {
  return (
    <div
      className={`flex flex-col items-center gap-1 text-sm sm:text-base ${className}`.trim()}
    >
      <a
        href="mailto:ricardomreis22@hotmail.com"
        className="transition hover:text-white/80"
      >
        ricardomreis22@hotmail.com
      </a>
      <a href="tel:+351913573834" className="transition hover:text-white/80">
        +351913573834
      </a>
    </div>
  );
}
