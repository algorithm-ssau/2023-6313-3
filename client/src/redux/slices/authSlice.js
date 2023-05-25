import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: localStorage.getItem('access_token') || null,
    refreshToken: localStorage.getItem('refresh_token') || null,
  },
  reducers: {
    setCredentials: (state, { payload: { access_token, refresh_token } }) => {
      state.accessToken = access_token;
      state.refreshToken = refresh_token;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', access_token);
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectAccessToken = (state) => state.auth.accessToken;
export const selectRefershToken = (state) => state.auth.refreshToken;
