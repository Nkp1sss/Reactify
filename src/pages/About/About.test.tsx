import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import About from './About';

describe('About', () => {
  it('Renders the about page heading', () => {
    render(<About />);
    const headingElement = screen.getByRole('heading', { name: /about us/i });
    expect(headingElement).toBeInTheDocument();
  });
});
