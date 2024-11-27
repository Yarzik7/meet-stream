import React from 'react';
import SharedDefaultLayout from '@/layout/SharedDefaultLayout/SharedDefaultLayout';

interface IAuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
  return <SharedDefaultLayout>{children}</SharedDefaultLayout>;
};

export default AuthLayout;
