import { TPeople } from "../types/component";

const getPeoples = async (searchString?: string): Promise<TPeople[]> => {
  const response = await fetch(`https://json-server-6d972uqd4-nkp1sss.vercel.app/catalog${searchString ? `?q=${searchString}` : '' }`)
  const data = response.json();
  return data;
};

const getPerson = async (id: number): Promise<TPeople> => {
  const response = await fetch(`https://json-server-6d972uqd4-nkp1sss.vercel.app/catalog/${id}`)
  const data = response.json();
  return data;
};

export  { getPeoples, getPerson };
