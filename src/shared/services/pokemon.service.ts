import api from './api.service';

const pokemonService = {
  list: async () => await api.get('pokemons'),
  show: async (payload: any) => await api.get(`pokemons/${payload}`),
  create: async (payload: any) => await api.post(`pokemons`, payload),
  update: async (payload: any) => await api.put(`pokemons/${payload.id}`, payload),
  delete: async (payload: any) => await api.delete(`pokemons/${payload.id}`)
}

export default pokemonService;
