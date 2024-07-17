import React, { PropsWithChildren } from "react";
import { Experience as ExperienceProps } from "@/lib/data/experiences";

const Experience = ({
  company,
  position,
  employmentType,
  startDate,
  endDate,
  description,
}: ExperienceProps & PropsWithChildren) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-sm md:text-base">{company}</p>
        <p className="font-semibold text-sm md:text-base">{position}</p>
        <p className="font-semibold opacity-60 text-xs md:text-sm">
          {employmentType} • {startDate} - {endDate}
        </p>
      </div>

      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
};

export default Experience;
