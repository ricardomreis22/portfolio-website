import Navbar from "./components/Navbar";
import Image from "next/image";
import NavControls from "./components/NavControls";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import LeftRailActions from "./components/LeftRailActions";
import TechStack from "./components/TechStack";

export default function Page() {
  return (
    <main className="relative min-h-screen text-white">
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
      <div className="relative z-[28] mx-auto flex w-[90%] flex-col items-center justify-center gap-0 sm:backdrop-blur-sm sm:w-[90%] lg:mx-[25vw] lg:w-1/2 lg:max-w-none">
        <section
          className="relative w-full overflow-hidden sm:h-screen"
          id="home"
          variant="section"
        >
          <div
            className="home flex items-center justify-center w-full"
            aria-hidden
          />
          <div className="relative z-10 flex min-h-screen w-full flex-col justify-between py-8">
            <div className="flex w-full flex-col gap-10 pt-12 sm:gap-12 sm:pt-20 sm:w-[75%] sm:mx-auto">
              <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-center sm:gap-6 ">
                <div className="min-w-0 flex flex-col flex-1 text-justify font-bold lg:text-lg ">
                  <p className="text-xl sm:text-2xl ">Hi there!!</p>
                  <p className="mt-4 text-xl sm:text-2xl">I am Ricardo Reis</p>
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
              <p className="w-full text-justify text-xl font-normal leading-10 backdrop-blur-sm">
                I'm a Full Stack Web Developer based in Leiria, Portugal with 7
                years of training and continuous hands-on experience in
                programming, focused on building efficient, modern, and
                well-structured solutions.
              </p>
              <div className="w-full backdrop-blur-sm ">
                <TechStack variant="grid" size="sm" />
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-1 text-base mt-20">
                <p>ricardomreis22@hotmail.com</p>
                <p>+351913573834</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          variant="section"
          className="min-h-screen w-full mt-24 sm:w-[75%] sm:h-auto"
        >
          <ExperienceSection />
        </section>

        <section
          id="projects"
          variant="section"
          className="min-h-screen w-full mt-24 sm:w-[75%]"
        >
          <ProjectsSection />
        </section>

        <section
          variant="section"
          className="flex min-h-screen w-full mt-24 sm:w-[75%]"
          aria-label="About"
        >
          <AboutSection />
        </section>
      </div>
    </main>
  );
}
