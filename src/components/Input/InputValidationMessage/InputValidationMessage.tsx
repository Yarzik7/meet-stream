import React from 'react';
import { FormHelperText } from '@mui/material';

interface IInputValidationMessageProps {
  message: string;
  type?: string;
}

const InputValidationMessage = ({ message }: IInputValidationMessageProps) => {
  return <FormHelperText>{message}</FormHelperText>;
};

export default InputValidationMessage;
