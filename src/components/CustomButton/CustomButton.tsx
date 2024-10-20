import React from "react";
import { Button as ButtonMUI, ButtonProps } from "@mui/material";

interface ICustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const CustomButton = ({ children, ...props }: ICustomButtonProps) => {
  return (
    <ButtonMUI
      sx={{
        height: 40,
        color: "var(--primary-text-color)",
        textTransform: "Capitalize",
        backgroundColor: "var(--accent-color)",
        border: "2px solid var(--primary-text-color)",
        borderRadius: "var(--border-radius)",
        transition:
          "background-color var(--transition-duration) var(--timing-function)",
        ":hover": {
          backgroundColor: "var(--secondary-accent-color)",
        },
      }}
      {...props}
    >
      {children}
    </ButtonMUI>
  );
};

export default CustomButton;
