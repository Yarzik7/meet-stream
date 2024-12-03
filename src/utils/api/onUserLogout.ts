import axios, { AxiosResponse } from 'axios';
import { handleAsyncOperationErrors } from './handleAsyncOperationErrors';
import { ILogoutUserResponse } from '@/types/Auth.types';

const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = '';
};

export const onUserLogout = async () => {
  return await handleAsyncOperationErrors<ILogoutUserResponse>(async (): Promise<ILogoutUserResponse> => {
    const logoutUserResponse: AxiosResponse<ILogoutUserResponse> = await axios.post('/auth/logout');
    clearAuthHeader();

    localStorage.setItem('accessToken', '');

    return logoutUserResponse.data;
  });
};
