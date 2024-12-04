'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { onUserLogin } from '@/utils/api';
import { IUser } from '@/types/User.types';
import { IError } from '@/types/Error.types';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = useAuth();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return alert('Type is broken');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const userLoginResult: IUser | IError = await onUserLogin({ email, password });

    if ('error' in userLoginResult && userLoginResult.error) {
      return alert(userLoginResult.message);
    }

    if (!('error' in userLoginResult)) {
      alert(`${userLoginResult.username}, welcome to MeetStream!`);
      logIn(userLoginResult);
      router.replace('/');
    }
  };

  return (
    <>
      <Form buttonCaption="Login" onSubmit={handleSubmit}>
        <Input label="Email" name="email" type="email" onChange={handleChange} required />
        <Input label="Password" name="password" type="password" onChange={handleChange} required />
      </Form>
    </>
  );
};

export default LoginForm;
