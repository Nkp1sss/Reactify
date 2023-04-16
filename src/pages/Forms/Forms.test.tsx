import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';

import Forms from './Forms';
import { renderWithProviders } from '../../tests';

describe('Forms', () => {
  it('Renders the forms page', () => {
    renderWithProviders(<Forms />);
    const input = screen.getByText(/Fullname:/);
    expect(input).toBeInTheDocument();
  });
});
