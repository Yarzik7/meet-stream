'use client';
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import Container from '@/components/Section/Container/Container';
import Logo from '@/components/Logo/Logo';
import CustomButton from '@/components/CustomButton/CustomButton';
import UserMenu from '@/components/UserMenu/UserMenu';
import { HeaderStyled, HeaderContainer } from './Header.styled';

const Header = () => {
  const { isLoggedIn, user, logOut } = useAuth();

  return (
    <HeaderStyled>
      <Container>
        <HeaderContainer>
          <Logo />
          {isLoggedIn && <UserMenu user={user} onLogOut={logOut} />}
          {!isLoggedIn && <CustomButton href="/auth/login">Enter</CustomButton>}
        </HeaderContainer>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
