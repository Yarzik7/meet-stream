import type { IUser } from './User.types';

interface IStatusState {
  error: boolean;
  loading: boolean;
}

interface IRegisterUserState extends Omit<IUser, '_id'>, IStatusState {
  password: string;
}

interface ILoginUserState extends Pick<IRegisterUserState, 'email' | 'password'>, IStatusState {}

export type { IRegisterUserState, ILoginUserState };
