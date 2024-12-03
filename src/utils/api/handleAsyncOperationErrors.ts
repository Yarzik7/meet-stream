import axios from 'axios';
import { IError } from '@/types/Error.types';

export const handleAsyncOperationErrors = async <T, E = IError>(asyncOperation: Function): Promise<T | E> => {
  try {
    return await asyncOperation();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data ?? { error: error.name, message: error.message, statusCode: error.code };
    }

    return error as E;
  }
};
