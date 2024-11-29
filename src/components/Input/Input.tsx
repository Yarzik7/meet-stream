'use client';

import React, { useId, InputHTMLAttributes } from 'react';
import { InputStyled, InputBoxStyled, InputLabelStyled } from './Input.styled';
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, name, onChange, ...props }: IInputProps) => {
  const inputId = useId();
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={inputId}>{label}</InputLabelStyled>
      <InputStyled id={inputId} name={name} type="text" onChange={onChange} {...props} />
    </InputBoxStyled>
  );
};

export default Input;
