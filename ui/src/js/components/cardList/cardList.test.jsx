import React from 'react';

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import CardList from './cardList';

describe('WatchButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should to able simple render ', () => {
    const { container } = render(
      <CardList
        areaTitle='value for button'
        favorites={{}}
        toggleFavorite={() => { }}
        movies={[]}
      />);
    expect(container).toBeInTheDocument();
  });
});
