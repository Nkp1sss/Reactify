import { describe, it, expect, vi } from 'vitest';
import { getPeoples, getPerson } from './api';

import { TPeople } from '../types/component';

describe('Test API: ', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('Test getPeoples: ', async () => {
    const responsePeoples: TPeople[] = [
      {
        id: 1,
        name: 'Elon Musk',
        profession: 'CEO',
        company: 'SpaceX',
        age: 51,
        instagram: 'https://www.instagram.com/elonmusk/',
        twitter: 'https://twitter.com/elonmusk',
        photo: 'assets/images/musk.webp',
        description:
          'American entrepreneur, engineer, and billionaire. Founder, CEO, and chief engineer of SpaceX; investor, CEO, and product architect of Tesla; founder of The Boring Company; co-founder of Neuralink and OpenAI; owner of Twitter. On January 7, 2021, with an estimated fortune of $185 billion, became for the first time the richest man on the planet, displacing Amazon founder Jeff Bezos in second place.On November 1, 2021, he became the first person in history to reach the $300 billion mark.',
      },
    ];
    const fetchPromisePeoples = Promise.resolve({
      json: () => responsePeoples,
    });
    global.fetch = vi.fn().mockImplementation(() => fetchPromisePeoples);

    const peoples = await getPeoples();
    expect(Array.isArray(peoples)).toBe(true);
  });
  it('Test getPerson: ', async () => {
    const responsePerson: TPeople = {
      id: 1,
      name: 'Elon Musk',
      profession: 'CEO',
      company: 'SpaceX',
      age: 51,
      instagram: 'https://www.instagram.com/elonmusk/',
      twitter: 'https://twitter.com/elonmusk',
      photo: 'assets/images/musk.webp',
      description:
        'American entrepreneur, engineer, and billionaire. Founder, CEO, and chief engineer of SpaceX; investor, CEO, and product architect of Tesla; founder of The Boring Company; co-founder of Neuralink and OpenAI; owner of Twitter. On January 7, 2021, with an estimated fortune of $185 billion, became for the first time the richest man on the planet, displacing Amazon founder Jeff Bezos in second place.On November 1, 2021, he became the first person in history to reach the $300 billion mark.',
    };
    const fetchPromisePerson = Promise.resolve({
      json: () => responsePerson,
    });
    global.fetch = vi.fn().mockImplementation(() => fetchPromisePerson);

    const product = await getPerson(1);
    expect(typeof product).toBe('object');
  });
});
