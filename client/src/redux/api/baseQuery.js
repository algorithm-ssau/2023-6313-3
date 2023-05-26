import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

export const baseQuery = (url) =>
  fetchBaseQuery({
    baseUrl: url,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      if (getState().auth.accessToken) {
        const accessToken = Cookies.get('accessToken');
        const refreshToken = Cookies.get('refreshToken');
        accessToken &&
          headers.append(
            'Cookie',
            `accessToken=${accessToken}; refreshToken=${refreshToken}; `
          );
      }
      return headers;
    },
  });

export const baseQueryWithHandle = (url) => async (args, api, extraOptions) => {
  let result = await baseQuery(url)(args, api, extraOptions);
  if (result.error && result.error.status === 403) {
    window.location.pathname = '/register';
  }
  return result;
};
