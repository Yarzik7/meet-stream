import axios, { AxiosResponse } from 'axios';
import { IUser } from '@/types/User.types';

const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const onGetCurrentUser = async () => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    return { error: true, message: 'Login or register, please!' };
  }

  try {
    setAuthHeader(token);
    const loginUserResponse: AxiosResponse<IUser> = await axios.get('/auth/current');
    return loginUserResponse.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data ?? error;
    }
    return error;
  }
};
