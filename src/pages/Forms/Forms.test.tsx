import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Forms from './Forms';

describe('Forms', () => {
  it('Renders the forms page', () => {
    render(<Forms />);
    const input = screen.getByText(/Fullname:/);
    expect(input).toBeInTheDocument();
  });
});
