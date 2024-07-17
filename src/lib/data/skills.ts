import React, { ReactNode } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript, IoLogoVue } from "react-icons/io5";
import { SiExpo, SiMongodb, SiPhp, SiReact } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

type Skill = {
  icon: ReactNode;
  name: string;
};

type Skills = {
  nameGroup: string;
  skills: Skill[];
};

const skills: Skills[] = [
  {
    nameGroup: "Programming Languages",
    skills: [
      {
        icon: React.createElement(IoLogoJavascript, {
          size: 15,
          color: "#F7DF1E",
        }),
        name: "JavaScript",
      },
      {
        icon: React.createElement(BiLogoTypescript, {
          size: 15,
          color: "#3178C6",
        }),
        name: "Typescript",
      },
      {
        icon: React.createElement(SiPhp, { size: 15, color: "#6181B6" }),
        name: "PHP",
      },
    ],
  },
  {
    nameGroup: "Frameworks",
    skills: [
      {
        icon: React.createElement(IoLogoVue, { size: 15, color: "#41B883" }),
        name: "Vue",
      },
      {
        icon: React.createElement(FaLaravel, { size: 15, color: "#FF2D20" }),
        name: "Laravel",
      },
      {
        icon: React.createElement(SiExpo, { size: 15 }),
        name: "Expo",
      },
    ],
  },
  {
    nameGroup: "Libraries",
    skills: [
      {
        icon: React.createElement(SiReact, { size: 15, color: "#00D8FF" }),
        name: "React",
      },
      {
        icon: React.createElement(TbBrandReactNative, {
          size: 15,
          color: "#00778C",
        }),
        name: "React Native",
      },
    ],
  },
  {
    nameGroup: "Databases",
    skills: [
      {
        icon: React.createElement(GrMysql, { size: 15, color: "#00546B" }),
        name: "Mysql",
      },
      {
        icon: React.createElement(SiMongodb, { size: 15, color: "#6CAC48" }),
        name: "MongoDB",
      },
    ],
  },
];

export default skills;
