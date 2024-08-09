import axios from 'axios';
import { isOk } from '@/guards/isOk.quard';

export const axiosInst = axios.create({
  baseURL: process.env.API_URL,
  timeout: 6000,
  validateStatus: isOk,
});
