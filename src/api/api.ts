import { API_BASE_URL } from '../constants';
import { PeopleType } from '../types';

const getPeoples = async (searchString?: string): Promise<PeopleType[]> => {
  const response = await fetch(`${API_BASE_URL}catalog${searchString ? `?q=${searchString}` : ''}`);
  const data = response.json();
  return data;
};

const getPerson = async (id: number): Promise<PeopleType> => {
  const response = await fetch(`${API_BASE_URL}catalog/${id}`);
  const data = response.json();
  return data;
};

export { getPeoples, getPerson };
