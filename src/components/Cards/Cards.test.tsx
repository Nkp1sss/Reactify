import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';

import Cards from './Cards';
import { renderWithProviders } from '../../tests';

describe('Cards', () => {
  it('Renders all cards correctly', () => {
    renderWithProviders(<Cards />);
    const cards = screen.queryAllByTestId(/test/);
    expect(cards.length).toBe(1);
  });
});
