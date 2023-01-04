import axios from 'axios';
import { variables } from '../constants/backend';

export const _post = (url, payload) => {
  return axios.post(`${variables.BACKEND_URL}${url}`, payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const _get = url => {
  return axios.get(`${variables.BACKEND_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const _put = (url, payload) => {
  return axios.put(`${variables.BACKEND_URL}${url}`, payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
