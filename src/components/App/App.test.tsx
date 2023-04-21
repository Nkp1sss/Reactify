import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { renderWithProviders } from '../../tests';
import App from './App';

describe('App', () => {
  it('Render App correctly', () => {
    renderWithProviders(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const home = screen.getByText(/Go ahead, hover over search/);
    expect(home).toBeInTheDocument();
  });
});
