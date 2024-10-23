import {IUser} from '../../interfaces';

export type manageUsersState = {
  tempQuery: string;
  query: string;
  usersList: IUser[];

  updateQuery: (newQuery: string) => void;
  updateTempQuery: (newQuery: string) => void;
  setUsersList: (newUsersList: IUser[]) => void;
};
