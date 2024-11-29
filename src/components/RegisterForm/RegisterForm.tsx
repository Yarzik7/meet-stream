'use client';

import React from 'react';
import { useReducer } from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { IRegisterUserState, IStatusState } from '@/types/Auth.types';
import { onUserRegister } from '@/utils/api/onUserRegister';

const initialUserState: IRegisterUserState = {
  name: '',
  username: '',
  email: '',
  password: '',
};

const initialStatusState: IStatusState = {
  error: false,
  loading: false,
};

const ActionTypesMap = {
  name: 'SET_NAME',
  username: 'SET_USERNAME',
  email: 'SET_EMAIL',
  password: 'SET_PASSWORD',
} as const;

type UserAction =
  | { type: (typeof ActionTypesMap)['name']; payload: string }
  | { type: (typeof ActionTypesMap)['username']; payload: string }
  | { type: (typeof ActionTypesMap)['email']; payload: string }
  | { type: (typeof ActionTypesMap)['password']; payload: string }
  | { type: 'SET_ERROR'; payload: boolean }
  | { type: 'SET_LOADING'; payload: boolean };

type StatusAction = { type: 'SET_ERROR'; payload: boolean } | { type: 'SET_LOADING'; payload: boolean };

function userReducer(state: IRegisterUserState, action: UserAction): IRegisterUserState {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

function statusReducer(state: IStatusState, action: StatusAction): IStatusState {
  switch (action.type) {
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

const RegisterForm = () => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const [statusState, statusDispatch] = useReducer(statusReducer, initialStatusState);
  false && console.log(statusState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    const type = ActionTypesMap[name as keyof typeof ActionTypesMap];
    userDispatch({ type, payload: value });
    statusDispatch({ type: 'SET_ERROR', payload: false });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const registeredUser = await onUserRegister(userState);
    console.log(registeredUser);
  };

  return (
    <>
      <Form buttonCaption="Register" onSubmit={handleSubmit}>
        <Input label="Name" name="name" onChange={handleChange} required />
        <Input label="Username" name="username" onChange={handleChange} required />
        <Input label="Email" name="email" onChange={handleChange} required />
        <Input label="Password" name="password" onChange={handleChange} required />
      </Form>
    </>
  );
};

export default RegisterForm;
