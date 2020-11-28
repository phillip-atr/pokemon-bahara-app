import api from './api.service';

const pokemonService = {
  list: async () => await api.get('pokemons'),
  show: async (payload: any) => await api.get(`pokemons/${payload}`),
  create: async (payload: any) => await api.post(`pokemons`, payload),
  update: async (payload: any) => await api.put(`pokemons/${payload.id}`, payload),
  delete: async (payload: any) => await api.delete(`pokemons/${payload}`),
  listByTrainer: async (payload: any) => await api.get(`pokemons?trainer_id=${payload}`),
  listByFilter: async (payload: any) => {
    const {trainer, search, type, weakness, resistance} = payload;
    return await api.get(`pokemons/filter?trainer_id=${trainer}&search=${search}&type=${type}&weakness=${weakness}&resistance=${resistance}`);
  },
}

export default pokemonService;
