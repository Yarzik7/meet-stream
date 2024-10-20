import React from "react";
import { Box, BoxProps } from "@mui/material";

interface IDecoratorBox extends BoxProps {
  children: React.ReactNode;
}

const DecoratorBox = ({ children, ...props }: IDecoratorBox) => {
  return (
    <Box
      sx={{
        padding: "15px 10px",
        marginTop: "15px",
        backgroundColor: "var(--accent-color)",
        borderRadius: "var(--border-radius)",
        boxShadow: "var(--decorator-box-shadow)",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default DecoratorBox;
