'use client';

import React, { useId } from 'react';
import { InputStyled, InputBoxStyled, InputLabelStyled } from './Input.styled';
interface IInputProps {
  label?: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, name, onChange }: IInputProps) => {
  const inputId = useId();
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={inputId}>{label}</InputLabelStyled>
      <InputStyled id={inputId} name={name} type="text" onChange={onChange} />
    </InputBoxStyled>
  );
};

export default Input;
