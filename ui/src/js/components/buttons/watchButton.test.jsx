import React from 'react';

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import WatchButton from './watchButton';

describe('WatchButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should to able simple render ', () => {
    const { container } = render(
      <WatchButton value='value for button' />);
    expect(container).toBeInTheDocument();
  });
});
