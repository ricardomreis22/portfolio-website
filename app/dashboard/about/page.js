"use client";

import React from "react";
import NavControls from "../../components/NavControls";
import PageTitle from "../../components/PageTitle";
import SkillsBar from "../../components/SkillsBar";
import Subtitle from "../../components/Subtitle";
import Timeline from "../../components/Timeline";
import Navbar from "../../components/Navbar";
import Complements from "../../components/Complements";

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
          <div
            className="grid grid-cols-2 w-[80%] gap-2 text-xl font-bold xl:w-1/3 xl:gap-x-0
           xl:h-20 xl:mt-32"
          >
            <Complements adj="Love to Learn" class="hover:-translate-y-2" />
            <Complements adj="Team Worker" class="hover:-translate-y-2" />
            <Complements adj="Hard Worker" class="hover:translate-y-2" />
            <Complements adj="Self-taught" class="hover:translate-y-2" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[80%] md:w-[100%] lg:w-[90%]">
          <div className="w-[80%] xl:w-[70%]">
            <Subtitle title="My Skills" />
          </div>
          <div className="grid gap-6 place-items-center grid-cols-2 w-[100%] mb-20 md:gap-y-12 md:gap-x-32 xl:gap-y-16">
            <SkillsBar lang="HTML" count="80" />
            <SkillsBar lang="JS" count="80" />
            <SkillsBar lang="CSS" count="70" />
            <SkillsBar lang="Tailwind" count="70" />
            <SkillsBar lang="React" count="70" />
            <SkillsBar lang="Python" count="60" />
            <SkillsBar lang="Bootstrap" count="60" />
            <SkillsBar lang="C++" count="50" />
            <SkillsBar lang="Flask" count="50" />
            <SkillsBar lang="Vite.js" count="70" />
            <SkillsBar lang="Next.js" count="70" />
          </div>
          <div className="w-[80%] lg:w-[70%]">
            <Subtitle title="Timeline" />
          </div>
          <div className="flex flex-col w-[100%] justify-between items-center lg:flex-row ">
            <div className="grid grid-cols-1 gap-y-20 gap-x-64 place-items-center text-left w-[90%] mb-44 ml-6 mt-10 md:gap-x-10 lg:w-[50%] xl:ml-24 relative ">
              <h1 className="text-xl justify-start -rotate-90 absolute bottom-[50%] -left-20 lg:-left-14">
                Work
              </h1>
              <Timeline
                date="2024"
                course="Internship Web Developer"
                description="Internship in a company called PortF where I worked as FullStack Web Developer"
              />
              <Timeline
                date="2019 to 2022"
                course="Sports Teacher and Coach"
                description="My first jobs in Education where more about leadership and planning"
              />
              <Timeline
                date="2022 to 2023"
                course="Elementary Web Developer Teacher"
                description="While studying I had the opportunity to work as Teacher in Web Dev"
              />
            </div>
            <div className="grid grid-cols-1 gap-y-20 gap-x-64 place-items-center text-left w-[100%] mb-44 ml-6 mt-10 md:gap-x-10 lg:w-[50%] xl:ml-24 relative ">
              <h1 className="text-xl justify-start -rotate-90 absolute bottom-[50%] -left-20 lg:-left-14">
                Study
              </h1>
              <Timeline
                date="2019 to 2020"
                course="CS50: Introduction to Computer Science"
                description="My first course in Web Dev where i learn the basics of C++, Python, HTML and CSS!"
              />
              <Timeline
                date="2020 to 2022"
                course="CodeAcademy - Full-Stack Engineer"
                description="Learn more about HTML, CSS, JavaScript and React"
              />
              <Timeline
                date="2022 to 2023"
                course="Scrimba - Learn React Course"
                description="Lastly I focused more in React while I keep learning other frameworks like Next.js and Tailwind CSS"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
