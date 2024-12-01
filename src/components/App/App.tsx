'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { onGetCurrentUser } from '@/utils/api';
import SharedDefaultLayout from '@/layout/SharedDefaultLayout/SharedDefaultLayout';
import css from './App.module.css';

const App = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ _id: '', name: '', username: '', email: '' });

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

  return (
    <AuthContext.Provider value={{ isLoggedIn, user }}>
      <SharedDefaultLayout>
        <main className={css.main}>{children}</main>
      </SharedDefaultLayout>
    </AuthContext.Provider>
  );
};

export default App;
