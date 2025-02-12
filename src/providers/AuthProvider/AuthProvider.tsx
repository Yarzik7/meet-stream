import React from 'react';
import { useState, useEffect } from 'react';
import { onGetCurrentUser } from '@/utils/api';
import { AuthContext } from '@/contexts/AuthContext';
import { IUser } from '@/types/User.types';
import { IError } from '@/types/Error.types';

interface IAuthProviderProps {
  children: React.ReactNode;
}

const initialUserState: IUser = { _id: '', name: '', username: '', email: '' };

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser>(() => initialUserState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRefreshingUser, setIsRefreshingUser] = useState(true);
  const [error, setError] = useState<null | IError>(null);

  const logIn = (user: IUser): void => {
    setIsLoggedIn(true);
    setUser(user);
  };

  const logOut = (): void => {
    setIsLoggedIn(false);
    setUser(initialUserState);
  };

  useEffect(() => {
    const refreshingUser = async () => {
      const getUserResult: IUser | IError = await onGetCurrentUser();

      if ('error' in getUserResult && getUserResult.error) {
        setError(getUserResult);
        return alert(getUserResult.message);
      }

      if (!('error' in getUserResult)) {
        setIsLoggedIn(true);
        setUser(getUserResult);
      }
    };

    refreshingUser().finally(() => setIsRefreshingUser(false));
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, isRefreshingUser, error, logOut, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
