import axios from 'axios';

export default axios.create({
  baseURL: 'http://omedocs.herokuapp.com',
  timeout: 2000,
});
