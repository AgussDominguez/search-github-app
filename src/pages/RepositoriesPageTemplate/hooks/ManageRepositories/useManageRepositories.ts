import {useEffect, useState} from 'react';
import {create} from 'zustand';
import useDebounce from '../../../../common/hooks/Debounce/useDebounce';
import {IRepository} from '../../interfaces';
import {type manageRepositoriesState} from './interfaces';

export const manageRepositoriesStore = create<manageRepositoriesState>(set => ({
  tempQuery: '',
  query: '',
  repositoriesList: [],

  updateTempQuery: (newQuery: string): void =>
    set(() => ({tempQuery: newQuery})),
  updateQuery: (newQuery: string): void => set(() => ({query: newQuery})),
  setRepositoriesList: (newRepositoriesList: IRepository[]): void =>
    set(() => ({repositoriesList: newRepositoriesList})),
}));

export const useManageRepositories = () => {
  const {
    query,
    tempQuery,
    updateTempQuery,
    updateQuery,
    setRepositoriesList,
    repositoriesList,
  } = manageRepositoriesStore();
  const queryDebounced = useDebounce(tempQuery, 2000);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (queryDebounced.length > 2) {
      updateQuery(queryDebounced);
    }
  }, [queryDebounced]);

  useEffect(() => {
    if (query) {
      /* TODO: Add .env and service integration */
      fetch(`https://api.github.com/search/repositories?q=${query}`)
        .then(response => response.json())
        .then(json => json && json.items && setRepositoriesList(json.items))
        .catch(error => setError(error))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [query]);

  return {
    error,
    loading,
    repositoriesList,
    query,
    updateQuery,
    tempQuery,
    updateTempQuery,
  };
};
