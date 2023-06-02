import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests';

import Home from './Home';

describe('Home', () => {
  it('Renders the home page', () => {
    renderWithProviders(<Home />);
    const searchBarTitle = screen.getByText(/Go ahead, hover over search/);
    expect(searchBarTitle).toBeInTheDocument();
  });
});
