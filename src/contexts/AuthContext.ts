import { createContext } from 'react';
import { IUser } from '@/types/User.types';

interface IAuthContextDefault {
  isLoggedIn: boolean;
  user: IUser;
  logOut: () => void;
  logIn: () => void;
}

const defaultValue: IAuthContextDefault = {
  isLoggedIn: false,
  user: { _id: '', name: '', username: '', email: '' },
  logOut: (): void => {},
  logIn: (): void => {},
};

export const AuthContext = createContext(defaultValue);
