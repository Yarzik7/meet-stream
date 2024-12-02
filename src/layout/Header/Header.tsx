import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import Container from '@/components/Section/Container/Container';
import Logo from '@/components/Logo/Logo';
import CustomButton from '@/components/CustomButton/CustomButton';
import UserMenu from '@/components/UserMenu/UserMenu';
import { HeaderStyled, HeaderContainer } from './Header.styled';
import Loader from '@/components/Loader/Loader';

const Header = () => {
  const { isLoggedIn, user, isRefreshingUser, logOut } = useAuth();

  return (
    <HeaderStyled>
      <Container>
        <HeaderContainer>
          <Logo />
          {isRefreshingUser && !isLoggedIn && <Loader />}
          {!isRefreshingUser && isLoggedIn && <UserMenu user={user} onLogOut={logOut} />}
          {!isRefreshingUser && !isLoggedIn && <CustomButton href="/auth/login">Enter</CustomButton>}
        </HeaderContainer>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
