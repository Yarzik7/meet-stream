import React, { useId } from "react";
import { TextField } from "@mui/material";

interface IInputProps {
  label?: string;
}

const Input = ({ label }: IInputProps) => {
  const inputId = useId();
  return <TextField id={inputId} label={label} />;
};

export default Input;
