'use client';

import React, { useId, useState, InputHTMLAttributes } from 'react';
import { InputStyled, InputBoxStyled, InputLabelStyled, InputButtonStyled } from './Input.styled';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import { FormHelperText } from '@mui/material';
import type { UseFormRegister, FieldValues, Path } from 'react-hook-form';
export interface IInputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: Path<T>;
  type?: string;
  register?: UseFormRegister<T>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = <T extends FieldValues>({ label, name, type = 'text', register, ...props }: IInputProps<T>) => {
  const inputId = useId();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const onToggleShowPassword = (): void => setIsShowPassword(!isShowPassword);

  return (
    <>
      <InputBoxStyled>
        <InputLabelStyled htmlFor={inputId}>{label}</InputLabelStyled>
        <InputStyled
          id={inputId}
          // name={register ? undefined : name}
          type={!isShowPassword ? type : 'text'}
          // onChange={onChange}
          {...(register ? register(name) : { name })}
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
      {/* <FormHelperText>{'Hello'}</FormHelperText> */}
    </>
  );
};

export default Input;
