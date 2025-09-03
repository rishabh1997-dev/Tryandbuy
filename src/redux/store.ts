import { configureStore } from '@reduxjs/toolkit';
import { tryndbuyApi } from '@/api/tryndbuyApi';

export const store = configureStore({
  reducer: {
    [tryndbuyApi.reducerPath]: tryndbuyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tryndbuyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
