import React from 'react';
import { useState } from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';

const LoginForm = () => {
  return (
    <>
      <Form buttonCaption="Login">
        <Input label="Email" name="email" />
        <Input label="Password" name="password" />
      </Form>
    </>
  );
};

export default LoginForm;
