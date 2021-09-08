import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { AccountInitialState } from '../InititalState';
import { loginCases } from './LoginCases';
import { fetchProfileCases } from './FetchProfileCases';

export const extraReducers = (builder: ActionReducerMapBuilder<AccountInitialState>) => {
  loginCases(builder);
  fetchProfileCases(builder);
};
