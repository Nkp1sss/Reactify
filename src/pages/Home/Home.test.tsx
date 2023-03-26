import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('Renders the home page', () => {
    render(<Home />);
    const searchBarTitle = screen.getByText(/Go ahead, hover over search/);
    expect(searchBarTitle).toBeInTheDocument();
  });
});
