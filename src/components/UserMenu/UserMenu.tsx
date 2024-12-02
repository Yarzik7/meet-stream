import React from 'react';
import { onUserLogout } from '@/utils/api';
import CustomButton from '../CustomButton/CustomButton';
import { UserMenuBoxStyled, UsernameStyled, UserEmailStyled } from './User.styled';
import { IUser } from '@/types/User.types';

interface IUserMenuProps {
  user: IUser;
  onLogOut: () => void;
}

const UserMenu = ({ user, onLogOut }: IUserMenuProps) => {
  const onLogout = async (): Promise<void> => {
    const logOutRes = await onUserLogout();
    if (logOutRes.error) {
      return alert(logOutRes.message);
    }
    onLogOut();
  };

  return (
    <UserMenuBoxStyled>
      {/* <div>
        <UsernameStyled>{user.username}</UsernameStyled>
        <UserEmailStyled>{user.email}</UserEmailStyled>
      </div> */}
      <CustomButton onClick={onLogout}>Logout</CustomButton>
    </UserMenuBoxStyled>
  );
};

export default UserMenu;
