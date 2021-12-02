export type AccountInitialState = {
  authToken: string | null;
  profile: any;
};

export const accountInitialState: AccountInitialState = {
  authToken: null,
  profile: null,
};
