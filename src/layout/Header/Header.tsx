'use client';
import React from 'react';
import Container from '@/components/Section/Container/Container';
import Logo from '@/components/Logo/Logo';
import CustomButton from '@/components/CustomButton/CustomButton';
import { HeaderStyled, HeaderContainer } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <HeaderContainer>
          <Logo />
          <CustomButton href="/auth/login">Enter</CustomButton>
        </HeaderContainer>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
