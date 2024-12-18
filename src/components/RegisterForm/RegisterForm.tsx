'use client';

import React from 'react';
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput/FormInput';
import { IRegisterUserState } from '@/types/Auth.types';
import { onUserRegister } from '@/utils/api';
import { IUser } from '@/types/User.types';
import { IError } from '@/types/Error.types';
import axios, { CancelTokenSource } from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  createNameRegisterOptions,
  createUsernameRegisterOptions,
  createEmailRegisterOptions,
  createPasswordRegisterOptions,
} from '@/utils/formUtils/registerOptionsCreators';

const RegisterForm = () => {
  const router = useRouter();

  const cancelTokenRef = useRef<CancelTokenSource | null>(null);
  cancelTokenRef.current = axios.CancelToken.source();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IRegisterUserState>({ mode: 'all' });

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
      <Form buttonCaption="Register" isValidForm={isValid} handleRHFSubmit={handleSubmit} onSubmit={onSubmit}>
        <FormInput<IRegisterUserState>
          label="Name"
          name="name"
          register={register}
          registerOptions={createNameRegisterOptions<IRegisterUserState>()}
          errors={errors}
        />

        <FormInput<IRegisterUserState>
          label="Username"
          name="username"
          register={register}
          registerOptions={createUsernameRegisterOptions<IRegisterUserState>()}
          errors={errors}
        />

        <FormInput<IRegisterUserState>
          label="Email"
          name="email"
          type="email"
          register={register}
          registerOptions={createEmailRegisterOptions<IRegisterUserState>()}
          errors={errors}
        />

        <FormInput<IRegisterUserState>
          label="Password"
          name="password"
          type="password"
          register={register}
          registerOptions={createPasswordRegisterOptions<IRegisterUserState>()}
          errors={errors}
        />
      </Form>
    </>
  );
};

export default RegisterForm;
