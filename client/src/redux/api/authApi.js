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
          credentials: 'include',
        };
      },
    }),
    logoutUser: builder.mutation({
      query() {
        return {
          url: '/logout',
          method: 'POST',
          credentials: 'include',
        };
      },
    }),
    getUser: builder.query({
      query: () => '/current',
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useGetUserQuery,
} = authApi;
