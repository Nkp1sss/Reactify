import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import FormCard from './FormCard';

const testObject = {
  fullname: 'Nikita Kovalev',
  birthday: '19.11.2002',
  favoriteCity: 'Minsk',
  picture: '',
  permission: true,
  gender: 'male',
};

describe('FormCard', () => {
  it('Renders the FormCard correctly', () => {
    render(<FormCard {...testObject} />);
    const fullname = screen.getByText('Nikita Kovalev');
    expect(fullname).toBeInTheDocument();
  });
});
