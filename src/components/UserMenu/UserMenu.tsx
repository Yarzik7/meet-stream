import React from 'react';
import { onUserLogout } from '@/utils/api';
import CustomButton from '../CustomButton/CustomButton';
import { UserMenuBoxStyled } from './User.styled';
import { IUser } from '@/types/User.types';
interface IUserMenuProps {
  user?: IUser;
  onLogOut: () => void;
}

const UserMenu = ({ onLogOut }: IUserMenuProps) => {
  const onLogout = async (): Promise<void> => {
    const logOutRes = await onUserLogout();

    if (logOutRes.message !== 'Success of logout') {
      return alert(logOutRes.message);
    }

    onLogOut();
  };

  return (
    <UserMenuBoxStyled>
      <CustomButton onClick={onLogout}>Logout</CustomButton>
    </UserMenuBoxStyled>
  );
};

export default UserMenu;
