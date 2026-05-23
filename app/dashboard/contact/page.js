"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import NavControls from "../../components/NavControls";
import PageTitle from "../../components/PageTitle";

import Form from "../../components/Form";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <div className="#dbe1e8 text-[#191d2b]">
      <Navbar />
      <div className="hidden absolute right-0 top-[35%] mr-12 lg:block">
        <NavControls />
      </div>
      <div className="flex flex-col justify-center items-center text-sm mb-20 lg:w-[80%] m-auto">
        <div className="flex flex-col justify-center  lg:items-center ">
          <div className="mb-20">
            <PageTitle title="Contact" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-center">
          <div className="w-[80%] text-justify leading-10 md:w-[70%] xl:mt-10 xl:mb-20 2xl:w-[80%]">
            <p className="lg:text-lg xl:text-xl">
              Hey there! Thanks for stopping by. If you have any questions,
              ideas, or just want to say hi, feel free to drop me a message.
            </p>
            <p className="lg:text-lg xl:text-xl">
              I'm always excited to connect and talk about web development.
              Let's keep on learning!
            </p>
          </div>
          <div className="w-[80%] md:w-[70%] mt-10 xl:mt-0 xl:w-[40%] lg:text-lg">
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
