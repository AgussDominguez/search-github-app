import {cleanup, render, screen} from '@testing-library/react-native';
import React from 'react';
import SearchResultsTable from './SearchResultsTable';

describe('<SearchResultsTable />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    cleanup();
  });

  it('#1. Exist - Render default', () => {
    render(<SearchResultsTable />);

    const searchResultsTable = screen.getByTestId('search-results-table');

    expect(searchResultsTable).toBeTruthy();
  });
});
