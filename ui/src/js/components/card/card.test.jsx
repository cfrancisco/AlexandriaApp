
import React from "react";

import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';

import Card from "./card";


describe('Card', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with all props", () => {
    const { container } = render(
      <BrowserRouter>
        <Card
          toggleFavorite={() => { }}
          title="My Favorite Movie"
          poster=""
          year="2021"
          id="idRandom"
          rating="10.0"
          name="Jenny"
        />
      </BrowserRouter>);
    expect(container).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveTextContent("10.0My Favorite Movie2021");
  });

  it("checking Link to details page", () => {
    global.window = { location: { pathname: null } }

    const { container } = render(
      <BrowserRouter>
        <Card
          toggleFavorite={() => { }}
          title="My Favorite Movie"
          poster=""
          year="2021"
          id="idRandom"
          rating="10.0"
          name="Jenny"
        />
      </BrowserRouter>);

    expect(container).toBeInTheDocument();
    fireEvent.click(screen.getByRole('link'));
    expect(global.window.location.pathname).toEqual('/movies:idRandom');
  });

});
