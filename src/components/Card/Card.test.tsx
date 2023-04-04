import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from './Card';
import peoples from '../../data/data';

describe('Card', () => {
  it('Renders the card photo correctly', () => {
    const photoUrl = peoples[0].photo;
    render(<Card {...peoples[0]} />);
    const photoElement = screen.getByAltText('picture');
    expect(photoElement).toBeInTheDocument();
  });
  it('Renders person fullname correctly', () => {
    const fullname = peoples[0].name;
    render(<Card {...peoples[0]} />);
    const fullnameElement = screen.getByText(fullname);
    expect(fullnameElement).toBeInTheDocument();
  });
  it('Renders links correctly', () => {
    const socialLinks = {
      instagram: 'https://www.instagram.com/elonmusk/',
      twitter: 'https://twitter.com/elonmusk',
    };
    render(<Card {...peoples[0]} />);
    const instagramLink = screen.getByRole('link', { name: 'instagram logo' });
    const twitterLink = screen.getByRole('link', { name: 'twitter logo' });
    expect(instagramLink).toHaveAttribute('href', socialLinks.instagram);
    expect(twitterLink).toHaveAttribute('href', socialLinks.twitter);
  });
});
