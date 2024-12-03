import React from 'react';
import { SectionStyled } from './Section.styled';

interface ISectionProps {
  children: React.ReactNode;
  sectionStyles?: string;
}

const Section = ({ sectionStyles, children }: ISectionProps) => {
  return <SectionStyled sectionStyles={sectionStyles}>{children}</SectionStyled>;
};

export default Section;
