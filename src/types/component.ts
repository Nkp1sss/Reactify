export type TSearchBarState = {
  inputValue: string;
};

export type THeaderProps = {
  title: string;
};

export interface ILinks {
  instagram?: string;
  facebook?: string;
  twitter?: string;
}

export type TPeople = {
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

export type TFormCard = {
  fullname: string;
  birthday: string;
  favoriteCity: string;
  picture: string;
  permission: boolean;
  gender: string;
};
