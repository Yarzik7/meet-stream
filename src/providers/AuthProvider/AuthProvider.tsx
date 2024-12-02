import React from 'react';
import { useState, useEffect } from 'react';
import { onGetCurrentUser } from '@/utils/api';
import { AuthContext } from '@/contexts/AuthContext';
// import { IUser } from '@/types/User.types';

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ _id: '', name: '', username: '', email: '' });

  const logIn = (user: any): void => {
    setIsLoggedIn(true);
    setUser(user);
  };

  const logOut = (): void => {
    setIsLoggedIn(false);
    setUser({ _id: '', name: '', username: '', email: '' });
  };

  useEffect(() => {
    const refreshingUser = async () => {
      const user = await onGetCurrentUser();
      if (user.error) {
        return alert(user.message);
      }

      setIsLoggedIn(true);
      setUser(user);
    };

    refreshingUser();
  }, []);

  return <AuthContext.Provider value={{ isLoggedIn, user, logOut, logIn }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
