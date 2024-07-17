import React, { PropsWithChildren, ReactNode } from "react";

type BadgeSkillProps = {
  icon: ReactNode;
  name: string;
} & PropsWithChildren;

const BadgeSkill = ({ icon, name }: BadgeSkillProps) => {
  return (
    <div className="flex gap-2 items-center px-4 py-2 border border-[#274643] w-fit rounded-2xl">
      {icon}
      <p className="text-[10px] md:text-xs">{name}</p>
    </div>
  );
};

export default BadgeSkill;
