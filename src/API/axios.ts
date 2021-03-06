import axios from 'axios';

export const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});
