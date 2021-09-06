import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { AccountInitialState } from '../InititalState';
import { loginCases } from './LoginCases';

export const extraReducers = (
  builder: ActionReducerMapBuilder<AccountInitialState>
) => {
  loginCases(builder);
};
