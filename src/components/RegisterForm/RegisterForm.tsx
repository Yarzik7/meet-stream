'use client';

import React from 'react';
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { IRegisterUserState } from '@/types/Auth.types';
import { onUserRegister } from '@/utils/api';
import { IUser } from '@/types/User.types';
import { IError } from '@/types/Error.types';
import axios, { CancelTokenSource } from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

const RegisterForm = () => {
  const router = useRouter();

  const cancelTokenRef = useRef<CancelTokenSource | null>(null);
  cancelTokenRef.current = axios.CancelToken.source();

  const { register, handleSubmit } = useForm<IRegisterUserState>();

  const onSubmit: SubmitHandler<IRegisterUserState> = async data => {
    const registerUserResult: IUser | IError = await onUserRegister(data, {
      cancelToken: cancelTokenRef.current?.token,
    });

    if ('error' in registerUserResult && registerUserResult.error) {
      return alert(registerUserResult.message);
    }

    if (!('error' in registerUserResult)) {
      alert('Congratulations! You have been successfully registered!');
      router.replace('login');
    }
  };

  useEffect(() => {
    return () => cancelTokenRef.current?.cancel();
  }, []);

  return (
    <>
      <Form buttonCaption="Register" handleRHFSubmit={handleSubmit} onSubmit={onSubmit}>
        <Input<IRegisterUserState> label="Name" name="name" register={register} required />
        <Input<IRegisterUserState>
          label="Username"
          name="username"
          register={register}
          required
        />
        <Input<IRegisterUserState>
          label="Email"
          name="email"
          type="email"
          register={register}
          required
        />
        <Input<IRegisterUserState>
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

export default RegisterForm;
