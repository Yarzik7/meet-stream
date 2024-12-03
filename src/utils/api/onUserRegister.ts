import axios, { AxiosResponse } from 'axios';
import { IRegisterUserState } from '@/types/Auth.types';
import { IUser } from '@/types/User.types';
import { handleAsyncOperationErrors } from './handleAsyncOperationErrors';

axios.defaults.baseURL = 'https://meet-stream-server.onrender.com/api';

export const onUserRegister = async (userData: IRegisterUserState) => {
  return await handleAsyncOperationErrors<IUser>(async (): Promise<IUser> => {
    const registeredUserResponse: AxiosResponse<IUser> = await axios.post('/auth/register', userData);
    return registeredUserResponse.data;
  });
};
