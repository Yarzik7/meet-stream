"use client";
import styled from "@emotion/styled";
import Link from "next/link";

const HeaderStyled = styled.header`
  height: 50px;
  background-color: var(--accent-color);
`;

const LogoLinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  text-decoration: none;
  color: inherit;
`;

export { HeaderStyled, LogoLinkStyled };
