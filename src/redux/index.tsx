import { configureStore } from '@reduxjs/toolkit';
import SearchReducer from './slices/search';
import FormCardsReducer from './slices/formCards';

const store = configureStore({
  reducer: {
    search: SearchReducer,
    formCards: FormCardsReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
