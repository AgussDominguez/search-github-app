import {useEffect, useState} from 'react';
import {create} from 'zustand';
import useDebounce from '../../../../common/hooks/Debounce/useDebounce';
import {IUser} from '../../interfaces';
import {type manageUsersState} from './interfaces';

export const manageUsersStore = create<manageUsersState>(set => ({
  tempQuery: '',
  query: '',
  usersList: [],

  updateTempQuery: (newQuery: string): void =>
    set(() => ({tempQuery: newQuery})),
  updateQuery: (newQuery: string): void => set(() => ({query: newQuery})),
  setUsersList: (newUsersList: IUser[]): void =>
    set(() => ({usersList: newUsersList})),
}));

export const useManageUsers = () => {
  const {
    query,
    tempQuery,
    updateTempQuery,
    updateQuery,
    setUsersList,
    usersList,
  } = manageUsersStore();
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
      fetch(`https://api.github.com/search/users?q=${query}`)
        .then(response => response.json())
        .then(json => json && json.items && setUsersList(json.items))
        .catch(error => setError(error))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [query]);

  return {
    error,
    loading,
    usersList,
    query,
    updateQuery,
    tempQuery,
    updateTempQuery,
  };
};
