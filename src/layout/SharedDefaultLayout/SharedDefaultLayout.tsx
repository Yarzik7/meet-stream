import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface ISharedDefaultLayoutProps {
  children: React.ReactNode;
}

const SharedDefaultLayout = ({ children }: ISharedDefaultLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default SharedDefaultLayout;
