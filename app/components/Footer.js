import React from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import SocialMedia from "../components/SocialMedia";

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-visible border-t border-white/20 bg-black/25 py-10 text-white">
      <div className="flex justify-center items-center mr-5 mb-4">
        <AiFillPhone size={"1.3rem"} className="mr-5" />
        <span className="xl:text-xl">+447554913107</span>
      </div>
      <div className="flex justify-center items-center mb-4">
        <AiFillMail size={"1.3rem"} className="mr-5" />
        <span className="xl:text-xl">ricardomreis22@hotmail.com</span>
      </div>
      <SocialMedia />
    </div>
  );
};

export default Footer;
