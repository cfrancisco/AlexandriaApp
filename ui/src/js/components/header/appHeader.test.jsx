import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';

import AppHeader from './AppHeader';


describe('AppHeader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should to able simple render ', () => {
    const { container } = render(
      <BrowserRouter>
        <AppHeader />
      </BrowserRouter>);
    expect(container).toBeInTheDocument();
  });

  it('should be able to click on alexandria logo', () => {
    global.window = { location: { pathname: null } }

    const { container } = render(
      <BrowserRouter>
        <AppHeader />
      </BrowserRouter>);

    expect(container).toBeInTheDocument();
    fireEvent.click(screen.getByRole('link'));
    expect(global.window.location.pathname).toEqual('/');
  });


});
