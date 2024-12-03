import React from 'react';
import Section from '../Section';
import Container from '../Container/Container';

interface ISectionWithContainerProps {
  children: React.ReactNode;
  sectionStyles?: string;
}

const SectionWithContainer = ({ sectionStyles, children }: ISectionWithContainerProps) => {
  return (
    <Section sectionStyles={sectionStyles}>
      <Container>{children}</Container>
    </Section>
  );
};

export default SectionWithContainer;
