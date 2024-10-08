import React from "react";
import Section from "../Section";
import Container from "../Container/Container";

interface ISectionWithContainerProps {
  children: React.ReactNode;
}

const SectionWithContainer = ({ children }: ISectionWithContainerProps) => {
  return (
    <Section>
      <Container>{children}</Container>
    </Section>
  );
};

export default SectionWithContainer;
