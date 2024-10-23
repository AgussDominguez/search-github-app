import {cleanup, render, screen} from '@testing-library/react-native';
import React from 'react';
import RepositoriesTable from './RepositoriesTable';

describe('<SearchResultsTable />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    cleanup();
  });

  it('#1. Exist - Render default', () => {
    render(<RepositoriesTable />);

    const searchResultsTable = screen.getByTestId('search-results-table');

    expect(searchResultsTable).toBeTruthy();
  });
});
