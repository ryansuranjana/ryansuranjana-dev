import React, { PropsWithChildren } from "react";

const SectionList = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};

export default SectionList;
