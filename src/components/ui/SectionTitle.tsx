import React, { PropsWithChildren } from "react";

const SectionTitle = ({ children }: PropsWithChildren) => {
  return (
    <h4 className="font-bold text-lg md:text-xl text-[#3BCEC6] mb-2">
      {children}
    </h4>
  );
};

export default SectionTitle;
