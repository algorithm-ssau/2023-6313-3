import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';

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

export const baseQueryWithHandle =
  (url) =>
  async (args, { signal, dispatch, getState }, extraOptions) => {
    const result = await baseQuery(url)(
      args,
      { signal, dispatch, getState },
      extraOptions
    );
    if (result.error && result.error.status === 403) {
      useDispatch()(logout());
    }
    return result;
  };
