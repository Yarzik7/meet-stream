'use client';

import React, { useId, useState, InputHTMLAttributes } from 'react';
import { InputStyled, InputBoxStyled, InputLabelStyled, InputButtonStyled } from './Input.styled';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import type { UseFormRegister, FieldValues, Path, RegisterOptions } from 'react-hook-form';
export interface IInputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: Path<T>;
  type?: string;
  registerOptions?: RegisterOptions<T, Path<T>>;
  register?: UseFormRegister<T>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = <T extends FieldValues>({
  label,
  name,
  type = 'text',
  registerOptions,
  register,
  ...props
}: IInputProps<T>) => {
  const inputId = useId();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const onToggleShowPassword = (): void => setIsShowPassword(!isShowPassword);

  return (
    <>
      <InputBoxStyled>
        <InputLabelStyled htmlFor={inputId}>{label}</InputLabelStyled>
        <InputStyled
          id={inputId}
          type={!isShowPassword ? type : 'text'}
          {...(register ? register(name, registerOptions) : { name })}
          {...props}
        />
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
    </>
  );
};

export default Input;
