import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import FormCards from './FormCards';

const testObjects = [
  {
    fullname: 'Nikita Kovalev',
    birthday: '19.11.2002',
    favoriteCity: 'Minsk',
    picture: '',
    permission: true,
    gender: 'male',
  },
  {
    fullname: 'Alisa Petrovna',
    birthday: '11.11.2002',
    favoriteCity: 'Budapest',
    picture: '',
    permission: false,
    gender: 'female',
  },
];

describe('FormCard', () => {
  it('Renders the FormCard correctly', () => {
    render(<FormCards formCards={testObjects} />);
    const pictures = screen.getAllByAltText('picture');
    expect(pictures.length).toBe(testObjects.length);
  });
});
