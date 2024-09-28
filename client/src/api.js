import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Adjust based on your backend port
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add token to headers if logged in
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default api;
