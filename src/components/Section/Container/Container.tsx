import React from "react";
import { Container as ContainerMUI } from "@mui/material";

interface IContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return <ContainerMUI maxWidth="sm">{children}</ContainerMUI>;
};

export default Container;
