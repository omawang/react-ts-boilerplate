import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { AccountInitialState } from '../InititalState';
import { fetchProfileThunk } from '../Thunks';

export const fetchProfileCases = (builder: ActionReducerMapBuilder<AccountInitialState>) => {
  builder.addCase(fetchProfileThunk.fulfilled, (state, action) => {
    const { data } = action.payload;

    state.profile = data;
  });

  builder.addCase(fetchProfileThunk.rejected, (state, action) => {
    state.authToken = null;
    state.profile = null;
  });
};
