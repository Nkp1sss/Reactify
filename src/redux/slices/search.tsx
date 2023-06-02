import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
  searchValue: string;
};
const initialState: InitialStateType = {
  searchValue: '',
};

const slice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    changeValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { changeValue } = slice.actions;
export default slice.reducer;
