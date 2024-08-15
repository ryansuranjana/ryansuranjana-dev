import React from "react";
import ThemeChanger from "../ui/ThemeChanger";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";
import { FaCodeBranch } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full pt-5 flex items-center justify-between animate-bounce-back-from-top">
      <Link href="/">
        <h1 className="md:text-2xl text-xl dark:text-white text-black font-bold">
          ryansuranjana.<span className="text-[#3BCEC6]">dev</span>
        </h1>
      </Link>
      <div className="flex gap-5 items-center">
        <Link href="/commits/words" className="md:text-base text-sm">
          <FaCodeBranch size={20} className="text-black dark:text-white" />
        </Link>
        <a href="https://github.com/ryansuranjana" target="_blank">
          <IoLogoGithub size={25} color="#3BCEC6" />
        </a>
        <ThemeChanger />
      </div>
    </header>
  );
};

export default Header;
