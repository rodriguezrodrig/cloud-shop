import axios from 'axios';

const cloudShopApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

cloudShopApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { cloudShopApi };
