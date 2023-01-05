import axios from 'axios';
import { variables } from '../constants/backend';

export const _get = url => {
  return axios.get(`${variables.BACKEND_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
