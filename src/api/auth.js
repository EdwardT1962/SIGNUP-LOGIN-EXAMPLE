// src/api/auth.js
import axios from 'axios';

export const login = (email, password) => {
  return axios.post('http://localhost:3002/auth/login', { email, password });
};

export const register = (userData) => {
  return axios.post('http://localhost:3002/auth/register', userData);
};
