import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithHandle } from './baseQuery';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

function providesList(resultsWithIds, tagType) {
  return resultsWithIds
    ? [
        { type: tagType, id: 'LIST' },
        ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
      ]
    : [{ type: tagType, id: 'LIST' }];
}

export const favsApi = createApi({
  reducerPath: 'favsApi',
  baseQuery: baseQueryWithHandle(BASE_URL),
  tagTypes: ['Favs'],
  endpoints: (build) => ({
    getFavs: build.query({
      query: () => ({
        url: 'favorites',
      }),
      providesTags: (result) => providesList(result, 'Favs'),
    }),
    addFav: build.mutation({
      query: (body) => ({
        url: '/favorites/add',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: [{ type: 'Favs', id: 'LIST' }],
    }),
    removeFav: build.mutation({
      query: (body) => ({
        url: `/favorites/delete`,
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: [{ type: 'Favs', id: 'LIST' }],
    }),
  }),
});

export const { useAddFavMutation, useGetFavsQuery, useRemoveFavMutation } =
  favsApi;
