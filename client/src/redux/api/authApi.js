import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

const BASE_URL = process.env.REACT_APP_AUTH_SERVICE_URL;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery(BASE_URL),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query(data) {
        return {
          url: 'register',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
    }),
    loginUser: builder.mutation({
      query(data) {
        return {
          url: 'login',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
    }),
    logoutUser: builder.mutation({
      query() {
        return {
          url: 'logout',
          credentials: 'include',
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
} = authApi;
