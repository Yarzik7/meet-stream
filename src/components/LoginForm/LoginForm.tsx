import React from 'react';
import { useState } from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    console.log({ email, password });
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
