import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:3020',
  baseURL: process.env.BASE_URL_HEROKU,
  timeout: 5000,
});
