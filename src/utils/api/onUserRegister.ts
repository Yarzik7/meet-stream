import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { IRegisterUserState } from '@/types/Auth.types';
import { IUser } from '@/types/User.types';
import { handleAsyncOperationErrors } from './handleAsyncOperationErrors';

// axios.defaults.baseURL = 'https://meet-stream-server.onrender.com/api';
axios.defaults.baseURL = 'https://meet-stream-server-production.up.railway.app/api';

export const onUserRegister = async (userData: IRegisterUserState, config?: AxiosRequestConfig) => {
  return await handleAsyncOperationErrors<IUser>(async (): Promise<IUser> => {
    const registeredUserResponse: AxiosResponse<IUser> = await axios.post('/auth/register', userData, config);
    return registeredUserResponse.data;
  });
};
