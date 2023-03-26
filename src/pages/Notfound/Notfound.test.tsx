import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Notfound from './Notfound';

describe('Notfound', () => {
  it('Renders the Notfound page', () => {
    render(<Notfound />);
    const text = screen.getByText(/This is page does not exist/);
    expect(text).toBeInTheDocument();
  });
});
