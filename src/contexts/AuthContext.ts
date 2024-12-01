import { createContext } from 'react';
import { IUser } from '@/types/User.types';

interface IAuthContextDefault {
  isLoggedIn: boolean;
  user: IUser;
}

const defaultValue: IAuthContextDefault = { isLoggedIn: false, user: { _id: '', name: '', username: '', email: '' } };

export const AuthContext = createContext(defaultValue);
