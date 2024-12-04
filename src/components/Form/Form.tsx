'use client';

import React from 'react';
import { useState } from 'react';
import { FormStyled, FormFieldsetStyled } from './Form.styled';
import CustomButton from '../CustomButton/CustomButton';
import Loader from '../Loader/Loader';

interface IFormProps {
  buttonCaption: string;
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Form = ({ buttonCaption, onSubmit, children }: IFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    setIsLoading(true);
    await onSubmit(event);
    setIsLoading(false);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <FormFieldsetStyled disabled={isLoading}>{children}</FormFieldsetStyled>

      <CustomButton type="submit" disabled={isLoading}>
        {isLoading ? <Loader size={20} /> : buttonCaption}
      </CustomButton>
    </FormStyled>
  );
};

export default Form;
