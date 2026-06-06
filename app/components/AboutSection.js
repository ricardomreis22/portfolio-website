import React from "react";
import PageTitle from "./PageTitle";
import ContactInfo from "./ContactInfo";

export default function AboutSection() {
  return (
    <div className="flex h-full min-h-0 w-full flex-col items-center justify-start pt-6 text-center text-base sm:pt-8 sm:text-xl">
      <PageTitle id="about" variant="section" title="About Me" />

      <div className="mx-auto mt-20 flex w-full flex-col justify-between h-screen gap-4 px-2 text-justify text-base leading-8 sm:mt-28 sm:gap-6 sm:text-xl sm:leading-10 lg:max-w-none lg:mt-20 lg:gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold mb-20">
            Greetings from Portugal! 🚀
          </h1>
          <p className="mb-10">
            I'm your friendly neighborhood Full Stack Web Developer with a knack
            for turning coffee into code. Originating from the intense world of
            Benfica's futsal coaching, where every goal taught me the art of
            precision. Now, I've seamlessly shifted gears, blending sports ethos
            with tech wizardry.
          </p>
          <p>
            My journey reflects a commitment to constant evolution. From molding
            young sports enthusiasts to crafting innovative web solutions, I've
            learned that the game is not just on the field. Join me in this
            digital arena, where every line of code is a strategic move, and
            every bug squashed is a victory won. Ready to turn your ideas into
            web wonders—let's embark on this coding adventure together! 💻✨
          </p>
        </div>
        <ContactInfo className="lg:hidden lg:mb-12" />
      </div>
    </div>
  );
}
