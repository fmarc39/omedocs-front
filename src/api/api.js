import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3020',
  // baseURL: 'http://omedocs.herokuapp.com',
  timeout: 2000,
});
