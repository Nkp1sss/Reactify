import { configureStore } from '@reduxjs/toolkit';
import SearchReducer from './slices/search';
import FormCardsReducer from './slices/formCards';
import CardsApi from './slices/cardsAPI';

const store = configureStore({
  reducer: {
    search: SearchReducer,
    formCards: FormCardsReducer,
    [CardsApi.reducerPath]: CardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CardsApi.middleware),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
