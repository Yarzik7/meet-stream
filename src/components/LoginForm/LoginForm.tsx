'use client';

import React from 'react';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput/FormInput';
import { onUserLogin } from '@/utils/api';
import type { IUser } from '@/types/User.types';
import type { IError } from '@/types/Error.types';
import type { ILoginUserState } from '@/types/Auth.types';
import axios, { CancelTokenSource } from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createEmailRegisterOptions, createPasswordRegisterOptions } from '@/utils/formUtils/registerOptionsCreators';

const LoginForm = () => {
  const { logIn } = useAuth();

  const router = useRouter();

  const cancelTokenRef = useRef<CancelTokenSource | null>(null);

  cancelTokenRef.current = axios.CancelToken.source();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginUserState>({ mode: 'all' });

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
      <Form buttonCaption="Login" isValidForm={isValid} handleRHFSubmit={handleSubmit} onSubmit={onSubmit}>
        <FormInput<ILoginUserState>
          label="Email"
          name="email"
          type="email"
          register={register}
          registerOptions={createEmailRegisterOptions<ILoginUserState>()}
          errors={errors}
        />

        <FormInput<ILoginUserState>
          label="Password"
          name="password"
          type="password"
          register={register}
          registerOptions={createPasswordRegisterOptions<ILoginUserState>()}
          errors={errors}
        />
      </Form>
    </>
  );
};

export default LoginForm;
