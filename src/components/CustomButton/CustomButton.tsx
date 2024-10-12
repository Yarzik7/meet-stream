import React from "react";
import { Button as ButtonMUI } from "@mui/material";

interface ICustomButtonProps {
  children: React.ReactNode;
}

const CustomButton = ({ children }: IButtonProps) => {
  return (
    <ButtonMUI variant="contained" color="primary">
      {children}
    </ButtonMUI>
  );
};

export default CustomButton;
