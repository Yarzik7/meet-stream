'use client';

import { createContext } from 'react';
import { IUser } from '@/types/User.types';
import { IError } from '@/types/Error.types';

interface IAuthContextDefault {
  isLoggedIn: boolean;
  user: IUser;
  isRefreshingUser: boolean;
  error: null | IError;
  logOut: () => void;
  logIn: (user: IUser) => void;
}

const defaultValue: IAuthContextDefault = {
  isLoggedIn: false,
  user: { _id: '', name: '', username: '', email: '' },
  isRefreshingUser: true,
  error: null,
  logOut: (): void => {},
  logIn: (user: IUser): void => {
    console.log(user);
  },
};

export const AuthContext = createContext(defaultValue);
