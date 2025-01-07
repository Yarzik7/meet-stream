import { TOwner } from './User.types';

interface IRoom {
  _id: string;
  owner: TOwner;
}

interface ICreateRoomData {
  owner: IRoom['owner'];
}

export type { IRoom, ICreateRoomData };
