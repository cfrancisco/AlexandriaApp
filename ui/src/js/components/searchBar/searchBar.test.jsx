import React from 'react';

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import SearchBar from './searchBar';


describe('SearchBar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should to able simple render ', () => {
    const { container } = render(
      <SearchBar
        onClick={() => { }}
        onChange={() => { }}
        value='searched value' />);
    expect(container).toBeInTheDocument();
  });


});
