import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://aohlv2yk11.execute-api.us-east-1.amazonaws.com/api',
});

export { instance };
