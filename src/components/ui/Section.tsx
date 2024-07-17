import React, { PropsWithChildren } from "react";

const Section = ({ children }: PropsWithChildren) => {
  return <section className="mb-10">{children}</section>;
};

export default Section;
