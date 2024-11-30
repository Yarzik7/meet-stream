import axios, { AxiosResponse } from 'axios';
import { ILoginUserState } from '@/types/Auth.types';
import { IUser } from '@/types/User.types';

// axios.defaults.baseURL = 'https://meet-stream-server.onrender.com/api';

export const onUserLogin = async (userData: ILoginUserState) => {
  try {
    const registeredUserResponse: AxiosResponse<IUser> = await axios.post('/auth/login', userData);
    return registeredUserResponse.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    return error;
  }
};
