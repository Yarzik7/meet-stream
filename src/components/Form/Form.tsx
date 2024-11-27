import React from 'react';
import { FormStyled } from './Form.styled';
import CustomButton from '../CustomButton/CustomButton';

interface IFormProps {
  children: React.ReactNode;
}

const Form = ({ children }: IFormProps) => {
  return (
    <FormStyled>
      {children}
      <CustomButton>Login</CustomButton>
    </FormStyled>
  );
};

export default Form;
