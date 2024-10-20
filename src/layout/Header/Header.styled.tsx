"use client";
import styled from "@emotion/styled";
import Link from "next/link";

const HeaderStyled = styled.header`
  height: var(--layout-height);
  background-color: var(--accent-color);
`;

const LogoLinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--layout-height);
  height: var(--layout-height);
  text-decoration: none;
  color: inherit;
`;

export { HeaderStyled, LogoLinkStyled };
