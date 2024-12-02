'use client';

import React from 'react';
import AuthProvider from '@/providers/AuthProvider/AuthProvider';
import SharedDefaultLayout from '@/layout/SharedDefaultLayout/SharedDefaultLayout';
import css from './App.module.css';

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <SharedDefaultLayout>
        <main className={css.main}>{children}</main>
      </SharedDefaultLayout>
    </AuthProvider>
  );
};

export default App;
