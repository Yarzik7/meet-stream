'use client';

import React from 'react';
import { useState } from 'react';
import { FormStyled } from './Form.styled';
import CustomButton from '../CustomButton/CustomButton';
import Loader from '../Loader/Loader';

interface IFormProps {
  buttonCaption: string;
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ buttonCaption, onSubmit, children }: IFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    setIsLoading(true);
    onSubmit && (await onSubmit(event));
    setIsLoading(false);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      {children}
      <CustomButton type="submit">{isLoading ? <Loader /> : buttonCaption}</CustomButton>
    </FormStyled>
  );
};

export default Form;
