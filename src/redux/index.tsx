import { configureStore } from '@reduxjs/toolkit';
import SearchReducer from './slices/search';

const store = configureStore({
  reducer: {
    search: SearchReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
