'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

const withRestrictedRoute = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const RestrictedComponent: React.FC<P> = props => {
    const { isLoggedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (isLoggedIn) {
        router.replace('/');
      }
    }, [isLoggedIn, router]);

    return !isLoggedIn ? <WrappedComponent {...props} /> : null;
  };

  return RestrictedComponent;
};

export default withRestrictedRoute;
