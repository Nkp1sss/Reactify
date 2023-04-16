import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../../constants';

const cardsApiSlice = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getPeoples: builder.query({
      query: (searchString = '') => `catalog${searchString && `?q=${searchString}`}`,
    }),
    getPerson: builder.query({
      query: (id: number) => `catalog/${id}`,
    }),
  }),
});

export const { useGetPeoplesQuery, useGetPersonQuery } = cardsApiSlice;
export default cardsApiSlice;
