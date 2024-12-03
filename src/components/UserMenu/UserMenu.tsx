import React from 'react';
import { onUserLogout } from '@/utils/api';
import CustomButton from '../CustomButton/CustomButton';
import { UserMenuBoxStyled } from './User.styled';
import { IUser } from '@/types/User.types';
import { ILogoutUserResponse } from '@/types/Auth.types';
import { IError } from '@/types/Error.types';
interface IUserMenuProps {
  user?: IUser;
  onLogOut: () => void;
}

const UserMenu = ({ onLogOut }: IUserMenuProps) => {
  const onLogout = async (): Promise<void> => {
    const logOutRes: ILogoutUserResponse | IError = await onUserLogout();

    if ('error' in logOutRes && logOutRes.error) {
      return alert(logOutRes.message);
    }

    alert(logOutRes.message);
    onLogOut();
  };

  return (
    <UserMenuBoxStyled>
      <CustomButton onClick={onLogout}>Logout</CustomButton>
    </UserMenuBoxStyled>
  );
};

export default UserMenu;
