import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = (url) =>
  fetchBaseQuery({
    baseUrl: url,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });

// Это на случай если будет авторизацию через access и refresh токены

// export const baseQueryWithReauth = async (args, api, extraOptions) => {

// 	let result = await baseQuery(args, api, extraOptions)

// 	if (result?.error?.originalStatus === 401) {
// 		console.log('sending refresh token')
// 		const refreshResult = await baseQuery('/refresh', api, extraOptions)
// 		console.log(refreshResult)

// 		if (refreshResult?.data) {
// 			const user = api.getState().auth.user
// 			api.dispatch(setCredentials({ ...refreshResult.data, user }))
// 			result = await baseQuery(args, api, extraOptions)
// 		} else {
// 			api.dispatch(logout())
// 		}
// 	}

// 	return result
// }
