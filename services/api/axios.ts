// import axios from 'axios';
// import { getToken } from '@/services/auth';

// export const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
// });

// api.interceptors.request.use((config) => {
//   const token = getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

import axios, { AxiosError, AxiosResponse } from 'axios';
import { getToken, logout } from '@/services/auth';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/* ================= REQUEST ================= */
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/* ================= RESPONSE ================= */
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // langsung return data biar bersih
    return response.data;
  },
  (error: AxiosError<any>) => {
    const status = error.response?.status;

    if (status === 401) {
      logout();
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
    }

    return Promise.reject(error.response?.data || error);
  }
);
