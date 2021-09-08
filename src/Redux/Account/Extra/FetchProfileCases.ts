import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { AccountInitialState } from '../InititalState';
import { fetchProfileThunk } from '../Thunks';

export const fetchProfileCases = (builder: ActionReducerMapBuilder<AccountInitialState>) => {
  builder.addCase(fetchProfileThunk.pending, (state, _) => {
    state.isFetchingProfile = true;
    state.messageState = 'pending';
    state.message = 'Please wait';
    state.errors = null;
  });

  builder.addCase(fetchProfileThunk.fulfilled, (state, action) => {
    const { data } = action.payload;

    state.isFetchingProfile = false;
    state.id = data.id;
    state.username = data.username;
    state.email = data.email;
    state.name = data.name;
    state.phone = data.phone;
    state.messageState = 'success';
    state.message = 'Successfully Fetch Profile!';
  });

  builder.addCase(fetchProfileThunk.rejected, (state, action) => {
    const { errors, message } = action.payload as any;

    state.isFetchingProfile = false;
    state.messageState = 'error';
    state.message = message;
    state.errors = errors;
  });
};
