import axios from 'axios';

export const axiosInst = axios.create({
  baseURL: process.env.API_URL,
  timeout: 6000,
});
