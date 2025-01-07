interface IUser {
  _id: string;
  name: string;
  username: string;
  email: string;
}

type TOwner = IUser["_id"];

export type { IUser, TOwner };
