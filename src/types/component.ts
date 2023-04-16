export type HeaderPropsType = {
  title: string;
};

export interface ILinks {
  instagram?: string;
  facebook?: string;
  twitter?: string;
}

export type PeopleType = {
  id: number;
  name: string;
  profession: string;
  company?: string;
  age: number;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  photo: string;
  description: string;
};

export type FormCardType = {
  fullname: string;
  birthday: string;
  favoriteCity: string;
  picture: string;
  permission: boolean;
  gender: string;
};
