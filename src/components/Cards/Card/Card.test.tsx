import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from './Card';
import { PeopleType } from '../../../types';

const peoples: PeopleType[] = [
  {
    id: 1,
    name: 'Elon Musk',
    profession: 'CEO',
    company: 'SpaceX',
    age: 51,
    instagram: 'https://www.instagram.com/elonmusk/',
    twitter: 'https://twitter.com/elonmusk',
    photo:
      'https://yandex-images.clstorage.net/5Qpuu5102/8ded96S4J9_T/YelEloF3sf5sBggFS6wGzgWT5EPOWFSrEDzcuuih8xDPRNPfo_wxs_AFxBsdXCqej6SjeOwMbZ6b_bulzILb5lCNgDKQgvSaTXNIhXv8JxvRovWGbh2FDzX5Ldp4caMAfgFDO4M5YHLAlZJoylsonWhiAfq7G9l7iw2-4cg37yCDXVTmtoYz_AuX2DeIjhcq9cNkB1ycxUklKX3-6QbEJtgTItg3qFHjVzHBudgZKi_aYDILqcpKKjkdLdBthkwBQsoVR8fX0c0Zp9iFuv5mWnUDBHRMrpd5datefWg0FoRZQWFot8izwpfCAuuIWKmt-iMy6UjbuKs5H73DbhUsw6D4Vfd1FcGdGJULB3nO99mWQ9W2bW9GS0X4bmyaNdQmewPg-EQ6QFEV4QEJqlg6_LvR8Tn5GYjJSZ-NEA_1nuIyGhXlB7cjzTjXyre7_XTadlEkVeztxUv2ec5f2LTUdblBccqm2xGhJ2BjS-oaKY7KQ9B5uVsYCvutrHAc9PygULum92e3UfwpR8kXCr7G6pTThifcnjQbFtm_vkikh7WYMNHKp8pS0TeQwAuaaQvsWaCxS8tryXiKvM2yfHTOMnKKdibHBHDf2FX6Jsi8Jhm200YGPVy0iWS7Ds95lkeWKQNge8eZIsBVItKZyGgZ7mpBEZrpC8iYGf0Pw222zmJT-mXWpqdz_jhWGJQq31bqNdMX9Z5PdVmUSP6tWMXmNtgR4OonuYOClHIDy4sbqk6qU8AL6utZuSqPTOMcpf-RILj3NKbFAY971ygEuN802GQgxia9nbQJxfi9jwmHNSQaEQDLBQpCkRfxo4u4-wssqQGQa4gqW_kbXX2wrURtoWP6d3bmpfDOeJdbRpi-ZjuEY3Vmnd7nWfW7XjyrhRW1W-ADKiR4M5MXYiFIaAkZv-nBATnomHj4mN6v8rwGTFNji5clVRXAnTnG2DVarEW7R0N2h94-xatkaqwtY',
    description:
      'American entrepreneur, engineer, and billionaire. Founder, CEO, and chief engineer of SpaceX; investor, CEO, and product architect of Tesla; founder of The Boring Company; co-founder of Neuralink and OpenAI; owner of Twitter. On January 7, 2021, with an estimated fortune of $185 billion, became for the first time the richest man on the planet, displacing Amazon founder Jeff Bezos in second place.On November 1, 2021, he became the first person in history to reach the $300 billion mark.',
  },
  {
    id: 2,
    name: 'Oprah Winfrey',
    profession: 'Media Executive',
    company: 'Harpo Productions',
    age: 69,
    instagram: 'https://www.instagram.com/oprah/',
    facebook: 'https://www.facebook.com/oprahwinfrey/',
    twitter: 'https://twitter.com/Oprah',
    photo: 'https://avrorra.com/wp-content/uploads/2019/01/post_5c401d3a03f36.jpeg',
    description:
      'American talk show host, television producer, actress, author, and media proprietor. She is best known for her talk show, The Oprah Winfrey Show, broadcast from Chicago, which ran in national syndication for 25 years, from 1986 to 2011. Dubbed the "Queen of All Media", she was the richest African-American of the 20th century and was once the world\'s only black billionaire. By 2007, she was often ranked as the most influential woman in the world.',
  },
];

describe('Card', () => {
  it('Renders the card photo correctly', () => {
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
