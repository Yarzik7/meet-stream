import axios, { AxiosResponse } from 'axios';
import { ILoginUserState } from '@/types/Auth.types';
import { IUser } from '@/types/User.types';
import { handleAsyncOperationErrors } from './handleAsyncOperationErrors';

interface IToken {
  accessToken: string;
}

interface ILoginUserResponse extends IToken {
  user: IUser;
}

const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const onUserLogin = async (userData: ILoginUserState) => {
  return await handleAsyncOperationErrors<IUser>(async (): Promise<IUser> => {
    const loginUserResponse: AxiosResponse<ILoginUserResponse> = await axios.post('/auth/login', userData);

    setAuthHeader(loginUserResponse.data.accessToken);
    localStorage.setItem('accessToken', loginUserResponse.data.accessToken);

    return loginUserResponse.data.user;
  });
};
