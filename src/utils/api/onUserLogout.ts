import axios, { AxiosResponse } from 'axios';

interface ILogoutUserResponse {
  message: string;
}

const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = '';
};

export const onUserLogout = async () => {
  try {
    const logoutUserResponse: AxiosResponse<ILogoutUserResponse> = await axios.post('/auth/logout');
    clearAuthHeader();
    localStorage.setItem('accessToken', '');
    return logoutUserResponse.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data ?? error;
    }
    return error;
  }
};
