import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FormCardType } from '../../types';

type CardsType = {
  cards: FormCardType[];
};

const initialState: CardsType = {
  cards: [],
};

const slice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<FormCardType>) {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = slice.actions;
export default slice.reducer;
