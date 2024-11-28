import React from 'react';
import { SectionStyled } from './Section.styled';

interface ISectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: ISectionProps) => {
  return <SectionStyled>{children}</SectionStyled>;
};

export default Section;
