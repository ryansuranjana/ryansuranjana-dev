import React from "react";
import ThemeChanger from "../ui/ThemeChanger";
import { IoLogoGithub } from "react-icons/io";

const Header = () => {
    return (
        <header className="pt-5 flex items-center justify-between">
            <h1 className="text-2xl dark:text-white text-black font-bold">
                ryansuranjana.<span className="text-[#3BCEC6]">dev</span>
            </h1>
            <div className="flex gap-2">
                <a href="https://github.com/ryansuranjana" target="_blank">
                    <IoLogoGithub size={20} color="#3BCEC6" />
                </a>
                <ThemeChanger />
            </div>
        </header>
    );
};

export default Header;
