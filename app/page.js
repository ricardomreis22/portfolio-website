import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Image from "next/image";
import NavControls from "./components/NavControls";
import PageTitle from "./components/PageTitle";

export default function Page() {
  return (
    <div className="text-[#191d2b] h-screen overflow-hidden">
      <Navbar hambColor="text-white" />
      <div className="hidden absolute right-0 top-[35%] mr-12 lg:block">
        <NavControls />
      </div>
      <div className="home flex items-center justify-center"></div>
      <div className="flex flex-col w-full h-screen justify-center items-center ml-6 lg:flex-row">
        <div className="flex w-1/2 mb-10 sm:w-1/3 lg:mb-0 lg:mt-20  lg:ml-10 lg:w-2/3 2xl:ml-60 2xl:w-1/3">
          <Image
            src="/Foto.jpeg"
            alt="background Image"
            width={1000}
            height={500}
            className="rounded-3xl z-10 border-solid border-4 border-[#191d2b]"
          />
        </div>
        <div className="flex flex-col font-bold justify-center items-center text-center text-lg lg:h-screen lg:mr-10 lg:text-xl">
          <div className="w-3/4 lg:w-2/3 lg:mr-10 lg:text-lg xl:text-xl">
            <div>
              <PageTitle title="Hellooo! I'm Ricardo Reis" />
            </div>
            <p className="mt-4 lg:mt-12 font-normal">
              I'm a Full Stack Web Developer who loves to learn, and to become
              better everyday. Here you will see more about me, and what I can
              do.
            </p>
            <p className="mb-16 mt-2 font-bold">I hope you like it!</p>
            <div className="flex justify-center min-w-fit lg:items-center lg:justify-center w-full">
              <Button
                className="w-full md:w-1/2 py-1 cursor-pointer"
                buttonName="Download CV"
                href="/CV_Ricardo Reis.pdf"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
