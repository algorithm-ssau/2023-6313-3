import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = (url) =>
  fetchBaseQuery({
    baseUrl: url,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      // if (getState().auth.accessToken) {
      //   const accessToken = Cookies.get('accessToken');
      //   const refreshToken = Cookies.get('refreshToken');
      //   headers.delete('Cookie');
      //   headers.set(
      //     'Cookie',
      //     `accessToken=${accessToken}; refreshToken=${refreshToken}`
      //   );
      // }
      return headers;
    },
  });
