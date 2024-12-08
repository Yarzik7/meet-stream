'use client';

import React from 'react';
import { useState } from 'react';
import { FormStyled, FormFieldsetStyled } from './Form.styled';
import CustomButton from '../CustomButton/CustomButton';
import Loader from '../Loader/Loader';
import { UseFormHandleSubmit, SubmitHandler, FieldValues } from 'react-hook-form';
interface IFormProps<T extends FieldValues> {
  buttonCaption: string;
  children: React.ReactNode;
  handleRHFSubmit: UseFormHandleSubmit<T>;
  onSubmit: SubmitHandler<T>;
}

const Form = <T extends FieldValues>({ buttonCaption, handleRHFSubmit, onSubmit, children }: IFormProps<T>) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: T): Promise<void> => {
    setIsLoading(true);
    await onSubmit(data);
    setIsLoading(false);
  };

  return (
    <FormStyled onSubmit={handleRHFSubmit(handleSubmit)}>
      <FormFieldsetStyled disabled={isLoading}>{children}</FormFieldsetStyled>

      <CustomButton type="submit" disabled={isLoading}>
        {isLoading ? <Loader size={20} /> : buttonCaption}
      </CustomButton>
    </FormStyled>
  );
};

export default Form;
