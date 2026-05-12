import React from "react";
import NavControls from "../../components/NavControls";
import WorkCard from "../../components/WorkCard";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
const Projects = () => {
  const padelLang = ["Html", "Python", "CSS", "Flask"];
  const restaurantManagerLang = [
    "Html",
    "TypeScript",
    "CSS",
    "React",
    "Next.js",
    "Prisma",
  ];
  const quizzicalLang = ["Html", "Javascript", "CSS", "React", "Vite.js"];

  return (
    <div>
      <Navbar />
      <div className="hidden absolute right-0 top-[35%] mr-12 lg:block">
        <NavControls />
      </div>
      <div className="flex flex-col items-center w-[90%] mx-auto md:w-[80%]">
        <div className="left h-2/3 w-full relative flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center mx-5">
            <PageTitle title="Projects" />
          </div>
        </div>
        <div className="right w-[80%] max-w-[90%] mx-auto grid text-center gap-20 mb-10 mt-20 justify-center lg:grid-cols-2 lg:max-w-[80%] xl:mt-32 2xl:grid-cols-3 xl:gap-20">
          <WorkCard
            img="/padelgif.gif"
            link="https://github.com/ricardomreis22/padeltournaments.git"
            title="Padel Tournament"
            lang={padelLang}
            info="This was my first project, that I made to finish CS50x course where I create a Padel Club website, that the users can login the website to find tournaments in the zone for their level and register themselfs in these tournaments."
          />
          <WorkCard
            img="/championsgif.gif"
            link="https://github.com/ricardomreis22/restaurant-manager.git"
            title="Restaurant Manager App"
            lang={restaurantManagerLang}
            info="A Next.js app I built to help restaurant teams manage locations, tables, and payments. It uses authentication and a database to keep restaurant information organized and up to date."
          />
          <WorkCard
            img="/quizzicalgif.gif"
            link="https://github.com/ricardomreis22/Quizzical.git"
            title="Quizzical"
            lang={quizzicalLang}
            info="The final project of the React Course where I made a quiz! In this project I would get the questions from an api and presented them in the quiz showing the correct answer and how many correct answers the user got. "
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
