import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { onUserLogin } from '@/utils/api';
// import { IUser } from '@/types/User.types';

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

    const user = await onUserLogin({ email, password });
    if (user?.error || user?.message) {
      console.log(user);
      return alert(`Error: ${user.message}`);
    }
    console.log(user);
    logIn(user);
    router.push('/');
  };

  return (
    <>
      <Form buttonCaption="Login" onSubmit={handleSubmit}>
        <Input label="Email" name="email" onChange={handleChange} />
        <Input label="Password" name="password" onChange={handleChange} />
      </Form>
    </>
  );
};

export default LoginForm;