import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

function providesList(resultsWithIds, tagType) {
  return resultsWithIds
    ? [
        { type: tagType, id: 'LIST' },
        ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
      ]
    : [{ type: tagType, id: 'LIST' }];
}

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: baseQuery(BASE_URL),
  tagTypes: ['Cars'],
  endpoints: (build) => ({
    getCars: build.query({
      query: (args) => ({
        url: '/cars',
        params: {
          page: args.page,
          size: args.size,
        },
      }),
      providesTags: (result) => providesList(result.items, 'Cars'),
    }),
    getCar: build.query({
      query: (id) => `/cars/${id}/details`,
    }),
    addCar: build.mutation({
      query: (body) => ({
        url: '/cars/',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: [{ type: 'Cars', id: 'LIST' }],
    }),
    removeCar: build.mutation({
      query: (id) => ({
        url: `/cars/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Cars', id: 'LIST' }],
    }),
    updateCar: build.mutation({
      query: (body) => ({
        url: `/cars/${body.id}`,
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: [{ type: 'Cars', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetCarsQuery,
  useAddCarMutation,
  useRemoveCarMutation,
  useGetCarQuery,
} = carsApi;
