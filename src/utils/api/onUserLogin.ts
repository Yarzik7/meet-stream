import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ILoginUserState, IToken } from '@/types/Auth.types';
import { IUser } from '@/types/User.types';
import { handleAsyncOperationErrors } from './handleAsyncOperationErrors';

interface ILoginUserResponse extends IToken {
  user: IUser;
}

const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const onUserLogin = async (userData: ILoginUserState, config?: AxiosRequestConfig) => {
  return await handleAsyncOperationErrors<IUser>(async (): Promise<IUser> => {
    const loginUserResponse: AxiosResponse<ILoginUserResponse> = await axios.post('/auth/login', userData, config);

    setAuthHeader(loginUserResponse.data.accessToken);
    localStorage.setItem('accessToken', loginUserResponse.data.accessToken);

    return loginUserResponse.data.user;
  });
};
