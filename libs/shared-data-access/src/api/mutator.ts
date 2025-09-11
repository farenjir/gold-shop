// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// // Create axios instance with default config
// const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Add auth token if available
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle common errors
//     if (error.response?.status === 401) {
//       // Redirect to login or refresh token
//       localStorage.removeItem('authToken');
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

// // Custom instance for Orval
// export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
//   return axiosInstance(config).then((response: AxiosResponse<T>) => response.data);
// };

// export default axiosInstance;
