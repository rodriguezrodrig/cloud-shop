import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const cloudShopApi = axios.create({
  baseURL: apiUrl,
});

cloudShopApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { cloudShopApi };
