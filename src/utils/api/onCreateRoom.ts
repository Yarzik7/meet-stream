import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ICreateRoomData } from '@/types/Room.types';
import { handleAsyncOperationErrors } from './handleAsyncOperationErrors';

export const onCreateRoom = async (roomData: ICreateRoomData, config?: AxiosRequestConfig) => {
  return await handleAsyncOperationErrors<ICreateRoomData>(async (): Promise<ICreateRoomData> => {
    const createdRoomResponse: AxiosResponse<ICreateRoomData> = await axios.post('/rooms/create-room', roomData, config);
    return createdRoomResponse.data;
  });
};
