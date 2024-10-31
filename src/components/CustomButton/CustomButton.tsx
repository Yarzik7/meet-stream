'use client';
import React from 'react';
import { LinkAsButtonStyled, ButtonStyled } from './CustomButton.styled';
import { ButtonProps } from '@mui/material';

interface ICustomButtonProps extends ButtonProps {
  children: React.ReactNode;
  href?: string;
}

const CustomButton = ({ href, children, ...props }: ICustomButtonProps) => {
  return (
    <>
      {href ? (
        <LinkAsButtonStyled href={href}>{children}</LinkAsButtonStyled>
      ) : (
        <ButtonStyled {...props}>{children}</ButtonStyled>
      )}
    </>
  );
};

export default CustomButton;
