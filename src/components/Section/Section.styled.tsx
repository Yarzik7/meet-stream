'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ISectionStyledProps {
  sectionStyles?: string;
}

const SectionStyled = styled.section<ISectionStyledProps>`
  padding-top: 20px;
  padding-bottom: 20px;

  ${({ sectionStyles }) => sectionStyles && css`${sectionStyles}`}
`;

export { SectionStyled };
