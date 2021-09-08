import { createSlice } from '@reduxjs/toolkit';
import { accountInitialState } from './InititalState';
import { extraReducers } from './Extra';

const accountSlice = createSlice({
  name: 'account',
  initialState: accountInitialState,
  reducers: {
    // forceLogin: just for demo
    forceLogin: (state, _) => {
      state.authToken = 'blabla';
      state.id = '008994111129';
      state.name = 'Kurniawan';
      state.phone = '628994111129';
      state.messageState = 'success';
      state.message = 'Successfully Logged In!';
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    logout: (state, _) => {
      state.authToken = null;
      state.id = '';
      state.username = '';
      state.email = '';
      state.name = '';
      state.phone = '';
      state.messageState = 'success';
      state.message = 'Successfully Logged Out!';
    },
  },
  extraReducers,
});

export const { forceLogin, setAuthToken, logout } = accountSlice.actions;

export const accountReducer = accountSlice.reducer;
