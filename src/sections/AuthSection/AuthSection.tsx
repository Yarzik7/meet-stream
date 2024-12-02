'use client';

import React from 'react';
import SectionWithContainer from '@/components/Section/SectionWithContainer/SectionWithContainer';
import DecoratorBox from '@/components/DecoratorBox/DecoratorBox';
import LoginForm from '@/components/LoginForm/LoginForm';
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import { Typography } from '@mui/material';
import { AuthOfferTextStyled, AuthLinkStyled } from './AuthSection.styled';
import { usePathname } from 'next/navigation';
import withRestrictedRoute from '@/components/hoc/withRestrictedRoute';

const AuthSection = () => {
  const authRoute: string = usePathname()?.split('/').at(-1) ?? 'login';
  const isLogin: boolean = authRoute === 'login';
  const caption: string = isLogin ? 'register' : 'login';

  return (
    <SectionWithContainer>
      <DecoratorBox>
        <Typography
          variant="h1"
          align="center"
          sx={{ fontSize: '28px', textTransform: 'capitalize', marginBottom: '15px' }}
        >
          {authRoute}
        </Typography>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <AuthOfferTextStyled>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <AuthLinkStyled href={caption}>{caption}</AuthLinkStyled>
        </AuthOfferTextStyled>
      </DecoratorBox>
    </SectionWithContainer>
  );
};

export default withRestrictedRoute(AuthSection);
