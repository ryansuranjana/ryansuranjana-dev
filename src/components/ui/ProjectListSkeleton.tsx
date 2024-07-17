import React from "react";
import SectionList from "./SectionList";

const ProjectCardSkeleteon = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-4 gap-2 px-4 py-2 border dark:border-gray-800 border-gray-200 rounded-lg w-full">
      <div className="dark:bg-gray-800 border-gray-200 w-[180px] h-[150px] rounded-lg"></div>
      <div className="w-full">
        <div className="w-full h-3 dark:bg-gray-800 border-gray-200 rounded-lg mb-3"></div>
        <div className="w-full h-24 dark:bg-gray-800 border-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

const ProjectListSkeleton = () => {
  return (
    <SectionList>
      <ProjectCardSkeleteon />
      <ProjectCardSkeleteon />
      <ProjectCardSkeleteon />
    </SectionList>
  );
};

export default ProjectListSkeleton;
