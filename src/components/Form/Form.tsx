import React from 'react';
import { FormStyled } from './Form.styled';
import CustomButton from '../CustomButton/CustomButton';

interface IFormProps {
  buttonCaption: string;
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ buttonCaption, onSubmit, children }: IFormProps) => {
  return (
    <FormStyled onSubmit={onSubmit}>
      {children}
      <CustomButton type="submit">{buttonCaption}</CustomButton>
    </FormStyled>
  );
};

export default Form;
