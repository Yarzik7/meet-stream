import axios, { AxiosResponse } from 'axios';
import { IUser } from '@/types/User.types';
import { handleAsyncOperationErrors } from './handleAsyncOperationErrors';

const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const onGetCurrentUser = async () => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    return { error: 'APP_ERROR', message: 'Login or register, please!', statusCode: 'TOKEN_ERROR' };
  }

  return await handleAsyncOperationErrors<IUser>(async (): Promise<IUser> => {
    setAuthHeader(token);
    const loginUserResponse: AxiosResponse<IUser> = await axios.get('/auth/current');
    return loginUserResponse.data;
  });
};
