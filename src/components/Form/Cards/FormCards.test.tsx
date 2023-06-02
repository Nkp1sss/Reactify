import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../tests';

import FormCards from './FormCards';

describe('FormCard', () => {
  it('Renders the FormCard correctly', () => {
    renderWithProviders(<FormCards />);
    const formCards = screen.getByTestId('form-cards');
    expect(formCards).toBeInTheDocument();
  });
});
