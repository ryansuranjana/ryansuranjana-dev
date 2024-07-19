"use client";
import React from "react";
import { useTheme } from "next-themes";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

const ThemeChanger = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return resolvedTheme === "light" ? (
    <IoIosMoon
      size={25}
      color="dark"
      onClick={() => setTheme("dark")}
      className="cursor-pointer"
    />
  ) : (
    <IoIosSunny
      size={25}
      color="light"
      onClick={() => setTheme("light")}
      className="cursor-pointer"
    />
  );
};

export default ThemeChanger;
