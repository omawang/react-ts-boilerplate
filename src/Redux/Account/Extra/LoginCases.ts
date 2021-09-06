import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { AccountInitialState } from '../InititalState';
import { loginThunk } from '../Thunks';

export const loginCases = (
  builder: ActionReducerMapBuilder<AccountInitialState>
) => {
  builder.addCase(loginThunk.pending, (state, _) => {
    state.isSubmittingLogin = true;
    state.messageState = 'pending';
    state.message = 'Please wait';
    state.errors = null;
  });

  builder.addCase(loginThunk.fulfilled, (state, action) => {
    const { token } = action.payload;

    state.isSubmittingLogin = false;
    state.authToken = token;
    state.messageState = 'success';
    state.message = 'Successfully Logged In!';
  });

  builder.addCase(loginThunk.rejected, (state, action) => {
    const { errors, message } = action.payload as any;

    state.isSubmittingLogin = false;
    state.messageState = 'error';
    state.message = message;
    state.errors = errors;
  });
};
