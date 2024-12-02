'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

const withRestrictedRoute = (WrappedComponent: React.ComponentType) => {
  const RestrictedComponent = (props: any) => {
    const { isLoggedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (isLoggedIn) {
        router.replace('/'); // перенаправляємо, якщо вже авторизований
      }
    }, [isLoggedIn, router]);

    // Показуємо тільки якщо користувач не авторизований
    return !isLoggedIn ? <WrappedComponent {...props} /> : null;
  };

  return RestrictedComponent;
};

export default withRestrictedRoute;
