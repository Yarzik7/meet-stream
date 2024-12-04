'use client';

import React, { useId, useState, InputHTMLAttributes } from 'react';
import { InputStyled, InputBoxStyled, InputLabelStyled, InputButtonStyled } from './Input.styled';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, name, type = 'text', onChange, ...props }: IInputProps) => {
  const inputId = useId();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const onToggleShowPassword = (): void => setIsShowPassword(!isShowPassword);

  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={inputId}>{label}</InputLabelStyled>
      <InputStyled id={inputId} name={name} type={!isShowPassword ? type : 'text'} onChange={onChange} {...props} />
      {type === 'password' && (
        <InputButtonStyled
          type="button"
          title={`${!isShowPassword ? 'Show' : 'Hide'} password`}
          onClick={onToggleShowPassword}
        >
          {!isShowPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </InputButtonStyled>
      )}
    </InputBoxStyled>
  );
};

export default Input;
