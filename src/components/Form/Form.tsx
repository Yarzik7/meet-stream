'use client';

import React from 'react';
import { useState } from 'react';
import { FormStyled, FormFieldsetStyled } from './Form.styled';
import CustomButton from '../CustomButton/CustomButton';
import Loader from '../Loader/Loader';
import { ILoginUserState } from '@/types/Auth.types';
import { UseFormHandleSubmit, SubmitHandler } from 'react-hook-form';
interface IFormProps {
  buttonCaption: string;
  children: React.ReactNode;
  handleRHFSubmit: UseFormHandleSubmit<ILoginUserState>;
  onSubmit: SubmitHandler<ILoginUserState>; //(data: ILoginUserState) => Promise<void>;
}

const Form = ({ buttonCaption, handleRHFSubmit, onSubmit, children }: IFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: ILoginUserState): Promise<void> => {
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
