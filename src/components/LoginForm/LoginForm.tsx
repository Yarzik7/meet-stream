'use client';

import React from 'react';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { onUserLogin } from '@/utils/api';
import type { IUser } from '@/types/User.types';
import type { IError } from '@/types/Error.types';
import type { ILoginUserState } from '@/types/Auth.types';
import axios, { CancelTokenSource } from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

const LoginForm = () => {

  const { logIn } = useAuth();

  const router = useRouter();

  const cancelTokenRef = useRef<CancelTokenSource | null>(null);

  cancelTokenRef.current = axios.CancelToken.source();

  const { register, handleSubmit } = useForm<ILoginUserState>();

  const onSubmit: SubmitHandler<ILoginUserState> = async data => {
    const userLoginResult: IUser | IError = await onUserLogin(data, { cancelToken: cancelTokenRef.current?.token });

    if ('error' in userLoginResult && userLoginResult.error) {
      return alert(userLoginResult.message);
    }

    if (!('error' in userLoginResult)) {
      alert(`${userLoginResult.username}, welcome to MeetStream!`);
      logIn(userLoginResult);
      router.replace('/');
    }
  };

  useEffect(() => {
    return () => cancelTokenRef.current?.cancel();
  }, []);

  return (
    <>
      <Form buttonCaption="Login" handleRHFSubmit={handleSubmit} onSubmit={onSubmit}>
        <Input<ILoginUserState>
          label="Email"
          name="email"
          type="email"
          register={register}
          required
        />
        <Input<ILoginUserState>
          label="Password"
          name="password"
          type="password"
          register={register}
          required
        />
      </Form>
    </>
  );
};

export default LoginForm;
