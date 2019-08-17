import axios from 'axios';

const coreAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 30000,
});

export { coreAPI };
