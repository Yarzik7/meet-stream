import React from "react";

interface ISectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: ISectionProps) => {
  return <section>{children}</section>;
};

export default Section;
