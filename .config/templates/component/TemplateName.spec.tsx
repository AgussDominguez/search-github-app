import {cleanup, render, screen} from '@testing-library/react-native';
import React from 'react';
import TemplateName from './TemplateName';

describe('<TemplateName />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    cleanup();
  });

  it('#1. Exist - Render default', () => {
    render(<TemplateName />);

    const templateName = screen.getByTestId('template-name');

    expect(templateName).toBeTruthy();
  });
});
