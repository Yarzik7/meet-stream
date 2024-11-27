'use client';

import React from 'react';
import SectionWithContainer from '@/components/Section/SectionWithContainer/SectionWithContainer';
import DecoratorBox from '@/components/DecoratorBox/DecoratorBox';
import LoginForm from '@/components/LoginForm/LoginForm';
import { usePathname } from 'next/navigation';

// interface IAuthSectionProps {
//   page: string;
// }

const AuthSection = () => {
  const authRoute: string = usePathname()?.split('/').at(-1) ?? 'login';
  const isLogin: boolean = authRoute === 'login';

  return (
    <SectionWithContainer>
      <DecoratorBox>
        {isLogin ? <LoginForm /> : <div>Register</div>}
        <p>{"Don't have an account? SignUp"}</p>
        {/* <p className={css.authOffer}>
          {isLoginPage ? "Don't have an account? " : 'Already have an account? '}
          <NavLink to={isLoginPage ? '/register' : '/login'} className={css.authOffer__navLink}>
            {isLoginPage ? 'SignUp' : 'Login'}
          </NavLink>
        </p> */}
      </DecoratorBox>
    </SectionWithContainer>
  );
};

export default AuthSection;
