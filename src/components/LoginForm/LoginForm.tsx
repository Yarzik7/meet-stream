import React from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';

const LoginForm = () => {
  return (
    <>
      <Form>
        <Input label="Email" />
        <Input label="Password" />
      </Form>
    </>
  );
};

export default LoginForm;
