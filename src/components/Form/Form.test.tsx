import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Form from './Form';

describe('Form', () => {
  it('Renders the form correctly', () => {
    render(<Form addCard={() => console.log(1)} />);
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
  });
});
