import {cleanup, render, screen} from '@testing-library/react-native';
import React from 'react';
import RepositoriesPageTemplate from './RepositoriesPageTemplate';

describe('<RepositoriesPageTemplate />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    cleanup();
  });

  it('#1. Exist - Render default', () => {
    render(<RepositoriesPageTemplate />);

    const repositoriesPageTemplate = screen.getByTestId('repositories-page-template');

    expect(repositoriesPageTemplate).toBeTruthy();
  });
});
