import api from './api.service';

const trainerService = {
  list: async () => await api.get('trainers'),
  show: async (payload: any) => await api.get(`trainers/${payload}`),
  create: async (payload: any) => await api.post(`trainers`, payload),
  update: async (payload: any) => await api.put(`trainers/${payload.id}`, payload),
  delete: async (payload: any) => await api.delete(`trainers/${payload.id}`)
}

export default trainerService;
