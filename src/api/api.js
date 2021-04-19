import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3020',
  timeout: 2000,
});
