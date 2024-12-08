import React from 'react';
import Input, { IInputProps } from '@/components/Input/Input';
import { FormHelperText } from '@mui/material';
import { FormInputBoxStyled } from './FormInput.styled';
import { FieldValues, FieldErrors } from 'react-hook-form';

interface IFormInput<T extends FieldValues> extends IInputProps<T> {
  errors: FieldErrors<T>;
}

const FormInput = <T extends FieldValues>({ errors, ...props }: IFormInput<T>) => {
  return (
    <FormInputBoxStyled>
      <Input<T> {...props} />

      {errors[props.name] && (
        <FormHelperText
          sx={{
            position: 'absolute',
            zIndex: 1,
            top: '101%',
            margin: 0,
            color: 'var(--error-color)',
            fontSize: 16,
          }}
        >
          {errors[props.name]?.message?.toString()}
        </FormHelperText>
      )}
    </FormInputBoxStyled>
  );
};

export default FormInput;
