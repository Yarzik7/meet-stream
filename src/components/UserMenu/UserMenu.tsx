import React from 'react';
import { onUserLogout } from '@/utils/api';
import CustomButton from '../CustomButton/CustomButton';
import { UserMenuBoxStyled, UsernameStyled, UserEmailStyled } from './User.styled';
import { IUser } from '@/types/User.types';

interface IUserMenuProps {
  user: IUser;
}

const UserMenu = ({ user }: IUserMenuProps) => {
  const onLogout = (): Promise<void> => onUserLogout();

  return (
    <UserMenuBoxStyled>
      <div>
        <UsernameStyled>{user.username}</UsernameStyled>
        <UserEmailStyled>{user.email}</UserEmailStyled>
      </div>
      <CustomButton onClick={onLogout}>Logout</CustomButton>
    </UserMenuBoxStyled>
  );
};

export default UserMenu;
