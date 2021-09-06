export type AccountInitialState = {
  isSubmittingLogin: boolean;
  isFetchingProfile: boolean;
  authToken: null | string;
  id: string;
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
  id: '',
  name: '',
  phone: '',

  messageState: '',
  message: '',
  errors: null
};
