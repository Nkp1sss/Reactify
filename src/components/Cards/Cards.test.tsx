import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import Cards from './Cards';
import peoples from '../../data/data';

describe('Cards', () => {
  it('Renders all cards correctly', () => {
    const { queryAllByTestId } = render(<Cards />);
    const allCards = queryAllByTestId(/test/);
    expect(allCards.length).toBe(peoples.length);
  });
});
