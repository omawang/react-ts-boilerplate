export type AccountInitialState = {
  isSubmittingLogin: boolean;
  isFetchingProfile: boolean;
  authToken: null | string;
  refreshToken: null | string;
  id: string;
  username: string;
  email: string;
  name: string;
  phone: string;
  messageState: string;
  message: string;
  errors: any;
};

export const accountInitialState: AccountInitialState = {
  isSubmittingLogin: false,
  isFetchingProfile: false,
  authToken: null,
  refreshToken: null,
  id: '',
  username: '',
  email: '',
  name: '',
  phone: '',

  messageState: '',
  message: '',
  errors: null,
};
