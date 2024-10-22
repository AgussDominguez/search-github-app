import {cleanup, render, screen} from '@testing-library/react-native';
import React from 'react';
import UsersPageTemplate from './UsersPageTemplate';

describe('<UsersPageTemplate />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    cleanup();
  });

  it('#1. Exist - Render default', () => {
    render(<UsersPageTemplate />);

    const usersPageTemplate = screen.getByTestId('users-page-template');

    expect(usersPageTemplate).toBeTruthy();
  });
});
