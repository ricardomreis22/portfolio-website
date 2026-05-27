import React from "react";
import PageTitle from "./PageTitle";

export default function AboutSection() {
  return (
    <div className="flex w-full flex-col items-center justify-start pt-6 text-center text-lg sm:pt-8 sm:text-xl">
      <PageTitle id="about" variant="section" title="About Me" />

      <div className="mx-auto mt-20 flex w-full max-w-3xl flex-col px-2 text-justify text-xl leading-10 ">
        <h1>Greetings from Portugal! 🚀</h1>
        <p className="mt-4">
          I'm your friendly neighborhood Full Stack Web Developer with a knack
          for turning coffee into code. Originating from the intense world of
          Benfica's futsal coaching, where every goal taught me the art of
          precision. Now, I've seamlessly shifted gears, blending sports ethos
          with tech wizardry.
        </p>
        <p className="mt-4">
          My journey reflects a commitment to constant evolution. From molding
          young sports enthusiasts to crafting innovative web solutions, I've
          learned that the game is not just on the field. Join me in this
          digital arena, where every line of code is a strategic move, and every
          bug squashed is a victory won. Ready to turn your ideas into web
          wonders—let's embark on this coding adventure together! 💻✨
        </p>
      </div>
    </div>
  );
}
