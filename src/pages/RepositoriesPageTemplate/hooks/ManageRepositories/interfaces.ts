import {IRepository} from '../../interfaces';

export type manageRepositoriesState = {
  tempQuery: string;
  query: string;
  repositoriesList: IRepository[];

  updateQuery: (newQuery: string) => void;
  updateTempQuery: (newQuery: string) => void;
  setRepositoriesList: (newRepositoryList: IRepository[]) => void;
};
