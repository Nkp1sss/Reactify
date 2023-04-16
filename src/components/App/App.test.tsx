import { Provider } from 'react-redux';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../tests';
import App from './App';

describe('App', () => {
  it('Render App correctly', () => {
    renderWithProviders(<App />);
    const home = screen.getByText(/Go ahead, hover over search/);
    expect(home).toBeInTheDocument();
  });
});
