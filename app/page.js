import Navbar from "./components/Navbar";
import Image from "next/image";
import NavControls from "./components/NavControls";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import LeftRailActions from "./components/LeftRailActions";
import TechStack from "./components/TechStack";
import ContactInfo from "./components/ContactInfo";

export default function Page() {
  return (
    <main className="relative min-h-screen pb-28 text-white lg:pb-0">
      <Navbar />
      {/* Tech pills roam the full viewport; radial mask keeps the center area lighter */}
      <div className="pointer-events-none fixed inset-0 z-[25]">
        <div className="tech-roam-viewport-mask h-full w-full">
          <TechStack variant="roam" />
        </div>
      </div>
      {/* Vertical side rails: ~1/4 viewport each on lg+; main content uses center half */}
      <aside className="pointer-events-none fixed inset-y-0 left-0 z-0 hidden md:w-1/4 border-r border-white/15 bg-[#0d0f16]/90 lg:flex">
        <div className="relative z-10 flex h-full min-h-0 w-full flex-col items-center justify-center pointer-events-auto">
          <LeftRailActions />
        </div>
      </aside>
      <aside className="pointer-events-none fixed inset-y-0 right-0 z-0 hidden sm:w-1/4 border-l border-white/15 bg-[#0d0f16]/90 lg:flex">
        <div className="relative z-10 flex h-full min-h-0 w-full flex-col items-center justify-center pointer-events-auto">
          <NavControls />
        </div>
      </aside>
      <div className="relative z-[28] mx-auto flex w-[90%] flex-col items-center justify-center gap-0 text-sm sm:text-base sm:backdrop-blur-sm sm:w-[90%] lg:mx-[25vw] lg:w-1/2 xl:mx-auto lg:max-w-none">
        <section
          className="relative flex min-h-section w-full flex-col sm:w-[90%] xl:w-[65%]"
          id="home"
          variant="section"
        >
          <div
            className="home flex items-center justify-center w-full"
            aria-hidden
          />
          <div className="relative z-10 mx-auto flex h-full min-h-0 w-full flex-col justify-between py-8">
            <div className="flex w-full flex-col gap-10 pt-12 sm:gap-12 sm:pt-20">
              <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-center sm:gap-6 ">
                <div className="min-w-0 flex flex-col flex-1 text-center font-bold lg:text-lg ">
                  <p className="text-lg  sm:text-2xl ">Hi there!!</p>
                  <p className="mt-4 text-lg sm:text-2xl">I am Ricardo Reis</p>
                </div>
                <div className="flex shrink-0 justify-center sm:justify-end">
                  <Image
                    src="/Foto.jpeg"
                    alt="Ricardo Reis"
                    width={220}
                    height={280}
                    className="z-10 h-auto w-44 rounded-3xl sm:w-52 md:w-56"
                    priority
                  />
                </div>
              </div>
              <p className="w-full text-justify text-base font-normal leading-8 backdrop-blur-sm sm:text-xl sm:leading-10">
                I'm a Full Stack Web Developer based in Leiria, Portugal with 7
                years of training and continuous hands-on experience in
                programming, focused on building efficient, modern, and
                well-structured solutions.
              </p>
              <div className="w-full backdrop-blur-sm ">
                <TechStack variant="grid" size="sm" />
              </div>
            </div>

            <div className=" w-full flex-col items-center gap-6 lg:flex">
              <ContactInfo className="mt-auto pt-20 " />
            </div>
          </div>
        </section>

        <section
          id="experience"
          variant="section"
          className="mt-24 flex min-h-section w-full flex-col xs:w-[90%] xl:w-[65%]"
        >
          <ExperienceSection />
        </section>

        <section
          id="projects"
          variant="section"
          className="mt-24 flex min-h-section w-full flex-col sm:w-[90%] xl:w-[65%]"
        >
          <ProjectsSection />
        </section>

        <section
          variant="section"
          className="mt-24 flex min-h-section w-full flex-col sm:mt-40 sm:w-[90%] xl:w-[65%] lg:mt-24"
          aria-label="About"
        >
          <AboutSection />
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-[29] flex items-center justify-center border-t border-white/20 bg-[#0d0f16]/95 px-4 py-3 backdrop-blur-sm lg:hidden">
        <LeftRailActions variant="panel" />
      </div>
    </main>
  );
}
