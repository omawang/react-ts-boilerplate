import { API } from '../axios';

export type LoginDataArgs = {
  username: string;
  password: string;
};

export async function loginAPI(data: LoginDataArgs) {
  try {
    const body = {
      info: {
        via: 'android',
        app_version: 'string',
      },
      content: data,
    };
    const response = await API.post('/office/login', body);

    return response;
  } catch (err) {
    throw err.response.data;
  }
}

export async function fetchProfileAPI(token: string) {
  try {
    const response = await API.get('/office/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (err) {
    throw err.response.data;
  }
}
