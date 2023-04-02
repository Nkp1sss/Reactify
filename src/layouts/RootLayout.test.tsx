import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import RootLayout from './RootLayout';

describe('RootLayout', () => {
  it('Renders HeaderWithTitle and Outlet components', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <RootLayout />
      </MemoryRouter>
    );
    expect(getByTestId('header-with-title')).toBeInTheDocument();
    expect(getByTestId('outlet')).toBeInTheDocument();
  });
});
