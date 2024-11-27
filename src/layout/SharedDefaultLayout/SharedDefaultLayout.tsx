'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface ISharedDefaultLayoutProps {
  children: React.ReactNode;
}

const SharedDefaultLayout = ({ children }: ISharedDefaultLayoutProps) => {
  const pathname: string = usePathname() ?? '';
  const pathnameWhitelist = ['/'];

  if (!pathnameWhitelist.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default SharedDefaultLayout;
