'use client';

import { createContext } from 'react';
import { IUser } from '@/types/User.types';

interface IAuthContextDefault {
  isLoggedIn: boolean;
  user: IUser;
  isRefreshingUser: boolean;
  error: null | object;
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
