import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProfileAPI } from '@API';
import { RootState } from '@Redux';

export const fetchProfileThunk = createAsyncThunk(
  'account/fetchProfile',
  async (token: string, thunkApi) => {
    try {
      const response = await fetchProfileAPI(token);

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
