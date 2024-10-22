import { cleanup, render, screen } from '@testing-library/react-native';
import React from 'react';
import TemplateName from './TemplateName';
import { mockNavigation } from '../../../src/common/testing/navigation';
import { NavProps } from '../../../src/App/interfaces';

export const mockRoute: NavProps['route'] = {
  key: 'home',
  name: 'Home',
  params: undefined,
};

describe('<TemplateName />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    cleanup();
  });

  it('#1. Exist - Render default', () => {
    render(<TemplateName navigation={mockNavigation} route={mockRoute} />);

    const templateName = screen.getByTestId('template-name');

    expect(templateName).toBeTruthy();
  });
});
