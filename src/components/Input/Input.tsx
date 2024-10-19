import React, { useId } from "react";
import {
  // InputBase,
  FormControl,
  InputLabel,
  Input as InputMUI,
} from "@mui/material";

interface IInputProps {
  label?: string;
}

const Input = ({ label }: IInputProps) => {
  const inputId = useId();
  // console.log(label);
  return (
    <>
      <FormControl sx={{ border: "1px solid blue", padding: "4px" }}>
        <InputLabel
          htmlFor={inputId}
          sx={{ color: "red", border: "1px solid red", padding: "6px" }}
        >
          {label}
        </InputLabel>
        <InputMUI
          id={inputId}
          aria-describedby="my-helper-text"
          sx={{ border: "1px solid green", padding: "8px" }}
          slotProps={{
            input: { sx: { border: "1px solid aqua", padding: "10px" } },
          }}
        />
      </FormControl>
    </>
  );
  // return (
  //   <InputBase
  //     id={inputId}
  //     sx={{
  //       padding: "0 10px",
  //       color: "var(--accent-color)",
  //       border: "1px solid var(--accent-color)",
  //       borderRadius: "var(--border-radius)",
  //       ":focus-within": {
  //         outline: "2px solid var(--accent-color)",
  //         outlineOffset: "3px",
  //       },
  //     }}
  //   />
  // );
};

export default Input;
