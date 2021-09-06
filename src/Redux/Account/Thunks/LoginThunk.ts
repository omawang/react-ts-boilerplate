import { createAsyncThunk } from '@reduxjs/toolkit';
// import { loginAPI, LoginDataArgs } from '@API';

export const loginThunk = createAsyncThunk(
  'account/login',
  async (data: any, thunkApi) => {
    try {
      // const response = await loginAPI(data, deviceInfo, plainSignature);

      // console.log({ res: response });
      // return response.data;
      return { token: 'ada' };
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
