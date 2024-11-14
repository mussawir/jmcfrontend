import axios from "axios";

const apiUrl = "http://127.0.0.1:5000";  // Flask backend URL

const api = axios.create({
  baseURL: apiUrl,  // This is the URL Flask is running on
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
