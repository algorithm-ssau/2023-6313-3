import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: Cookies.get('accessToken') || null,
    refreshToken: Cookies.get('refreshToken') || null,
  },
  reducers: {
    setCredentials: (state, { payload: { access_token, refresh_token } }) => {
      state.accessToken = access_token;
      state.refreshToken = refresh_token;
      Cookies.set('accessToken', access_token);
      Cookies.set('refreshToken', refresh_token);
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      // localStorage.removeItem('access_token');
      // localStorage.removeItem('refresh_token');
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectAccessToken = (state) => state.auth.accessToken;
export const selectRefershToken = (state) => state.auth.refreshToken;
