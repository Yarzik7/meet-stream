import React from "react";
import { Button as ButtonMUI, ButtonProps } from "@mui/material";

interface ICustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const CustomButton = ({ children, ...props }: ICustomButtonProps) => {
  return (
    <ButtonMUI
      sx={{
        backgroundColor: "var(--accent-color)",
        color: "var(--primary-text-color)",
        height: 40,
      }}
      {...props}
    >
      {children}
    </ButtonMUI>
  );
};

export default CustomButton;
