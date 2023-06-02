import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests';

import Form from './Form';

describe('Form', () => {
  it('Renders the form correctly', () => {
    renderWithProviders(<Form />);
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
  });
});
