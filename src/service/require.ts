import axios from 'axios';

const instance = axios.create({
  baseURL: '/',
  timeout: 10000,
});

const request = (method: string = 'GET', url: string, data = {}) => {
  return instance({
    method,
    url,
    data,
    params: method.toUpperCase() === 'GET' && data,
  });
};

export default request;
