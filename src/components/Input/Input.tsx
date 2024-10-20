import React, { useId } from "react";
import { InputStyled, InputBoxStyled, InputLabelStyled } from "./Input.styled";
// import {
//   // InputBase,
//   FormControl,
//   InputLabel,
//   Input as InputMUI,
// } from "@mui/material";

interface IInputProps {
  label?: string;
}

const Input = ({ label }: IInputProps) => {
  const inputId = useId();
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={inputId}>{label}</InputLabelStyled>
      <InputStyled id={inputId} />
    </InputBoxStyled>
  );
};

export default Input;
