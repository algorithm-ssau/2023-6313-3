import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

const BASE_URL = process.env.REACT_APP_BACKEND_URL + '/users';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery(BASE_URL),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query(data) {
        return {
          url: '/registration',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
    }),
    loginUser: builder.mutation({
      query(data) {
        return {
          url: '/auth',
          method: 'POST',
          body: data,
        };
      },
    }),
    logoutUser: builder.mutation({
      query() {
        return {
          url: '/logout',
          credentials: 'include',
        };
      },
    }),
    refreshToken: builder.mutation({
      query() {
        return {
          url: '/refresh',
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
