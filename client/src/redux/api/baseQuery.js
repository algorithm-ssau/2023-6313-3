import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = (url) =>
  fetchBaseQuery({
    baseUrl: url,
    //credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });

// // construct base query with a token
// const baseQuery = (url, token) =>
//   fetchBaseQuery({
//     baseUrl: url,
//     prepareHeaders: (headers) => {
//       headers.set("authorization", `bearer ${token}`);
//       return headers;
//     },
//   });

// // custom fetch function
// const baseQueryWithReauth = async (args, api, extra) => {
//   const result = getToken.select()(api.getState());
//   const token = result.data;

//   const response = await baseQuery(token)(args, api, extra);
//   const {error} = response;
//   // if the token is null or invalid, then we get an "unauthorized" response
//   if (error && error.status === 401) {
//     // get a new token by calling Auth API getToken
//     const { isSuccess, data, error } = await api.dispatch(getToken.initiate());
//     if (isSuccess) {
//       // call base query and pass token data
//       // and pass-through the parameters that were received
//       return await baseQuery(data)(args, api, extra);
//     } else {
//       // fail to get token
//       console.error(error);
//     }
//   }
//   return response;
// };
// export default baseQueryWithReauth;
