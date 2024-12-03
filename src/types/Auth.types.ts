import type { IUser } from './User.types';

interface IStatusState {
  error: boolean;
  loading: boolean;
}

interface IRegisterUserState extends Omit<IUser, '_id'> {
  password: string;
}

type ILoginUserState = Pick<IRegisterUserState, 'email' | 'password'>;

interface ILogoutUserResponse {
  message: string;
}

export type { IRegisterUserState, ILoginUserState, IStatusState, ILogoutUserResponse };
