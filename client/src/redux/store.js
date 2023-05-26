import { configureStore } from '@reduxjs/toolkit';
import { carsApi } from './api/carsApi.js';
import { authApi } from './api/authApi.js';
import { favsApi } from './api/favApi.js';
import authReducer from './slices/authSlice.js';

const reducers = {
  [carsApi.reducerPath]: carsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [favsApi.reducerPath]: favsApi.reducer,
  auth: authReducer,
};

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      carsApi.middleware,
      authApi.middleware,
      favsApi.middleware
    ),
  devTools: true,
});
