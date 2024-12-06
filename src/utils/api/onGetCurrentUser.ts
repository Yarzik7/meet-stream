import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import type { IUser } from '@/types/User.types';
import { handleAsyncOperationErrors } from './handleAsyncOperationErrors';

interface IGetCurrentUserResponse {
  user: IUser;
  accessToken?: string;
}

const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const onGetCurrentUser = async (config?: AxiosRequestConfig) => {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return { error: 'APP_ERROR', message: 'Login or register, please!', statusCode: 'TOKEN_ERROR' };
  }

  return await handleAsyncOperationErrors<IUser>(async (): Promise<IUser> => {
    setAuthHeader(token);
    const getCurrentUserResponse: AxiosResponse<IGetCurrentUserResponse> = await axios.get('/auth/current', config);

    if (getCurrentUserResponse.data.accessToken) {
      console.log('There is token!');
      setAuthHeader(getCurrentUserResponse.data.accessToken);
      localStorage.setItem('accessToken', getCurrentUserResponse.data.accessToken);
    }

    return getCurrentUserResponse.data.user;
  });
};
