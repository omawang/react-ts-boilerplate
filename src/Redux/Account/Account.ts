import { createSlice } from '@reduxjs/toolkit';
import { accountInitialState } from './InititalState';
import { extraReducers } from './Extra';

const accountSlice = createSlice({
  name: 'account',
  initialState: accountInitialState,
  reducers: {
    // forceLogin: just for demo
    forceLogin: (state, _) => {
      state.authToken = 'xxx';
      state.profile = {
        id: '008994111129',
        name: 'Kurniawan',
        phone: '628994111129',
      };
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    logout: (state, _) => {
      state.authToken = null;
      state.profile = null;
    },
  },
  extraReducers,
});

export const { forceLogin, setAuthToken, logout } = accountSlice.actions;

export const accountReducer = accountSlice.reducer;
