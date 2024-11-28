'use client';

import React from 'react';
import { useReducer } from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';

type State = {
  name: string;
  username: string;
  email: string;
  password: string;
  error: boolean;
  loading: boolean;
};

const initialState: State = {
  name: '',
  username: '',
  email: '',
  password: '',
  error: false,
  loading: false,
};

const ActionTypesMap = {
  name: 'SET_NAME',
  username: 'SET_USERNAME',
  email: 'SET_EMAIL',
  password: 'SET_PASSWORD',
} as const;

type Action =
  | { type: (typeof ActionTypesMap)['name']; payload: string }
  | { type: (typeof ActionTypesMap)['username']; payload: string }
  | { type: (typeof ActionTypesMap)['email']; payload: string }
  | { type: (typeof ActionTypesMap)['password']; payload: string }
  | { type: 'SET_ERROR'; payload: boolean }
  | { type: 'SET_LOADING'; payload: boolean };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

const RegisterForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    const type = ActionTypesMap[name as keyof typeof ActionTypesMap];
    dispatch({ type, payload: value });
    dispatch({ type: 'SET_ERROR', payload: false });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('submit');
    if (!state.name || !state.username) {
      dispatch({ type: 'SET_ERROR', payload: true });
      return;
    }

    dispatch({ type: 'SET_LOADING', payload: true });

    setTimeout(() => {
      dispatch({ type: 'SET_LOADING', payload: false });
      console.log(state);
    }, 3000);
  };

  return (
    <>
      <Form buttonCaption="Register" onSubmit={handleSubmit}>
        <Input label="Name" name="name" onChange={handleChange} />
        <Input label="Username" name="username" onChange={handleChange} />
        <Input label="Email" name="email" onChange={handleChange} />
        <Input label="Password" name="password" onChange={handleChange} />
      </Form>
    </>
  );
};

export default RegisterForm;
