import React from "react";
import ThemeChanger from "../ui/ThemeChanger";
import { IoLogoGithub } from "react-icons/io";

const Header = () => {
  return (
    <header className="w-full md:w-[60%] md:px-0 px-5 mx-auto pt-5 flex items-center justify-between animate-bounce-back-from-top">
      <h1 className="text-2xl dark:text-white text-black font-bold">
        ryansuranjana.<span className="text-[#3BCEC6]">dev</span>
      </h1>
      <div className="flex gap-4">
        <a href="https://github.com/ryansuranjana" target="_blank">
          <IoLogoGithub size={25} color="#3BCEC6" />
        </a>
        <ThemeChanger />
      </div>
    </header>
  );
};

export default Header;
