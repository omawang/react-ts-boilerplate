import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI, LoginDataArgs } from '@API';

export const loginThunk = createAsyncThunk(
  'account/login',
  async (data: LoginDataArgs, thunkApi) => {
    try {
      const response = await loginAPI(data);

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
