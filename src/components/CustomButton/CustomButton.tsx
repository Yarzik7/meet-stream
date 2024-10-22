'use client';
import React from 'react';
// import Link from 'next/link';
import { Button as ButtonMUI, ButtonProps } from '@mui/material';

interface ICustomButtonProps extends ButtonProps {
  children: React.ReactNode;
  href?: string;
}

const CustomButton = ({ href, children, ...props }: ICustomButtonProps) => {
  const sx = {
    height: 40,
    color: 'var(--primary-text-color)',
    textTransform: 'Capitalize',
    backgroundColor: 'var(--accent-color)',
    border: '2px solid var(--primary-text-color)',
    borderRadius: 'var(--border-radius)',
    transition: 'background-color var(--transition-duration) var(--timing-function)',
    ':hover': {
      backgroundColor: 'var(--secondary-accent-color)',
    },
  };

  return (
    <ButtonMUI href={href} sx={sx} {...props}>
      {children}
    </ButtonMUI>
  );
};

export default CustomButton;
