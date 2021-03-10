import axios from 'axios';

const baseURL = process.env.API_URL || 'https://ilume-api.herokuapp.com/';
const client = axios.create({
  baseURL,
});

export default client;
