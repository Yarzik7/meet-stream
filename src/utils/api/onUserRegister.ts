import axios, { AxiosResponse } from 'axios';
import { IRegisterUserState } from '@/types/Auth.types';
import { IUser } from '@/types/User.types';

axios.defaults.baseURL = 'https://meet-stream-server.onrender.com/api';

export const onUserRegister = async (userData: IRegisterUserState) => {
  try {
    const registeredUserResponse: AxiosResponse<IUser> = await axios.post('/auth/register', userData);
    return registeredUserResponse.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data ?? error;
    }
    return error;
  }
};
