"use client";
import React from "react";
import { useTheme } from "next-themes";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();

    return theme === "light" ? <IoIosMoon size={20} color="dark" onClick={() => setTheme("dark")} className="cursor-pointer" /> : <IoIosSunny size={20} color="light" onClick={() => setTheme("light")} className="cursor-pointer" />;
};

export default ThemeChanger;
