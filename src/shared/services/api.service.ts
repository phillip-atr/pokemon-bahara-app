import axios from 'axios';

const api = axios.create({
  baseURL: `http://api.pokemonbaraha.test/api/v1/`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export default api;