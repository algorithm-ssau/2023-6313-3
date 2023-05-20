import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: localStorage.getItem('token') || null,
  },
  reducers: {
    setCredentials: (state, { payload: { access_token, refresh_token } }) => {
      state.accessToken = access_token;
      state.refreshToken = refresh_token;
      localStorage.setItem('token', access_token);
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.accessToken;
