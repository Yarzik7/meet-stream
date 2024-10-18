import React from "react";
import { Container as ContainerMUI } from "@mui/material";

interface IContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return (
    <ContainerMUI maxWidth="sm" sx={{ height: "100%" }}>
      {children}
    </ContainerMUI>
  );
};

export default Container;
