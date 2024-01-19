import axios from 'axios';
import { toast } from 'react-toastify';

import { getToken } from './token';
import { toastConfig } from '../constants';

import type { AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://8.react.pages.academy/six-cities';
const TIMEOUT = 5000;

enum HttpCode {
  Unauthorized = 401,
}

type TUnauthCallback = () => void;

const createApi = (unauthorizedCallback: TUnauthCallback): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const { response } = error;

      if (response?.status === HttpCode.Unauthorized) {
        return unauthorizedCallback();
      } else {
        toast.error(error.message, toastConfig);
      }

      return Promise.reject(error);
    }
  );

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  return api;
};

export { createApi };
