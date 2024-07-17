"use client";

import React from "react";
import { CldImage } from "next-cloudinary";

type ProjectCardProps = {
  name: string;
  image: string;
  description: string;
};

const ProjectCard = ({ name, image, description }: ProjectCardProps) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-4 gap-2 px-4 py-2 border border-[#274643] rounded-lg w-full">
      <CldImage
        src={image}
        alt="e-kinerja-img"
        width={180}
        height={150}
        className="rounded-lg"
        crop="auto"
      />
      <div>
        <p className="font-semibold mb-3">{name}</p>
        <p className="text-sm opacity-60">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
