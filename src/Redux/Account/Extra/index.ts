import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { AccountInitialState } from '../InititalState';
import { fetchProfileCases } from './FetchProfileCases';

export const extraReducers = (builder: ActionReducerMapBuilder<AccountInitialState>) => {
  fetchProfileCases(builder);
};
