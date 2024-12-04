'use client';

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { onUserLogout } from '@/utils/api';
import CustomButton from '../CustomButton/CustomButton';
import { UserMenuBoxStyled, UserAvatarStyled } from './User.styled';
import { IUser } from '@/types/User.types';
import { ILogoutUserResponse } from '@/types/Auth.types';
import { IError } from '@/types/Error.types';
import Loader from '../Loader/Loader';
import axios, { CancelTokenSource } from 'axios';
interface IUserMenuProps {
  user: IUser;
  onLogOut: () => void;
}

const UserMenu = ({ user, onLogOut }: IUserMenuProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const cancelTokenRef = useRef<CancelTokenSource | null>(null);

  cancelTokenRef.current = axios.CancelToken.source();

  const onLogout = async (): Promise<void> => {
    setIsLoading(true);
    const logOutRes: ILogoutUserResponse | IError = await onUserLogout({ cancelToken: cancelTokenRef.current?.token });

    if ('error' in logOutRes && logOutRes.error) {
      setIsLoading(false);
      return alert(logOutRes.message);
    }

    setIsLoading(false);
    alert(logOutRes.message);
    onLogOut();
  };

  useEffect(() => {
    return () => cancelTokenRef.current?.cancel();
  }, []);

  return (
    <UserMenuBoxStyled>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <UserAvatarStyled title={user.username}>{user.username[0]}</UserAvatarStyled>
          <CustomButton onClick={onLogout}>Logout</CustomButton>
        </>
      )}
    </UserMenuBoxStyled>
  );
};

export default UserMenu;
