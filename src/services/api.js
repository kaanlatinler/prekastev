import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL,
});

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('jwtToken');

//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }


export default api;
