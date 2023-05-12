import { createSlice } from '@reduxjs/toolkit';

import { saveToken, removeToken, getToken } from '../../utils/auth.js';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: getToken(),
  },
  reducers: {
    setCredentials: (state, { payload }) => {
      state.user = payload.token;
      saveToken(payload.token);
    },
    logout: (state) => {
      state.token = null;
      removeToken();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
