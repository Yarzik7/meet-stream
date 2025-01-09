import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ICreateRoomData, IRoom } from '@/types/Room.types';
import { handleAsyncOperationErrors } from './handleAsyncOperationErrors';

export const onCreateRoom = async (roomData: ICreateRoomData, config?: AxiosRequestConfig) => {
  return await handleAsyncOperationErrors<IRoom>(async (): Promise<IRoom> => {
    const createdRoomResponse: AxiosResponse<IRoom> = await axios.post('/rooms/create-room', roomData, config);
    return createdRoomResponse.data;
  });
};
