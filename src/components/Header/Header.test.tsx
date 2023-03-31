import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';

import HeaderWithTitle, { Header } from './Header';
import { HeaderTitle, ROUTES } from '../../constants/appSettings';

describe('Header', () => {
  it('Renders Header correctly', () => {
    const testProps = { title: 'testHeaderTitle' };
    render(
      <Router>
        <Header {...testProps} />
      </Router>
    );
    const testHeaderTitle = screen.getByText('testHeaderTitle');
    expect(testHeaderTitle).toBeInTheDocument();
  });
});

describe('HeaderWithTitle', () => {
  it('Renders header with about title when location pathname is not found', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['123']}>
        <HeaderWithTitle />
      </MemoryRouter>
    );
    expect(getByText('Not found')).toBeInTheDocument();
  });
});
