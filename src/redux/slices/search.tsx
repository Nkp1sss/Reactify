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
    changeSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { changeSearchValue } = slice.actions;
export default slice.reducer;
