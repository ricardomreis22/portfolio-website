"use client";

import React from "react";
import NavControls from "../../components/NavControls";
import PageTitle from "../../components/PageTitle";

import Navbar from "../../components/Navbar";

const About = () => {
  return (
    <div className="w-full flex justify-center text-center">
      <Navbar hambColor="text-[191d2b]" />
      <div className="hidden absolute right-0 top-[35%] mr-[26px] lg:block">
        <NavControls />
      </div>
      <div className="flex flex-col justify-center items-center text-xl w-[90%] md:w-[80%]">
        <div>
          <PageTitle title="About Me" />
        </div>
        <div className="flex flex-col justify-center items-center xl:flex-row xl:justify-around xl:items-start xl:mt-20">
          <div className="w-[80%] mb-20 text-sm text-justify leading-10 xl:text-lg xl:text-left xl:w-1/2 xl:mb-32">
            <h1 className=" mt-24">Greetings from Southampton, UK! 🚀</h1>
            <p className="mt-4">
              I'm your friendly neighborhood Full Stack Web Developer with a
              knack for turning coffee into code. Originating from the intense
              world of Benfica's futsal coaching, where every goal taught me the
              art of precision. Now, I've seamlessly shifted gears, blending
              sports ethos with tech wizardry.
            </p>
            <p className="mt-4">
              My journey reflects a commitment to constant evolution. From
              molding young sports enthusiasts to crafting innovative web
              solutions, I've learned that the game is not just on the field.
              Join me in this digital arena, where every line of code is a
              strategic move, and every bug squashed is a victory won. Ready to
              turn your ideas into web wonders—let's embark on this coding
              adventure together! 💻✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
