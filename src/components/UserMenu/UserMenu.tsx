'use client';

import React from 'react';
import { useState } from 'react';
import { onUserLogout } from '@/utils/api';
import CustomButton from '../CustomButton/CustomButton';
import { UserMenuBoxStyled } from './User.styled';
import { IUser } from '@/types/User.types';
import { ILogoutUserResponse } from '@/types/Auth.types';
import { IError } from '@/types/Error.types';
import Loader from '../Loader/Loader';
interface IUserMenuProps {
  user?: IUser;
  onLogOut: () => void;
}

const UserMenu = ({ onLogOut }: IUserMenuProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onLogout = async (): Promise<void> => {
    setIsLoading(true);
    const logOutRes: ILogoutUserResponse | IError = await onUserLogout();

    if ('error' in logOutRes && logOutRes.error) {
      setIsLoading(false);
      return alert(logOutRes.message);
    }

    setIsLoading(false);
    alert(logOutRes.message);
    onLogOut();
  };

  return (
    <UserMenuBoxStyled>
      {isLoading ? <Loader /> : <CustomButton onClick={onLogout}>Logout</CustomButton>}
    </UserMenuBoxStyled>
  );
};

export default UserMenu;
