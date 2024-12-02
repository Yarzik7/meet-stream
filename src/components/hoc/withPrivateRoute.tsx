'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

const withPrivateRoute = (WrappedComponent: React.ComponentType) => {
  const AuthenticatedComponent = (props: any) => {
    const { isLoggedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn) {
        router.replace('/auth/login');
      }
    }, [isLoggedIn, router]);

    return isLoggedIn ? <WrappedComponent {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withPrivateRoute;
