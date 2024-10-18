import React, { useId } from "react";
import { TextField } from "@mui/material";

interface IInputProps {
  label?: string;
}

const Input = ({ label }: IInputProps) => {
  const inputId = useId();
  return (
    <TextField
      id={inputId}
      label={label}
      slotProps={{
        inputLabel: { sx: { top: "50%", transform: "translate(20px, -50%)" } },
        input: {
          sx: { height: "40px" },
        },
      }}
    />
  );
};

export default Input;
